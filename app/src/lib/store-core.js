// Pure progress-store logic (no React, no browser APIs) so it can be unit tested.
import { nextReview } from '../learning.js';

export const STORE_KEY = 'espanol-store-v2';
export const LEGACY_PROGRESS_KEY = 'espanol-progress-v1';
// Keys owned by other screens; they are included in backups so nothing is left behind.
export const EXTRA_KEYS = [
  'espanol-practice-lab-v1',
  'espanol-readings-v1',
  'espanol-daily-discovery-v1',
];
export const BACKUP_KEYS = [STORE_KEY, ...EXTRA_KEYS];

export const XP = { lesson: 20, review: 5, firstTryBonus: 5 };

const strings = (v) => (Array.isArray(v) ? v.filter((x) => typeof x === 'string') : []);
const isObject = (v) => v && typeof v === 'object' && !Array.isArray(v);
const num = (v, d = 0) => (Number.isFinite(v) ? v : d);

export function emptyState() {
  return {
    version: 2,
    completed: [],
    mistakes: [],
    reviews: {},
    xp: 0,
    days: [],
    lessonStats: {},
    checkpoints: {},
    placement: null,
    settings: { theme: 'system', explain: 'both' },
  };
}

export function sanitize(raw) {
  const base = emptyState();
  if (!isObject(raw)) return base;
  const reviews = {};
  if (isObject(raw.reviews)) {
    for (const [id, r] of Object.entries(raw.reviews)) {
      if (isObject(r) && Number.isFinite(r.due)) reviews[id] = { box: num(r.box), due: r.due };
    }
  }
  const lessonStats = {};
  if (isObject(raw.lessonStats)) {
    for (const [id, s] of Object.entries(raw.lessonStats)) {
      if (isObject(s))
        lessonStats[id] = {
          attempts: num(s.attempts),
          firstTry: num(s.firstTry),
          last: num(s.last),
        };
    }
  }
  const checkpoints = {};
  if (isObject(raw.checkpoints)) {
    for (const [id, c] of Object.entries(raw.checkpoints)) {
      if (isObject(c) && Number.isFinite(c.best))
        checkpoints[id] = {
          best: c.best,
          total: num(c.total, 1),
          at: num(c.at),
          tries: num(c.tries, 1),
        };
    }
  }
  const settings = isObject(raw.settings) ? raw.settings : {};
  return {
    ...base,
    completed: [...new Set(strings(raw.completed))],
    mistakes: (Array.isArray(raw.mistakes) ? raw.mistakes : [])
      .filter((m) => isObject(m) && typeof m.lesson === 'string')
      .map((m) => ({
        lesson: m.lesson,
        input: String(m.input ?? ''),
        answer: String(m.answer ?? ''),
        reason: String(m.reason ?? ''),
      })),
    reviews,
    xp: Math.max(0, num(raw.xp)),
    days: [...new Set(strings(raw.days).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)))].sort(),
    lessonStats,
    checkpoints,
    placement:
      isObject(raw.placement) && typeof raw.placement.level === 'string'
        ? { level: raw.placement.level, at: num(raw.placement.at) }
        : null,
    settings: {
      theme: ['system', 'light', 'dark'].includes(settings.theme) ? settings.theme : 'system',
      explain: ['both', 'english', 'taglish'].includes(settings.explain)
        ? settings.explain
        : 'both',
    },
  };
}

export function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

// First run after the upgrade: carry over progress saved by the earlier single-key version.
export function migrate(v2Raw, legacyRaw) {
  if (v2Raw) return sanitize(safeParse(v2Raw));
  const legacy = safeParse(legacyRaw);
  if (isObject(legacy))
    return sanitize({
      completed: legacy.completed,
      mistakes: legacy.mistakes,
      reviews: legacy.reviews,
    });
  return emptyState();
}

export const dayKey = (date = new Date()) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

export function withDay(state, now = new Date()) {
  const key = dayKey(now);
  return state.days.includes(key) ? state : { ...state, days: [...state.days, key].sort() };
}

export function completeLesson(state, id, { firstTry = 0, review = false, now = Date.now() } = {}) {
  const already = state.completed.includes(id);
  const earned =
    (review || already ? XP.review : XP.lesson) + Math.min(firstTry, 2) * XP.firstTryBonus;
  const prev = state.lessonStats[id] ?? { attempts: 0, firstTry: 0, last: 0 };
  return withDay(
    {
      ...state,
      completed: already ? state.completed : [...state.completed, id],
      mistakes: state.mistakes.filter((m) => m.lesson !== id),
      reviews: { ...state.reviews, [id]: nextReview(state.reviews[id], true, now) },
      xp: state.xp + earned,
      lessonStats: {
        ...state.lessonStats,
        [id]: {
          attempts: prev.attempts + 1,
          firstTry: Math.max(prev.firstTry, firstTry),
          last: now,
        },
      },
    },
    new Date(now),
  );
}

export function recordMistake(state, id, mistake, now = Date.now()) {
  return {
    ...state,
    mistakes: [...state.mistakes.filter((m) => m.lesson !== id), { lesson: id, ...mistake }],
    reviews: { ...state.reviews, [id]: nextReview(state.reviews[id], false, now) },
  };
}

export function saveCheckpoint(state, id, score, total, now = Date.now()) {
  const prev = state.checkpoints[id];
  return withDay(
    {
      ...state,
      checkpoints: {
        ...state.checkpoints,
        [id]: {
          best: Math.max(prev?.best ?? 0, score),
          total,
          at: now,
          tries: (prev?.tries ?? 0) + 1,
        },
      },
      xp: state.xp + score * 2,
    },
    new Date(now),
  );
}

export function buildBackup(storage, now = new Date()) {
  const data = {};
  for (const key of BACKUP_KEYS) {
    const value = storage.getItem(key);
    if (value !== null) data[key] = value;
  }
  return { app: 'espanol-para-sayo', version: 2, exportedAt: now.toISOString(), data };
}

// Returns { ok, error?, data? } without touching storage so callers can confirm first.
export function validateBackup(text) {
  const parsed = safeParse(text);
  if (!isObject(parsed) || parsed.app !== 'espanol-para-sayo' || !isObject(parsed.data))
    return { ok: false, error: 'This file is not an Español Para Sa’yo backup.' };
  const data = {};
  for (const [key, value] of Object.entries(parsed.data)) {
    if (!BACKUP_KEYS.includes(key)) continue;
    if (typeof value !== 'string' || value.length > 2_000_000)
      return { ok: false, error: 'The backup contains invalid data.' };
    if (key !== 'espanol-daily-discovery-v1' && safeParse(value) === null)
      return { ok: false, error: 'The backup contains data that could not be read.' };
    data[key] = value;
  }
  if (!data[STORE_KEY]) return { ok: false, error: 'The backup has no learning progress in it.' };
  return { ok: true, data };
}

// Streak-free weekly view: which of the last seven days had any practice.
export function lastSevenDays(days, now = new Date()) {
  const out = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
    out.push({
      key: dayKey(d),
      label: d.toLocaleDateString(undefined, { weekday: 'narrow' }),
      active: days.includes(dayKey(d)),
    });
  }
  return out;
}
