import { useEffect, useState } from 'react';

export function parseHash(hash) {
  const raw = hash.replace(/^#\/?/, '');
  const [path, queryString = ''] = raw.split('?');
  const parts = path
    .split('/')
    .filter(Boolean)
    .map((part) => {
      try {
        return decodeURIComponent(part);
      } catch {
        return part;
      }
    });
  return {
    name: parts[0] ?? 'home',
    params: parts.slice(1),
    query: Object.fromEntries(new URLSearchParams(queryString)),
  };
}

export function navigate(path) {
  window.location.hash = '#' + path;
}

export function useRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));
  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}

export const href = (path) => '#' + path;
