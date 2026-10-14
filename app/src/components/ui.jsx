import { useEffect, useRef, useState } from 'react';
import { Microphone, Stop, SpeakerHigh, X } from '@phosphor-icons/react';
import { speak, stopSpeaking } from '../lib/speech.js';

export function ProgressBar({ value, label, tone = 'primary' }) {
  const percent = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div
      className={'bar bar-' + tone}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
      aria-label={label}
    >
      <span style={{ width: percent + '%' }} />
    </div>
  );
}

export function Ring({ value, size = 64, label }) {
  const percent = Math.max(0, Math.min(100, value));
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  return (
    <div
      className="ring"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${label ?? 'Progress'}: ${Math.round(percent)} percent`}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={radius} className="ring-track" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="ring-fill"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - percent / 100)}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span>{Math.round(percent)}%</span>
    </div>
  );
}

export function SpeakButton({ text, label, locale, size = 'md' }) {
  const [message, setMessage] = useState('');
  useEffect(() => stopSpeaking, []);
  return (
    <>
      <button
        type="button"
        className={'speak speak-' + size}
        aria-label={label ?? 'Listen: ' + text}
        onClick={() => {
          setMessage('');
          speak(text, { locale, onError: setMessage });
        }}
      >
        <SpeakerHigh weight="fill" aria-hidden="true" />
      </button>
      {message && (
        <span className="sr-note" role="status">
          {message}
        </span>
      )}
    </>
  );
}

export function Recorder({ sentence }) {
  const [recording, setRecording] = useState(false);
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const recorder = useRef(null);
  const stream = useRef(null);
  const audioUrl = useRef('');
  useEffect(
    () => () => {
      if (recorder.current?.state === 'recording') recorder.current.stop();
      stream.current?.getTracks().forEach((t) => t.stop());
      if (audioUrl.current) URL.revokeObjectURL(audioUrl.current);
    },
    [],
  );
  async function start() {
    setError('');
    try {
      if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) throw new Error('none');
      stream.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      const r = new MediaRecorder(stream.current);
      recorder.current = r;
      const chunks = [];
      r.ondataavailable = (e) => chunks.push(e.data);
      r.onstop = () => {
        stream.current.getTracks().forEach((t) => t.stop());
        if (audioUrl.current) URL.revokeObjectURL(audioUrl.current);
        audioUrl.current = URL.createObjectURL(new Blob(chunks, { type: r.mimeType }));
        setUrl(audioUrl.current);
        setRecording(false);
      };
      r.start();
      setRecording(true);
    } catch {
      setError(
        'Recording isn’t available or permission was declined. You can still say the sentence aloud and continue.',
      );
    }
  }
  return (
    <div className="recorder">
      <p>
        Say it aloud: <strong lang="es">{sentence}</strong>
      </p>
      <button
        type="button"
        className="secondary"
        onClick={() => (recording ? recorder.current.stop() : start())}
      >
        {recording ? <Stop aria-hidden="true" /> : <Microphone aria-hidden="true" />}
        {recording ? 'Stop recording' : 'Record my voice'}
      </button>
      {url && (
        <div className="recording">
          <audio controls src={url} />
          <button
            type="button"
            className="text-button"
            onClick={() => {
              URL.revokeObjectURL(audioUrl.current);
              audioUrl.current = '';
              setUrl('');
            }}
          >
            Delete recording
          </button>
        </div>
      )}
      <p className="muted small">
        Recordings stay in this tab and are never uploaded. Compare yourself with the model; this is
        not an automatic pronunciation score.
      </p>
      {error && <p role="status">{error}</p>}
    </div>
  );
}

// Native <dialog> gives focus trapping, Escape handling and inert background for free.
export function Dialog({ open, onClose, title, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby="dialog-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      <div className="dialog-body">
        <header>
          <h2 id="dialog-title">{title}</h2>
          <button type="button" className="icon-button" aria-label="Close" onClick={onClose}>
            <X aria-hidden="true" />
          </button>
        </header>
        {open && children}
      </div>
    </dialog>
  );
}
