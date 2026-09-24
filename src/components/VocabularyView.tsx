import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Volume2,
  CheckCircle,
  RotateCw,
  Sparkles,
  BookOpen,
  Calendar,
  Layers,
  Check,
  RefreshCw,
  Play,
  ArrowRight,
  Info,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  Flame,
  Gauge
} from 'lucide-react';
import { VocabularyItem, LanguageLevel } from '../types';
import { VOCABULARY_DATA } from '../data/vocabularyData';
import { speakGerman } from '../utils/speech';
import {
  getTodayDateString,
  loadDailyVocabSet,
  requestAiDailyVocab,
  DailyVocabSet,
  DAILY_THEMES
} from '../utils/dailyVocab';
import { FlashcardDeck } from './FlashcardDeck';

interface VocabularyViewProps {
  currentLevel: LanguageLevel | 'ALL';
  learnedVocabIds: string[];
  onToggleLearned: (id: string) => void;
  onActivityPerformed: () => void;
  customVocabItems?: VocabularyItem[];
  professionTitle?: string;
}

export const VocabularyView: React.FC<VocabularyViewProps> = ({
  currentLevel,
  learnedVocabIds,
  onToggleLearned,
  onActivityPerformed,
  customVocabItems,
  professionTitle,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'list' | 'flashcards'>('list');
  const [activeDeckType, setActiveDeckType] = useState<'daily' | 'all' | 'unlearned'>(
    customVocabItems && customVocabItems.length > 0 ? 'all' : 'daily'
  );
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [speechRate, setSpeechRate] = useState<number>(0.88);
  const [flippedCardsInList, setFlippedCardsInList] = useState<Record<string, boolean>>({});
  const [isGeneratingAiDaily, setIsGeneratingAiDaily] = useState(false);
  const [showDailyPreview, setShowDailyPreview] = useState(true);
  const [customTheme, setCustomTheme] = useState<string>('');
  const [showThemePicker, setShowThemePicker] = useState(false);

  // Today's date string and daily vocabulary set
  const todayDateStr = useMemo(() => getTodayDateString(), []);
  const [dailySet, setDailySet] = useState<DailyVocabSet>(() =>
    loadDailyVocabSet(todayDateStr, currentLevel)
  );

  // Reload daily set when level changes
  useEffect(() => {
    setDailySet(loadDailyVocabSet(todayDateStr, currentLevel));
  }, [todayDateStr, currentLevel]);

  // Combined vocabulary: if customVocabItems provided (profession mode), use it directly.
  // Otherwise combine base VOCABULARY_DATA with daily items.
  const combinedVocab = useMemo(() => {
    if (customVocabItems && customVocabItems.length > 0) {
      return customVocabItems;
    }
    const dailyItems = dailySet?.items || [];
    const baseIds = new Set(VOCABULARY_DATA.map((v) => v.id));
    const uniqueDaily = dailyItems.filter((item) => !baseIds.has(item.id));
    return [...uniqueDaily, ...VOCABULARY_DATA];
  }, [dailySet, customVocabItems]);

  // Categories list
  const categories = useMemo(() => {
    const set = new Set<string>();
    combinedVocab.forEach((v) => set.add(v.category));
    return ['ALL', ...Array.from(set)];
  }, [combinedVocab]);

  // Filtered vocabulary for list view
  const filteredVocab = useMemo(() => {
    return combinedVocab.filter((item) => {
      // Level check
      if (currentLevel !== 'ALL' && item.level !== currentLevel) {
        return false;
      }
      // Category check
      if (selectedCategory !== 'ALL' && item.category !== selectedCategory) {
        return false;
      }
      // Search check
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesGerman = item.german.toLowerCase().includes(query);
        const matchesEnglish = item.english.toLowerCase().includes(query);
        const matchesExample = item.exampleSentence.toLowerCase().includes(query);
        if (!matchesGerman && !matchesEnglish && !matchesExample) return false;
      }
      return true;
    });
  }, [combinedVocab, currentLevel, selectedCategory, searchQuery]);

  // Flashcard deck determination
  const flashcardDeckCards = useMemo(() => {
    if (customVocabItems && customVocabItems.length > 0) {
      if (activeDeckType === 'unlearned') {
        const unlearned = filteredVocab.filter((v) => !learnedVocabIds.includes(v.id));
        return unlearned.length > 0 ? unlearned : filteredVocab;
      }
      return filteredVocab;
    }
    if (activeDeckType === 'daily') {
      return dailySet?.items && dailySet.items.length > 0
        ? dailySet.items
        : filteredVocab.slice(0, 8);
    }
    if (activeDeckType === 'unlearned') {
      const unlearned = filteredVocab.filter((v) => !learnedVocabIds.includes(v.id));
      return unlearned.length > 0 ? unlearned : filteredVocab;
    }
    return filteredVocab;
  }, [activeDeckType, dailySet, filteredVocab, learnedVocabIds, customVocabItems]);

  // Pronunciation audio via Web Speech API
  const handlePlayAudio = (text: string, id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setPlayingId(id);
    speakGerman(text, {
      rate: speechRate,
      onEnd: () => setPlayingId(null),
      onError: () => setPlayingId(null),
    });
  };

  const handleToggleLearned = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    onToggleLearned(id);
    onActivityPerformed();
  };

  // Flip individual card in list view
  const handleToggleCardFlipInList = (id: string) => {
    setFlippedCardsInList((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Generate new daily vocabulary using AI
  const handleGenerateAiDaily = async (themeOverride?: string) => {
    setIsGeneratingAiDaily(true);
    setShowThemePicker(false);
    try {
      const themeToUse = themeOverride || customTheme || dailySet.theme;
      const newSet = await requestAiDailyVocab(todayDateStr, currentLevel, themeToUse);
      setDailySet(newSet);
      onActivityPerformed();
    } catch (err) {
      console.warn('Failed to generate daily AI vocab:', err);
    } finally {
      setIsGeneratingAiDaily(false);
    }
  };

  // Article badges helper
  const getArticleBadge = (article?: 'der' | 'die' | 'das') => {
    if (!article) return null;
    if (article === 'der') {
      return (
        <span className="px-2 py-0.5 rounded text-[11px] font-black bg-blue-100 text-blue-700 border border-blue-200">
          der
        </span>
      );
    }
    if (article === 'die') {
      return (
        <span className="px-2 py-0.5 rounded text-[11px] font-black bg-rose-100 text-rose-700 border border-rose-200">
          die
        </span>
      );
    }
    return (
      <span className="px-2 py-0.5 rounded text-[11px] font-black bg-emerald-100 text-emerald-700 border border-emerald-200">
        das
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* ========================================================= */}
      {/* VOCABULARY HERO SECTION (Profession or Daily)             */}
      {/* ========================================================= */}
      {professionTitle && customVocabItems && customVocabItems.length > 0 ? (
        <div className="bg-gradient-to-br from-blue-600/10 via-indigo-500/5 to-white rounded-3xl p-5 sm:p-7 border border-blue-200/80 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-blue-600 text-white shadow-2xs">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Fachspezifischer Wortschatz</span>
                </span>
                <span className="text-xs font-bold text-blue-900 bg-blue-100/90 px-2.5 py-1 rounded-full border border-blue-200">
                  {professionTitle}
                </span>
                <span className="text-xs font-semibold text-slate-600 bg-white/90 px-2.5 py-1 rounded-full border border-slate-200">
                  {filteredVocab.length} Fachtermini
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {professionTitle} – Fachvokabular & Praxisanwendung
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                Präzise Fachbegriffe, authentische Beispielsätze und typische Fachkollokationen. Lerne mit nativer Audio-Aussprache und interaktiven Karteikarten.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                id="profession-flashcard-launch-btn"
                onClick={() => {
                  setActiveDeckType('all');
                  setViewMode('flashcards');
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xs font-black transition-all shadow-xs hover:shadow-md cursor-pointer"
              >
                <RotateCw className="w-4 h-4" />
                <span>Im Flashcard-Modus lernen ({filteredVocab.length})</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
      <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-white rounded-3xl p-5 sm:p-7 border border-orange-200/80 shadow-xs relative overflow-hidden">
        {/* Background decorative accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-orange-500 text-white shadow-2xs">
                <Calendar className="w-3.5 h-3.5" />
                <span>Wortschatz des Tages</span>
              </span>

              <span className="text-xs font-semibold text-slate-600 bg-white/80 px-2.5 py-1 rounded-full border border-orange-200">
                {dailySet.formattedDate}
              </span>

              {dailySet.isAiGenerated && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  KI-Frisch generiert
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {dailySet.theme}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              {dailySet.themeDescription}
            </p>
          </div>

          {/* Quick Actions for Daily Words */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            {/* Launch Flashcard Mode for today's words */}
            <button
              id="daily-vocab-flashcard-launch-btn"
              onClick={() => {
                setActiveDeckType('daily');
                setViewMode('flashcards');
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl text-xs font-black transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              <RotateCw className="w-4 h-4" />
              <span>Heute im Flashcard-Modus lernen</span>
            </button>

            {/* AI Generate New Words for Today */}
            <div className="relative">
              <button
                id="generate-daily-ai-vocab-btn"
                disabled={isGeneratingAiDaily}
                onClick={() => setShowThemePicker(!showThemePicker)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-white hover:bg-orange-50 text-slate-800 border border-orange-200 rounded-2xl text-xs font-bold transition-all shadow-2xs disabled:opacity-60 cursor-pointer"
                title="Neue Vokabeln für heute mit KI generieren"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-orange-600 ${isGeneratingAiDaily ? 'animate-spin' : ''}`} />
                <span>{isGeneratingAiDaily ? 'Generiere...' : 'Neue Wörter generieren'}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Theme Picker Dropdown */}
              {showThemePicker && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl border border-slate-200 shadow-xl p-3 z-30 space-y-2 animate-in fade-in zoom-in-95 duration-150">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">
                    Thema für heute wählen:
                  </p>
                  <div className="space-y-1 max-h-56 overflow-y-auto">
                    {DAILY_THEMES.map((th, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleGenerateAiDaily(th.theme)}
                        className="w-full text-left p-2 rounded-xl text-xs hover:bg-orange-50 hover:text-orange-900 transition-colors"
                      >
                        <div className="font-bold text-slate-800">{th.theme}</div>
                        <div className="text-[10px] text-slate-500 line-clamp-1">{th.desc}</div>
                      </button>
                    ))}
                  </div>

                  {/* Custom Theme Input */}
                  <div className="pt-2 border-t border-slate-100 flex gap-1">
                    <input
                      type="text"
                      placeholder="Eigenes Thema (z.B. IT-Security)..."
                      value={customTheme}
                      onChange={(e) => setCustomTheme(e.target.value)}
                      className="text-xs px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg flex-1 focus:outline-hidden focus:ring-1 focus:ring-orange-500"
                    />
                    <button
                      onClick={() => handleGenerateAiDaily(customTheme)}
                      disabled={!customTheme.trim() || isGeneratingAiDaily}
                      className="px-2.5 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-bold disabled:opacity-40"
                    >
                      Los
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Toggle Daily Preview */}
            <button
              onClick={() => setShowDailyPreview(!showDailyPreview)}
              className="p-2.5 bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 rounded-2xl text-xs transition-colors"
              title={showDailyPreview ? 'Vorschau zuklappen' : 'Vorschau aufklappen'}
            >
              {showDailyPreview ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Daily Words Quick Cards Preview */}
        {showDailyPreview && dailySet.items && dailySet.items.length > 0 && (
          <div className="mt-5 pt-4 border-t border-orange-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {dailySet.items.map((item, idx) => {
              const isLearned = learnedVocabIds.includes(item.id);
              const isPlaying = playingId === `daily-preview-${item.id}`;
              return (
                <div
                  key={item.id || idx}
                  className={`p-3.5 rounded-2xl bg-white/90 border transition-all hover:shadow-sm ${
                    isLearned
                      ? 'border-emerald-200 bg-emerald-50/40'
                      : 'border-orange-100 hover:border-orange-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-slate-900 text-white">
                      {item.level}
                    </span>
                    {item.article && (
                      <span className="text-[10px] font-black text-slate-500">
                        {item.article}
                      </span>
                    )}
                    <button
                      onClick={() => handleToggleLearned(item.id)}
                      className={`ml-auto p-1 rounded-md transition-colors ${
                        isLearned
                          ? 'text-emerald-700 bg-emerald-100'
                          : 'text-slate-400 hover:text-slate-700'
                      }`}
                      title={isLearned ? 'Gelernt' : 'Als gelernt markieren'}
                    >
                      <Check className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="font-bold text-slate-900 text-sm tracking-tight truncate">
                    {item.german}
                  </div>
                  <div className="text-xs text-slate-600 font-medium truncate mt-0.5">
                    {item.english}
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-xs">
                    <button
                      onClick={(e) => handlePlayAudio(item.german, `daily-preview-${item.id}`, e)}
                      className="flex items-center gap-1 text-[11px] font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'animate-pulse' : ''}`} />
                      <span>Audio</span>
                    </button>

                    <button
                      onClick={() => {
                        setActiveDeckType('daily');
                        setViewMode('flashcards');
                      }}
                      className="text-[11px] text-slate-400 hover:text-slate-800 font-semibold flex items-center gap-0.5"
                    >
                      <span>Karte</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      )}

      {/* ========================================================= */}
      {/* VOCABULARY VIEW CONTROLS & HEADER                         */}
      {/* ========================================================= */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
              <BookOpen className="w-6 h-6 text-orange-500" />
              Wortschatz & Flashcard-Training
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Interaktive Karteikarten mit 3D-Flip, Web Speech API Audio und Beispielsätzen.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 text-xs font-bold self-start md:self-auto">
            <button
              id="vocab-view-list-toggle"
              onClick={() => setViewMode('list')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-white text-slate-900 shadow-xs font-black'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Listenansicht
            </button>
            <button
              id="vocab-view-flashcards-toggle"
              onClick={() => setViewMode('flashcards')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'flashcards'
                  ? 'bg-orange-500 text-white shadow-xs font-black'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Flashcard-Modus</span>
            </button>
          </div>
        </div>

        {/* Deck Selector (shown in Flashcard Mode) */}
        {viewMode === 'flashcards' && (
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
            <span className="font-bold text-slate-400 uppercase tracking-wider text-[11px] mr-1">
              Deck auswählen:
            </span>

            <button
              id="deck-daily-btn"
              onClick={() => setActiveDeckType('daily')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeDeckType === 'daily'
                  ? 'bg-orange-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Heutige Tagesvokabeln ({dailySet.items?.length || 0})</span>
            </button>

            <button
              id="deck-all-btn"
              onClick={() => setActiveDeckType('all')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                activeDeckType === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Alle Wörter ({filteredVocab.length})
            </button>

            <button
              id="deck-unlearned-btn"
              onClick={() => setActiveDeckType('unlearned')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                activeDeckType === 'unlearned'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Noch zu lernen ({filteredVocab.filter((v) => !learnedVocabIds.includes(v.id)).length})
            </button>
          </div>
        )}

        {/* Filter Bar (for search & category) */}
        {viewMode === 'list' && (
          <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="vocab-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Vokabel suchen (Deutsch oder Englisch)..."
                className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all text-slate-800"
              />
            </div>

            {/* Speed Rate Toggle in List View */}
            <div className="sm:col-span-2 flex items-center">
              <button
                onClick={() => setSpeechRate(speechRate === 0.88 ? 0.72 : 0.88)}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                title="Sprechgeschwindigkeit umschalten"
              >
                <Gauge className="w-3.5 h-3.5 text-orange-600" />
                <span>{speechRate === 0.88 ? '1.0x Normal' : '0.7x Langsam'}</span>
              </button>
            </div>

            {/* Category Dropdown */}
            <div className="sm:col-span-4 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {categories.slice(0, 6).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs whitespace-nowrap font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-orange-500 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'ALL' ? 'Alle Themen' : cat}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Stats row */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Verfügbar:{' '}
          <strong className="text-slate-800 font-bold">
            {viewMode === 'flashcards' ? flashcardDeckCards.length : filteredVocab.length}
          </strong>{' '}
          Wörter {currentLevel !== 'ALL' && `(Stufe ${currentLevel})`}
        </span>
        <span className="flex items-center gap-1">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>
            Gemeistert: <strong className="text-emerald-700 font-bold">{learnedVocabIds.length}</strong>
          </span>
        </span>
      </div>

      {/* ========================================================= */}
      {/* FLASHCARD MODE (DEDICATED INTERACTIVE 3D FLIP DECK)      */}
      {/* ========================================================= */}
      {viewMode === 'flashcards' && (
        <div className="py-2">
          <FlashcardDeck
            cards={flashcardDeckCards}
            learnedVocabIds={learnedVocabIds}
            onToggleLearned={handleToggleLearned}
            onActivityPerformed={onActivityPerformed}
            deckTitle={
              activeDeckType === 'daily'
                ? `Tagesvokabeln: ${dailySet.theme}`
                : activeDeckType === 'unlearned'
                ? 'Noch zu lernen'
                : `Wortschatz Stufe ${currentLevel}`
            }
            onExit={() => setViewMode('list')}
          />
        </div>
      )}

      {/* ========================================================= */}
      {/* LIST VIEW (WITH 3D FLIP ON CLICK ON EACH CARD)            */}
      {/* ========================================================= */}
      {viewMode === 'list' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredVocab.map((item) => {
            const isLearned = learnedVocabIds.includes(item.id);
            const isFlippedInList = Boolean(flippedCardsInList[item.id]);
            const isPlaying = playingId === item.id;

            return (
              <div
                key={item.id}
                id={`vocab-card-${item.id}`}
                className="perspective-1000 w-full min-h-[260px]"
              >
                {/* 3D Flip Inner Card */}
                <div
                  className={`relative w-full h-full preserve-3d transition-transform duration-500 rounded-3xl ${
                    isFlippedInList ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* ===== FRONT OF LIST CARD ===== */}
                  <div
                    onClick={() => handleToggleCardFlipInList(item.id)}
                    className={`absolute inset-0 backface-hidden p-5 rounded-3xl border transition-all duration-200 bg-white cursor-pointer flex flex-col justify-between select-none ${
                      isLearned
                        ? 'border-emerald-200 bg-emerald-50/20 shadow-2xs'
                        : 'border-slate-200 hover:border-orange-300 hover:shadow-sm'
                    }`}
                  >
                    {/* Card Top: Level & Category & Learned Toggle */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="px-2 py-0.5 rounded-md text-[11px] font-black bg-slate-900 text-white">
                            {item.level}
                          </span>
                          {getArticleBadge(item.article)}
                          <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 truncate max-w-[130px]">
                            {item.category}
                          </span>
                        </div>

                        {/* Learned toggle button */}
                        <button
                          onClick={(e) => handleToggleLearned(item.id, e)}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                            isLearned
                              ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                          title={isLearned ? 'Bereits gemeistert' : 'Als gelernt markieren'}
                        >
                          {isLearned ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <div className="w-3 h-3 rounded-full border border-slate-400" />
                          )}
                          <span>{isLearned ? 'Gelernt' : 'Lernen'}</span>
                        </button>
                      </div>

                      {/* Main German Term & Audio */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-baseline gap-2">
                            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                              {item.german}
                            </h3>
                            {item.plural && (
                              <span className="text-xs text-slate-500 font-normal">
                                Pl: {item.plural}
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-semibold text-slate-600 mt-1">
                            {item.english}
                          </p>
                        </div>

                        {/* Audio button */}
                        <button
                          onClick={(e) => handlePlayAudio(item.german, item.id, e)}
                          className={`p-2.5 rounded-xl border transition-all shrink-0 cursor-pointer ${
                            isPlaying
                              ? 'bg-orange-500 text-white border-orange-500 scale-105'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200'
                          }`}
                          title="Deutsche Aussprache abspielen"
                        >
                          <Volume2 className={`w-4 h-4 ${isPlaying ? 'animate-pulse' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Bottom Prompt to Flip */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 text-orange-600 font-semibold">
                        <RotateCw className="w-3 h-3" />
                        <span>Klicke für Beispielsatz & Details</span>
                      </span>
                      <span className="text-[11px] text-slate-400">Umdrehen ↻</span>
                    </div>
                  </div>

                  {/* ===== BACK OF LIST CARD ===== */}
                  <div
                    onClick={() => handleToggleCardFlipInList(item.id)}
                    className="absolute inset-0 backface-hidden rotate-y-180 p-5 rounded-3xl border-2 border-orange-300 bg-gradient-to-b from-white to-orange-50/50 shadow-md flex flex-col justify-between cursor-pointer select-none"
                  >
                    <div>
                      {/* Back Header */}
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-extrabold text-orange-800 bg-orange-100 px-2 py-0.5 rounded-md text-[11px] uppercase tracking-wider">
                          Details & Beispielsatz
                        </span>
                        <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                          <RotateCw className="w-3 h-3" />
                          Zurückdrehen
                        </span>
                      </div>

                      {/* Example sentence */}
                      <div className="p-3 rounded-xl bg-white border border-orange-200/70 space-y-1 mt-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                            "{item.exampleSentence}"
                          </p>
                          <button
                            onClick={(e) => handlePlayAudio(item.exampleSentence, `${item.id}-ex`, e)}
                            className="p-1 rounded-md bg-orange-50 hover:bg-orange-100 text-orange-700 transition-colors shrink-0"
                            title="Beispielsatz vorlesen"
                          >
                            <Volume2 className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-xs text-slate-500 italic">
                          {item.exampleTranslation}
                        </p>
                      </div>

                      {/* Notes / Tips */}
                      {item.notes && (
                        <p className="mt-2 text-[11px] text-amber-900 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
                          <span>{item.notes}</span>
                        </p>
                      )}
                    </div>

                    {/* Bottom Actions */}
                    <div
                      className="pt-2 border-t border-orange-100 flex items-center justify-between"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={(e) => handlePlayAudio(item.german, item.id, e)}
                        className="flex items-center gap-1 text-xs font-semibold text-orange-700 bg-white hover:bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200"
                      >
                        <Volume2 className="w-3 h-3" />
                        <span>Aussprache</span>
                      </button>

                      <button
                        onClick={(e) => handleToggleLearned(item.id, e)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                          isLearned
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-900 text-white hover:bg-slate-800'
                        }`}
                      >
                        {isLearned ? 'Gemeistert ✓' : 'Gelernt markieren'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Empty State */}
      {filteredVocab.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-6 space-y-3">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-700">Keine passenden Vokabeln gefunden</h3>
          <p className="text-xs text-slate-500">
            Versuche eine andere Stufe oder setze den Suchfilter zurück.
          </p>
        </div>
      )}
    </div>
  );
};
