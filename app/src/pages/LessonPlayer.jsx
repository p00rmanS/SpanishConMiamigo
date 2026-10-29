import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Check, Lightbulb, Lightning, Warning, X, Trophy } from '@phosphor-icons/react';
import { StudySupport } from '../StudySupport.jsx';
import { Recorder, SpeakButton } from '../components/ui.jsx';
import { scoreAnswer } from '../learning.js';
import { store, useProgress } from '../lib/store.js';
import { navigate, href } from '../lib/router.js';
import { speak, stopSpeaking } from '../lib/speech.js';
import { makeExercises } from '../lib/exercises.js';
import { lessonById, levelOf, neighbours, countDone, MINUTES_PER_LESSON } from '../course.js';

const STEPS = ['Learn', 'Choose', 'Build', 'Write', 'Listen', 'Speak'];
const DONE = STEPS.length;
const ACCENTS = ['á', 'é', 'í', 'ó', 'ú', 'ñ', '¿', '¡'];

function Explanation({ lesson, mode }) {
  return (
    <div className="explain">
      {(mode === 'both' || mode === 'english') && (
        <div>
          <p className="label">In English</p>
          <p>{lesson.english}</p>
        </div>
      )}
      {(mode === 'both' || mode === 'taglish') && (
        <div>
          <p className="label">Sa Taglish</p>
          <p>{lesson.taglish}</p>
        </div>
      )}
    </div>
  );
}

function DeepDive({ sections }) {
  return (
    <section className="lp-block deep-dive" aria-label="Go deeper">
      <h2>Go deeper</h2>
      {sections.map((s) => (
        <div className="deep-section" key={s.heading}>
          <h3>{s.heading}</h3>
          {s.table && (
            <div className="deep-table-wrap">
              <table className={s.table.speakCol != null ? 'deep-table vocab' : 'deep-table'}>
                <thead>
                  <tr>
                    {s.table.head.map((h) => (
                      <th key={h} scope="col">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {s.table.rows.map((row) => (
                    <tr key={row.join('|')}>
                      {row.map((cell, i) => (
                        <td
                          key={i}
                          lang={s.table.langs ? s.table.langs[i] : i > 0 ? 'es' : undefined}
                        >
                          {s.table.speakCol === i ? (
                            <span className="deep-speak">
                              <SpeakButton text={cell} size="sm" />
                              {cell}
                            </span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {s.points && (
            <ul className="deep-points">
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}

function LearnStep({ lesson, mode }) {
  return (
    <>
      <section className="phrase-card" aria-label="Model sentence">
        <SpeakButton text={lesson.sentence} label="Listen to the sentence" size="lg" />
        <div>
          <p className="phrase-es" lang="es">
            {lesson.sentence}
          </p>
          <p className="phrase-sound" aria-label="Pronunciation guide">
            {lesson.sound}
          </p>
          <p className="phrase-en">{lesson.meaning}</p>
        </div>
      </section>

      <section className="lp-block">
        <h2>How it works</h2>
        <Explanation lesson={lesson} mode={mode} />
        <div className="callout">
          <Lightbulb size={22} weight="duotone" aria-hidden="true" />
          <p>
            <strong>Key idea.</strong> {lesson.key}
          </p>
        </div>
      </section>

      {lesson.pattern?.length > 0 && (
        <section className="lp-block">
          <h2>The pattern</h2>
          <div className="pattern-chips" lang="es">
            {lesson.pattern.map((part, i) => (
              <span key={part + i}>
                {i > 0 && <b aria-hidden="true">+</b>}
                <em>{part}</em>
              </span>
            ))}
          </div>
        </section>
      )}

      {lesson.examples?.length > 0 && (
        <section className="lp-block">
          <h2>More examples</h2>
          <ul className="examples">
            {lesson.examples.map(([es, en]) => (
              <li key={es}>
                <SpeakButton text={es} size="sm" />
                <div>
                  <p lang="es">{es}</p>
                  <p className="muted">{en}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {lesson.deep?.length > 0 && <DeepDive sections={lesson.deep} />}

      <section className="lp-block two-col">
        <div className="tip-card">
          <p className="label">Pro tip</p>
          <p>
            <strong>{lesson.tip}</strong> {lesson.tipDetail}
          </p>
        </div>
        <div className="tip-card warn">
          <p className="label">
            <Warning size={16} aria-hidden="true" /> Common mistake
          </p>
          <p>{lesson.mistake}</p>
        </div>
      </section>

      {lesson.refs?.length > 0 && (
        <section className="lp-block">
          <h2>Open the full tables</h2>
          <div className="ref-chips">
            {lesson.refs.map((r) => (
              <a key={r.label} className="ref-chip" href={href(r.path)}>
                {r.label}
              </a>
            ))}
          </div>
          <p className="muted small">
            Then practice in the <a href={href('/drill')}>conjugation drill</a>.
          </p>
        </section>
      )}

      <StudySupport
        key={lesson.id}
        spanish={lesson.sentence}
        english={lesson.meaning}
        tip={lesson.tipDetail || lesson.tip}
      />
    </>
  );
}

function Feedback({ result, children }) {
  if (!result) return null;
  return (
    <div className={'feedback ' + (result.correct ? 'right' : 'wrong')} role="status">
      <span className="feedback-icon" aria-hidden="true">
        {result.correct ? <Check weight="bold" /> : <X weight="bold" />}
      </span>
      <div>{children}</div>
    </div>
  );
}

export function LessonPlayer({ id, review }) {
  const lesson = lessonById.get(id);
  const progress = useProgress();
  const where = lesson && levelOf(id);
  const [step, setStep] = useState(review ? 1 : 0);
  const [choice, setChoice] = useState('');
  const [written, setWritten] = useState('');
  const [result, setResult] = useState(null);
  const [hint, setHint] = useState(false);
  const [built, setBuilt] = useState([]);
  const [heard, setHeard] = useState('');
  // Keyed by lesson id: the shuffle must stay stable across re-renders while you play.
  const exercises = useMemo(
    () => (lesson && where ? makeExercises(lesson, where.level.lessons) : {}),
    [id],
  );
  const attempts = useRef({ choose: 0, build: 0, write: 0, listen: 0 });
  const credit = useRef({ choose: false, build: false, write: false, listen: false });
  const xpBefore = useRef(progress.xp);
  const heading = useRef(null);

  useEffect(() => {
    heading.current?.focus();
    return stopSpeaking;
  }, [step]);

  // Play the sentence once when the listening exercise opens; the learner just pressed Continue.
  useEffect(() => {
    if (step === 4 && exercises.listen) speak(exercises.listen.answer);
  }, [step, exercises]);

  // Number keys pick an option on the choice step; Enter never submits from the textarea.
  useEffect(() => {
    if (step !== 1 || !lesson) return undefined;
    const onKey = (e) => {
      const index = Number(e.key) - 1;
      if (index >= 0 && index < lesson.choices.length && !result?.correct) {
        setChoice(lesson.choices[index]);
        setResult(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [step, lesson, result]);

  if (!lesson) {
    return (
      <div className="page narrow">
        <h1>Lesson not found</h1>
        <a className="primary" href={href('/courses')}>
          Back to courses
        </a>
      </div>
    );
  }

  const { course, level } = where;
  const near = neighbours(course, id);
  const exitPath = '/course/' + course.id;
  const mode = progress.settings.explain;

  function missed(kind, input, answer) {
    store.recordMistake(id, { input, answer, reason: lesson.reason });
    attempts.current[kind] += 1;
  }

  function checkChoice() {
    const scored = scoreAnswer(choice, [lesson.answer]);
    if (scored.correct) {
      if (attempts.current.choose === 0) credit.current.choose = true;
      setResult({ correct: true });
    } else {
      missed('choose', choice, lesson.answer);
      setResult({ correct: false });
    }
  }

  function checkWriting() {
    const scored = scoreAnswer(written, lesson.accepted, { strictAccents: lesson.strictAccents });
    if (scored.correct) {
      if (attempts.current.write === 0) credit.current.write = true;
      setResult({ correct: true, accent: scored.accent });
    } else {
      missed('write', written, lesson.reply);
      setResult({ correct: false });
    }
  }

  const skipped = (i) => (i === 2 && !exercises.build) || (i === 4 && !exercises.listen);

  function advance(to) {
    let target = to;
    while (target < DONE && skipped(target)) target += 1;
    setResult(null);
    setHint(false);
    setStep(target);
  }

  const builtWords = exercises.build ? built.map((i) => exercises.build.bank[i].word) : [];

  function checkBuild() {
    const sentence = builtWords.join(' ');
    const scored = scoreAnswer(sentence, lesson.accepted, { strictAccents: lesson.strictAccents });
    if (scored.correct) {
      if (attempts.current.build === 0) credit.current.build = true;
      setResult({ correct: true });
    } else {
      missed('build', sentence, lesson.reply);
      setResult({ correct: false });
    }
  }

  function checkListen() {
    if (heard === exercises.listen.answer) {
      if (attempts.current.listen === 0) credit.current.listen = true;
      setResult({ correct: true });
    } else {
      missed('listen', heard, exercises.listen.answer);
      setResult({ correct: false });
    }
  }

  const firstTries = Object.values(credit.current).filter(Boolean).length;

  function finish() {
    store.completeLesson(id, { firstTry: firstTries, review });
    advance(DONE);
  }

  const earned = Math.max(progress.xp - xpBefore.current, 0);
  const levelFinished =
    step === DONE && countDone(level.lessons, progress.completed) === level.lessons.length;
  const dueDate = new Date(progress.reviews[id]?.due ?? Date.now()).toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="player">
      <header className="player-top">
        <button
          type="button"
          className="icon-button"
          aria-label="Leave lesson"
          onClick={() => navigate(exitPath)}
        >
          <X size={24} aria-hidden="true" />
        </button>
        <ol className="segments" aria-label={`Step ${Math.min(step, DONE - 1) + 1} of ${DONE}`}>
          {STEPS.map((label, i) =>
            skipped(i) ? null : (
              <li key={label} className={i < step ? 'done' : i === step ? 'current' : ''}>
                <span className="sr-only">{label}</span>
              </li>
            ),
          )}
        </ol>
        <span className="chip xp">
          <Lightning weight="fill" size={16} aria-hidden="true" /> {progress.xp}
        </span>
      </header>

      <main className="player-main" id="main">
        <div className="player-col">
          <p className="eyebrow">
            {course.title} · {level.code} · {STEPS[Math.min(step, DONE - 1)]}
            {review && ' · Review'}
          </p>
          {step === 0 && (
            <>
              <h1 ref={heading} tabIndex={-1}>
                {lesson.title}
              </h1>
              <p className="lead">{lesson.subtitle}</p>
              <LearnStep lesson={lesson} mode={mode} />
            </>
          )}

          {step === 1 && (
            <section className="exercise">
              <h1 ref={heading} tabIndex={-1} className="exercise-title">
                {lesson.prompt}
              </h1>
              <div className="options" role="radiogroup" aria-label="Choose an answer">
                {lesson.choices.map((c, i) => (
                  <button
                    key={c}
                    type="button"
                    role="radio"
                    aria-checked={choice === c}
                    disabled={result?.correct}
                    className={
                      'option' +
                      (choice === c ? ' selected' : '') +
                      (result && choice === c ? (result.correct ? ' right' : ' wrong') : '')
                    }
                    onClick={() => {
                      setChoice(c);
                      setResult(null);
                    }}
                  >
                    <kbd aria-hidden="true">{i + 1}</kbd>
                    <span>{c}</span>
                  </button>
                ))}
              </div>
              <button type="button" className="text-button" onClick={() => setHint(!hint)}>
                {hint ? 'Hide hint' : 'I need a hint'}
              </button>
              {hint && <p className="hint">{lesson.taglish}</p>}
            </section>
          )}

          {step === 2 && exercises.build && (
            <section className="exercise">
              <h1 ref={heading} tabIndex={-1} className="exercise-title">
                Build the sentence
              </h1>
              <p className="muted">{lesson.meaning}</p>
              <div
                className={'build-line' + (result ? (result.correct ? ' right' : ' wrong') : '')}
                lang="es"
                aria-label="Your sentence"
              >
                {built.length === 0 && <span className="build-hint">Tap the words below</span>}
                {built.map((index) => (
                  <button
                    key={index}
                    type="button"
                    className="word"
                    disabled={result?.correct}
                    onClick={() => {
                      setBuilt((b) => b.filter((i) => i !== index));
                      setResult(null);
                    }}
                  >
                    {exercises.build.bank[index].word}
                  </button>
                ))}
              </div>
              <div className="word-bank" lang="es" aria-label="Word bank">
                {exercises.build.bank.map(({ id: index, word }) => (
                  <button
                    key={index}
                    type="button"
                    className="word"
                    disabled={built.includes(index) || result?.correct}
                    onClick={() => {
                      setBuilt((b) => [...b, index]);
                      setResult(null);
                    }}
                  >
                    {word}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="text-button"
                disabled={result?.correct}
                onClick={() => {
                  setBuilt([]);
                  setResult(null);
                }}
              >
                Clear
              </button>
            </section>
          )}

          {step === 3 && (
            <section className="exercise">
              <h1 ref={heading} tabIndex={-1} className="exercise-title">
                {lesson.writing}
              </h1>
              <label className="input-label" htmlFor="answer">
                Your Spanish answer
              </label>
              <textarea
                id="answer"
                lang="es"
                rows={3}
                value={written}
                disabled={result?.correct}
                onChange={(e) => {
                  setWritten(e.target.value);
                  setResult(null);
                }}
                placeholder="Escribe aquí…"
              />
              <div className="accents" aria-label="Spanish characters">
                {ACCENTS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    aria-label={'Insert ' + c}
                    disabled={result?.correct}
                    onClick={() => setWritten((w) => w + c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <button type="button" className="text-button" onClick={() => setHint(!hint)}>
                {hint ? 'Hide hint' : 'I need a hint'}
              </button>
              {hint && (
                <p className="hint" lang="es">
                  {lesson.pattern.join(' + ')}
                </p>
              )}
            </section>
          )}

          {step === 4 && exercises.listen && (
            <section className="exercise">
              <h1 ref={heading} tabIndex={-1} className="exercise-title">
                What did you hear?
              </h1>
              <div className="listen-big">
                <SpeakButton text={exercises.listen.answer} label="Play the sentence" size="lg" />
                <span>Tap to listen</span>
              </div>
              <div className="options" role="radiogroup" aria-label="Choose the sentence you heard">
                {exercises.listen.options.map((o, i) => (
                  <button
                    key={o}
                    type="button"
                    role="radio"
                    aria-checked={heard === o}
                    disabled={result?.correct}
                    className={
                      'option' +
                      (heard === o ? ' selected' : '') +
                      (result && heard === o ? (result.correct ? ' right' : ' wrong') : '')
                    }
                    onClick={() => {
                      setHeard(o);
                      setResult(null);
                    }}
                  >
                    <kbd aria-hidden="true">{i + 1}</kbd>
                    <span lang="es">{o}</span>
                  </button>
                ))}
              </div>
              <p className="muted small">
                If you cannot hear audio, read the options and pick the one that matches the lesson.
              </p>
            </section>
          )}

          {step === 5 && (
            <section className="exercise">
              <h1 ref={heading} tabIndex={-1} className="exercise-title">
                Use it in real life
              </h1>
              <p className="scene">{lesson.scene}</p>
              <p className="muted">{lesson.sceneHint}</p>
              <div className="speak-row">
                <SpeakButton text={lesson.sentence} label="Listen to the model" />
                <span lang="es">{lesson.sentence}</span>
              </div>
              <Recorder key={lesson.id} sentence={lesson.sentence} />
            </section>
          )}

          {step === DONE && (
            <section className="done">
              <span className="done-badge" aria-hidden="true">
                <Check size={40} weight="bold" />
              </span>
              <h1 ref={heading} tabIndex={-1}>
                {review ? 'Review complete' : 'Lesson complete'}
              </h1>
              <p className="lead">{lesson.goal}</p>
              <div className="reward-row">
                <div className="reward">
                  <Lightning weight="fill" size={22} aria-hidden="true" />
                  <strong>+{earned} XP</strong>
                  <small>
                    {firstTries > 0
                      ? `First-try bonus on ${firstTries} of ${STEPS.length - 2 - Number(!exercises.build) - Number(!exercises.listen)} exercises`
                      : 'Earned for finishing'}
                  </small>
                </div>
                <div className="reward">
                  <strong>{dueDate}</strong>
                  <small>Next review</small>
                </div>
              </div>
              <h2>Remember</h2>
              <ul className="recap">
                {lesson.recap.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <p className="muted small">
                Speaking is self-assessed. Keep practicing aloud with real people.
              </p>
              {levelFinished && (
                <a className="checkpoint" href={href('/checkpoint/' + level.id)}>
                  <Trophy size={24} weight="duotone" aria-hidden="true" />
                  <span>
                    <strong>You finished {level.code}!</strong>
                    <small>Try the {level.code} checkpoint to test what stuck.</small>
                  </span>
                  <ArrowRight aria-hidden="true" />
                </a>
              )}
            </section>
          )}
        </div>
      </main>

      <footer className={'player-foot' + (result ? (result.correct ? ' right' : ' wrong') : '')}>
        <div className="player-foot-inner">
          {step === 1 && result && (
            <Feedback result={result}>
              <strong>{result.correct ? 'Correct!' : 'Not quite.'}</strong>
              {!result.correct && (
                <p>
                  Answer: <span lang="es">{lesson.answer}</span>
                </p>
              )}
              <p>{lesson.reason}</p>
            </Feedback>
          )}
          {step === 2 && result && (
            <Feedback result={result}>
              <strong>{result.correct ? 'Perfect!' : 'Not quite yet.'}</strong>
              {!result.correct && <p>Reorder the words and try again.</p>}
            </Feedback>
          )}
          {step === 4 && result && (
            <Feedback result={result}>
              <strong>{result.correct ? 'You heard it!' : 'Not quite.'}</strong>
              {!result.correct && (
                <p>
                  It was: <span lang="es">{exercises.listen.answer}</span>
                </p>
              )}
            </Feedback>
          )}
          {step === 3 && result && (
            <Feedback result={result}>
              <strong>{result.correct ? 'That works!' : 'Not quite yet.'}</strong>
              {result.correct && result.accent && (
                <p>
                  Meaning is right. Keep the accents: <span lang="es">{lesson.reply}</span>
                </p>
              )}
              {!result.correct && <p>Check the pattern, then try again.</p>}
            </Feedback>
          )}

          <div className="foot-actions">
            {step === 0 && (
              <>
                <span className="muted small">About {MINUTES_PER_LESSON} minutes</span>
                <button type="button" className="primary" onClick={() => advance(1)}>
                  Start practice <ArrowRight aria-hidden="true" />
                </button>
              </>
            )}
            {step === 1 &&
              (result?.correct ? (
                <button type="button" className="primary" onClick={() => advance(2)}>
                  Continue <ArrowRight aria-hidden="true" />
                </button>
              ) : (
                <button type="button" className="primary" disabled={!choice} onClick={checkChoice}>
                  {result ? 'Check again' : 'Check'}
                </button>
              ))}
            {step === 2 &&
              (result?.correct ? (
                <button type="button" className="primary" onClick={() => advance(3)}>
                  Continue <ArrowRight aria-hidden="true" />
                </button>
              ) : (
                <button
                  type="button"
                  className="primary"
                  disabled={builtWords.length === 0}
                  onClick={checkBuild}
                >
                  {result ? 'Check again' : 'Check'}
                </button>
              ))}
            {step === 4 &&
              (result?.correct ? (
                <button type="button" className="primary" onClick={() => advance(5)}>
                  Continue <ArrowRight aria-hidden="true" />
                </button>
              ) : (
                <button type="button" className="primary" disabled={!heard} onClick={checkListen}>
                  {result ? 'Check again' : 'Check'}
                </button>
              ))}
            {step === 3 &&
              (result?.correct ? (
                <button type="button" className="primary" onClick={() => advance(4)}>
                  Continue <ArrowRight aria-hidden="true" />
                </button>
              ) : (
                <>
                  {result && (
                    <button
                      type="button"
                      className="text-button"
                      onClick={() => {
                        setWritten(lesson.reply);
                        advance(4);
                      }}
                    >
                      Show answer and continue
                    </button>
                  )}
                  <button
                    type="button"
                    className="primary"
                    disabled={!written.trim()}
                    onClick={checkWriting}
                  >
                    {result ? 'Check again' : 'Check'}
                  </button>
                </>
              ))}
            {step === 5 && (
              <button type="button" className="primary" onClick={finish}>
                I practiced · finish lesson <Check aria-hidden="true" />
              </button>
            )}
            {step === DONE && (
              <>
                <a className="text-button" href={href(exitPath)}>
                  Back to course
                </a>
                {near.next ? (
                  <a className="primary" href={href('/lesson/' + near.next.id)}>
                    Next lesson <ArrowRight aria-hidden="true" />
                  </a>
                ) : (
                  <a className="primary" href={href(exitPath)}>
                    Finish course <ArrowRight aria-hidden="true" />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
