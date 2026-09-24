import React, { useState, useEffect, useMemo } from 'react';
import { Header, ActiveTab } from './components/Header';
import { StreakModal } from './components/StreakModal';
import { VocabularyView } from './components/VocabularyView';
import { GrammarView } from './components/GrammarView';
import { SentenceBuilderView } from './components/SentenceBuilderView';
import { QuizView } from './components/QuizView';
import { CareerView } from './components/CareerView';
import { LanguageLevel, StreakData, AppDomain } from './types';
import { loadStreakData, registerActivity, toggleLearnedVocab } from './utils/streak';
import {
  DOMAINS,
  getDomainVocabulary,
  getDomainGrammar,
  getDomainSentences,
  getDomainQuizzes
} from './data/domainData';
import { VOCABULARY_DATA } from './data/vocabularyData';
import { GRAMMAR_DATA } from './data/grammarData';
import { SENTENCE_EXERCISES } from './data/sentenceBuilderData';
import { QUIZ_QUESTIONS } from './data/quizData';
import {
  Flame,
  Globe,
  Briefcase,
  Database,
  Stethoscope,
  GraduationCap,
  ArrowLeft
} from 'lucide-react';

export default function App() {
  const [currentDomain, setCurrentDomain] = useState<AppDomain>('general');
  const [activeTab, setActiveTab] = useState<ActiveTab>('vocabulary');
  const [selectedLevel, setSelectedLevel] = useState<LanguageLevel | 'ALL'>('B1');
  const [streakData, setStreakData] = useState<StreakData>(loadStreakData());
  const [isStreakModalOpen, setIsStreakModalOpen] = useState(false);

  // Sync state on load
  useEffect(() => {
    setStreakData(loadStreakData());
  }, []);

  const handleActivityPerformed = (type: 'vocab' | 'quiz' | 'sentence' | 'interview' = 'vocab', xp: number = 10) => {
    const updated = registerActivity(type, xp);
    setStreakData(updated);
  };

  const handleToggleLearnedVocab = (id: string) => {
    const updated = toggleLearnedVocab(id);
    setStreakData(updated);
  };

  // Domain details and domain-filtered content
  const activeDomainInfo = useMemo(
    () => DOMAINS.find((d) => d.id === currentDomain) || DOMAINS[0],
    [currentDomain]
  );
  const isProfessionDomain = currentDomain !== 'general';
  const professionTitle = isProfessionDomain ? activeDomainInfo.titleGerman : undefined;

  const domainVocab = useMemo(
    () => getDomainVocabulary(currentDomain, VOCABULARY_DATA),
    [currentDomain]
  );
  const domainGrammar = useMemo(
    () => getDomainGrammar(currentDomain, GRAMMAR_DATA),
    [currentDomain]
  );
  const domainSentences = useMemo(
    () => getDomainSentences(currentDomain, SENTENCE_EXERCISES),
    [currentDomain]
  );
  const domainQuizzes = useMemo(
    () => getDomainQuizzes(currentDomain, QUIZ_QUESTIONS),
    [currentDomain]
  );

  const getDomainIcon = (iconType: string) => {
    switch (iconType) {
      case 'briefcase':
        return <Briefcase className="w-5 h-5 text-amber-500" />;
      case 'database':
        return <Database className="w-5 h-5 text-emerald-500" />;
      case 'stethoscope':
        return <Stethoscope className="w-5 h-5 text-rose-500" />;
      case 'graduation-cap':
        return <GraduationCap className="w-5 h-5 text-purple-500" />;
      default:
        return <Globe className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900">
      
      {/* Sticky Top Header with Domain Dropdown & Navigation */}
      <Header
        currentDomain={currentDomain}
        onDomainChange={setCurrentDomain}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        selectedLevel={selectedLevel}
        onLevelChange={setSelectedLevel}
        streakData={streakData}
        onOpenStreakModal={() => setIsStreakModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        
        {/* Profession Banner indicator when a profession is selected */}
        {isProfessionDomain && (
          <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-in fade-in duration-200">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-slate-900 shadow-xs shrink-0 mt-0.5 sm:mt-0">
                {getDomainIcon(activeDomainInfo.iconType)}
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 uppercase tracking-wider">
                    {activeDomainInfo.badge}
                  </span>
                  <h1 className="text-base sm:text-lg font-black text-slate-900">
                    {activeDomainInfo.titleGerman}
                  </h1>
                  <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                    ({activeDomainInfo.titleEnglish})
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  {activeDomainInfo.tagline}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setCurrentDomain('general');
                if (activeTab === 'career') {
                  setActiveTab('vocabulary');
                }
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Zurück zum allgemeinen Deutsch</span>
            </button>
          </div>
        )}

        {/* Active Tab View */}
        {activeTab === 'vocabulary' && (
          <VocabularyView
            currentLevel={selectedLevel}
            learnedVocabIds={streakData.learnedVocabIds}
            onToggleLearned={handleToggleLearnedVocab}
            onActivityPerformed={() => handleActivityPerformed('vocab', 10)}
            customVocabItems={isProfessionDomain ? domainVocab : undefined}
            professionTitle={professionTitle}
          />
        )}

        {activeTab === 'grammar' && (
          <GrammarView
            currentLevel={selectedLevel}
            onActivityPerformed={() => handleActivityPerformed('sentence', 15)}
            customTopics={isProfessionDomain ? domainGrammar : undefined}
            professionTitle={professionTitle}
          />
        )}

        {activeTab === 'sentence-builder' && (
          <SentenceBuilderView
            currentLevel={selectedLevel}
            onActivityPerformed={() => handleActivityPerformed('sentence', 20)}
            customExercises={isProfessionDomain ? domainSentences : undefined}
            professionTitle={professionTitle}
          />
        )}

        {activeTab === 'quizzes' && (
          <QuizView
            currentLevel={selectedLevel}
            onActivityPerformed={() => handleActivityPerformed('quiz', 15)}
            customQuestions={isProfessionDomain ? domainQuizzes : undefined}
            professionTitle={professionTitle}
          />
        )}

        {activeTab === 'career' && (
          <CareerView
            currentLevel={selectedLevel}
            onActivityPerformed={() => handleActivityPerformed('interview', 25)}
            currentDomain={currentDomain}
          />
        )}
      </main>

      {/* Streak Details Modal */}
      <StreakModal
        isOpen={isStreakModalOpen}
        onClose={() => setIsStreakModalOpen(false)}
        streakData={streakData}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md overflow-hidden flex flex-col border border-slate-300 shrink-0">
              <div className="h-1/3 bg-slate-900" />
              <div className="h-1/3 bg-red-600" />
              <div className="h-1/3 bg-amber-400" />
            </div>
            <span className="font-bold text-slate-700">DeutschMeister</span>
            <span>– German for A2, B1, B2 & Profession Mastery</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsStreakModalOpen(true)}
              className="flex items-center gap-1.5 text-amber-700 hover:text-amber-800 font-semibold transition-colors cursor-pointer"
            >
              <Flame className="w-3.5 h-3.5 fill-amber-400" />
              <span>{streakData.currentStreak} Tage Serie</span>
            </button>
            <span>•</span>
            <span>
              Aktueller Bereich:{' '}
              <strong className="text-slate-800 font-bold">{activeDomainInfo.titleGerman}</strong>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
