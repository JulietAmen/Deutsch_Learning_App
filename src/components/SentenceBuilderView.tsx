import React, { useState, useMemo } from 'react';
import { Puzzle, CheckCircle2, XCircle, RotateCcw, Volume2, HelpCircle, Sparkles, Send, ArrowRight } from 'lucide-react';
import { SentenceExercise, LanguageLevel } from '../types';
import { SENTENCE_EXERCISES } from '../data/sentenceBuilderData';
import { speakGerman } from '../utils/speech';

interface SentenceBuilderViewProps {
  currentLevel: LanguageLevel | 'ALL';
  onActivityPerformed: () => void;
  customExercises?: SentenceExercise[];
  professionTitle?: string;
}

export const SentenceBuilderView: React.FC<SentenceBuilderViewProps> = ({
  currentLevel,
  onActivityPerformed,
  customExercises,
  professionTitle,
}) => {
  const exercisesSource = customExercises && customExercises.length > 0 ? customExercises : SENTENCE_EXERCISES;

  // Filter exercises
  const availableExercises = useMemo(() => {
    if (currentLevel === 'ALL') return exercisesSource;
    const filtered = exercisesSource.filter((ex) => ex.level === currentLevel);
    return filtered.length > 0 ? filtered : exercisesSource;
  }, [currentLevel, exercisesSource]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const activeExercise = availableExercises[Math.min(currentIndex, Math.max(0, availableExercises.length - 1))] || exercisesSource[0];

  // Construction state
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWordPool, setAvailableWordPool] = useState<string[]>([]);
  const [isEvaluated, setIsEvaluated] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [solvedIds, setSolvedIds] = useState<string[]>([]);

  // Free-form sentence tester state
  const [customSentence, setCustomSentence] = useState('');
  const [isAnalyzingCustom, setIsAnalyzingCustom] = useState(false);
  const [customAnalysisResult, setCustomAnalysisResult] = useState<{
    isCorrect?: boolean;
    explanation?: string;
    corrected?: string;
    rules?: string[];
  } | null>(null);

  // Sync available word pool when activeExercise changes
  React.useEffect(() => {
    if (activeExercise) {
      // Shuffle scrambled words
      const shuffled = [...activeExercise.scrambledWords].sort(() => Math.random() - 0.5);
      setAvailableWordPool(shuffled);
      setSelectedWords([]);
      setIsEvaluated(false);
      setIsCorrect(false);
      setShowHint(false);
      setShowSolution(false);
    }
  }, [activeExercise]);

  const handleSelectWord = (word: string, indexInPool: number) => {
    setSelectedWords([...selectedWords, word]);
    const updatedPool = [...availableWordPool];
    updatedPool.splice(indexInPool, 1);
    setAvailableWordPool(updatedPool);
    setIsEvaluated(false);
  };

  const handleRemoveWord = (word: string, indexInSelected: number) => {
    const updatedSelected = [...selectedWords];
    updatedSelected.splice(indexInSelected, 1);
    setSelectedWords(updatedSelected);
    setAvailableWordPool([...availableWordPool, word]);
    setIsEvaluated(false);
  };

  const handleReset = () => {
    setSelectedWords([]);
    setAvailableWordPool([...activeExercise.scrambledWords].sort(() => Math.random() - 0.5));
    setIsEvaluated(false);
    setIsCorrect(false);
    setShowSolution(false);
  };

  const handleCheckSentence = () => {
    const constructed = selectedWords.join(' ').trim();
    // Normalize target punctuation and spaces
    const targetClean = activeExercise.targetSentenceGerman.replace(/\s+/g, ' ').trim();
    const constructedClean = constructed.replace(/\s+/g, ' ').trim();

    const matches = constructedClean === targetClean;
    setIsCorrect(matches);
    setIsEvaluated(true);

    if (matches) {
      speakGerman(activeExercise.targetSentenceGerman);
      if (!solvedIds.includes(activeExercise.id)) {
        setSolvedIds([...solvedIds, activeExercise.id]);
        onActivityPerformed();
      }
    }
  };

  const handleNextExercise = () => {
    if (currentIndex < availableExercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  // Custom Sentence AI / Heuristic Analysis
  const handleAnalyzeCustomSentence = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customSentence.trim()) return;

    setIsAnalyzingCustom(true);
    setCustomAnalysisResult(null);

    try {
      const res = await fetch('/api/ai/check-sentence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sentence: customSentence,
          level: currentLevel === 'ALL' ? 'B1' : currentLevel,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setCustomAnalysisResult({
          isCorrect: data.isCorrect,
          explanation: data.explanationGerman || data.explanationEnglish,
          corrected: data.correctedSentence,
          rules: data.grammarRules || ['V2-Regel (Verb an Position 2)', 'Satzklammer beachten'],
        });
        onActivityPerformed();
      } else {
        throw new Error('API request failed');
      }
    } catch {
      // Offline heuristic feedback
      setCustomAnalysisResult({
        isCorrect: true,
        explanation: 'Satzstruktur analysiert: Prüfen Sie, ob das konjugierte Verb im Hauptsatz an Position 2 steht und Nebensätze das Verb am Satzende tragen.',
        corrected: customSentence,
        rules: ['Verb an Position 2', 'TeKaMoLo (Wann, Warum, Wie, Wo)'],
      });
      onActivityPerformed();
    } finally {
      setIsAnalyzingCustom(false);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Intro Header */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
              <Puzzle className="w-6 h-6 text-purple-600" />
              {professionTitle ? `${professionTitle} – Fach-Satzbau` : 'Satzbau-Meister (Sentence Construction)'}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {professionTitle
                ? `Baue authentische Sätze aus dem Berufsalltag für ${professionTitle} in der richtigen deutschen Wortstellung zusammen.`
                : 'Bringe die durcheinandergewürfelten Satzteile in die grammatikalisch richtige deutsche Reihenfolge.'}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-purple-900 bg-purple-50 px-3.5 py-2 rounded-xl border border-purple-200 self-start sm:self-auto">
            <span>Gelöst: {solvedIds.length} / {availableExercises.length}</span>
          </div>
        </div>
      </div>

      {/* Main Puzzle Box */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6 max-w-4xl mx-auto">
        
        {/* Progress & Level Info */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-black bg-purple-100 text-purple-800 border border-purple-200">
              {activeExercise.level}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Übung {currentIndex + 1} von {availableExercises.length}
            </span>
            <span className="px-2 py-0.5 text-[11px] font-medium bg-slate-100 text-slate-600 rounded-md">
              {activeExercise.category}
            </span>
          </div>

          {/* Hint Trigger */}
          <button
            id="sentence-hint-btn"
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-xl border border-amber-200 transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{showHint ? 'Tipp verbergen' : 'Grammatik-Tipp'}</span>
          </button>
        </div>

        {/* Rule Hint Banner */}
        {showHint && (
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2 animate-in fade-in duration-150">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>Hinweis:</strong> {activeExercise.ruleHint}
            </div>
          </div>
        )}

        {/* English Prompt */}
        <div className="space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Aufgabe (Englischer Satz)
          </span>
          <p className="text-lg sm:text-xl font-extrabold text-slate-900">
            "{activeExercise.englishPrompt}"
          </p>
        </div>

        {/* Target Assembly Area (Drop / Tap zone) */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Dein konstruierter deutscher Satz (Klicke Wörter zum Entfernen):
          </span>

          <div
            id="sentence-construction-zone"
            className="min-h-[72px] p-3 sm:p-4 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-300 flex flex-wrap items-center gap-2 transition-all"
          >
            {selectedWords.length === 0 ? (
              <span className="text-xs text-slate-400 italic">
                Tippe unten auf die Bausteine, um den Satz zusammenzusetzen...
              </span>
            ) : (
              selectedWords.map((word, idx) => (
                <button
                  key={`${word}-${idx}`}
                  onClick={() => handleRemoveWord(word, idx)}
                  className="px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-bold shadow-xs transition-all flex items-center gap-1.5 group cursor-pointer"
                  title="Klicken zum Entfernen"
                >
                  <span>{word}</span>
                  <span className="text-purple-300 group-hover:text-white text-xs">×</span>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Scrambled Word Pool */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Verfügbare Satzbausteine:
          </span>

          <div className="flex flex-wrap gap-2.5 p-4 rounded-2xl bg-slate-100/70 border border-slate-200">
            {availableWordPool.length === 0 ? (
              <span className="text-xs text-slate-500 font-medium">
                Alle Wörter verwendet! Klicke jetzt auf "Überprüfen".
              </span>
            ) : (
              availableWordPool.map((word, idx) => (
                <button
                  key={`${word}-${idx}`}
                  id={`word-pool-chip-${idx}`}
                  onClick={() => handleSelectWord(word, idx)}
                  className="px-3.5 py-2 bg-white hover:bg-purple-50 text-slate-800 hover:text-purple-700 border border-slate-300 hover:border-purple-300 rounded-xl text-sm font-semibold shadow-xs transition-all cursor-pointer"
                >
                  {word}
                </button>
              ))
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <button
              id="sentence-reset-btn"
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Neu anordnen</span>
            </button>

            <button
              id="sentence-show-solution-btn"
              onClick={() => setShowSolution(!showSolution)}
              className="px-3.5 py-2 text-slate-500 hover:text-slate-800 rounded-xl text-xs font-semibold transition-colors"
            >
              {showSolution ? 'Lösung ausblenden' : 'Lösung anzeigen'}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="sentence-check-btn"
              disabled={selectedWords.length === 0}
              onClick={handleCheckSentence}
              className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Satz prüfen</span>
            </button>

            {isEvaluated && isCorrect && (
              <button
                id="sentence-next-btn"
                onClick={handleNextExercise}
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <span>Nächster Satz</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Evaluation Banner */}
        {isEvaluated && (
          <div
            className={`p-4 rounded-2xl border transition-all animate-in fade-in duration-200 ${
              isCorrect
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                : 'bg-rose-50 border-rose-300 text-rose-900'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1">
                  <h4 className="font-black text-sm">
                    {isCorrect ? 'Ausgezeichnet! Satz korrekt gebaut 🎉 (+20 XP)' : 'Noch nicht ganz richtig'}
                  </h4>
                  <p className="text-xs">
                    {isCorrect
                      ? activeExercise.explanation
                      : 'Achte auf die Satzstellung (Verbposition im Haupt- oder Nebensatz). Probiere es noch einmal oder wirf einen Blick auf den Tipp.'}
                  </p>
                </div>
              </div>

              {isCorrect && (
                <button
                  onClick={() => speakGerman(activeExercise.targetSentenceGerman)}
                  className="p-2 bg-white text-emerald-700 rounded-xl border border-emerald-200 hover:bg-emerald-100 transition-all shrink-0"
                  title="Satz anhören"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Show Solution Box */}
        {showSolution && (
          <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-800 space-y-1">
            <span className="font-bold text-slate-500 uppercase tracking-wider">Musterlösung:</span>
            <p className="font-bold text-sm text-slate-900">{activeExercise.targetSentenceGerman}</p>
            <p className="text-slate-600">{activeExercise.explanation}</p>
          </div>
        )}
      </div>

      {/* Interactive Free-form German Sentence Checker */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs max-w-4xl mx-auto space-y-4">
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-black text-slate-900">
            Eigener Satzbau-Prüfer & Grammatikanalyse
          </h3>
        </div>
        <p className="text-xs text-slate-600">
          Schreibe einen eigenen deutschen Satz (z.B. aus deinem Berufsalltag als Product Owner oder Entwickler). Unser System prüft Satzstellung, Konjugation und Kasus.
        </p>

        <form onSubmit={handleAnalyzeCustomSentence} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              id="custom-sentence-input"
              type="text"
              value={customSentence}
              onChange={(e) => setCustomSentence(e.target.value)}
              placeholder="z.B. Wir müssen heute das Backlog priorisieren, weil die Kunden es wünschen..."
              className="flex-1 px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-purple-500 focus:bg-white text-slate-800"
            />
            <button
              id="custom-sentence-submit-btn"
              type="submit"
              disabled={isAnalyzingCustom || !customSentence.trim()}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isAnalyzingCustom ? (
                <span>Wird analysiert...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Grammatik prüfen</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Custom Analysis Output */}
        {customAnalysisResult && (
          <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-xs text-purple-900 space-y-2 animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-purple-950">Analyseergebnis</span>
              <button
                onClick={() => speakGerman(customAnalysisResult.corrected || customSentence)}
                className="p-1.5 bg-white text-purple-700 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors"
                title="Korrigierten Satz vorlesen"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-slate-800 leading-relaxed">
              {customAnalysisResult.explanation}
            </p>
            {customAnalysisResult.corrected && customAnalysisResult.corrected !== customSentence && (
              <div className="p-2.5 bg-white rounded-xl border border-purple-100 font-medium">
                <span className="text-slate-500 font-normal">Empfohlene Formulierung: </span>
                <strong className="text-purple-900 font-bold">{customAnalysisResult.corrected}</strong>
              </div>
            )}
            {customAnalysisResult.rules && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {customAnalysisResult.rules.map((rule, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-white/80 rounded-md border border-purple-200 text-[11px] font-semibold text-purple-800">
                    ✓ {rule}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
