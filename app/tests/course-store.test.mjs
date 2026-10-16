import test from 'node:test';
import assert from 'node:assert/strict';
import { lessons } from '../src/content.js';
import {
  courses,
  courseLessons,
  courseStats,
  continueTarget,
  checkpointQuiz,
  placementQuiz,
  placementResult,
  seededRandom,
  cefrOf,
} from '../src/course.js';
import {
  emptyState,
  sanitize,
  migrate,
  completeLesson,
  recordMistake,
  saveCheckpoint,
  buildBackup,
  validateBackup,
  lastSevenDays,
  STORE_KEY,
  XP,
} from '../src/lib/store-core.js';
import { parseHash } from '../src/lib/router.js';

test('every lesson belongs to exactly one course and level', () => {
  const ids = courses.flatMap((c) => courseLessons(c).map((l) => l.id));
  assert.equal(ids.length, lessons.length);
  assert.equal(new Set(ids).size, lessons.length);
  for (const c of courses) {
    assert.ok(c.levels.length >= 2, `${c.id} should have levels`);
    for (const lv of c.levels) assert.ok(lv.units.length && lv.lessons.length);
  }
});

test('CEFR levels are parsed from authored level labels', () => {
  assert.equal(cefrOf({ level: 'A1–A2' }), 'A1');
  assert.equal(cefrOf({ level: 'A2 starter' }), 'A2');
  assert.equal(cefrOf({ level: 'B2–C1 focus' }), 'B2');
  assert.equal(cefrOf({}), 'A1');
});

test('continue target respects completion and placement', () => {
  const foundations = courses[0];
  const items = courseLessons(foundations);
  assert.equal(continueTarget(foundations, [], null).id, items[0].id);
  assert.equal(continueTarget(foundations, [items[0].id], null).id, items[1].id);
  const b1 = foundations.levels.find((l) => l.code === 'B1');
  assert.equal(continueTarget(foundations, [], 'B1').id, b1.lessons[0].id);
  assert.equal(continueTarget(foundations, [items[0].id], 'B1').id, items[1].id);
  assert.equal(
    continueTarget(
      foundations,
      items.map((l) => l.id),
      null,
    ),
    null,
  );
  assert.equal(courseStats(foundations, [items[0].id]).done, 1);
});

test('quizzes use valid choices and placement picks a level', () => {
  const rand = seededRandom(7);
  const quiz = checkpointQuiz(courses[0].levels[0], 5, rand);
  assert.equal(quiz.length, 5);
  for (const q of quiz) assert.ok(q.choices.includes(q.answer));
  const placement = placementQuiz(courses[0], seededRandom(1));
  const allRight = placement.map((q) => q.answer);
  assert.equal(placementResult(placement, allRight), courses[0].levels.at(-1).code);
  const allWrong = placement.map(() => 'nope');
  assert.equal(placementResult(placement, allWrong), courses[0].levels[0].code);
});

test('completing lessons awards XP once, schedules review and records a practice day', () => {
  const now = new Date(2026, 5, 3, 10).getTime();
  let s = completeLesson(emptyState(), 'hello', { firstTry: 2, now });
  assert.equal(s.xp, XP.lesson + 2 * XP.firstTryBonus);
  assert.deepEqual(s.completed, ['hello']);
  assert.ok(s.reviews.hello.due > now);
  assert.deepEqual(s.days, ['2026-06-03']);
  s = completeLesson(s, 'hello', { firstTry: 0, now });
  assert.equal(s.xp, XP.lesson + 2 * XP.firstTryBonus + XP.review);
  assert.deepEqual(s.completed, ['hello']);
});

test('mistakes reset review and clear when the lesson is completed', () => {
  let s = completeLesson(emptyState(), 'hello', { now: 0 });
  s = recordMistake(s, 'hello', { input: 'x', answer: 'y', reason: 'z' }, 5);
  assert.equal(s.mistakes.length, 1);
  assert.equal(s.reviews.hello.box, 0);
  s = completeLesson(s, 'hello', { review: true, now: 10 });
  assert.equal(s.mistakes.length, 0);
});

test('checkpoints keep the best score', () => {
  let s = saveCheckpoint(emptyState(), 'cp', 6, 10, 1);
  s = saveCheckpoint(s, 'cp', 4, 10, 2);
  assert.equal(s.checkpoints.cp.best, 6);
  assert.equal(s.checkpoints.cp.tries, 2);
});

test('sanitize rejects corrupt data instead of trusting it', () => {
  assert.deepEqual(sanitize(null), emptyState());
  const s = sanitize({
    completed: ['a', 5, 'a'],
    xp: 'lots',
    days: ['2026-01-01', 'yesterday'],
    reviews: { a: { box: 1, due: 5 }, b: 'bad' },
    settings: { theme: 'neon', explain: 'english' },
  });
  assert.deepEqual(s.completed, ['a']);
  assert.equal(s.xp, 0);
  assert.deepEqual(s.days, ['2026-01-01']);
  assert.deepEqual(Object.keys(s.reviews), ['a']);
  assert.equal(s.settings.theme, 'system');
  assert.equal(s.settings.explain, 'english');
});

test('progress saved by the earlier version is migrated', () => {
  const legacy = JSON.stringify({
    completed: ['hello'],
    mistakes: [],
    reviews: { hello: { box: 2, due: 99 } },
  });
  const s = migrate(null, legacy);
  assert.deepEqual(s.completed, ['hello']);
  assert.equal(s.reviews.hello.box, 2);
  assert.equal(migrate(null, 'not json').completed.length, 0);
});

test('backups round trip and refuse foreign or broken files', () => {
  const store = new Map([
    [STORE_KEY, JSON.stringify(emptyState())],
    ['unrelated', 'x'],
  ]);
  const backup = buildBackup({ getItem: (k) => store.get(k) ?? null });
  assert.deepEqual(Object.keys(backup.data), [STORE_KEY]);
  assert.equal(validateBackup(JSON.stringify(backup)).ok, true);
  assert.equal(validateBackup('{"app":"other","data":{}}').ok, false);
  assert.equal(validateBackup('nope').ok, false);
  const bad = { ...backup, data: { [STORE_KEY]: '{broken' } };
  assert.equal(validateBackup(JSON.stringify(bad)).ok, false);
  const noProgress = { ...backup, data: { 'espanol-readings-v1': '[]' } };
  assert.equal(validateBackup(JSON.stringify(noProgress)).ok, false);
});

test('weekly view marks practice days without any streak logic', () => {
  const week = lastSevenDays(['2026-06-03', '2026-06-01'], new Date(2026, 5, 3));
  assert.equal(week.length, 7);
  assert.equal(week.at(-1).active, true);
  assert.equal(week.filter((d) => d.active).length, 2);
});

test('hash routes parse names, params and queries', () => {
  assert.deepEqual(parseHash('#/lesson/hello?review=1'), {
    name: 'lesson',
    params: ['hello'],
    query: { review: '1' },
  });
  assert.equal(parseHash('').name, 'home');
  assert.equal(parseHash('#/library/dictionary?q=casa').query.q, 'casa');
});

test('every foundations lesson is placed in a curriculum unit', () => {
  for (const level of courses[0].levels) {
    assert.ok(
      !level.units.some((u) => u.title === 'More practice'),
      `${level.code} has lessons missing from curriculum.js`,
    );
  }
  assert.deepEqual(
    courses[0].levels.map((l) => l.code),
    ['A1', 'A2', 'B1', 'B2', 'C1'],
  );
});

test('each course level has enough lessons to be a real level', () => {
  for (const level of courses[0].levels) assert.ok(level.lessons.length >= 12, level.code);
  for (const level of courses[1].levels) assert.ok(level.lessons.length >= 6, level.id);
});

test('daily streak counts consecutive days and stays alive until the day ends', async () => {
  const { streakInfo } = await import('../src/lib/store-core.js');
  const today = new Date(2026, 5, 10);
  assert.deepEqual(streakInfo([], today), { current: 0, longest: 0, practicedToday: false });
  const run = ['2026-06-08', '2026-06-09', '2026-06-10'];
  assert.deepEqual(streakInfo(run, today), { current: 3, longest: 3, practicedToday: true });
  assert.equal(streakInfo(['2026-06-08', '2026-06-09'], today).current, 2);
  assert.equal(streakInfo(['2026-06-07'], today).current, 0);
  assert.equal(
    streakInfo(['2026-05-01', '2026-05-02', '2026-05-03', '2026-06-10'], today).longest,
    3,
  );
  assert.equal(streakInfo(['2026-05-31', '2026-06-01'], new Date(2026, 5, 1)).current, 2);
});

test('word-bank and listening exercises are valid for every lesson that offers them', async () => {
  const { buildExercise, listenExercise } = await import('../src/lib/exercises.js');
  const { scoreAnswer } = await import('../src/learning.js');
  const {
    courses: all,
    courseLessons: items,
    seededRandom: rng,
  } = await import('../src/course.js');
  let build = 0;
  let listen = 0;
  for (const course of all) {
    for (const level of course.levels) {
      for (const lesson of level.lessons) {
        const b = buildExercise(lesson, rng(3));
        if (b) {
          build += 1;
          assert.equal(b.bank.length >= b.answer.length, true);
          const solved = b.answer.join(' ');
          assert.ok(
            scoreAnswer(solved, lesson.accepted, { strictAccents: lesson.strictAccents }).correct,
            `${lesson.id}: the word-bank answer must be accepted`,
          );
        }
        const l = listenExercise(lesson, level.lessons, rng(5));
        if (l) {
          listen += 1;
          assert.equal(l.options.length, 3);
          assert.ok(l.options.includes(l.answer));
        }
      }
    }
  }
  assert.ok(items(all[0]).length > 0);
  assert.ok(build > 150, 'most lessons should offer a word-bank exercise: ' + build);
  assert.ok(listen > 250, 'every lesson should offer a listening exercise: ' + listen);
});

test('daily session builds a full mixed round and applies results', async () => {
  const { buildSession, sessionCandidates } = await import('../src/lib/session.js');
  const { applySession } = await import('../src/lib/store-core.js');
  const { lessonById, levelOf: lv } = await import('../src/course.js');
  const ids = ['hello', 'courtesy', 'origin', 'feeling', 'help', 'wants'];
  const reviews = Object.fromEntries(ids.map((id, i) => [id, { box: 1, due: 1000 + i }]));
  const candidates = sessionCandidates(ids, reviews, lessonById, 5000);
  assert.equal(candidates[0].id, 'hello');
  const items = buildSession(candidates, (l) => lv(l.id).level.lessons, seededRandom(9));
  assert.equal(items.length, 10);
  assert.ok(items.some((i) => i.type === 'choice'));
  assert.ok(items.some((i) => i.type === 'listen'));
  assert.ok(items.some((i) => i.type === 'build'));
  assert.deepEqual(
    buildSession([], () => []),
    [],
  );

  const base = { ...emptyState(), reviews };
  const after = applySession(
    base,
    [
      { id: 'hello', correct: true },
      { id: 'courtesy', correct: false, input: 'x', answer: 'y', reason: 'because' },
    ],
    5000,
  );
  assert.equal(after.xp, 3);
  assert.equal(after.reviews.courtesy.box, 0);
  assert.equal(after.mistakes.length, 1);
  assert.equal(after.days.length, 1);
  assert.equal(applySession(base, [{ id: 'hello', correct: true }], 5000).xp, 13);
});
