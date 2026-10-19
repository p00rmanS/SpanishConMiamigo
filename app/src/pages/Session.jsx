import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Check, Fire, Lightning, X } from '@phosphor-icons/react';
import { ProgressBar, SpeakButton } from '../components/ui.jsx';
import { scoreAnswer } from '../learning.js';
import { store, useProgress } from '../lib/store.js';
import { streakInfo, SESSION_XP } from '../lib/store-core.js';
import { buildSession, sessionCandidates } from '../lib/session.js';
import { navigate, href } from '../lib/router.js';
import { speak, stopSpeaking } from '../lib/speech.js';
import { courses, lessonById, levelOf } from '../course.js';

function siblingsOf(lesson) {
  return levelOf(lesson.id)?.level.lessons ?? [];
}

export function Session() {
  const progress = useProgress();
  const items = useMemo(
    () =>
      buildSession(
        sessionCandidates(
          // New learners get a warm-up from the first lessons so the session is never empty.
          progress.completed.length
            ? progress.completed
            : (courses[0]?.levels[0]?.lessons ?? []).slice(0, 6).map((l) => l.id),
          progress.reviews,
          lessonById,
        ),
        siblingsOf,
      ),
    // The session is fixed when the screen opens; later progress changes must not reshuffle it.
    [],
  );
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState('');
  const [built, setBuilt] = useState([]);
  const [checked, setChecked] = useState(null);
  const [results, setResults] = useState([]);
  const saved = useRef(false);
  const pending = useRef(null);
  const xpBefore = useRef(progress.xp);
  const finished = results.length === items.length && items.length > 0;
  const item = items[index];

  useEffect(() => {
    if (item?.type === 'listen' && !checked) speak(item.speak);
    return stopSpeaking;
  }, [item, checked]);

  useEffect(() => {
    if (finished && !saved.current) {
      saved.current = true;
      store.completeSession(results);
    }
  }, [finished, results]);

  if (!items.length) {
    return (
      <div className="page narrow">
        <h1>Your daily session is waiting</h1>
        <p className="lead">Finish your first lesson and your sessions will appear here.</p>
        <a className="primary" href={href('/courses')}>
          Browse courses
        </a>
      </div>
    );
  }

  const builtWords = item?.type === 'build' ? built.map((i) => item.bank[i].word) : [];

  function isCorrect() {
    if (item.type === 'build')
      return scoreAnswer(builtWords.join(' '), item.accepted, { strictAccents: item.strictAccents })
        .correct;
    return picked === item.answer;
  }

  function check() {
    const correct = isCorrect();
    setChecked({ correct });
    pending.current = {
      id: item.lessonId,
      correct,
      input: item.type === 'build' ? builtWords.join(' ') : picked,
      answer: item.type === 'build' ? item.answer.join(' ') : item.answer,
      reason: item.reason ?? '',
    };
  }

  function next() {
    setResults((r) => [...r, pending.current]);
    setPicked('');
    setBuilt([]);
    setChecked(null);
    if (index + 1 < items.length) setIndex(index + 1);
  }

  const right = results.filter((r) => r.correct).length;
  const streak = streakInfo(progress.days);
  const earned = Math.max(progress.xp - xpBefore.current, 0);
  const options = item?.type === 'listen' ? item.options : item?.choices;
  const ready = item?.type === 'build' ? builtWords.length > 0 : Boolean(picked);

  return (
    <div className="player">
      <header className="player-top">
        <button
          type="button"
          className="icon-button"
          aria-label="Leave session"
          onClick={() => navigate('/')}
        >
          <X size={24} aria-hidden="true" />
        </button>
        <ProgressBar
          value={((finished ? items.length : index) / items.length) * 100}
          label="Session progress"
        />
        <span className="chip">
          {finished ? items.length : index + 1}/{items.length}
        </span>
      </header>

      <main className="player-main" id="main">
        <div className="player-col">
          {!finished ? (
            <section className="exercise">
              <p className="eyebrow">Daily session · {item.title}</p>
              {item.type === 'choice' && <h1 className="exercise-title">{item.prompt}</h1>}
              {item.type === 'listen' && (
                <>
                  <h1 className="exercise-title">What did you hear?</h1>
                  <div className="listen-big">
                    <SpeakButton text={item.speak} label="Play the sentence" size="lg" />
                    <span>Tap to listen</span>
                  </div>
                </>
              )}
              {item.type === 'build' && (
                <>
                  <h1 className="exercise-title">Build the sentence</h1>
                  <p className="muted">{item.meaning}</p>
                  <div
                    className={
                      'build-line' + (checked ? (checked.correct ? ' right' : ' wrong') : '')
                    }
                    lang="es"
                  >
                    {built.length === 0 && <span className="build-hint">Tap the words below</span>}
                    {built.map((i) => (
                      <button
                        key={i}
                        type="button"
                        className="word"
                        disabled={Boolean(checked)}
                        onClick={() => setBuilt((b) => b.filter((x) => x !== i))}
                      >
                        {item.bank[i].word}
                      </button>
                    ))}
                  </div>
                  <div className="word-bank" lang="es">
                    {item.bank.map(({ id, word }) => (
                      <button
                        key={id}
                        type="button"
                        className="word"
                        disabled={built.includes(id) || Boolean(checked)}
                        onClick={() => setBuilt((b) => [...b, id])}
                      >
                        {word}
                      </button>
                    ))}
                  </div>
                </>
              )}
              {options && (
                <div className="options" role="radiogroup" aria-label="Choose an answer">
                  {options.map((c, i) => (
                    <button
                      key={c}
                      type="button"
                      role="radio"
                      aria-checked={picked === c}
                      disabled={Boolean(checked)}
                      className={
                        'option' +
                        (picked === c ? ' selected' : '') +
                        (checked && c === item.answer ? ' right' : '') +
                        (checked && picked === c && c !== item.answer ? ' wrong' : '')
                      }
                      onClick={() => setPicked(c)}
                    >
                      <kbd aria-hidden="true">{i + 1}</kbd>
                      <span lang={item.type === 'listen' ? 'es' : undefined}>{c}</span>
                    </button>
                  ))}
                </div>
              )}
            </section>
          ) : (
            <section className="done">
              <span className="done-badge" aria-hidden="true">
                <Check size={40} weight="bold" />
              </span>
              <h1>
                {right} / {items.length} correct
              </h1>
              <p className="lead">
                {right === items.length
                  ? 'A perfect session. Those lessons are now scheduled further out.'
                  : 'Good work. The ones you missed will come back sooner, and their explanations are in your mistake notebook.'}
              </p>
              <div className="reward-row">
                <div className="reward">
                  <Lightning weight="fill" size={22} aria-hidden="true" />
                  <strong>+{earned} XP</strong>
                  <small>
                    {SESSION_XP.correct} per correct answer
                    {right === items.length ? ` + ${SESSION_XP.perfectBonus} perfect bonus` : ''}
                  </small>
                </div>
                <div className="reward">
                  <Fire weight="fill" size={22} aria-hidden="true" />
                  <strong>{streak.current}-day streak</strong>
                  <small>Longest: {streak.longest}</small>
                </div>
              </div>
              <div className="foot-actions left">
                <a className="primary" href={href('/')}>
                  Back home <ArrowRight aria-hidden="true" />
                </a>
                <a className="text-button" href={href('/review')}>
                  See mistake notebook
                </a>
              </div>
            </section>
          )}
        </div>
      </main>

      {!finished && (
        <footer
          className={'player-foot' + (checked ? (checked.correct ? ' right' : ' wrong') : '')}
        >
          <div className="player-foot-inner">
            {checked && (
              <div className={'feedback ' + (checked.correct ? 'right' : 'wrong')} role="status">
                <span className="feedback-icon" aria-hidden="true">
                  {checked.correct ? <Check weight="bold" /> : <X weight="bold" />}
                </span>
                <div>
                  <strong>{checked.correct ? 'Correct!' : 'Not quite.'}</strong>
                  {!checked.correct && (
                    <p>
                      Answer:{' '}
                      <span lang="es">
                        {item.type === 'build' ? item.answer.join(' ') : item.answer}
                      </span>
                    </p>
                  )}
                  {item.reason && <p>{item.reason}</p>}
                </div>
              </div>
            )}
            <div className="foot-actions">
              {checked ? (
                <button type="button" className="primary" onClick={next}>
                  {index + 1 < items.length ? 'Continue' : 'Finish'}{' '}
                  <ArrowRight aria-hidden="true" />
                </button>
              ) : (
                <button type="button" className="primary" disabled={!ready} onClick={check}>
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
