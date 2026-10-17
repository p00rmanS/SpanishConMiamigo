import { useRef, useState } from 'react';
import { ArrowRight, Check, Lightning, X } from '@phosphor-icons/react';
import { ProgressBar } from '../components/ui.jsx';
import { scoreAnswer } from '../learning.js';
import { store } from '../lib/store.js';
import { href } from '../lib/router.js';
import { buildDrill, verbsForSet, DRILL_TENSES, VERB_SETS } from '../lib/drill.js';
import { DRILL_XP } from '../lib/store-core.js';
import { verbList } from '../verbs-data.js';

const ACCENTS = ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü'];
const COUNTS = [5, 10, 20];

function tenseLabel(key) {
  return DRILL_TENSES.find(([k]) => k === key)?.[1] ?? key;
}

function Setup({ onStart, presetVerb }) {
  const [set, setSet] = useState('common');
  const [tenses, setTenses] = useState(['indicative.present', 'indicative.preterite']);
  const [count, setCount] = useState(10);
  const [vosotros, setVosotros] = useState(true);
  const [accents, setAccents] = useState(true);
  const verb = presetVerb && verbList.find((v) => v.infinitive === presetVerb);

  function toggleTense(key) {
    setTenses((t) => (t.includes(key) ? t.filter((x) => x !== key) : [...t, key]));
  }

  return (
    <div className="page narrow-wide">
      <header className="page-head">
        <p className="eyebrow">Conjugation drill</p>
        <h1>Build the form, from memory</h1>
        <p className="lead">
          Random questions from the verb list. Type the conjugated form; you’ll see the whole row
          after each answer. {DRILL_XP.correct} XP per correct answer.
        </p>
      </header>

      <section className="card setup">
        {verb ? (
          <p>
            Practicing <strong lang="es">{verb.infinitive}</strong> ({verb.english}).{' '}
            <a className="text-link" href={href('/drill')}>
              Use all verbs instead
            </a>
          </p>
        ) : (
          <fieldset>
            <legend>Verbs</legend>
            <div className="category-filters">
              {VERB_SETS.map(([id, label]) => (
                <button key={id} type="button" aria-pressed={set === id} onClick={() => setSet(id)}>
                  {label}
                </button>
              ))}
            </div>
          </fieldset>
        )}
        <fieldset>
          <legend>Tenses</legend>
          <div className="category-filters">
            {DRILL_TENSES.map(([key, label]) => (
              <button
                key={key}
                type="button"
                aria-pressed={tenses.includes(key)}
                onClick={() => toggleTense(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Questions</legend>
          <div className="category-filters">
            {COUNTS.map((n) => (
              <button key={n} type="button" aria-pressed={count === n} onClick={() => setCount(n)}>
                {n}
              </button>
            ))}
          </div>
        </fieldset>
        <div className="conj-options">
          <label>
            <input type="checkbox" checked={vosotros} onChange={() => setVosotros(!vosotros)} />
            Include vosotros
          </label>
          <label>
            <input type="checkbox" checked={accents} onChange={() => setAccents(!accents)} />
            Accents must be correct
          </label>
        </div>
        <button
          type="button"
          className="primary"
          disabled={!tenses.length}
          onClick={() =>
            onStart({
              verbs: verb ? [verb] : verbsForSet(set),
              tenses,
              count,
              includeVosotros: vosotros,
              strictAccents: accents,
            })
          }
        >
          Start drill <ArrowRight aria-hidden="true" />
        </button>
      </section>
    </div>
  );
}

function Run({ items, strictAccents, onDone }) {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(null);
  const [correct, setCorrect] = useState(0);
  const input = useRef(null);
  const item = items[index];
  const last = index + 1 === items.length;

  function check() {
    const scored = scoreAnswer(value, [item.answer], { strictAccents });
    const ok = scored.correct;
    setChecked({ ok, accentOnly: ok && scored.accent });
    if (ok) setCorrect((c) => c + 1);
  }

  function next() {
    if (last) {
      onDone(correct);
      return;
    }
    setIndex(index + 1);
    setValue('');
    setChecked(null);
    setTimeout(() => input.current?.focus(), 0);
  }

  return (
    <div className="page narrow-wide">
      <div className="run-top">
        <ProgressBar value={(index / items.length) * 100} label="Drill progress" />
        <span className="chip">
          {index + 1}/{items.length}
        </span>
      </div>
      <section className="card drill-card" aria-live="polite">
        <p className="label">
          {tenseLabel(item.tenseKey)} · {item.verb.english}
        </p>
        <h1 lang="es">{item.verb.infinitive}</h1>
        <p className="drill-prompt">
          <span className="pron">{item.pronoun}</span>
          {item.group === 'imperative' && <span className="muted"> (command)</span>}
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (checked) next();
            else if (value.trim()) check();
          }}
        >
          <label className="sr-only" htmlFor="drill-answer">
            Your answer
          </label>
          <input
            id="drill-answer"
            ref={input}
            className="search"
            lang="es"
            autoFocus
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
            value={value}
            disabled={Boolean(checked)}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Escribe la forma…"
          />
          <div className="accents" aria-label="Spanish characters">
            {ACCENTS.map((c) => (
              <button
                key={c}
                type="button"
                disabled={Boolean(checked)}
                aria-label={'Insert ' + c}
                onClick={() => {
                  setValue((v) => v + c);
                  input.current?.focus();
                }}
              >
                {c}
              </button>
            ))}
          </div>
          {!checked ? (
            <button type="submit" className="primary" disabled={!value.trim()}>
              Check
            </button>
          ) : (
            <button type="submit" className="primary">
              {last ? 'See results' : 'Next'} <ArrowRight aria-hidden="true" />
            </button>
          )}
        </form>
        {checked && (
          <div className={'feedback ' + (checked.ok ? 'right' : 'wrong')} role="status">
            <span className="feedback-icon" aria-hidden="true">
              {checked.ok ? <Check weight="bold" /> : <X weight="bold" />}
            </span>
            <div>
              <strong>{checked.ok ? 'Correct!' : 'Not quite.'}</strong>
              <p>
                Answer: <span lang="es">{item.answer}</span>
              </p>
              {checked.accentOnly && <p>Meaning is right; watch the accent.</p>}
              <p className="muted small" lang="es">
                {item.row.join(' · ')}
              </p>
              <a className="text-link" href={href('/verbs/' + item.verb.infinitive)}>
                See all {item.verb.infinitive} forms
              </a>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export function Drill({ verb }) {
  const [config, setConfig] = useState(null);
  const [items, setItems] = useState([]);
  const [result, setResult] = useState(null);

  function start(c) {
    setConfig(c);
    setItems(buildDrill(c));
    setResult(null);
  }

  if (result) {
    const xp =
      result.correct * DRILL_XP.correct +
      (result.total >= 5 && result.correct === result.total ? DRILL_XP.perfectBonus : 0);
    return (
      <div className="page narrow-wide">
        <section className="done">
          <span className="done-badge" aria-hidden="true">
            <Check size={40} weight="bold" />
          </span>
          <h1>
            {result.correct} / {result.total} correct
          </h1>
          <p className="lead">
            {result.correct === result.total
              ? 'A perfect round. Try more tenses or irregular verbs next.'
              : 'Good practice. Open any verb to see its full table and try again.'}
          </p>
          <div className="reward-row">
            <div className="reward">
              <Lightning weight="fill" size={22} aria-hidden="true" />
              <strong>+{xp} XP</strong>
              <small>{DRILL_XP.correct} per correct answer</small>
            </div>
          </div>
          <div className="foot-actions left">
            <button type="button" className="primary" onClick={() => start(config)}>
              Another round <ArrowRight aria-hidden="true" />
            </button>
            <button type="button" className="text-button" onClick={() => setConfig(null)}>
              Change settings
            </button>
          </div>
        </section>
      </div>
    );
  }

  if (!config) return <Setup onStart={start} presetVerb={verb} />;

  return (
    <Run
      key={items.map((i) => i.verb.infinitive + i.tenseKey + i.slot).join()}
      items={items}
      strictAccents={config.strictAccents}
      onDone={(correct) => {
        store.completeDrill(correct, items.length);
        setResult({ correct, total: items.length });
      }}
    />
  );
}
