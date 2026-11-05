import { Check, Target } from '@phosphor-icons/react';
import { levelStatus } from '../course.js';

// What this level teaches and what is still needed to move up. Nothing is locked; it only shows the goal.
export function LevelGoals({ level, progress }) {
  if (!level.skills?.length) return null;
  const status = levelStatus(level, progress.completed, progress.checkpoints[level.id]);
  return (
    <div className="level-goals">
      <h4>
        <Target aria-hidden="true" /> By the end of {level.code} you can
      </h4>
      <ul className="checks">
        {level.skills.map((skill) => (
          <li key={skill}>
            <Check weight="bold" aria-hidden="true" /> {skill}
          </li>
        ))}
      </ul>
      <p className={'level-up' + (status.complete ? ' is-done' : '')}>
        {status.complete
          ? `Level complete. You are ready for the next level.`
          : `To level up: ${status.needs.join(' and ')}.`}
      </p>
    </div>
  );
}

// A heading shown once at the start of each stage (Kids, Beginner, Intermediate, Advanced).
export function StageHeading({ stage, levels, progress }) {
  const codes = levels.map((l) => l.code);
  return (
    <div className="stage-head">
      <h2>{stage}</h2>
      <p className="muted">
        {codes.length > 1 ? `Levels ${codes.join(', ')}` : `Level ${codes[0]}`}
        {' · '}
        {levels.reduce(
          (n, l) => n + l.lessons.filter((x) => progress.completed.includes(x.id)).length,
          0,
        )}
        /{levels.reduce((n, l) => n + l.lessons.length, 0)} lessons
      </p>
    </div>
  );
}
