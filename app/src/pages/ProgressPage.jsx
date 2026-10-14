import { Fire, Lightning, CalendarCheck, Check, Trophy, GearSix } from '@phosphor-icons/react';
import { ProgressDashboard } from '../ProgressDashboard.jsx';
import { ProgressBar } from '../components/ui.jsx';
import { lessons } from '../content.js';
import { courses, courseStats, countDone } from '../course.js';
import { streakInfo } from '../lib/store-core.js';
import { navigate, href } from '../lib/router.js';

export function ProgressPage({ progress, now, onSettings }) {
  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Progress</p>
        <h1>Your learning, honestly measured</h1>
        <p className="lead">
          Completion shows what you have practiced, not a fluency score. Checkpoints are short study
          quizzes, not official exams.
        </p>
      </header>

      <div className="stat-grid">
        <div className="card stat">
          <Check size={24} weight="bold" aria-hidden="true" />
          <strong>{progress.completed.length}</strong>
          <span>lessons completed</span>
        </div>
        <div className="card stat">
          <Lightning size={24} weight="fill" aria-hidden="true" />
          <strong>{progress.xp}</strong>
          <span>XP earned</span>
        </div>
        <div className="card stat">
          <Fire size={24} weight="fill" aria-hidden="true" />
          <strong>{streakInfo(progress.days).current}</strong>
          <span>day streak (best {streakInfo(progress.days).longest})</span>
        </div>
        <div className="card stat">
          <CalendarCheck size={24} aria-hidden="true" />
          <strong>{progress.days.length}</strong>
          <span>days practiced</span>
        </div>
        <div className="card stat">
          <Trophy size={24} aria-hidden="true" />
          <strong>{Object.keys(progress.checkpoints).length}</strong>
          <span>checkpoints taken</span>
        </div>
      </div>

      <section aria-labelledby="by-course">
        <h2 id="by-course">By course</h2>
        <div className="stack">
          {courses.map((course) => {
            const stats = courseStats(course, progress.completed);
            return (
              <div className="card" key={course.id}>
                <div className="section-head">
                  <h3>
                    <a href={href('/course/' + course.id)}>{course.title}</a>
                  </h3>
                  <span className="muted">
                    {stats.done}/{stats.total} · {stats.percent}%
                  </span>
                </div>
                <ProgressBar value={stats.percent} label={course.title} />
                <ul className="level-stats">
                  {course.levels.map((level) => {
                    const done = countDone(level.lessons, progress.completed);
                    const cp = progress.checkpoints[level.id];
                    return (
                      <li key={level.id}>
                        <span className="level-code">{level.code}</span>
                        <span>
                          {level.title}
                          <small>
                            {done}/{level.lessons.length} lessons
                            {cp ? ` · checkpoint ${cp.best}/${cp.total}` : ''}
                          </small>
                        </span>
                        <a className="text-link" href={href('/checkpoint/' + level.id)}>
                          {cp ? 'Retake' : 'Checkpoint'}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="card tile-static">
        <GearSix size={26} weight="duotone" aria-hidden="true" />
        <div>
          <h3>Back up your progress</h3>
          <p>
            Your progress is stored in this browser only. Download a backup to move to another
            device.
          </p>
        </div>
        <button type="button" className="secondary" onClick={onSettings}>
          Open settings
        </button>
      </section>

      <section aria-labelledby="detail">
        <h2 id="detail">Detailed breakdown</h2>
        <ProgressDashboard
          lessons={lessons}
          progress={progress}
          onOpen={(i) => navigate('/lesson/' + lessons[i].id)}
          now={now}
        />
      </section>
    </div>
  );
}
