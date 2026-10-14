// Browser text-to-speech helper shared by lessons, dictionary and the lesson player.
export const speechSupported = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

export function speak(text, { locale = 'es-MX', rate = 0.85, onError } = {}) {
  if (!speechSupported()) {
    onError?.('Audio isn’t supported in this browser. Use the pronunciation guide instead.');
    return false;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = locale;
  utterance.rate = rate;
  const voices = window.speechSynthesis.getVoices();
  const voice =
    voices.find((v) => v.lang.toLowerCase() === locale.toLowerCase()) ||
    voices.find((v) => v.lang.toLowerCase().startsWith('es'));
  if (voice) utterance.voice = voice;
  utterance.onerror = () => onError?.('Audio could not play. Try again or read it aloud.');
  window.speechSynthesis.speak(utterance);
  return true;
}

export const stopSpeaking = () => {
  if (speechSupported()) window.speechSynthesis.cancel();
};
