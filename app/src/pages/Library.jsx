import { StudyLibrary } from '../StudyLibrary.jsx';
import { lessons } from '../content.js';
import { navigate } from '../lib/router.js';

const SLUGS = {
  dictionary: 'Dictionary',
  verbs: 'Verbs',
  grammar: 'Grammar',
  phrases: 'Phrases',
  stories: 'Stories',
  conversations: 'Conversations',
  workplace: 'Workplace Spanish',
  cheatsheets: 'Cheat sheets',
  lessons: 'Lessons',
};
const byLabel = Object.fromEntries(Object.entries(SLUGS).map(([slug, label]) => [label, slug]));

const READING = [
  'Reading room',
  'Stories and conversations with translation and comprehension checks.',
];
const TITLES = {
  Dictionary: ['Dictionary', 'Look up words with examples, audio and notes.'],
  Verbs: ['Verb conjugator', 'Every tense for essential verbs, with regional notes.'],
  Stories: READING,
  Conversations: READING,
};

export function Library({ section, query }) {
  const label = SLUGS[section] ?? 'Dictionary';
  const [title, subtitle] = TITLES[label] ?? [
    'Library',
    'Grammar, phrases, cheat sheets and more.',
  ];
  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Library</p>
        <h1>{title}</h1>
        <p className="lead">{subtitle}</p>
      </header>
      <StudyLibrary
        lessons={lessons}
        initialSection={label}
        initialQuery={query ?? ''}
        onOpenLesson={(i) => navigate('/lesson/' + lessons[i].id)}
        onSection={(next) => {
          // Keep the address in sync without remounting the library.
          window.history.replaceState(null, '', '#/library/' + (byLabel[next] ?? 'dictionary'));
        }}
      />
    </div>
  );
}
