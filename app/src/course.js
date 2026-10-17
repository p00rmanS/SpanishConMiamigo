// Turns the flat lesson list into courses → levels → units → lessons.
// Levels describe the difficulty of the authored practice; they are not CEFR certification.
import { lessons } from './content.js';
import { FOUNDATION_UNITS } from './curriculum.js';
import { TOOLKIT_LEVELS } from './toolkit-lessons.js';
import { shuffle } from './lib/random.js';

export { seededRandom, shuffle } from './lib/random.js';

export const MINUTES_PER_LESSON = 6;
export const CEFR_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1'];

export function cefrOf(lesson) {
  const match = (lesson.level || 'A1').match(/[ABC][12]/);
  const code = match ? match[0] : 'A1';
  return CEFR_ORDER.includes(code) ? code : 'C1';
}

const FOUNDATION_LEVELS = [
  ['A1', 'Starter', 'Greet people, introduce yourself and handle simple everyday needs.'],
  ['A2', 'Elementary', 'Talk about routines, plans and the past in connected sentences.'],
  ['B1', 'Intermediate', 'Tell fuller stories, make requests and connect ideas with more control.'],
  [
    'B2',
    'Upper intermediate',
    'Handle hypotheticals, mood and formal writing with growing precision.',
  ],
  ['C1', 'Advanced', 'Argue, hedge and write with the precision of a professional.'],
];

const CAREER_LEVELS = [
  [
    'Beginner',
    'Level 1',
    'Foundations',
    'Open and close calls, ask clear questions and stay polite.',
  ],
  [
    'Intermediate',
    'Level 2',
    'Professional',
    'Troubleshoot, explain billing, show empathy and hand off cases with confidence.',
  ],
  [
    'Advanced',
    'Level 3',
    'Expert',
    'Handle boundaries, cancellations and difficult conversations with precision.',
  ],
];

const DAILY_LEVELS = [
  [
    'Beginner',
    'Part 1',
    'Daily conversations',
    'Shop, travel, make plans and talk with neighbors.',
  ],
  [
    'Intermediate',
    'Part 2',
    'Sounding natural',
    'Use fillers and discourse markers the way speakers do.',
  ],
];

const CAREER_EXCLUDED = new Set(['Everyday life', 'Fillers & daily life']);
const isWork = (l) => l.id.startsWith('work-');

function groupUnits(levelId, items) {
  const units = [];
  for (const lesson of items) {
    const title = (lesson.category ?? lesson.unit).replace(/^Workplace · /, '');
    let unit = units.find((u) => u.title === title);
    if (!unit) {
      unit = { id: `${levelId}-${units.length + 1}`, title, lessons: [] };
      units.push(unit);
    }
    unit.lessons.push(lesson);
  }
  return units;
}

function curriculumUnits(levelId, code, items) {
  const byId = new Map(items.map((l) => [l.id, l]));
  const units = (FOUNDATION_UNITS[code] ?? []).map(([title, ids], i) => ({
    id: `${levelId}-${i + 1}`,
    title,
    lessons: ids.map((id) => byId.get(id)).filter(Boolean),
  }));
  const placed = new Set(units.flatMap((u) => u.lessons.map((l) => l.id)));
  const rest = items.filter((l) => !placed.has(l.id));
  if (rest.length) units.push({ id: `${levelId}-more`, title: 'More practice', lessons: rest });
  return units.filter((u) => u.lessons.length);
}

function toolkitLevel(key, code, title, blurb, all) {
  const items = all.filter((l) => l.group.level === key);
  const id = `toolkit-${key}`;
  const units = [];
  for (const lesson of items) {
    let unit = units.find((u) => u.title === lesson.group.unit);
    if (!unit) {
      unit = { id: `${id}-${units.length + 1}`, title: lesson.group.unit, lessons: [] };
      units.push(unit);
    }
    unit.lessons.push(lesson);
  }
  return { id, code, title, blurb, lessons: units.flatMap((u) => u.lessons), units };
}

function makeLevel(courseId, key, code, title, blurb, items) {
  const id = `${courseId}-${key}`.toLowerCase();
  const units =
    courseId === 'foundations' ? curriculumUnits(id, code, items) : groupUnits(id, items);
  // Lessons follow the unit order so "next lesson" matches what the curriculum shows.
  return { id, code, title, blurb, lessons: units.flatMap((u) => u.lessons), units };
}

export function buildCourses(all) {
  const foundationLessons = all.filter((l) => !isWork(l) && !l.group);
  const toolkitLessons = all.filter((l) => l.group?.course === 'toolkit');
  const careerLessons = all.filter((l) => isWork(l) && !CAREER_EXCLUDED.has(l.category));
  const dailyLessons = all.filter((l) => isWork(l) && CAREER_EXCLUDED.has(l.category));

  const foundations = {
    id: 'foundations',
    title: 'Spanish Foundations',
    tagline: 'A1 to C1 · Grammar, vocabulary and conversation',
    description:
      'A structured path from your first hello to professional-level nuance. Every lesson pairs a real sentence with a pattern, a pro tip, a conjugation guide and speaking practice. Levels follow CEFR-style descriptors loosely and are not a certification.',
    outcomes: [
      'Introduce yourself and handle everyday situations',
      'Use present, past and future verbs with confidence',
      'Tell stories and connect ideas in longer sentences',
      'Understand when to use mood, conditionals and hypotheticals',
    ],
    audience: 'For anyone starting Spanish or filling gaps in grammar.',
    icon: 'graduation',
    levels: FOUNDATION_LEVELS.map(([code, title, blurb]) =>
      makeLevel(
        'foundations',
        code,
        code,
        title,
        blurb,
        foundationLessons.filter((l) => cefrOf(l) === code),
      ),
    ).filter((level) => level.lessons.length),
  };

  const career = {
    id: 'career',
    title: 'Bilingual Career Spanish',
    tagline: 'Customer care · Technical support · Billing',
    description:
      'Practical Spanish for bilingual customer service, technical support and account teams. Model calls, empathy phrases, troubleshooting scripts and call simulations, with notes on Mexico, Latin America and Spain.',
    outcomes: [
      'Open, verify and close calls professionally',
      'Troubleshoot step by step in plain Spanish',
      'Explain bills, refunds and cancellations clearly',
      'De-escalate and hand off cases without losing trust',
    ],
    audience: 'For bilingual agents, support specialists and account managers.',
    icon: 'headset',
    levels: CAREER_LEVELS.map(([track, code, title, blurb]) =>
      makeLevel(
        'career',
        track,
        code,
        title,
        blurb,
        careerLessons.filter((l) => l.track === track),
      ),
    ).filter((level) => level.lessons.length),
  };

  const daily = {
    id: 'daily',
    title: 'Spanish for Daily Life',
    tagline: 'Travel · Shopping · Friends · Natural speech',
    description:
      'Short, practical conversations for the places you actually use Spanish: cafés, buses, hotels, appointments and friendships, plus the little words that make you sound natural.',
    outcomes: [
      'Order, shop, travel and ask for directions',
      'Make plans, accept invitations and set boundaries politely',
      'Repair a conversation when you did not catch something',
      'Use common fillers and discourse markers appropriately',
    ],
    audience: 'For travelers, new residents and anyone who wants everyday confidence.',
    icon: 'sun',
    levels: DAILY_LEVELS.map(([track, code, title, blurb]) =>
      makeLevel(
        'daily',
        track,
        code,
        title,
        blurb,
        dailyLessons.filter((l) => l.track === track),
      ),
    ).filter((level) => level.lessons.length),
  };

  const toolkit = {
    id: 'toolkit',
    title: 'Grammar Toolkit',
    tagline: 'Verbs · Adjectives · Connectors',
    description:
      'The building blocks of Spanish, taught systematically: every verb pattern with full conjugation tables, adjective agreement for hundreds of words, and connectors with the mood they take. Each pack links to the verb, adjective and connector pages and to the conjugation drill.',
    outcomes: [
      'Conjugate regular, irregular and stem-changing verbs in every tense',
      'Spot spelling changes (busqué, conozco, construyo) before you make mistakes',
      'Match adjectives to nouns in gender and number',
      'Choose the right connector and the right mood',
    ],
    audience: 'For learners who want complete grammar coverage alongside the main courses.',
    icon: 'toolbox',
    levels: TOOLKIT_LEVELS.map(([key, code, title, blurb]) =>
      toolkitLevel(key, code, title, blurb, toolkitLessons),
    ).filter((level) => level.lessons.length),
  };

  return [foundations, career, daily, toolkit];
}

export const courses = buildCourses(lessons);
export const lessonById = new Map(lessons.map((l) => [l.id, l]));

export function courseLessons(course) {
  return course.levels.flatMap((level) => level.lessons);
}

export function courseOf(lessonId) {
  return courses.find((c) => courseLessons(c).some((l) => l.id === lessonId));
}

export function levelOf(lessonId) {
  for (const course of courses) {
    const level = course.levels.find((lv) => lv.lessons.some((l) => l.id === lessonId));
    if (level) return { course, level };
  }
  return null;
}

export function countDone(items, completed) {
  const done = new Set(completed);
  return items.filter((l) => done.has(l.id)).length;
}

export function courseStats(course, completed) {
  const items = courseLessons(course);
  const done = countDone(items, completed);
  return {
    total: items.length,
    done,
    percent: items.length ? Math.round((done / items.length) * 100) : 0,
    minutes: items.length * MINUTES_PER_LESSON,
  };
}

// The lesson a learner should open next. A placement result moves the starting point of the
// Foundations course forward, but never skips ahead once the learner has begun.
export function continueTarget(course, completed, placementLevel) {
  const done = new Set(completed);
  const items = courseLessons(course);
  const untouched = !items.some((l) => done.has(l.id));
  if (untouched && course.id === 'foundations' && placementLevel) {
    const level = course.levels.find((lv) => lv.code === placementLevel);
    const start = level?.lessons.find((l) => !done.has(l.id));
    if (start) return start;
  }
  return items.find((l) => !done.has(l.id)) ?? null;
}

export function neighbours(course, lessonId) {
  const items = courseLessons(course);
  const index = items.findIndex((l) => l.id === lessonId);
  return {
    previous: items[index - 1] ?? null,
    next: items[index + 1] ?? null,
    index,
    total: items.length,
  };
}

export function quizItem(lesson, random = Math.random) {
  return {
    lessonId: lesson.id,
    title: lesson.title,
    prompt: lesson.prompt,
    choices: shuffle(lesson.choices, random),
    answer: lesson.answer,
    reason: lesson.reason,
  };
}

export function checkpointQuiz(level, count = 10, random = Math.random) {
  return shuffle(level.lessons, random)
    .slice(0, count)
    .map((l) => quizItem(l, random));
}

// Two questions per level, easiest first, used to suggest where to begin in Foundations.
export function placementQuiz(course, random = Math.random) {
  return course.levels.flatMap((level) =>
    shuffle(level.lessons, random)
      .slice(0, 2)
      .map((l) => ({ ...quizItem(l, random), level: level.code })),
  );
}

// First level where fewer than half the questions were right; beyond the last level means B2.
export function placementResult(items, answers) {
  const byLevel = new Map();
  items.forEach((item, i) => {
    const entry = byLevel.get(item.level) ?? { right: 0, total: 0 };
    entry.total += 1;
    if (answers[i] === item.answer) entry.right += 1;
    byLevel.set(item.level, entry);
  });
  for (const [code, { right, total }] of byLevel) {
    if (right / total < 0.5) return code;
  }
  return [...byLevel.keys()].at(-1);
}
