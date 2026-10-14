import { ArrowRight, ArrowsClockwise, Check } from '@phosphor-icons/react';
import { href } from '../lib/router.js';
import { lessons } from '../content.js';
import { lessonById } from '../course.js';

const dateLabel = (ms) =>
  new Date(ms).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });

export function Review({ progress, now }) {
  const due = lessons.filter((l) => progress.reviews[l.id]?.due <= now);
  const upcoming = lessons
    .filter((l) => progress.reviews[l.id]?.due > now)
    .sort((a, b) => progress.reviews[a.id].due - progress.reviews[b.id].due);
  return (
    <div className="page narrow-wide">
      <header className="page-head">
        <p className="eyebrow">Review</p>
        <h1>{due.length ? `${due.length} ready for review` : 'You’re all caught up'}</h1>
        <p className="lead">
          Finished lessons return at growing intervals so they move into long-term memory. Each
          review skips straight to the practice questions.
        </p>
        {due.length > 0 && (
          <a className="primary" href={href('/lesson/' + due[0].id + '?review=1')}>
            Start with “{due[0].title}” <ArrowRight aria-hidden="true" />
          </a>
        )}
      </header>

      {due.length > 0 && (
        <section aria-labelledby="due-title">
          <h2 id="due-title">Due now</h2>
          <ul className="lesson-list plain">
            {due.map((l) => (
              <li key={l.id}>
                <a className="lesson-row" href={href('/lesson/' + l.id + '?review=1')}>
                  <span className="lesson-num" aria-hidden="true">
                    <ArrowsClockwise size={16} />
                  </span>
                  <span className="lesson-text">
                    <strong>{l.title}</strong>
                    <small lang="es">{l.sentence}</small>
                  </span>
                  <ArrowRight aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {!due.length && (
        <section className="card empty">
          <Check size={28} weight="bold" aria-hidden="true" />
          <p>
            {progress.completed.length
              ? 'Nothing is due right now. Your next reviews are listed below.'
              : 'Complete a lesson and it will be scheduled for review here.'}
          </p>
          <a className="secondary" href={href('/courses')}>
            Browse courses
          </a>
        </section>
      )}

      <section aria-labelledby="notebook">
        <h2 id="notebook">Mistake notebook</h2>
        {!progress.mistakes.length ? (
          <p className="muted">
            No corrections yet. When you miss an answer, the explanation is saved here until you
            complete that lesson again.
          </p>
        ) : (
          <ul className="notebook">
            {progress.mistakes.map((m) => {
              const lesson = lessonById.get(m.lesson);
              return (
                <li key={m.lesson} className="card">
                  <p className="label">{lesson?.title ?? m.lesson}</p>
                  <p>
                    <span className="muted">You wrote</span> {m.input || '—'}
                  </p>
                  <p>
                    <span className="muted">Better</span> <strong lang="es">{m.answer}</strong>
                  </p>
                  <p>{m.reason}</p>
                  <a className="text-link" href={href('/lesson/' + m.lesson + '?review=1')}>
                    Practice again <ArrowRight aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {upcoming.length > 0 && (
        <section aria-labelledby="upcoming">
          <h2 id="upcoming">Coming up</h2>
          <ul className="upcoming">
            {upcoming.slice(0, 8).map((l) => (
              <li key={l.id}>
                <span>{l.title}</span>
                <small>{dateLabel(progress.reviews[l.id].due)}</small>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
