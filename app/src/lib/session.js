// Builds a mixed daily session from lessons the learner has already completed.
import { shuffle, quizItem } from '../course.js';
import { buildExercise, listenExercise } from './exercises.js';

export const SESSION_SIZE = 10;

// Due lessons first (most overdue first), then the lessons that will be due soonest.
export function sessionCandidates(completedIds, reviews, byId, now = Date.now()) {
  return completedIds
    .map((id) => byId.get(id))
    .filter(Boolean)
    .sort((a, b) => (reviews[a.id]?.due ?? now) - (reviews[b.id]?.due ?? now));
}

function itemFor(type, lesson, siblings, random) {
  if (type === 'listen') {
    const l = listenExercise(lesson, siblings, random);
    if (l) return { type, lessonId: lesson.id, title: lesson.title, ...l, speak: lesson.sentence };
  }
  if (type === 'build') {
    const b = buildExercise(lesson, random);
    if (b) {
      return {
        type,
        lessonId: lesson.id,
        title: lesson.title,
        meaning: lesson.meaning,
        accepted: lesson.accepted,
        strictAccents: lesson.strictAccents,
        reason: lesson.reason,
        ...b,
      };
    }
  }
  const q = quizItem(lesson, random);
  return { type: 'choice', ...q };
}

export function buildSession(candidates, siblingsOf, random = Math.random, size = SESSION_SIZE) {
  if (!candidates.length) return [];
  const chosen = candidates.slice(0, size);
  const order = ['choice', 'listen', 'build'];
  const items = [];
  let round = 0;
  // Cycle through the chosen lessons until the session is full, using a different type each pass.
  while (items.length < size && round < 3) {
    for (const lesson of chosen) {
      if (items.length >= size) break;
      const type = order[(items.length + round) % order.length];
      const item = itemFor(type, lesson, siblingsOf(lesson), random);
      const duplicate = items.some((i) => i.lessonId === lesson.id && i.type === item.type);
      if (!duplicate) items.push(item);
    }
    round += 1;
  }
  return items.length > 1 ? shuffle(items, random) : items;
}
