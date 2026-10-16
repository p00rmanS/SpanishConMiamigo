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
import { CourseCard, courseIcon } from './Courses.jsx';
import {
  courses,
  courseOf,
  courseStats,
  continueTarget,
  levelOf,
  MINUTES_PER_LESSON,
} from '../course.js';

function streakMessage(streak) {
  if (streak.current === 0) return 'Complete one lesson today to start a streak.';
  if (!streak.practicedToday)
    return `Your ${streak.current}-day streak is alive. Practice today to extend it. Longest: ${streak.longest}.`;
  return `You practiced today. Longest streak: ${streak.longest} day${streak.longest === 1 ? '' : 's'}.`;
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
  const Icon = courseIcon(course.icon);
  return (
    <div className="page">
      <section className="hero-row">
        <div>
          <p className="eyebrow">{started ? 'Welcome back' : 'Welcome'}</p>
          <h1>{started ? 'Pick up where you left off.' : 'Learn Spanish you can use.'}</h1>
          <p className="lead">
            Structured courses, real conversations and honest practice, at your own pace. Built for
            everyday life and for bilingual careers.
          </p>
        </div>
        <div className="week card" aria-label="Practice this week">
          <p className="card-title streak-title">
            <Fire weight="fill" size={22} aria-hidden="true" />
            {streak.current}-day streak
          </p>
          <ol className="week-dots">
            {week.map((d) => (
              <li key={d.key} className={d.active ? 'on' : ''}>
                <span className="dot" aria-hidden="true" />
                <span className="sr-only">{d.key}: </span>
                <small>{d.label}</small>
                <span className="sr-only">{d.active ? 'practiced' : 'no practice'}</span>
              </li>
            ))}
          </ol>
          <p className="muted small">{streakMessage(streak)}</p>
        </div>
      </section>

      {next ? (
        <section className="continue card" aria-labelledby="continue-title">
          <div className="continue-icon" aria-hidden="true">
            <Icon size={34} weight="duotone" />
          </div>
          <div className="continue-main">
            <p className="eyebrow" id="continue-title">
              {started ? 'Continue learning' : 'Start here'} · {course.title}
            </p>
            <h2>{next.title}</h2>
            <p className="spanish-line" lang="es">
              {next.sentence}
            </p>
            <p className="muted small">
              {where && `${where.level.code} ${where.level.title} · `}
              {MINUTES_PER_LESSON} min lesson
            </p>
            <div className="continue-progress">
              <ProgressBar value={stats.percent} label={`${course.title} progress`} />
              <small>
                {stats.done} of {stats.total} lessons
              </small>
            </div>
          </div>
          <a className="primary" href={href('/lesson/' + next.id)}>
            {started ? 'Continue' : 'Start lesson'} <ArrowRight aria-hidden="true" />
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
                Ten quick mixed questions from what you have learned: choose, listen and build
                sentences. Keeps your streak going.
              </p>
            </div>
            <ArrowRight aria-hidden="true" />
          </a>
        )}
        {!started && !progress.placement && (
          <a className="card tile" href={href('/placement')}>
            <Compass size={30} weight="duotone" aria-hidden="true" />
            <div>
              <h3>Find your level</h3>
              <p>A short placement check suggests where to start in Spanish Foundations.</p>
            </div>
            <ArrowRight aria-hidden="true" />
          </a>
        )}
        {progress.placement && !started && (
          <a className="card tile" href={href('/placement')}>
            <Compass size={30} weight="duotone" aria-hidden="true" />
            <div>
              <h3>Suggested start: {progress.placement.level}</h3>
              <p>Based on your placement check. Retake it any time.</p>
            </div>
            <ArrowRight aria-hidden="true" />
          </a>
        )}
        <a className={'card tile' + (dueCount ? ' attention' : '')} href={href('/review')}>
          <ArrowsClockwise size={30} weight="duotone" aria-hidden="true" />
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
            All courses <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className="course-grid">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} progress={progress} />
          ))}
        </div>
      </section>

      <section aria-labelledby="tools-title">
        <h2 id="tools-title">Reference tools</h2>
        <div className="tool-grid">
          {[
            [
              '/library/dictionary',
              Translate,
              'Dictionary',
              'Spanish ↔ English with examples and audio.',
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
              <ToolIcon size={28} weight="duotone" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
