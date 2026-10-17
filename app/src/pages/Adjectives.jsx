import { useMemo, useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { SpeakButton } from '../components/ui.jsx';
import { adjectiveForms, agreementExamples } from '../lib/adjectives.js';
import { adjectiveList, ADJECTIVE_CATEGORIES } from '../adjectives-data.js';

const PAGE = 48;
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

function AdjectiveCard({ adjective }) {
  const forms = adjectiveForms(adjective.word, adjective.flags);
  const examples = agreementExamples(adjective.word, adjective.flags);
  const rows = [
    ['masculine', forms.ms, forms.mp],
    ['feminine', forms.fs, forms.fp],
  ];
  return (
    <article className="card adj-card">
      <header>
        <div>
          <h3 lang="es">{adjective.word}</h3>
          <p>
            {adjective.english} <span className="tagalog">· {adjective.tagalog}</span>
          </p>
        </div>
        <SpeakButton text={adjective.word} label={`Listen: ${adjective.word}`} size="sm" />
      </header>
      <table className="conj-table adj-table">
        <thead>
          <tr>
            <th scope="col" />
            <th scope="col">Singular</th>
            <th scope="col">Plural</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, singular, plural]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              <td lang="es">{singular}</td>
              <td lang="es">{plural}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="tags">
        {forms.short && (
          <li>
            before a noun: <b lang="es">{forms.short}</b>
          </li>
        )}
        {forms.superlative && (
          <li>
            very: <b lang="es">{forms.superlative}</b>
          </li>
        )}
        {adjective.flags.includes('e') && <li>usually with estar</li>}
        {forms.ms === forms.fs && !adjective.flags.includes('inv') && (
          <li>same for both genders</li>
        )}
      </ul>
      <details className="tense-help">
        <summary>See it in sentences</summary>
        <ul className="examples-list" lang="es">
          {examples.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
        <p className="taglish-note">
          <strong>Taglish:</strong> Sumusunod ang adjective sa kasarian at bilang ng noun.
          Karaniwang nasa hulihan ito ng noun: una casa {forms.fs}.
        </p>
      </details>
    </article>
  );
}

export function Adjectives() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [shown, setShown] = useState(PAGE);
  const results = useMemo(() => {
    const q = norm(query);
    return adjectiveList.filter((a) => {
      if (category !== 'all' && a.category !== category) return false;
      if (!q) return true;
      const f = adjectiveForms(a.word, a.flags);
      return [a.word, a.english, a.tagalog, f.fs, f.mp, f.fp].some((s) => norm(s).includes(q));
    });
  }, [query, category]);

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Adjectives</p>
        <h1>Match the noun every time</h1>
        <p className="lead">
          {adjectiveList.length} adjectives with all four forms (masculine, feminine, singular,
          plural), the shortened form before a noun, and the “very” form. Every entry has Tagalog.
        </p>
      </header>

      <div className="search-box big">
        <MagnifyingGlass size={22} aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShown(PAGE);
          }}
          placeholder="Search by Spanish, English or Tagalog"
          aria-label="Search adjectives"
        />
      </div>
      <div className="category-filters" role="group" aria-label="Category">
        {[['all', 'All'], ...Object.entries(ADJECTIVE_CATEGORIES)].map(([id, label]) => (
          <button
            key={id}
            type="button"
            aria-pressed={category === id}
            onClick={() => {
              setCategory(id);
              setShown(PAGE);
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <section className="card rules" aria-labelledby="adj-rules">
        <h2 id="adj-rules">The agreement rules in one minute</h2>
        <ul>
          <li>
            <strong>-o adjectives</strong> have four forms: alto, alta, altos, altas.
          </li>
          <li>
            <strong>-e and consonant adjectives</strong> have one singular: grande, fácil → grandes,
            fáciles. Words ending in -z change to -ces: feliz → felices.
          </li>
          <li>
            <strong>-or and nationalities</strong> add -a: trabajador → trabajadora, español →
            española. Accents drop: francés → francesa.
          </li>
          <li>
            <strong>Shortened forms</strong> before a masculine singular noun: buen amigo, mal día,
            primer lugar, gran idea.
          </li>
        </ul>
        <p className="taglish-note">
          <strong>Taglish:</strong> Ang adjective ay sumusunod sa noun: una casa blanca, unos libros
          blancos. Iba ito sa English, na hindi nagbabago ang adjective.
        </p>
      </section>

      <p className="muted" role="status">
        {results.length} adjectives
      </p>
      <div className="adj-grid">
        {results.slice(0, shown).map((a) => (
          <AdjectiveCard key={a.word} adjective={a} />
        ))}
      </div>
      {shown < results.length && (
        <button type="button" className="secondary" onClick={() => setShown(shown + PAGE)}>
          Show more ({results.length - shown} left)
        </button>
      )}
    </div>
  );
}
