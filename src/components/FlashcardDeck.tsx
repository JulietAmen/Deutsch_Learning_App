import React, { useState, useEffect, useCallback } from 'react';
import {
  Volume2,
  RotateCw,
  Check,
  Shuffle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  VolumeX,
  Keyboard,
  CheckCircle2,
  Gauge
} from 'lucide-react';
import { VocabularyItem } from '../types';
import { speakGerman, stopSpeaking } from '../utils/speech';

interface FlashcardDeckProps {
  cards: VocabularyItem[];
  learnedVocabIds: string[];
  onToggleLearned: (id: string) => void;
  onActivityPerformed: () => void;
  deckTitle?: string;
  onExit?: () => void;
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({
  cards,
  learnedVocabIds,
  onToggleLearned,
  onActivityPerformed,
  deckTitle,
  onExit,
}) => {
  const [deck, setDeck] = useState<VocabularyItem[]>(cards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(0.88); // 0.88 normal, 0.72 slow
  const [autoPlayAudio, setAutoPlayAudio] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);

  // Sync deck when cards change
  useEffect(() => {
    setDeck(cards);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [cards]);

  const currentCard: VocabularyItem | undefined = deck[currentIndex];

  // Pronunciation handler via Web Speech API
  const handlePlayAudio = useCallback(
    (text: string, e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setIsPlayingAudio(true);
      speakGerman(text, {
        rate: speechRate,
        onEnd: () => setIsPlayingAudio(false),
        onError: () => setIsPlayingAudio(false),
      });
    },
    [speechRate]
  );

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => {
      const next = !prev;
      if (next && autoPlayAudio && currentCard) {
        handlePlayAudio(currentCard.german);
      }
      return next;
    });
  }, [autoPlayAudio, currentCard, handlePlayAudio]);

  const handleNext = useCallback(() => {
    if (currentIndex < deck.length - 1) {
      stopSpeaking();
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    }
  }, [currentIndex, deck.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      stopSpeaking();
      setCurrentIndex((prev) => prev - 1);
      setIsFlipped(false);
    }
  }, [currentIndex]);

  const handleShuffle = () => {
    stopSpeaking();
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleToggleLearnedCurrent = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!currentCard) return;
    onToggleLearned(currentCard.id);
    onActivityPerformed();
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        handleFlip();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        if (currentCard) {
          handlePlayAudio(currentCard.german);
        }
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        handleToggleLearnedCurrent();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFlip, handleNext, handlePrev, currentCard, handlePlayAudio]);

  if (!currentCard) {
    return (
      <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 shadow-xs max-w-xl mx-auto space-y-3">
        <p className="text-slate-600 font-semibold">Keine Vokabeln in diesem Deck verfügbar.</p>
        {onExit && (
          <button
            onClick={onExit}
            className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold"
          >
            Zurück zur Übersicht
          </button>
        )}
      </div>
    );
  }

  const isLearned = learnedVocabIds.includes(currentCard.id);

  // Helper for article badge
  const renderArticleBadge = (article?: 'der' | 'die' | 'das') => {
    if (!article) return null;
    if (article === 'der') {
      return (
        <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-blue-100 text-blue-800 border border-blue-200">
          der (maskulin)
        </span>
      );
    }
    if (article === 'die') {
      return (
        <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-rose-100 text-rose-800 border border-rose-200">
          die (feminin)
        </span>
      );
    }
    return (
      <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-200">
        das (neutrum)
      </span>
    );
  };

  const progressPercent = Math.round(((currentIndex + 1) / deck.length) * 100);

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      {/* Top Deck Controls & Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          {deckTitle && (
            <span className="font-extrabold text-slate-900 text-sm">{deckTitle}</span>
          )}
          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold">
            {currentIndex + 1} / {deck.length}
          </span>
          {isLearned && (
            <span className="flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Gemeistert
            </span>
          )}
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2">
          {/* Audio speed toggle */}
          <button
            id="flashcard-speed-toggle-btn"
            onClick={() => setSpeechRate(speechRate === 0.88 ? 0.7 : 0.88)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors"
            title="Sprechgeschwindigkeit umschalten"
          >
            <Gauge className="w-3.5 h-3.5 text-orange-600" />
            <span>{speechRate === 0.88 ? '1.0x (Normal)' : '0.7x (Langsam)'}</span>
          </button>

          {/* Auto play toggle */}
          <button
            onClick={() => setAutoPlayAudio(!autoPlayAudio)}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-colors flex items-center gap-1 ${
              autoPlayAudio
                ? 'bg-orange-100 text-orange-800 border border-orange-200'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
            title="Audio beim Umdrehen automatisch abspielen"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Auto-Audio</span>
          </button>

          {/* Shuffle */}
          <button
            onClick={handleShuffle}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            title="Karten mischen"
          >
            <Shuffle className="w-3.5 h-3.5" />
          </button>

          {/* Keyboard shortcut hint */}
          <button
            onClick={() => setShowShortcuts(!showShortcuts)}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            title="Tastatur-Kürzel anzeigen"
          >
            <Keyboard className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Progress Line */}
      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
        <div
          className="h-full bg-orange-500 transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Shortcuts Guide Box */}
      {showShortcuts && (
        <div className="p-3 bg-slate-100 rounded-xl text-xs text-slate-700 grid grid-cols-2 sm:grid-cols-4 gap-2 border border-slate-200 animate-in fade-in duration-150">
          <div><kbd className="px-1.5 py-0.5 bg-white rounded border text-[11px] font-mono">Leertaste</kbd> Umdrehen</div>
          <div><kbd className="px-1.5 py-0.5 bg-white rounded border text-[11px] font-mono">← / →</kbd> Vor / Zurück</div>
          <div><kbd className="px-1.5 py-0.5 bg-white rounded border text-[11px] font-mono">A</kbd> Aussprache</div>
          <div><kbd className="px-1.5 py-0.5 bg-white rounded border text-[11px] font-mono">M</kbd> Gemeistert</div>
        </div>
      )}

      {/* ================= 3D FLIP CARD CONTAINER ================= */}
      <div className="perspective-1000 w-full">
        <div
          id="flashcard-3d-box"
          onClick={handleFlip}
          className={`relative w-full min-h-[340px] sm:min-h-[380px] preserve-3d transition-transform duration-500 cursor-pointer select-none rounded-3xl ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* ================= CARD FRONT ================= */}
          <div className="absolute inset-0 backface-hidden bg-white border-2 border-slate-200 hover:border-orange-300 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            {/* Top Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-black bg-slate-900 text-white">
                  {currentCard.level}
                </span>
                {renderArticleBadge(currentCard.article)}
              </div>

              <span className="text-[11px] font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                {currentCard.category}
              </span>
            </div>

            {/* Center Content: German Term */}
            <div className="my-auto py-6 text-center space-y-3">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {currentCard.german}
              </h3>

              {currentCard.plural && (
                <p className="text-sm font-semibold text-slate-500">
                  Plural: <span className="text-slate-700 font-bold">{currentCard.plural}</span>
                </p>
              )}

              {/* Audio button on front */}
              <div className="pt-2">
                <button
                  id="flashcard-front-audio-btn"
                  onClick={(e) => handlePlayAudio(currentCard.german, e)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl border text-xs font-bold transition-all ${
                    isPlayingAudio
                      ? 'bg-orange-500 text-white border-orange-500 scale-105'
                      : 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100'
                  }`}
                  title="Deutsche Aussprache abspielen"
                >
                  <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'animate-pulse' : ''}`} />
                  <span>Aussprache anhören</span>
                </button>
              </div>
            </div>

            {/* Bottom Hint */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100">
              <span className="flex items-center gap-1.5 text-orange-600 font-semibold">
                <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                <span>Klicke zum Umdrehen (Bedeutung & Beispiele)</span>
              </span>

              <span className="hidden sm:inline text-slate-400 font-mono text-[11px]">
                [Leertaste]
              </span>
            </div>
          </div>

          {/* ================= CARD BACK ================= */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-b from-white to-orange-50/40 border-2 border-orange-300 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between text-left">
            {/* Top Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-700 bg-orange-100 px-2.5 py-0.5 rounded-md">
                  Englische Übersetzung
                </span>
                <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-slate-900 text-white">
                  {currentCard.level}
                </span>
              </div>

              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                <RotateCw className="w-3 h-3" />
                Klick = Zurück
              </span>
            </div>

            {/* Center Content: Definition & Examples */}
            <div className="my-auto py-3 space-y-3.5">
              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {currentCard.english}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Deutsch: <strong className="text-slate-800">{currentCard.german}</strong>
                </p>
              </div>

              {/* Example sentence box */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-orange-200/70 shadow-2xs space-y-1.5">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                    "{currentCard.exampleSentence}"
                  </p>
                  <button
                    id="flashcard-example-audio-btn"
                    onClick={(e) => handlePlayAudio(currentCard.exampleSentence, e)}
                    className="p-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-700 transition-colors shrink-0"
                    title="Beispielsatz vorlesen"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-slate-500 italic">
                  {currentCard.exampleTranslation}
                </p>
              </div>

              {/* Pedagogical usage note */}
              {currentCard.notes && (
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{currentCard.notes}</span>
                </div>
              )}
            </div>

            {/* Bottom Bar: Action buttons */}
            <div
              className="flex items-center justify-between pt-3 border-t border-orange-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => handlePlayAudio(currentCard.german, e)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-orange-50 text-orange-700 border border-orange-200 rounded-xl text-xs font-semibold transition-colors"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Wort anhören</span>
              </button>

              <button
                id="flashcard-mark-learned-btn"
                onClick={handleToggleLearnedCurrent}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
                  isLearned
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                <Check className="w-3.5 h-3.5" />
                <span>{isLearned ? 'Gemeistert ✓' : 'Als gelernt markieren'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons Below Card */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <button
          id="flashcard-nav-prev-btn"
          disabled={currentIndex === 0}
          onClick={handlePrev}
          className="flex-1 py-3 px-4 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-slate-800 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Vorherige Karte</span>
        </button>

        <button
          id="flashcard-nav-flip-btn"
          onClick={handleFlip}
          className="px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span>{isFlipped ? 'Vorderseite' : 'Umdrehen'}</span>
        </button>

        <button
          id="flashcard-nav-next-btn"
          disabled={currentIndex >= deck.length - 1}
          onClick={handleNext}
          className="flex-1 py-3 px-4 bg-slate-900 text-white rounded-2xl text-xs font-bold hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
        >
          <span>Nächste Karte</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
