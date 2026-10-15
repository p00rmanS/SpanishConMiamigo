// Extra exercise types generated from existing lesson data: a word bank for building the
// sentence, and a listening check. Pure functions so they can be unit tested.
import { shuffle } from '../course.js';

const MAX_WORDS = 14;

const words = (text) => text.trim().split(/\s+/).filter(Boolean);
const bare = (w) => w.toLowerCase().replace(/[¿?¡!.,;:]/g, '');

// Returns null when the sentence is too short or too long to be a good word-bank exercise.
export function buildExercise(lesson, random = Math.random) {
  const answer = words(lesson.reply);
  if (answer.length < 3 || answer.length > MAX_WORDS) return null;
  const used = new Set(answer.map(bare));
  const extras = [];
  for (const [es] of lesson.examples ?? []) {
    for (const w of words(es)) {
      if (!used.has(bare(w)) && !extras.some((e) => bare(e) === bare(w))) extras.push(w);
    }
  }
  const distractors = shuffle(extras, random).slice(0, Math.min(2, Math.ceil(answer.length / 4)));
  const bank = shuffle([...answer, ...distractors], random).map((word, i) => ({ id: i, word }));
  return { answer, bank };
}

// Pick the sentence you heard from three written options.
export function listenExercise(lesson, siblings, random = Math.random) {
  const others = [...new Set(siblings.map((l) => l.sentence))].filter((s) => s !== lesson.sentence);
  if (others.length < 2) return null;
  const options = shuffle([lesson.sentence, ...shuffle(others, random).slice(0, 2)], random);
  return { options, answer: lesson.sentence };
}

export function makeExercises(lesson, siblings) {
  return {
    build: buildExercise(lesson),
    listen: listenExercise(lesson, siblings),
  };
}
