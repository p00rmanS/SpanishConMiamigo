import { ArrowRight, Check, Trophy } from '@phosphor-icons/react';
import { href } from '../lib/router.js';
import { continueTarget, countDone } from '../course.js';

// A trail through the course: every unit is a banner, every lesson a stop along the trail.
// Nothing is locked; the trail only shows where you are.
export function JourneyPath({ course, progress, now }) {
  const done = new Set(progress.completed);
  const next = continueTarget(course, progress.completed, progress.placement?.level);
  let stop = 0;
  return (
    <div className={'journey tone-' + course.id}>
      {course.levels.map((level) => {
        const checkpoint = progress.checkpoints[level.id];
        return (
          <section className="j-level" key={level.id} aria-label={`${level.code} ${level.title}`}>
            <header className="j-level-head tiled">
              <span className="j-code">{level.code}</span>
              <div>
                <h3>{level.title}</h3>
                <p>{level.blurb}</p>
              </div>
            </header>
            {level.units.map((unit, unitIndex) => {
              const unitDone = countDone(unit.lessons, progress.completed);
              return (
                <div className="j-unit" key={unit.id}>
                  <div className="j-unit-banner">
                    <span className="j-unit-no">Unit {unitIndex + 1}</span>
                    <h4>{unit.title}</h4>
                    <small>
                      {unitDone}/{unit.lessons.length}
                    </small>
                  </div>
                  <ol className="j-path">
                    {unit.lessons.map((lesson) => {
                      stop += 1;
                      const isDone = done.has(lesson.id);
                      const isNext = lesson.id === next?.id;
                      const due = progress.reviews[lesson.id]?.due <= now;
                      const state = isDone ? 'done' : isNext ? 'current' : 'open';
                      return (
                        <li key={lesson.id} className={'j-node ' + state}>
                          <a
                            href={href('/lesson/' + lesson.id)}
                            aria-label={`Lesson ${stop}: ${lesson.title}${isDone ? ', completed' : ''}${due ? ', due for review' : ''}`}
                          >
                            <span className="j-dot" aria-hidden="true">
                              {isDone ? <Check weight="bold" size={22} /> : stop}
                            </span>
                            <span className="j-label">
                              <strong>{lesson.title}</strong>
                              <small lang="es">{lesson.sentence}</small>
                            </span>
                            {isNext && <span className="j-flag">Start here</span>}
                            {due && !isNext && <span className="j-flag warm">Review</span>}
                          </a>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              );
            })}
            <a className="j-checkpoint" href={href('/checkpoint/' + level.id)}>
              <Trophy size={26} weight="bold" aria-hidden="true" />
              <span>
                <strong>{level.code} checkpoint</strong>
                <small>
                  Ten questions from this level.
                  {checkpoint ? ` Best: ${checkpoint.best}/${checkpoint.total}.` : ''}
                </small>
              </span>
              <ArrowRight aria-hidden="true" />
            </a>
          </section>
        );
      })}
    </div>
  );
}
