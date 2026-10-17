import { Suspense, lazy, useEffect, useState } from 'react';
import {
  House,
  GraduationCap,
  ArrowsClockwise,
  PencilSimpleLine,
  Translate,
  BookOpenText,
  ChartLineUp,
  GearSix,
  Lightning,
  Fire,
  MagnifyingGlass,
  Books,
} from '@phosphor-icons/react';
import { useRoute, navigate, href } from './lib/router.js';
import { useProgress } from './lib/store.js';
import { streakInfo } from './lib/store-core.js';
import { Logo } from './components/Logo.jsx';
import { SettingsDialog } from './components/SettingsDialog.jsx';
import { Home } from './pages/Home.jsx';
import { Courses, CourseDetail } from './pages/Courses.jsx';
import { LessonPlayer } from './pages/LessonPlayer.jsx';
import { lessons } from './content.js';

// Heavy pages load on demand so the first screen stays small on phones.
const Verbs = lazy(() => import('./pages/Verbs.jsx').then((m) => ({ default: m.Verbs })));
const Drill = lazy(() => import('./pages/Drill.jsx').then((m) => ({ default: m.Drill })));
const Adjectives = lazy(() =>
  import('./pages/Adjectives.jsx').then((m) => ({ default: m.Adjectives })),
);
const Connectors = lazy(() =>
  import('./pages/Connectors.jsx').then((m) => ({ default: m.Connectors })),
);
const Library = lazy(() => import('./pages/Library.jsx').then((m) => ({ default: m.Library })));
const ProgressPage = lazy(() =>
  import('./pages/ProgressPage.jsx').then((m) => ({ default: m.ProgressPage })),
);
const PracticePage = lazy(() =>
  import('./pages/PracticePage.jsx').then((m) => ({ default: m.PracticePage })),
);
const Quiz = lazy(() => import('./pages/Quiz.jsx').then((m) => ({ default: m.Quiz })));
const Session = lazy(() => import('./pages/Session.jsx').then((m) => ({ default: m.Session })));
const Review = lazy(() => import('./pages/Review.jsx').then((m) => ({ default: m.Review })));

const NAV = [
  { name: 'home', path: '/', label: 'Home', icon: House, group: 'learn' },
  { name: 'courses', path: '/courses', label: 'Courses', icon: GraduationCap, group: 'learn' },
  { name: 'session', path: '/session', label: 'Daily session', icon: Lightning, group: 'learn' },
  { name: 'review', path: '/review', label: 'Review', icon: ArrowsClockwise, group: 'learn' },
  {
    name: 'practice',
    path: '/practice',
    label: 'Practice lab',
    icon: PencilSimpleLine,
    group: 'learn',
  },
  {
    name: 'drill',
    path: '/drill',
    label: 'Conjugation drill',
    icon: PencilSimpleLine,
    group: 'learn',
  },
  {
    name: 'dictionary',
    path: '/library/dictionary',
    label: 'Dictionary',
    icon: Translate,
    group: 'explore',
  },
  {
    name: 'verbs',
    path: '/verbs',
    label: 'Verb conjugator',
    icon: Books,
    group: 'explore',
  },
  {
    name: 'adjectives',
    path: '/adjectives',
    label: 'Adjectives',
    icon: Translate,
    group: 'explore',
  },
  {
    name: 'connectors',
    path: '/connectors',
    label: 'Connectors',
    icon: Books,
    group: 'explore',
  },
  {
    name: 'reading',
    path: '/library/stories',
    label: 'Reading room',
    icon: BookOpenText,
    group: 'explore',
  },
  { name: 'progress', path: '/progress', label: 'Progress', icon: ChartLineUp, group: 'you' },
];
const TABBAR = ['home', 'courses', 'practice', 'dictionary', 'progress'];

function activeNav(route) {
  if (route.name === 'course') return 'courses';
  if (route.name === 'verbs') return 'verbs';
  if (route.name === 'library') {
    const section = route.params[0];
    if (section === 'dictionary') return 'dictionary';
    if (section === 'verbs') return 'verbs';
    if (['stories', 'conversations'].includes(section)) return 'reading';
    return 'library';
  }
  return route.name === '' ? 'home' : route.name;
}

function useTheme(theme) {
  useEffect(() => {
    const apply = () => {
      const dark =
        theme === 'dark' ||
        (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    };
    apply();
    if (theme !== 'system') return undefined;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, [theme]);
}

function Shell({ route, children, onSettings, progress, dueCount }) {
  const [query, setQuery] = useState('');
  const current = activeNav(route);
  const streak = streakInfo(progress.days);
  return (
    <div className="shell">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <aside className="rail" aria-label="Primary">
        <a className="brand" href={href('/')}>
          <Logo size={44} />
          <span>
            Español
            <br />
            Para Sa’yo
            <small>Spanish · Taglish</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          {[
            ['learn', 'Learn'],
            ['explore', 'Explore'],
            ['you', 'You'],
          ].map(([group, title]) => (
            <div className="nav-group" key={group}>
              <p className="nav-title">{title}</p>
              {NAV.filter((n) => n.group === group).map(({ name, path, label, icon: Icon }) => (
                <a
                  key={name}
                  href={href(path)}
                  className={'nav-link' + (current === name ? ' active' : '')}
                  aria-current={current === name ? 'page' : undefined}
                >
                  <Icon
                    size={22}
                    weight={current === name ? 'fill' : 'regular'}
                    aria-hidden="true"
                  />
                  {label}
                  {name === 'review' && dueCount > 0 && (
                    <span className="badge" aria-label={`${dueCount} due`}>
                      {dueCount}
                    </span>
                  )}
                </a>
              ))}
            </div>
          ))}
        </nav>
        <p className="rail-note">Self-paced. Your progress stays on this device.</p>
      </aside>
      <div className="main-col">
        <header className="topbar">
          <form
            className="search-box"
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              if (query.trim())
                navigate('/library/dictionary?q=' + encodeURIComponent(query.trim()));
            }}
          >
            <MagnifyingGlass size={20} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Look up a Spanish or English word"
              aria-label="Look up a word in the dictionary"
            />
          </form>
          <div className="top-actions">
            <span
              className={'chip streak' + (streak.practicedToday ? ' lit' : '')}
              title={
                streak.practicedToday
                  ? 'Daily streak: you practiced today'
                  : 'Daily streak: practice today to keep it going'
              }
            >
              <Fire weight="fill" size={18} aria-hidden="true" />
              {streak.current}
              <span className="sr-only"> day streak</span>
            </span>
            <span className="chip xp" title="Experience points from lessons and checkpoints">
              <Lightning weight="fill" size={18} aria-hidden="true" />
              {progress.xp} XP
            </span>
            <button
              type="button"
              className="icon-button"
              aria-label="Open settings"
              onClick={onSettings}
            >
              <GearSix size={22} aria-hidden="true" />
            </button>
          </div>
        </header>
        {progress.saveError && (
          <p className="banner" role="alert">
            {progress.saveError}
          </p>
        )}
        <main id="main" tabIndex={-1}>
          {children}
        </main>
      </div>
      <nav className="tabbar" aria-label="Quick navigation">
        {NAV.filter((n) => TABBAR.includes(n.name)).map(({ name, path, label, icon: Icon }) => (
          <a
            key={name}
            href={href(path)}
            className={current === name ? 'active' : ''}
            aria-current={current === name ? 'page' : undefined}
          >
            <Icon size={24} weight={current === name ? 'fill' : 'regular'} aria-hidden="true" />
            <span>{label.replace(' conjugator', '')}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}

function Loading() {
  return (
    <div className="page narrow" role="status" aria-live="polite">
      <p className="muted">Loading…</p>
    </div>
  );
}

function NotFound() {
  return (
    <section className="page narrow">
      <h1>We couldn’t find that page</h1>
      <p>The link may be old. Head back to your courses.</p>
      <a className="primary" href={href('/courses')}>
        Browse courses
      </a>
    </section>
  );
}

export function App() {
  const route = useRoute();
  const progress = useProgress();
  const [settingsOpen, setSettingsOpen] = useState(false);
  useTheme(progress.settings.theme);
  useEffect(() => {
    document.title = 'Español Para Sa’yo · Learn Spanish';
  }, []);
  const [now, setNow] = useState(Date.now);
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(timer);
  }, []);
  const dueCount = lessons.filter((l) => progress.reviews[l.id]?.due <= now).length;

  // Focus modes: the lesson player and quizzes hide the app chrome.
  const focusMode = ['lesson', 'checkpoint', 'placement', 'session'].includes(route.name);
  useEffect(() => {
    document.body.toggleAttribute('data-focus', focusMode);
  }, [focusMode]);
  if (route.name === 'lesson' && route.params[0])
    return (
      <LessonPlayer
        key={route.params[0]}
        id={route.params[0]}
        review={route.query.review === '1'}
      />
    );
  if (route.name === 'checkpoint' && route.params[0])
    return (
      <Suspense fallback={<Loading />}>
        <Quiz key={route.params[0]} mode="checkpoint" levelId={route.params[0]} />
      </Suspense>
    );
  if (route.name === 'placement')
    return (
      <Suspense fallback={<Loading />}>
        <Quiz mode="placement" />
      </Suspense>
    );
  if (route.name === 'session')
    return (
      <Suspense fallback={<Loading />}>
        <Session key={route.query.n ?? '0'} />
      </Suspense>
    );

  let page;
  switch (route.name) {
    case 'home':
      page = <Home progress={progress} dueCount={dueCount} />;
      break;
    case 'courses':
      page = <Courses progress={progress} />;
      break;
    case 'course':
      page = <CourseDetail id={route.params[0]} progress={progress} />;
      break;
    case 'review':
      page = <Review progress={progress} now={now} />;
      break;
    case 'practice':
      page = <PracticePage />;
      break;
    case 'verbs':
      page = <Verbs verb={route.params[0]} query={route.query.q} />;
      break;
    case 'drill':
      page = <Drill verb={route.query.verb} key={route.query.verb ?? 'all'} />;
      break;
    case 'adjectives':
      page = <Adjectives />;
      break;
    case 'connectors':
      page = <Connectors />;
      break;
    case 'library':
      page = (
        <Library
          section={route.params[0]}
          query={route.query.q}
          key={route.params[0] + (route.query.q ?? '')}
        />
      );
      break;
    case 'progress':
      page = (
        <ProgressPage progress={progress} now={now} onSettings={() => setSettingsOpen(true)} />
      );
      break;
    default:
      page = <NotFound />;
  }
  return (
    <>
      <Shell
        route={route}
        progress={progress}
        dueCount={dueCount}
        onSettings={() => setSettingsOpen(true)}
      >
        <Suspense fallback={<Loading />}>{page}</Suspense>
      </Shell>
      <SettingsDialog open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
}
