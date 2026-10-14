import { useRef, useState } from 'react';
import { DownloadSimple, UploadSimple, Trash } from '@phosphor-icons/react';
import { Dialog } from './ui.jsx';
import { store, useProgress } from '../lib/store.js';

const THEMES = [
  ['system', 'Match device'],
  ['light', 'Light'],
  ['dark', 'Dark'],
];
const EXPLAIN = [
  ['both', 'English + Taglish'],
  ['english', 'English only'],
  ['taglish', 'Taglish only'],
];

function Segmented({ legend, options, value, onChange }) {
  return (
    <fieldset className="segmented">
      <legend>{legend}</legend>
      {options.map(([id, label]) => (
        <label key={id} className={value === id ? 'on' : ''}>
          <input type="radio" name={legend} checked={value === id} onChange={() => onChange(id)} />
          {label}
        </label>
      ))}
    </fieldset>
  );
}

export function SettingsDialog({ open, onClose }) {
  const { settings } = useProgress();
  const fileInput = useRef(null);
  const [message, setMessage] = useState('');
  const [pending, setPending] = useState(null);
  const [confirmReset, setConfirmReset] = useState(false);

  function download() {
    const blob = new Blob([JSON.stringify(store.exportBackup(), null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `espanol-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setMessage('Backup downloaded. Keep it somewhere safe.');
  }

  async function chooseFile(e) {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    if (file.size > 3_000_000) {
      setMessage('That file is too large to be a backup.');
      return;
    }
    const result = store.checkBackup(await file.text());
    if (!result.ok) {
      setMessage(result.error);
      setPending(null);
      return;
    }
    setPending(result.data);
    setMessage('');
  }

  return (
    <Dialog open={open} onClose={onClose} title="Settings">
      <Segmented
        legend="Appearance"
        options={THEMES}
        value={settings.theme}
        onChange={(v) => store.setSetting('theme', v)}
      />
      <Segmented
        legend="Lesson explanations"
        options={EXPLAIN}
        value={settings.explain}
        onChange={(v) => store.setSetting('explain', v)}
      />
      <section className="settings-block">
        <h3>Your data</h3>
        <p className="muted">
          Progress lives in this browser only. Download a backup to move it to another device or to
          protect it if you clear your browser data.
        </p>
        <div className="row">
          <button type="button" className="secondary" onClick={download}>
            <DownloadSimple aria-hidden="true" /> Download backup
          </button>
          <button type="button" className="secondary" onClick={() => fileInput.current.click()}>
            <UploadSimple aria-hidden="true" /> Restore backup
          </button>
          <input
            ref={fileInput}
            type="file"
            accept="application/json,.json"
            hidden
            onChange={chooseFile}
          />
        </div>
        {pending && (
          <div className="notice" role="alert">
            <p>Restoring replaces the progress currently saved in this browser.</p>
            <div className="row">
              <button type="button" className="primary" onClick={() => store.applyBackup(pending)}>
                Replace my progress
              </button>
              <button type="button" className="text-button" onClick={() => setPending(null)}>
                Cancel
              </button>
            </div>
          </div>
        )}
        {message && <p role="status">{message}</p>}
        {confirmReset ? (
          <div className="notice danger" role="alert">
            <p>This permanently erases all lessons, reviews and scores saved in this browser.</p>
            <div className="row">
              <button
                type="button"
                className="primary danger-button"
                onClick={() => {
                  store.reset();
                  setConfirmReset(false);
                  setMessage('Progress erased.');
                }}
              >
                Erase everything
              </button>
              <button type="button" className="text-button" onClick={() => setConfirmReset(false)}>
                Keep my progress
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="text-button danger-text"
            onClick={() => setConfirmReset(true)}
          >
            <Trash aria-hidden="true" /> Erase all progress…
          </button>
        )}
      </section>
    </Dialog>
  );
}
