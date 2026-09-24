/**
 * Web Speech API helper for natural German pronunciation.
 */

let cachedGermanVoice: SpeechSynthesisVoice | null = null;

function getGermanVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    return null;
  }

  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // Prefer high quality de-DE or de voices
  const deDeVoice = voices.find(
    (v) => (v.lang === 'de-DE' || v.lang === 'de_DE') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Premium'))
  );
  if (deDeVoice) return deDeVoice;

  const anyGerman = voices.find((v) => v.lang.startsWith('de'));
  return anyGerman || null;
}

// Pre-warm voices listener
if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedGermanVoice = getGermanVoice();
  };
}

export interface SpeakOptions {
  rate?: number; // e.g. 0.75 for slow, 0.9 for standard, 1.0 for normal
  pitch?: number;
  onEnd?: () => void;
  onError?: () => void;
}

export function speakGerman(text: string, optionsOrOnEnd?: (() => void) | SpeakOptions): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    console.warn('Speech synthesis not supported on this device/browser');
    if (typeof optionsOrOnEnd === 'function') {
      optionsOrOnEnd();
    } else if (optionsOrOnEnd?.onEnd) {
      optionsOrOnEnd.onEnd();
    }
    return;
  }

  const options: SpeakOptions = typeof optionsOrOnEnd === 'function' ? { onEnd: optionsOrOnEnd } : (optionsOrOnEnd || {});

  try {
    window.speechSynthesis.cancel(); // cancel any ongoing speech

    const cleanText = text.replace(/[\[\]\(\)\*]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'de-DE';
    utterance.rate = options.rate ?? 0.88; // slightly slower by default for clear foreign language learning
    utterance.pitch = options.pitch ?? 1.0;

    const voice = cachedGermanVoice || getGermanVoice();
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onend = () => {
      if (options.onEnd) options.onEnd();
    };

    utterance.onerror = (e) => {
      console.warn('Speech error:', e);
      if (options.onError) {
        options.onError();
      } else if (options.onEnd) {
        options.onEnd();
      }
    };

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn('Failed to synthesize speech:', err);
    if (options.onEnd) options.onEnd();
  }
}

export function stopSpeaking(): void {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}
