import { useSyncExternalStore } from 'react';
import {
  STORE_KEY,
  LEGACY_PROGRESS_KEY,
  BACKUP_KEYS,
  migrate,
  sanitize,
  completeLesson,
  recordMistake,
  saveCheckpoint,
  applySession,
  applyDrill,
  buildBackup,
  validateBackup,
  withDay,
  emptyState,
} from './store-core.js';

function read(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

let state = migrate(read(STORE_KEY), read(LEGACY_PROGRESS_KEY));
let saveError = '';
const listeners = new Set();
let current = { ...state, saveError };

function commit(next) {
  state = sanitize(next);
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
    saveError = '';
  } catch {
    saveError = 'Progress could not be saved in this browser. Keep this tab open to continue.';
  }
  current = { ...state, saveError };
  listeners.forEach((l) => l());
}

const subscribe = (l) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export const store = {
  completeLesson: (id, opts) => commit(completeLesson(state, id, opts)),
  recordMistake: (id, mistake) => commit(recordMistake(state, id, mistake)),
  saveCheckpoint: (id, score, total) => commit(saveCheckpoint(state, id, score, total)),
  completeSession: (results) => commit(applySession(state, results)),
  completeDrill: (correct, total) => commit(applyDrill(state, correct, total)),
  touchDay: () => commit(withDay(state)),
  setPlacement: (level) => commit({ ...state, placement: { level, at: Date.now() } }),
  setSetting: (key, value) => commit({ ...state, settings: { ...state.settings, [key]: value } }),
  reset: () => {
    try {
      for (const key of BACKUP_KEYS) localStorage.removeItem(key);
    } catch {
      /* storage unavailable: the in-memory reset below still applies */
    }
    commit(emptyState());
  },
  exportBackup: () => buildBackup(localStorage),
  checkBackup: validateBackup,
  applyBackup(data) {
    for (const [key, value] of Object.entries(data)) localStorage.setItem(key, value);
    window.location.reload();
  },
};

export function useProgress() {
  return useSyncExternalStore(subscribe, () => current);
}
