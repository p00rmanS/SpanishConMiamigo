import { useMemo, useState } from 'react';
import { ArrowRight, MagnifyingGlass, PencilSimpleLine } from '@phosphor-icons/react';
import { SpeakButton } from '../components/ui.jsx';
import { href, navigate } from '../lib/router.js';
import { speak } from '../lib/speech.js';
import {
  conjugate,
  conjugatePlain,
  describeVerb,
  voseo,
  PERSONS,
  TENSE_GROUPS,
  IMPERATIVE_PERSONS,
} from '../lib/conjugate.js';
import { searchVerbs, VERB_SETS } from '../lib/drill.js';
import { verbList } from '../verbs-data.js';
import { TENSE_INFO, NONFINITE_INFO } from '../tense-info.js';

const byInfinitive = new Map(verbList.map((v) => [v.infinitive, v]));
const PAGE = 60;
const LOOKS_LIKE_VERB = /^[a-zñáéíóúü]+(ar|er|ir|ír)(se)?$/;

function readOptions() {
  try {
    return {
      vosotros: true,
      voseo: false,
      ...JSON.parse(localStorage.getItem('espanol-conj-opts')),
    };
  } catch {
    return { vosotros: true, voseo: false };
  }
}

function FormCell({ form, irregular }) {
  return (
    <button
      type="button"
      className={'form-cell' + (irregular ? ' irr' : '')}
      lang="es"
      onClick={() => speak(form)}
      aria-label={`${form}${irregular ? ', irregular form' : ''}. Press to listen.`}
    >
      {form}
    </button>
  );
}

function TenseTable({ id, title, spanish, forms, plain, options, vos }) {
  const info = TENSE_INFO[id];
  const rows = forms.map((form, i) => ({ person: PERSONS[i], form, plain: plain[i], index: i }));
  return (
    <section className="tense card" aria-labelledby={'t-' + id.replace('.', '-')}>
      <header>
        <h3 id={'t-' + id.replace('.', '-')}>{title}</h3>
        <small>{spanish}</small>
      </header>
      <table className="conj-table">
        <tbody>
          {rows
            .filter((r) => options.vosotros || r.index !== 4)
            .map((r) => (
              <tr key={r.index}>
                <th scope="row">{r.person}</th>
                <td>
                  <FormCell form={r.form} irregular={r.form !== r.plain} />
                </td>
              </tr>
            ))}
          {options.voseo && vos && (
            <tr className="vos-row">
              <th scope="row">vos</th>
              <td>
                <FormCell form={vos} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {info && (
        <details className="tense-help">
          <summary>How to use it</summary>
          <p>{info.use}</p>
          <p className="taglish-note">
            <strong>Taglish:</strong> {info.taglish}
          </p>
          <p className="muted small">
            <strong>Formed:</strong> {info.formed}
          </p>
          <p lang="es" className="tense-example">
            {info.example[0]} <span className="muted">{info.example[1]}</span>
          </p>
        </details>
      )}
    </section>
  );
}

function ImperativeTable({ result, plain, options, vos }) {
  const info = TENSE_INFO.imperative;
  const people = IMPERATIVE_PERSONS.map((p, i) => ({
    person: p,
    affirmative: result.imperative.affirmative[i],
    negative: result.imperative.negative[i],
    plainA: plain.imperative.affirmative[i],
    plainN: plain.imperative.negative[i],
    index: i,
  }));
  return (
    <section className="tense card wide" aria-labelledby="t-imperative">
      <header>
        <h3 id="t-imperative">Imperative</h3>
        <small>imperativo</small>
      </header>
      <table className="conj-table">
        <thead>
          <tr>
            <th scope="col">Person</th>
            <th scope="col">Affirmative</th>
            <th scope="col">Negative</th>
          </tr>
        </thead>
        <tbody>
          {people
            .filter((p) => options.vosotros || p.index !== 3)
            .map((p) => (
              <tr key={p.index}>
                <th scope="row">{p.person}</th>
                <td>
                  <FormCell form={p.affirmative} irregular={p.affirmative !== p.plainA} />
                </td>
                <td>
                  <FormCell form={p.negative} irregular={p.negative !== p.plainN} />
                </td>
              </tr>
            ))}
          {options.voseo && vos && (
            <tr className="vos-row">
              <th scope="row">vos</th>
              <td>
                <FormCell form={vos} />
              </td>
              <td className="muted">—</td>
            </tr>
          )}
        </tbody>
      </table>
      <details className="tense-help">
        <summary>How to use it</summary>
        <p>{info.use}</p>
        <p className="taglish-note">
          <strong>Taglish:</strong> {info.taglish}
        </p>
        <p className="muted small">
          <strong>Formed:</strong> {info.formed}
        </p>
        <p lang="es" className="tense-example">
          {info.example[0]} <span className="muted">{info.example[1]}</span>
        </p>
      </details>
    </section>
  );
}

export function ConjugationView({ name }) {
  const known = byInfinitive.get(name);
  const custom = !known && LOOKS_LIKE_VERB.test(name);
  const [options, setOptions] = useState(readOptions);
  const [tab, setTab] = useState('indicative');
  const flags = known?.flags ?? [];
  const data = useMemo(() => {
    if (!known && !custom) return null;
    const result = conjugate(name, flags);
    return {
      result,
      plain: conjugatePlain(name),
      kind: describeVerb(name, flags),
      vos: voseo(name),
    };
  }, [name, known, custom, flags]);

  function toggle(key) {
    const next = { ...options, [key]: !options[key] };
    setOptions(next);
    try {
      localStorage.setItem('espanol-conj-opts', JSON.stringify(next));
    } catch {
      /* the choice just will not be remembered */
    }
  }

  if (!data) {
    return (
      <div className="page narrow">
        <p className="eyebrow">Verb conjugator</p>
        <h1>“{name}” doesn’t look like a verb</h1>
        <p className="lead">Type a Spanish infinitive such as hablar, comer or vivir.</p>
        <a className="primary" href={href('/verbs')}>
          Back to verbs
        </a>
      </div>
    );
  }

  const { result, plain, kind, vos } = data;
  const tabs = [...TENSE_GROUPS.map((g) => [g.id, g.title]), ['imperative', 'Imperative']];
  const third = flags.includes('third');

  return (
    <div className="page conj-page">
      <nav className="crumbs" aria-label="Breadcrumb">
        <a href={href('/verbs')}>Verbs</a> / <span>{name}</span>
      </nav>

      <header className="verb-head card">
        <div>
          <h1 lang="es">{result.infinitive}</h1>
          {known ? (
            <p className="lead">
              {known.english} <span className="tagalog">· {known.tagalog}</span>
            </p>
          ) : (
            <p className="lead">
              Not in our verb list. Shown with the regular pattern for -{name.slice(-2)} verbs;
              check a dictionary if the verb is irregular.
            </p>
          )}
          <ul className="tags">
            {kind.labels.map((l) => (
              <li key={l} className={/Irregular|Stem|Spelling|Accent/.test(l) ? 'hot' : ''}>
                {l}
              </li>
            ))}
          </ul>
          {third && (
            <p className="muted small">
              This verb is used mostly in the third person (él / ella / ellos), for example “me
              gusta”, “llueve”.
            </p>
          )}
        </div>
        <div className="verb-actions">
          <SpeakButton text={result.infinitive} label={`Listen: ${result.infinitive}`} size="lg" />
          <a className="secondary" href={href('/drill?verb=' + encodeURIComponent(name))}>
            <PencilSimpleLine aria-hidden="true" /> Drill this verb
          </a>
        </div>
      </header>

      {known && (
        <p className="example-line card" lang="es">
          <strong>{known.example}</strong>
          <span className="muted"> {known.translation}</span>
        </p>
      )}

      <div className="conj-options" role="group" aria-label="Display options">
        <label>
          <input type="checkbox" checked={options.vosotros} onChange={() => toggle('vosotros')} />
          Show vosotros (Spain)
        </label>
        <label>
          <input type="checkbox" checked={options.voseo} onChange={() => toggle('voseo')} />
          Show voseo (Argentina, Uruguay…)
        </label>
        <span className="legend">
          <span className="swatch" aria-hidden="true" /> Highlighted = differs from the regular
          pattern
        </span>
      </div>

      <div className="nonfinite">
        {[
          ['gerund', result.gerund, plain.gerund],
          ['participle', result.participle, plain.participle],
        ].map(([key, form, regular]) => (
          <section className="card" key={key}>
            <p className="label">{NONFINITE_INFO[key].title}</p>
            <FormCell form={form} irregular={form !== regular} />
            <p className="taglish-note">
              <strong>Taglish:</strong> {NONFINITE_INFO[key].taglish}
            </p>
          </section>
        ))}
        {result.impersonal && (
          <section className="card">
            <p className="label">Impersonal “hay”</p>
            <p lang="es">
              <strong>hay</strong> (there is / there are) · hubo · había · habrá · habría · haya
            </p>
            <p className="taglish-note">
              <strong>Taglish:</strong> Hay = mayroon. Isahan at maramihan ang gamit: hay un libro,
              hay tres libros.
            </p>
          </section>
        )}
      </div>

      <div className="library-tabs" role="tablist" aria-label="Mood">
        {tabs.map(([id, label]) => (
          <button
            key={id}
            role="tab"
            type="button"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="tense-grid" role="tabpanel">
        {tab === 'imperative' ? (
          <ImperativeTable result={result} plain={plain} options={options} vos={vos.imperative} />
        ) : (
          TENSE_GROUPS.find((g) => g.id === tab).tenses.map(([key, title, spanish]) => (
            <TenseTable
              key={key}
              id={`${tab}.${key}`}
              title={title}
              spanish={spanish}
              forms={result[tab][key]}
              plain={plain[tab][key]}
              options={options}
              vos={tab === 'indicative' && key === 'present' ? vos.present : null}
            />
          ))
        )}
      </div>
      {tab !== 'imperative' && (
        <p className="muted small">
          Perfect tenses are built with haber plus the past participle “{result.participle}”.
        </p>
      )}
    </div>
  );
}

export function VerbList({ initialQuery = '' }) {
  const [query, setQuery] = useState(initialQuery);
  const [set, setSet] = useState('all');
  const [shown, setShown] = useState(PAGE);
  const results = useMemo(() => searchVerbs(query, set), [query, set]);
  const typed = query.trim().toLowerCase();
  const offerCustom = typed && LOOKS_LIKE_VERB.test(typed) && !byInfinitive.has(typed);

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Verb conjugator</p>
        <h1>Every tense, every verb</h1>
        <p className="lead">
          {verbList.length} verbs with full conjugation tables, irregular forms highlighted, and
          Taglish explanations. Search by verb, English, Tagalog, or even a conjugated form like
          “fui”.
        </p>
      </header>

      <form
        className="search-box big"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          if (results.length === 1) navigate('/verbs/' + results[0].infinitive);
          else if (offerCustom) navigate('/verbs/' + typed);
        }}
      >
        <MagnifyingGlass size={22} aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShown(PAGE);
          }}
          placeholder="Try hablar, to eat, kumain, or fui"
          aria-label="Search verbs"
        />
      </form>

      <div className="category-filters" role="group" aria-label="Verb type">
        {VERB_SETS.map(([id, label]) => (
          <button
            key={id}
            type="button"
            aria-pressed={set === id}
            onClick={() => {
              setSet(id);
              setShown(PAGE);
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {offerCustom && (
        <a className="card tile" href={href('/verbs/' + typed)}>
          <PencilSimpleLine size={26} aria-hidden="true" />
          <div>
            <h3>Conjugate “{typed}”</h3>
            <p>Not in our list, but we can show the regular pattern for it.</p>
          </div>
          <ArrowRight aria-hidden="true" />
        </a>
      )}

      <p className="muted" role="status">
        {results.length} {results.length === 1 ? 'verb' : 'verbs'}
      </p>
      <ul className="verb-grid">
        {results.slice(0, shown).map((v) => (
          <li key={v.infinitive}>
            <a className="verb-card" href={href('/verbs/' + v.infinitive)}>
              <strong lang="es">{v.infinitive}</strong>
              <span>{v.english}</span>
              <small>{v.tagalog}</small>
            </a>
          </li>
        ))}
      </ul>
      {shown < results.length && (
        <button type="button" className="secondary" onClick={() => setShown(shown + PAGE)}>
          Show more ({results.length - shown} left)
        </button>
      )}
      {!results.length && !offerCustom && (
        <p className="muted">
          No verbs match. Try the infinitive, an English meaning or a conjugated form.
        </p>
      )}
    </div>
  );
}

export function Verbs({ verb, query }) {
  if (verb) return <ConjugationView key={verb} name={decodeURIComponent(verb)} />;
  return <VerbList key={query ?? ''} initialQuery={query ?? ''} />;
}
