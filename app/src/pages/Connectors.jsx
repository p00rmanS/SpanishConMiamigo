import { useMemo, useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { SpeakButton } from '../components/ui.jsx';
import { conjunctionList, CONJUNCTION_CATEGORIES, MOOD_LABELS } from '../conjunctions-data.js';

const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

export function Connectors() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [mood, setMood] = useState('all');
  const results = useMemo(() => {
    const q = norm(query);
    return conjunctionList.filter(
      (c) =>
        (category === 'all' || c.category === category) &&
        (mood === 'all' || c.mood === mood) &&
        (!q || [c.word, c.english, c.tagalog, c.example].some((s) => norm(s).includes(q))),
    );
  }, [query, category, mood]);

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Conjunctions and connectors</p>
        <h1>Join your ideas, and know the mood</h1>
        <p className="lead">
          {conjunctionList.length} connectors grouped by purpose. Each one tells you whether it
          takes the indicative or the subjunctive, with an example and a Taglish explanation.
        </p>
      </header>

      <section className="card rules">
        <h2>The mood rule in one line</h2>
        <p>
          A connector about something <strong>real or already known</strong> takes the indicative. A
          connector about something <strong>not yet real, uncertain or intended</strong> takes the
          subjunctive. Words like <em lang="es">cuando</em> and <em lang="es">aunque</em> can take
          either, depending on what you mean.
        </p>
        <p className="taglish-note">
          <strong>Taglish:</strong> Totoo o alam na = indicative. Hindi pa totoo, hindi tiyak o
          layunin = subjunctive. Halimbawa: cuando llego (palagi) vs. cuando llegue (hindi pa
          nangyayari).
        </p>
      </section>

      <div className="search-box big">
        <MagnifyingGlass size={22} aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by Spanish, English or Tagalog"
          aria-label="Search connectors"
        />
      </div>
      <div className="category-filters" role="group" aria-label="Purpose">
        {[['all', 'All'], ...Object.entries(CONJUNCTION_CATEGORIES)].map(([id, label]) => (
          <button
            key={id}
            type="button"
            aria-pressed={category === id}
            onClick={() => setCategory(id)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="category-filters" role="group" aria-label="Mood">
        {[['all', 'Any mood'], ...Object.entries(MOOD_LABELS)].map(([id, label]) => (
          <button key={id} type="button" aria-pressed={mood === id} onClick={() => setMood(id)}>
            {label}
          </button>
        ))}
      </div>

      <p className="muted" role="status">
        {results.length} connectors
      </p>
      <div className="adj-grid">
        {results.map((c) => (
          <article className="card adj-card" key={c.word}>
            <header>
              <div>
                <h3 lang="es">{c.word}</h3>
                <p>
                  {c.english} <span className="tagalog">· {c.tagalog}</span>
                </p>
              </div>
              <SpeakButton
                text={c.example}
                label={`Listen to an example with ${c.word}`}
                size="sm"
              />
            </header>
            <ul className="tags">
              <li>{CONJUNCTION_CATEGORIES[c.category]}</li>
              <li className={c.mood === 'subjunctive' ? 'hot' : ''}>{MOOD_LABELS[c.mood]}</li>
            </ul>
            <p lang="es" className="tense-example">
              {c.example} <span className="muted">{c.translation}</span>
            </p>
            <p className="muted small">{c.note}</p>
            <p className="taglish-note">
              <strong>Taglish:</strong> {c.taglish}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
