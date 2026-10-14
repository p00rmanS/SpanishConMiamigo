import { useMemo, useState } from 'react';
import { ArrowRight, Check, X, Trophy, Compass } from '@phosphor-icons/react';
import { ProgressBar } from '../components/ui.jsx';
import { store } from '../lib/store.js';
import { navigate, href } from '../lib/router.js';
import { courses, checkpointQuiz, placementQuiz, placementResult } from '../course.js';

const PASS = 0.7;

function findLevel(levelId) {
  for (const course of courses) {
    const level = course.levels.find((lv) => lv.id === levelId);
    if (level) return { course, level };
  }
  return null;
}

// One question at a time, immediate feedback, and an honest score at the end.
export function Quiz({ mode, levelId }) {
  const found = mode === 'checkpoint' ? findLevel(levelId) : null;
  const foundations = courses[0];
  const items = useMemo(
    () =>
      mode === 'placement' ? placementQuiz(foundations) : found ? checkpointQuiz(found.level) : [],
    // A fresh quiz each time the screen opens; the key on the route resets it for retakes.
    [mode, levelId],
  );
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState('');
  const [checked, setChecked] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [saved, setSaved] = useState(false);

  if (!items.length) {
    return (
      <div className="page narrow">
        <h1>Quiz not found</h1>
        <a className="primary" href={href('/courses')}>
          Back to courses
        </a>
      </div>
    );
  }

  const exit = found ? '/course/' + found.course.id : '/courses';
  const finished = answers.length === items.length;
  const item = items[index];
  const score = answers.filter((a, i) => a === items[i].answer).length;

  function next() {
    const updated = [...answers, picked];
    setAnswers(updated);
    setPicked('');
    setChecked(false);
    if (index + 1 < items.length) setIndex(index + 1);
    else if (mode === 'checkpoint') {
      const total = updated.filter((a, i) => a === items[i].answer).length;
      store.saveCheckpoint(levelId, total, items.length);
      setSaved(true);
    }
  }

  const title =
    mode === 'placement'
      ? 'Placement check'
      : `${found.level.code} checkpoint · ${found.course.title}`;

  return (
    <div className="player">
      <header className="player-top">
        <button
          type="button"
          className="icon-button"
          aria-label="Leave quiz"
          onClick={() => navigate(exit)}
        >
          <X size={24} aria-hidden="true" />
        </button>
        <ProgressBar
          value={((finished ? items.length : index) / items.length) * 100}
          label="Quiz progress"
        />
        <span className="chip">
          {finished ? items.length : index + 1}/{items.length}
        </span>
      </header>
      <main className="player-main" id="main">
        <div className="player-col">
          {!finished ? (
            <section className="exercise">
              <p className="eyebrow">{title}</p>
              <h1 className="exercise-title">{item.prompt}</h1>
              <div className="options" role="radiogroup" aria-label="Choose an answer">
                {item.choices.map((c, i) => (
                  <button
                    key={c}
                    type="button"
                    role="radio"
                    aria-checked={picked === c}
                    disabled={checked}
                    className={
                      'option' +
                      (picked === c ? ' selected' : '') +
                      (checked && c === item.answer ? ' right' : '') +
                      (checked && picked === c && c !== item.answer ? ' wrong' : '')
                    }
                    onClick={() => setPicked(c)}
                  >
                    <kbd aria-hidden="true">{i + 1}</kbd>
                    <span>{c}</span>
                  </button>
                ))}
              </div>
            </section>
          ) : (
            <Results
              mode={mode}
              items={items}
              answers={answers}
              score={score}
              found={found}
              saved={saved}
            />
          )}
        </div>
      </main>
      {!finished && (
        <footer
          className={
            'player-foot' + (checked ? (picked === item.answer ? ' right' : ' wrong') : '')
          }
        >
          <div className="player-foot-inner">
            {checked && (
              <div
                className={'feedback ' + (picked === item.answer ? 'right' : 'wrong')}
                role="status"
              >
                <span className="feedback-icon" aria-hidden="true">
                  {picked === item.answer ? <Check weight="bold" /> : <X weight="bold" />}
                </span>
                <div>
                  <strong>{picked === item.answer ? 'Correct!' : 'Not quite.'}</strong>
                  {picked !== item.answer && <p>Answer: {item.answer}</p>}
                  <p>{item.reason}</p>
                </div>
              </div>
            )}
            <div className="foot-actions">
              {checked ? (
                <button type="button" className="primary" onClick={next}>
                  {index + 1 < items.length ? 'Next question' : 'See results'}{' '}
                  <ArrowRight aria-hidden="true" />
                </button>
              ) : (
                <button
                  type="button"
                  className="primary"
                  disabled={!picked}
                  onClick={() => setChecked(true)}
                >
                  Check
                </button>
              )}
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

function Results({ mode, items, answers, score, found, saved }) {
  const missed = items
    .map((item, i) => ({ item, answer: answers[i] }))
    .filter((r) => r.answer !== r.item.answer);
  if (mode === 'placement') {
    const level = placementResult(items, answers);
    const start = courses[0].levels.find((lv) => lv.code === level);
    return (
      <section className="done">
        <span className="done-badge" aria-hidden="true">
          <Compass size={40} weight="duotone" />
        </span>
        <h1>Suggested start: {level}</h1>
        <p className="lead">
          You answered {score} of {items.length} correctly.{' '}
          {start && `Begin with ${start.title}: ${start.blurb}`}
        </p>
        <p className="muted small">
          This is a short study guide, not an official CEFR result. You can start anywhere or retake
          it later.
        </p>
        <div className="foot-actions left">
          <button
            type="button"
            className="primary"
            onClick={() => {
              store.setPlacement(level);
              navigate('/course/foundations');
            }}
          >
            Use {level} as my starting point <ArrowRight aria-hidden="true" />
          </button>
          <a className="text-button" href={href('/courses')}>
            Browse all courses
          </a>
        </div>
      </section>
    );
  }
  const passed = score / items.length >= PASS;
  return (
    <section className="done">
      <span className="done-badge" aria-hidden="true">
        <Trophy size={40} weight="duotone" />
      </span>
      <h1>
        {score} / {items.length}
      </h1>
      <p className="lead">
        {passed
          ? `Strong result on ${found.level.code}. These questions come straight from the lessons.`
          : `Good practice. Review the explanations below, then try the ${found.level.code} checkpoint again.`}
      </p>
      {saved && <p className="muted small">Score saved. Your best result is kept.</p>}
      {missed.length > 0 && (
        <>
          <h2>Worth another look</h2>
          <ul className="missed">
            {missed.map(({ item, answer }) => (
              <li key={item.lessonId}>
                <p>
                  <strong>{item.title}</strong>
                </p>
                <p className="muted">
                  You chose “{answer}”. Answer: “{item.answer}”.
                </p>
                <p>{item.reason}</p>
                <a className="text-link" href={href('/lesson/' + item.lessonId + '?review=1')}>
                  Review this lesson <ArrowRight aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
      <div className="foot-actions left">
        <a className="primary" href={href('/course/' + found.course.id)}>
          Back to course <ArrowRight aria-hidden="true" />
        </a>
        <button type="button" className="text-button" onClick={() => window.location.reload()}>
          Retake with new questions
        </button>
      </div>
    </section>
  );
}
