import {
  Fire,
  Lightning,
  ArrowRight,
  Compass,
  ArrowsClockwise,
  Translate,
  Books,
  BookOpenText,
} from '@phosphor-icons/react';
import { href } from '../lib/router.js';
import { lastSevenDays, streakInfo } from '../lib/store-core.js';
import { ProgressBar } from '../components/ui.jsx';
import { CourseCard } from './Courses.jsx';
import {
  courses,
  courseOf,
  courseStats,
  continueTarget,
  levelOf,
  MINUTES_PER_LESSON,
} from '../course.js';

function greeting(date = new Date()) {
  const h = date.getHours();
  if (h < 12) return ['Buenos días', 'Magandang umaga'];
  if (h < 19) return ['Buenas tardes', 'Magandang hapon'];
  return ['Buenas noches', 'Magandang gabi'];
}

function streakMessage(streak) {
  if (streak.current === 0) return 'Complete one lesson today to start a streak.';
  if (!streak.practicedToday)
    return `Your ${streak.current}-day streak is alive. Practice today to keep it.`;
  return `You practiced today. Best streak: ${streak.longest} day${streak.longest === 1 ? '' : 's'}.`;
}

function activeCourse(progress) {
  const recent = Object.entries(progress.lessonStats).sort((a, b) => b[1].last - a[1].last)[0];
  const fromRecent = recent && courseOf(recent[0]);
  if (fromRecent && continueTarget(fromRecent, progress.completed, null)) return fromRecent;
  return courses.find((c) => continueTarget(c, progress.completed, null)) ?? courses[0];
}

export function Home({ progress, dueCount }) {
  const started = progress.completed.length > 0;
  const course = activeCourse(progress);
  const next = continueTarget(course, progress.completed, progress.placement?.level);
  const stats = courseStats(course, progress.completed);
  const where = next && levelOf(next.id);
  const week = lastSevenDays(progress.days);
  const streak = streakInfo(progress.days);
  const [es, tl] = greeting();
  return (
    <div className="page home">
      <section className="hero-greet">
        <div>
          <p className="eyebrow">{started ? 'Welcome back' : 'Simulan na natin'}</p>
          <h1>
            {es},<br />
            <span className="kicker">{tl}.</span>
          </h1>
          <p className="lead">
            {started
              ? 'Pick up your path, or run today’s mixed session to keep your streak.'
              : 'Real Spanish for real life and real careers, explained in English and Taglish.'}
          </p>
        </div>
        <div className="stamp-wrap">
          <div className={'stamp' + (streak.practicedToday ? ' lit' : '')}>
            <Fire weight="fill" size={30} aria-hidden="true" />
            <strong>{streak.current}</strong>
            <span>day streak</span>
          </div>
          <div className="week" aria-label="Practice this week">
            <ol className="week-tiles">
              {week.map((d) => (
                <li key={d.key} className={d.active ? 'on' : ''}>
                  <span className="sr-only">
                    {d.key}: {d.active ? 'practiced' : 'no practice'}
                  </span>
                  <span className="tile-day" aria-hidden="true">
                    {d.active ? '✓' : ''}
                  </span>
                  <small aria-hidden="true">{d.label}</small>
                </li>
              ))}
            </ol>
            <p className="muted small">{streakMessage(streak)}</p>
          </div>
        </div>
      </section>

      {next ? (
        <section
          className={'continue-hero tiled tone-' + course.id}
          aria-labelledby="continue-title"
        >
          <div className="continue-body">
            <p className="eyebrow" id="continue-title">
              {started ? 'Continue' : 'Start here'} · {course.title}
            </p>
            <h2>{next.title}</h2>
            <p className="spanish-line" lang="es">
              {next.sentence}
            </p>
            <p className="meta">
              {where && `${where.level.code} · ${where.level.title} · `}
              {MINUTES_PER_LESSON} min
            </p>
            <div className="continue-progress">
              <ProgressBar value={stats.percent} label={`${course.title} progress`} />
              <small>
                {stats.done} / {stats.total}
              </small>
            </div>
          </div>
          <a className="cta" href={href('/lesson/' + next.id)}>
            {started ? 'Continue' : 'Start lesson'} <ArrowRight weight="bold" aria-hidden="true" />
          </a>
        </section>
      ) : (
        <section className="card">
          <h2>You’ve completed every lesson in this course.</h2>
          <p>Review what you learned or pick another course.</p>
        </section>
      )}

      <div className="two-up">
        {started && (
          <a className="card tile attention-primary" href={href('/session')}>
            <Lightning size={30} weight="fill" aria-hidden="true" />
            <div>
              <h3>Daily session</h3>
              <p>
                Ten quick questions from what you have learned: choose, listen and build sentences.
              </p>
            </div>
            <ArrowRight aria-hidden="true" />
          </a>
        )}
        {!started && (
          <a className="card tile" href={href('/placement')}>
            <Compass size={30} weight="bold" aria-hidden="true" />
            <div>
              <h3>
                {progress.placement
                  ? `Suggested start: ${progress.placement.level}`
                  : 'Find your level'}
              </h3>
              <p>
                {progress.placement
                  ? 'Based on your placement check. Retake it any time.'
                  : 'A short placement check suggests where to start in Spanish Foundations.'}
              </p>
            </div>
            <ArrowRight aria-hidden="true" />
          </a>
        )}
        <a className={'card tile' + (dueCount ? ' attention' : '')} href={href('/review')}>
          <ArrowsClockwise size={30} weight="bold" aria-hidden="true" />
          <div>
            <h3>{dueCount ? `${dueCount} ready for review` : 'Review'}</h3>
            <p>
              {dueCount
                ? 'A few minutes now helps the words stay.'
                : 'Finished lessons come back here at spaced intervals.'}
            </p>
          </div>
          <ArrowRight aria-hidden="true" />
        </a>
      </div>

      <section aria-labelledby="courses-title">
        <div className="section-head">
          <h2 id="courses-title">Your courses</h2>
          <a className="text-link" href={href('/courses')}>
            All courses
          </a>
        </div>
        <div className="course-grid">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} progress={progress} />
          ))}
        </div>
      </section>

      <section aria-labelledby="tools-title">
        <h2 id="tools-title">Reference shelf</h2>
        <div className="tool-grid">
          {[
            [
              '/library/dictionary',
              Translate,
              'Dictionary',
              'Spanish ↔ English ↔ Tagalog, with examples and audio.',
            ],
            ['/library/verbs', Books, 'Verb conjugator', 'Every tense for 50 essential verbs.'],
            [
              '/library/stories',
              BookOpenText,
              'Reading room',
              'Stories and conversations with translation.',
            ],
          ].map(([path, ToolIcon, title, text]) => (
            <a key={path} className="card tool" href={href(path)}>
              <ToolIcon size={28} weight="bold" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
