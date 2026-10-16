import { useState } from 'react';
import {
  ArrowRight,
  CaretDown,
  Check,
  Clock,
  Compass,
  GraduationCap,
  Headset,
  Sun,
  Target,
  Trophy,
} from '@phosphor-icons/react';
import { href } from '../lib/router.js';
import { ProgressBar, Ring } from '../components/ui.jsx';
import { JourneyPath } from '../components/JourneyPath.jsx';
import {
  courses,
  courseLessons,
  courseStats,
  continueTarget,
  countDone,
  MINUTES_PER_LESSON,
} from '../course.js';

const ICONS = { graduation: GraduationCap, headset: Headset, sun: Sun };
export const courseIcon = (name) => ICONS[name] ?? GraduationCap;

const hours = (minutes) =>
  minutes >= 60 ? `${Math.round((minutes / 60) * 10) / 10} hours` : `${minutes} min`;

export function CourseCard({ course, progress }) {
  const stats = courseStats(course, progress.completed);
  const Icon = courseIcon(course.icon);
  return (
    <a className={'card course-card tone-' + course.id} href={href('/course/' + course.id)}>
      <div className="course-card-top">
        <span className="course-icon" aria-hidden="true">
          <Icon size={28} weight="duotone" />
        </span>
        <span className="chip">{course.levels.length} levels</span>
      </div>
      <h3>{course.title}</h3>
      <p className="muted">{course.tagline}</p>
      <p className="meta">
        {stats.total} lessons · about {hours(stats.minutes)}
      </p>
      <div className="course-card-foot">
        <ProgressBar value={stats.percent} label={`${course.title} progress`} />
        <small>{stats.done ? `${stats.done} of ${stats.total} complete` : 'Not started'}</small>
      </div>
    </a>
  );
}

export function Courses({ progress }) {
  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Courses</p>
        <h1>Choose your path</h1>
        <p className="lead">
          Each course is a sequence of short lessons with a clear outcome. Take them in order, or
          jump to the level that fits you.
        </p>
      </header>
      <div className="course-grid">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} progress={progress} />
        ))}
      </div>
      <a className="card tile" href={href('/placement')}>
        <Compass size={30} weight="duotone" aria-hidden="true" />
        <div>
          <h3>Not sure where to start?</h3>
          <p>
            Take the placement check for Spanish Foundations. It takes a few minutes and suggests a
            starting level. It’s a study guide, not an official CEFR result.
          </p>
        </div>
        <ArrowRight aria-hidden="true" />
      </a>
    </div>
  );
}

function LessonRow({ lesson, index, done, due }) {
  return (
    <li>
      <a href={href('/lesson/' + lesson.id)} className={'lesson-row' + (done ? ' done' : '')}>
        <span className="lesson-num" aria-hidden="true">
          {done ? <Check size={16} weight="bold" /> : index}
        </span>
        <span className="lesson-text">
          <strong>{lesson.title}</strong>
          <small lang="es">{lesson.sentence}</small>
        </span>
        {due && <span className="chip warm">Review</span>}
        <span className="lesson-min">{MINUTES_PER_LESSON} min</span>
        <span className="sr-only">{done ? 'Completed' : 'Not completed'}</span>
        <ArrowRight aria-hidden="true" />
      </a>
    </li>
  );
}

export function CourseDetail({ id, progress }) {
  const [view, setView] = useState('path');
  const course = courses.find((c) => c.id === id);
  if (!course)
    return (
      <div className="page narrow">
        <h1>Course not found</h1>
        <a className="primary" href={href('/courses')}>
          Back to courses
        </a>
      </div>
    );
  const stats = courseStats(course, progress.completed);
  const next = continueTarget(course, progress.completed, progress.placement?.level);
  const Icon = courseIcon(course.icon);
  const done = new Set(progress.completed);
  const now = Date.now();
  let counter = 0;
  const firstOpen = course.levels.findIndex((lv) => lv.lessons.some((l) => !done.has(l.id)));
  return (
    <div className="page">
      <nav className="crumbs" aria-label="Breadcrumb">
        <a href={href('/courses')}>Courses</a> / <span>{course.title}</span>
      </nav>
      <header className={'course-hero tone-' + course.id}>
        <div className="course-hero-main">
          <span className="course-icon big" aria-hidden="true">
            <Icon size={40} weight="duotone" />
          </span>
          <h1>{course.title}</h1>
          <p className="lead">{course.description}</p>
          <ul className="facts">
            <li>
              <Target aria-hidden="true" /> {stats.total} lessons
            </li>
            <li>
              <Clock aria-hidden="true" /> About {hours(stats.minutes)}
            </li>
            <li>
              <Trophy aria-hidden="true" /> {course.levels.length} level checkpoints
            </li>
          </ul>
          <p className="muted">{course.audience}</p>
        </div>
        <aside className="course-hero-side card">
          <Ring value={stats.percent} size={92} label={course.title + ' progress'} />
          <p>
            <strong>{stats.done}</strong> of {stats.total} lessons complete
          </p>
          {next ? (
            <a className="primary wide" href={href('/lesson/' + next.id)}>
              {stats.done ? 'Continue' : 'Start course'} <ArrowRight aria-hidden="true" />
            </a>
          ) : (
            <p className="success-text">Course complete. Great work!</p>
          )}
          {course.id === 'foundations' && !stats.done && (
            <a className="text-link" href={href('/placement')}>
              Find my level
            </a>
          )}
        </aside>
      </header>

      <div className="detail-grid">
        <section aria-labelledby="curriculum">
          <div className="section-head">
            <h2 id="curriculum">Your path</h2>
            <div className="view-toggle" role="group" aria-label="Curriculum view">
              {[
                ['path', 'Trail'],
                ['list', 'List'],
              ].map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={view === key}
                  onClick={() => setView(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          {view === 'path' ? (
            <JourneyPath course={course} progress={progress} now={now} />
          ) : (
            course.levels.map((level, li) => {
              const levelDone = countDone(level.lessons, progress.completed);
              const cp = progress.checkpoints[level.id];
              counter = course.levels.slice(0, li).reduce((n, lv) => n + lv.lessons.length, 0);
              return (
                <details className="level" key={level.id} open={li === Math.max(firstOpen, 0)}>
                  <summary>
                    <span className="level-code">{level.code}</span>
                    <span className="level-title">
                      <strong>{level.title}</strong>
                      <small>
                        {levelDone}/{level.lessons.length} lessons
                        {cp && ` · checkpoint ${cp.best}/${cp.total}`}
                      </small>
                    </span>
                    <ProgressBar
                      value={(levelDone / level.lessons.length) * 100}
                      label={`${level.title} progress`}
                    />
                    <CaretDown className="chev" aria-hidden="true" />
                  </summary>
                  <p className="muted level-blurb">{level.blurb}</p>
                  {level.units.map((unit) => (
                    <div className="unit" key={unit.id}>
                      <h3>{unit.title}</h3>
                      <ol className="lesson-list">
                        {unit.lessons.map((lesson) => {
                          counter += 1;
                          return (
                            <LessonRow
                              key={lesson.id}
                              lesson={lesson}
                              index={counter}
                              done={done.has(lesson.id)}
                              due={progress.reviews[lesson.id]?.due <= now}
                            />
                          );
                        })}
                      </ol>
                    </div>
                  ))}
                  <a className="checkpoint" href={href('/checkpoint/' + level.id)}>
                    <Trophy size={24} weight="duotone" aria-hidden="true" />
                    <span>
                      <strong>{level.code} checkpoint</strong>
                      <small>
                        A quick quiz drawn from this level.
                        {cp ? ` Best score: ${cp.best}/${cp.total}.` : ''}
                      </small>
                    </span>
                    <ArrowRight aria-hidden="true" />
                  </a>
                </details>
              );
            })
          )}
        </section>
        <aside>
          <section className="card">
            <h2>What you’ll learn</h2>
            <ul className="checks">
              {course.outcomes.map((o) => (
                <li key={o}>
                  <Check weight="bold" aria-hidden="true" /> {o}
                </li>
              ))}
            </ul>
          </section>
          <section className="card">
            <h2>How lessons work</h2>
            <ol className="how">
              <li>Listen and learn the pattern.</li>
              <li>Choose, then write from memory.</li>
              <li>Say it aloud, then review on a spaced schedule.</li>
            </ol>
            <p className="muted small">
              Lessons are self-paced, with no deadlines. {courseLessons(course).length} lessons are
              available now.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
