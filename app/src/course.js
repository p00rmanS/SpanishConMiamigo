// Turns the flat lesson list into courses → levels → units → lessons.
// Levels describe the difficulty of the authored practice; they are not CEFR certification.
import { lessons } from './content.js';
import { FOUNDATION_UNITS } from './curriculum.js';
import { TOOLKIT_LEVELS } from './toolkit-lessons.js';
import { shuffle } from './lib/random.js';

export { seededRandom, shuffle } from './lib/random.js';

export const MINUTES_PER_LESSON = 6;
export const CEFR_ORDER = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];

export function cefrOf(lesson) {
  const match = (lesson.level || 'A1').match(/[ABC][123]/);
  const code = match ? match[0] : 'A1';
  return CEFR_ORDER.includes(code) ? code : 'C3';
}

// Four stages, ten levels. Kinder is the picture-book start for any age; Beginner, Intermediate
// and Advanced each have three steps. Skills are what a learner can do once the level is done.
export const LEVEL_UP_SCORE = 0.7;
export const STAGES = ['Kids', 'Beginner', 'Intermediate', 'Advanced'];

const FOUNDATION_LEVELS = [
  [
    'K',
    'Kinder',
    'Kids',
    'Learn the way children do: letters, numbers, colors, body, family, food and school words.',
    [
      'Say the alphabet and count to 100',
      'Name colors, shapes, animals, fruit and vegetables',
      'Name body parts, family, rooms and classroom things',
      'Tell the time, days and months in simple words',
      'Use short classroom phrases and sing simple songs',
    ],
  ],
  [
    'A1',
    'Starter',
    'Beginner',
    'Greet people, introduce yourself and handle simple everyday needs.',
    [
      'Greet, say goodbye and introduce yourself',
      'Use ser, estar, tener and ir in the present',
      'Build simple sentences with a subject, verb and object',
      'Ask and answer basic questions',
      'Handle numbers, dates and simple shopping',
    ],
  ],
  [
    'A2',
    'Elementary',
    'Beginner',
    'Talk about routines, wants, health and everyday places in connected sentences.',
    [
      'Use pronouns and polite requests',
      'Describe your day, body and health',
      'Handle travel, phone calls and shopping',
      'Use por and para and common everyday expressions',
      'Name school subjects, directions, money and countries',
    ],
  ],
  [
    'A3',
    'Pre-intermediate',
    'Beginner',
    'Tell what happened in the past and make plans with the right tense.',
    [
      'Conjugate common verbs in the preterite and imperfect',
      'Choose between the preterite and the imperfect',
      'Tell a short story in order',
      'Compare things and make plans',
      'Use word-power tables for opposites, pairs and conjugations',
    ],
  ],
  [
    'B1',
    'Intermediate',
    'Intermediate',
    'Tell fuller stories, make requests and connect ideas with more control.',
    [
      'Use the present subjunctive after wishes, feelings and doubts',
      'Give opinions and talk about conditions',
      'Use natural expressions and longer sentences',
      'Handle money, housing, work and email in real life',
      'Understand school-level science and grammar words',
    ],
  ],
  [
    'B2',
    'Upper intermediate',
    'Intermediate',
    'Handle hypotheticals, mood and formal writing with growing precision.',
    [
      'Use the imperfect subjunctive and si clauses',
      'Express doubt, probability and hypotheticals',
      'Use lo que, lo de and relative clauses',
      'Connect ideas with a wide range of connectors',
      'Recognise the moods in tables and real text',
    ],
  ],
  [
    'B3',
    'Fluent intermediate',
    'Intermediate',
    'Sound natural: slang, fillers, regional words and formal writing.',
    [
      'Use fillers and discourse markers the way natives do',
      'Understand common slang and sayings across countries',
      'Write formal emails and short essays',
      'Use fluent patterns and varied word choice',
      'Follow fast, informal speech',
    ],
  ],
  [
    'C1',
    'Advanced',
    'Advanced',
    'Argue, hedge and write with the precision of a professional.',
    [
      'Argue a point and soften or strengthen a claim',
      'Write and speak in formal and professional Spanish',
      'Use the passive, relative clauses and verb periphrases',
      'Handle nuance in ser, estar and mood',
      'Use precise, fluent patterns with few mistakes',
    ],
  ],
  [
    'C2',
    'Mastery',
    'Advanced',
    'Command every tense and mood, shift register and write with style.',
    [
      'Use the conditional perfect and past wishes',
      'Choose the subjunctive after adverbial conjunctions',
      'Match tenses across a long text',
      'Shift between formal, neutral and informal registers',
      'Use idioms, literary tenses and word-building rules',
    ],
  ],
  [
    'C3',
    'Native-level',
    'Advanced',
    'Understand dialects, literature, humor and specialist language like an educated native.',
    [
      'Recognise voseo, leísmo and other regional grammar',
      'Understand accents and sound changes across the Spanish world',
      'Read literature, poetry, legal and academic Spanish',
      'Catch humor, irony and subtle mood choices',
      'Speak in public and interpret between languages',
    ],
  ],
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

function curriculumUnits(levelId, code, items, placed) {
  const byId = new Map(items.map((l) => [l.id, l]));
  const units = (FOUNDATION_UNITS[code] ?? []).map(([title, ids], i) => ({
    id: `${levelId}-${i + 1}`,
    title,
    lessons: ids.map((id) => byId.get(id)).filter(Boolean),
  }));
  // Lessons the curriculum has not placed fall back to the level that matches their label.
  const rest = items.filter((l) => !placed.has(l.id) && cefrOf(l) === code);
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

const PLACED = new Set(Object.values(FOUNDATION_UNITS).flatMap((us) => us.flatMap((u) => u[1])));

function makeLevel(courseId, key, code, title, blurb, items, extra = {}) {
  const id = `${courseId}-${key}`.toLowerCase();
  const units =
    courseId === 'foundations' ? curriculumUnits(id, code, items, PLACED) : groupUnits(id, items);
  // Lessons follow the unit order so "next lesson" matches what the curriculum shows.
  return { id, code, title, blurb, ...extra, lessons: units.flatMap((u) => u.lessons), units };
}

export function buildCourses(all) {
  const foundationLessons = all.filter((l) => !isWork(l) && !l.group);
  const toolkitLessons = all.filter((l) => l.group?.course === 'toolkit');
  const careerLessons = all.filter((l) => isWork(l) && !CAREER_EXCLUDED.has(l.category));
  const dailyLessons = all.filter((l) => isWork(l) && CAREER_EXCLUDED.has(l.category));

  const foundations = {
    id: 'foundations',
    title: 'Spanish Foundations',
    tagline: 'Kinder to C3 · Grammar, vocabulary and conversation',
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
    levels: FOUNDATION_LEVELS.map(([code, title, stage, blurb, skills]) =>
      makeLevel('foundations', code, code, title, blurb, foundationLessons, { stage, skills }),
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
  return course.levels
    .filter((level) => level.stage !== 'Kids')
    .flatMap((level) =>
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

// Levels grouped by stage (Kids, Beginner, ...). Courses without stages return one group.
export function stagesOf(course) {
  if (!course.levels.some((lv) => lv.stage)) return [{ name: null, levels: course.levels }];
  return STAGES.map((name) => ({
    name,
    levels: course.levels.filter((lv) => lv.stage === name),
  })).filter((s) => s.levels.length);
}

// What a learner still needs to move up: every lesson done and the checkpoint passed.
export function levelStatus(level, completed, checkpoint) {
  const done = countDone(level.lessons, completed);
  const total = level.lessons.length;
  const lessonsLeft = total - done;
  const passed = Boolean(checkpoint) && checkpoint.best / checkpoint.total >= LEVEL_UP_SCORE;
  return {
    done,
    total,
    lessonsLeft,
    percent: total ? Math.round((done / total) * 100) : 0,
    passed,
    complete: lessonsLeft === 0 && passed,
    needs: [
      ...(lessonsLeft ? [`${lessonsLeft} more lesson${lessonsLeft === 1 ? '' : 's'}`] : []),
      ...(passed ? [] : [`a checkpoint score of ${Math.round(LEVEL_UP_SCORE * 100)}% or more`]),
    ],
  };
}

// The first level you have not finished, leaving Kinder out unless nothing else exists.
export function currentLevel(course, completed) {
  const done = new Set(completed);
  const levels = course.levels.filter((lv) => lv.stage !== 'Kids');
  return levels.find((lv) => lv.lessons.some((l) => !done.has(l.id))) ?? levels.at(-1) ?? null;
}
