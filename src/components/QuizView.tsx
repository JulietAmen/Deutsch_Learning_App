import React, { useState, useMemo } from 'react';
import { CheckCircle2, XCircle, Volume2, Award, RotateCcw, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { QuizQuestion, LanguageLevel } from '../types';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { speakGerman } from '../utils/speech';

interface QuizViewProps {
  currentLevel: LanguageLevel | 'ALL';
  onActivityPerformed: () => void;
  customQuestions?: QuizQuestion[];
  professionTitle?: string;
}

export const QuizView: React.FC<QuizViewProps> = ({
  currentLevel,
  onActivityPerformed,
  customQuestions,
  professionTitle,
}) => {
  const questionsSource = customQuestions && customQuestions.length > 0 ? customQuestions : QUIZ_QUESTIONS;

  const [selectedFilter, setSelectedFilter] = useState<string>(
    currentLevel === 'ALL' ? 'ALL' : currentLevel
  );

  // Sync if parent level changed
  React.useEffect(() => {
    if (currentLevel !== 'ALL') {
      setSelectedFilter(currentLevel);
    }
  }, [currentLevel]);

  // Questions filtered
  const filteredQuestions = useMemo(() => {
    if (selectedFilter === 'ALL') return questionsSource;
    const filtered = questionsSource.filter((q) => q.level === selectedFilter);
    return filtered.length > 0 ? filtered : questionsSource;
  }, [selectedFilter, questionsSource]);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = filteredQuestions[Math.min(questionIndex, Math.max(0, filteredQuestions.length - 1))] || questionsSource[0];

  const handleSelectOption = (opt: string) => {
    if (hasSubmitted) return;
    setSelectedAnswer(opt);
  };

  const handleConfirmAnswer = () => {
    if (!selectedAnswer || hasSubmitted) return;
    setHasSubmitted(true);

    const isCorrect = selectedAnswer === currentQ.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    onActivityPerformed();
  };

  const handleNextQuestion = () => {
    if (questionIndex < filteredQuestions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setHasSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setHasSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Quiz Header & Track Selector */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              {professionTitle ? `${professionTitle} – Fach-Quiz` : 'Interaktive Fortschrittsquizze'}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {professionTitle
                ? `Prüfe dein Fachwissen, relevante Fachbegriffe und berufliche Situationen für ${professionTitle}.`
                : 'Teste dein Wissen in Grammatik, Satzbau, Wortschatz und Berufsdeutsch mit sofortiger Auswertung.'}
            </p>
          </div>

          {/* Quiz Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-semibold self-start sm:self-auto">
            {(['ALL', 'A2', 'B1', 'B2', 'Workplace'] as const).map((track) => (
              <button
                key={track}
                id={`quiz-filter-${track}`}
                onClick={() => {
                  setSelectedFilter(track);
                  handleRestartQuiz();
                }}
                className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                  selectedFilter === track
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {track === 'ALL'
                  ? 'Alle Fragen'
                  : track === 'Workplace'
                  ? professionTitle ? `Praxis (${professionTitle})` : 'Berufsdeutsch / PO'
                  : track}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Quiz Area */}
      {!quizFinished ? (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6 max-w-3xl mx-auto">
          
          {/* Progress bar and counter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md text-[11px] font-black bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {currentQ.level}
                </span>
                <span>Kategorie: {currentQ.category}</span>
              </span>
              <span>
                Frage {questionIndex + 1} von {filteredQuestions.length}
              </span>
            </div>

            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
                style={{ width: `${((questionIndex + 1) / filteredQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-2 pt-2">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              {currentQ.question}
            </h3>
          </div>

          {/* Answer Options Grid */}
          <div className="grid grid-cols-1 gap-3 pt-2">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswer === option;
              const isCorrectAnswer = option === currentQ.correctAnswer;

              let optionStyle = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300';

              if (hasSubmitted) {
                if (isCorrectAnswer) {
                  optionStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-2 ring-emerald-400/20';
                } else if (isSelected && !isCorrectAnswer) {
                  optionStyle = 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-400/20';
                } else {
                  optionStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                }
              } else if (isSelected) {
                optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold ring-2 ring-emerald-500/20 shadow-xs';
              }

              return (
                <button
                  key={idx}
                  id={`quiz-option-${idx}`}
                  disabled={hasSubmitted}
                  onClick={() => handleSelectOption(option)}
                  className={`p-4 rounded-2xl border text-left text-sm sm:text-base font-medium transition-all flex items-center justify-between gap-3 cursor-pointer ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-white border border-slate-200 text-xs font-bold flex items-center justify-center text-slate-600 shrink-0 shadow-2xs">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {hasSubmitted && isCorrectAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {hasSubmitted && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanatory Feedback when submitted */}
          {hasSubmitted && (
            <div
              className={`p-4 rounded-2xl border text-xs sm:text-sm space-y-2 animate-in fade-in duration-200 ${
                selectedAnswer === currentQ.correctAnswer
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-rose-50 border-rose-200 text-rose-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  {selectedAnswer === currentQ.correctAnswer ? 'Richtig beantwortet! 🎉' : 'Erklärung zur richtigen Antwort:'}
                </span>
                <button
                  onClick={() => speakGerman(currentQ.correctAnswer)}
                  className="p-1.5 bg-white rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors text-slate-700"
                  title="Antwort vorlesen"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="leading-relaxed">{currentQ.explanation}</p>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">
              Aktueller Punktestand: <strong>{score}</strong>
            </span>

            {!hasSubmitted ? (
              <button
                id="quiz-confirm-btn"
                disabled={!selectedAnswer}
                onClick={handleConfirmAnswer}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer"
              >
                Antwort bestätigen
              </button>
            ) : (
              <button
                id="quiz-next-btn"
                onClick={handleNextQuestion}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>
                  {questionIndex < filteredQuestions.length - 1 ? 'Nächste Frage' : 'Ergebnis anzeigen'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Quiz Finished Screen */
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md max-w-xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-3xl mx-auto flex items-center justify-center shadow-inner">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Quiz abgeschlossen!
            </h3>
            <p className="text-sm text-slate-600">
              Du hast dein Deutschwissen erfolgreich auf die Probe gestellt.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="text-4xl font-black text-slate-900">
              {score} / {filteredQuestions.length}
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Erfolgsquote: {Math.round((score / filteredQuestions.length) * 100)}%
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-700 bg-emerald-50 py-2 rounded-xl border border-emerald-200">
              ⚡ +{score * 10 + 15} XP deinem Profil gutgeschrieben!
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleRestartQuiz}
              className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Quiz wiederholen</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
