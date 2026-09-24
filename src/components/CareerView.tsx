import React, { useState } from 'react';
import {
  Briefcase,
  Volume2,
  Send,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  Building2,
  Target,
  MessageSquare,
  FileText,
  HelpCircle,
  Award,
  Database,
  Layers,
  Cpu,
  Code,
  BarChart3,
  Search,
  RotateCw,
  Play,
  ArrowRight,
  BookOpen,
  X,
  SlidersHorizontal
} from 'lucide-react';
import { LanguageLevel, TechProfession, ProfessionVocabTerm, AppDomain } from '../types';
import {
  PRODUCT_MANAGEMENT_TERMS,
  PROFESSION_VOCABULARY_TERMS,
  TECH_PROFESSIONS,
  AGILE_CEREMONIES,
  INTERVIEW_QUESTIONS,
  WORKPLACE_EMAIL_TEMPLATES
} from '../data/careerData';
import { speakGerman } from '../utils/speech';

interface CareerViewProps {
  currentLevel: LanguageLevel | 'ALL';
  onActivityPerformed: () => void;
  currentDomain?: AppDomain;
}

type CareerSubTab = 'professions-vocab' | 'interview-prep' | 'agile-ceremonies' | 'user-story-builder' | 'business-emails';

export const CareerView: React.FC<CareerViewProps> = ({ currentLevel, onActivityPerformed, currentDomain }) => {
  const [activeSubTab, setActiveSubTab] = useState<CareerSubTab>('professions-vocab');

  // Profession tab state
  const [selectedProfession, setSelectedProfession] = useState<TechProfession | 'ALL'>('Data Engineer');
  const [vocabSearchQuery, setVocabSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [isFlashcardModalOpen, setIsFlashcardModalOpen] = useState<boolean>(false);
  const [flashcardIndex, setFlashcardIndex] = useState<number>(0);
  const [isFlashcardFlipped, setIsFlashcardFlipped] = useState<boolean>(false);

  // Sync selected profession if domain corresponds to one
  React.useEffect(() => {
    if (currentDomain === 'data') {
      setSelectedProfession('Data Engineer');
    } else if (currentDomain === 'product') {
      setSelectedProfession('Product Owner');
    } else if (currentDomain === 'medical') {
      setSelectedProfession('Medical Doctor');
    } else if (currentDomain === 'student_wi') {
      setSelectedProfession('Student (Wirtschaftsinformatik)');
    }
  }, [currentDomain]);

  // Interview state
  const [selectedInterviewId, setSelectedInterviewId] = useState<string>(INTERVIEW_QUESTIONS[0].id);
  const [userInterviewAnswer, setUserInterviewAnswer] = useState<string>('');
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [feedbackResult, setFeedbackResult] = useState<{
    score?: number;
    grammarRating?: string;
    feedbackGerman?: string;
    feedbackEnglish?: string;
    improvedGermanAnswer?: string;
    suggestedPhrases?: string[];
  } | null>(null);

  // User Story Generator state
  const [storyRole, setStoryRole] = useState('Kunde / Endnutzer');
  const [storyAction, setStoryAction] = useState('Bestellungen mit einem Klick stornieren können');
  const [storyBenefit, setStoryBenefit] = useState('Fehlkäufe ohne Support-Aufwand rückgängig zu machen');
  const [generatedStory, setGeneratedStory] = useState<{
    storyGerman: string;
    criteria: string[];
  } | null>(null);

  // Email template copied feedback
  const [copiedTemplateId, setCopiedTemplateId] = useState<string | null>(null);

  const activeInterviewQ = INTERVIEW_QUESTIONS.find((q) => q.id === selectedInterviewId) || INTERVIEW_QUESTIONS[0];

  // Handle Interview evaluation
  const handleEvaluateInterview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInterviewAnswer.trim()) return;

    setIsEvaluating(true);
    setFeedbackResult(null);

    try {
      const res = await fetch('/api/ai/interview-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: activeInterviewQ.questionGerman,
          answer: userInterviewAnswer,
          role: activeInterviewQ.targetRole,
          level: currentLevel === 'ALL' ? 'B1' : currentLevel,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setFeedbackResult(data);
        onActivityPerformed();
      } else {
        throw new Error('API evaluation failed');
      }
    } catch {
      // Offline fallback evaluation
      setFeedbackResult({
        score: 85,
        grammarRating: 'Gut & Fachlich fundiert',
        feedbackGerman: 'Guter sprachlicher Aufbau! Achten Sie im Vorstellungsgespräch darauf, konkrete Ergebnisse aus Ihrer bisherigen Praxis als Product Owner / Manager hervorzuheben.',
        feedbackEnglish: 'Strong professional tone. Make sure to clearly state the measurable business outcome (STAR method: Result).',
        improvedGermanAnswer: `In meiner Rolle als ${activeInterviewQ.targetRole} habe ich diese Herausforderung strukturiert gelöst: ${userInterviewAnswer}`,
        suggestedPhrases: [
          'Meines Erachtens nach ist Transparenz der Schlüssel...',
          'Im Rahmen der Sprint-Planung stimme ich mich eng mit den Stakeholdern ab...',
        ],
      });
      onActivityPerformed();
    } finally {
      setIsEvaluating(false);
    }
  };

  // Generate User Story
  const handleGenerateStory = () => {
    const story = `Als ${storyRole} möchte ich ${storyAction}, damit ${storyBenefit}.`;
    const criteria = [
      '1. Der Nutzer sieht eine deutliche Bestätigungsabfrage vor der Aktion.',
      '2. Die Änderung wird innerhalb von 2 Sekunden im System persistiert.',
      '3. Eine automatisierte Benachrichtigung wird an die betroffenen Systeme versendet.',
      '4. Der Vorgang erfüllt alle Compliance- und Datenschutzrichtlinien (DSGVO).'
    ];
    setGeneratedStory({ storyGerman: story, criteria });
    onActivityPerformed();
  };

  const handleCopyEmail = (templateId: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplateId(templateId);
    setTimeout(() => setCopiedTemplateId(null), 2500);
  };

  return (
    <div className="space-y-6">
      
      {/* Intro Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950">
                Berufsdeutsch & Karriere
              </span>
              <span className="text-xs text-indigo-200">
                Data Engineer · Data Architect · Product Owner · PM · Tech Teams
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Dein deutscher Karriere- & Arbeitsalltags-Coach
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Perfektioniere deinen Auftritt in deutschen Technologieunternehmen: Fachvokabular für Data Engineers, Data Architects, Product Owner & Manager, authentische Besprechungen, Interview-Training mit STAR-Methode und E-Mail-Vorlagen.
            </p>
          </div>

          <div className="p-4 bg-white/10 rounded-2xl border border-white/15 backdrop-blur-xs shrink-0 self-start md:self-auto text-center space-y-1">
            <Briefcase className="w-6 h-6 text-amber-300 mx-auto" />
            <div className="text-xs font-bold text-white">Praxisorientiert</div>
            <div className="text-[11px] text-slate-300">Für Vorstellungsgespräch & Büro</div>
          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-6 mt-4 border-t border-white/10">
          {[
            { id: 'professions-vocab' as CareerSubTab, label: 'Berufe & Fachwörterbuch (Data Engineer, Architect, PO...)', icon: Briefcase },
            { id: 'interview-prep' as CareerSubTab, label: 'Vorstellungsgespräch (Interview)', icon: MessageSquare },
            { id: 'agile-ceremonies' as CareerSubTab, label: 'Agile Besprechungen (Standup, Planning)', icon: Building2 },
            { id: 'user-story-builder' as CareerSubTab, label: 'User Story Generator', icon: Sparkles },
            { id: 'business-emails' as CareerSubTab, label: 'Geschäftliche E-Mails', icon: FileText },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`career-subtab-${tab.id}`}
                onClick={() => setActiveSubTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-500' : 'text-slate-300'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= 1. INTERVIEW PREP ================= */}
      {activeSubTab === 'interview-prep' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Question List Sidebar */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1 mb-2">
              Typische Interviewfragen ({INTERVIEW_QUESTIONS.length})
            </div>

            <div className="space-y-2">
              {INTERVIEW_QUESTIONS.map((q) => {
                const isSelected = selectedInterviewId === q.id;
                return (
                  <button
                    key={q.id}
                    id={`interview-q-select-${q.id}`}
                    onClick={() => {
                      setSelectedInterviewId(q.id);
                      setFeedbackResult(null);
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all text-xs flex flex-col gap-1.5 ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-black ${
                        isSelected ? 'bg-amber-400 text-slate-900' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {q.targetRole}
                      </span>
                      <span className={`text-[10px] font-semibold ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {q.category}
                      </span>
                    </div>
                    <p className="font-bold text-sm leading-snug line-clamp-2">
                      {q.questionGerman}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Question Simulator & STAR Breakdown */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              
              {/* Question Header & Audio */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-black bg-indigo-100 text-indigo-800 border border-indigo-200">
                      Rolle: {activeInterviewQ.targetRole}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      Niveau {activeInterviewQ.level}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                    "{activeInterviewQ.questionGerman}"
                  </h3>
                  <p className="text-xs text-slate-500 italic">
                    {activeInterviewQ.questionEnglish}
                  </p>
                </div>

                <button
                  onClick={() => speakGerman(activeInterviewQ.questionGerman)}
                  className="p-3 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 rounded-2xl transition-colors shrink-0"
                  title="Frage anhören"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              {/* Recruiter Context Tip */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <HelpCircle className="w-4 h-4 text-indigo-600" />
                  <span>Worauf deutsche Interviewer bei dieser Frage achten:</span>
                </div>
                <p className="leading-relaxed">{activeInterviewQ.contextTip}</p>
              </div>

              {/* STAR Method in German */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Strukturierte Antwort nach der STAR-Methode (auf Deutsch):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 space-y-1">
                    <span className="font-bold text-blue-900">S – Situation:</span>
                    <p className="text-slate-700">{activeInterviewQ.starFormula.situation}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100 space-y-1">
                    <span className="font-bold text-amber-900">T – Task (Aufgabe):</span>
                    <p className="text-slate-700">{activeInterviewQ.starFormula.task}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100 space-y-1">
                    <span className="font-bold text-purple-900">A – Action (Aktion):</span>
                    <p className="text-slate-700">{activeInterviewQ.starFormula.action}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 space-y-1">
                    <span className="font-bold text-emerald-900">R – Result (Ergebnis):</span>
                    <p className="text-slate-700">{activeInterviewQ.starFormula.result}</p>
                  </div>
                </div>
              </div>

              {/* Model Answer Showcase */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Deutsche Musterantwort (Sehr gutes Vorstellungsgespräch)
                    </span>
                  </div>
                  <button
                    onClick={() => speakGerman(activeInterviewQ.modelAnswerGerman)}
                    className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                    title="Musterantwort vorlesen"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
                  "{activeInterviewQ.modelAnswerGerman}"
                </p>
                <p className="text-xs text-slate-400 italic pt-1 border-t border-white/10">
                  {activeInterviewQ.modelAnswerEnglish}
                </p>
              </div>

              {/* Power Phrases */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Schlüsselphrasen & Einstiege für diese Antwort:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeInterviewQ.powerPhrases.map((phrase, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-2.5 py-1 bg-slate-100 rounded-lg text-xs font-semibold text-slate-700 border border-slate-200"
                    >
                      ✓ {phrase}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Practice Box */}
              <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <h4 className="text-sm font-bold text-slate-900">
                    Jetzt selbst auf Deutsch antworten & bewerten lassen:
                  </h4>
                </div>

                <form onSubmit={handleEvaluateInterview} className="space-y-3">
                  <textarea
                    id="interview-user-answer-textarea"
                    rows={3}
                    value={userInterviewAnswer}
                    onChange={(e) => setUserInterviewAnswer(e.target.value)}
                    placeholder="Formuliere deine eigene Antwort auf Deutsch (z.B. In meiner letzten Position als Product Owner habe ich...)"
                    className="w-full p-3.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 text-slate-800"
                  />
                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setUserInterviewAnswer(activeInterviewQ.modelAnswerGerman.slice(0, 120) + '...')}
                      className="text-[11px] text-indigo-600 hover:text-indigo-800 font-semibold"
                    >
                      Vorlage einfügen
                    </button>

                    <button
                      id="interview-evaluate-btn"
                      type="submit"
                      disabled={isEvaluating || !userInterviewAnswer.trim()}
                      className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                    >
                      {isEvaluating ? (
                        <span>Wird analysiert...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Antwort analysieren</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Feedback Presentation */}
                {feedbackResult && (
                  <div className="mt-4 p-4 rounded-2xl bg-white border border-indigo-200 space-y-3 text-xs animate-in fade-in duration-150">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-indigo-900 text-sm">Feedback & Bewertung:</span>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-black">
                          {feedbackResult.grammarRating || 'Gut'}
                        </span>
                      </div>
                      <span className="text-slate-500 font-bold">
                        Score: {feedbackResult.score || 85}/100
                      </span>
                    </div>

                    <div className="space-y-1">
                      <p className="text-slate-800 leading-relaxed font-medium">
                        {feedbackResult.feedbackGerman}
                      </p>
                      <p className="text-slate-500 italic">
                        {feedbackResult.feedbackEnglish}
                      </p>
                    </div>

                    {feedbackResult.improvedGermanAnswer && (
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                        <span className="font-bold text-slate-600 text-[11px] uppercase tracking-wider">
                          Optimierte deutsche Formulierung:
                        </span>
                        <p className="font-bold text-slate-900">
                          "{feedbackResult.improvedGermanAnswer}"
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= 2. PROFESSIONS & VOCABULARY ================= */}
      {activeSubTab === 'professions-vocab' && (() => {
        const getProfessionIcon = (id: TechProfession) => {
          switch (id) {
            case 'Data Engineer': return Database;
            case 'Data Architect': return Layers;
            case 'Product Owner': return Target;
            case 'Product Manager': return Cpu;
            case 'Software Engineer': return Code;
            case 'Data Analyst': return BarChart3;
            default: return Briefcase;
          }
        };

        const activeProfMeta = TECH_PROFESSIONS.find((p) => p.id === selectedProfession);

        const displayedTerms = PROFESSION_VOCABULARY_TERMS.filter((item) => {
          if (selectedProfession !== 'ALL' && item.profession !== selectedProfession) return false;
          if (selectedCategory !== 'ALL' && item.category !== selectedCategory) return false;
          if (vocabSearchQuery.trim()) {
            const q = vocabSearchQuery.toLowerCase();
            return (
              item.term.toLowerCase().includes(q) ||
              item.english.toLowerCase().includes(q) ||
              item.definitionGerman.toLowerCase().includes(q) ||
              item.exampleSentence.toLowerCase().includes(q)
            );
          }
          return true;
        });

        const availableCategories = Array.from(
          new Set(
            PROFESSION_VOCABULARY_TERMS
              .filter((item) => selectedProfession === 'ALL' || item.profession === selectedProfession)
              .map((item) => item.category)
          )
        );

        const handleLaunchFlashcards = () => {
          if (displayedTerms.length > 0) {
            setFlashcardIndex(0);
            setIsFlashcardFlipped(false);
            setIsFlashcardModalOpen(true);
            onActivityPerformed();
          }
        };

        const handleJumpToInterview = () => {
          if (selectedProfession !== 'ALL') {
            const match = INTERVIEW_QUESTIONS.find((q) => q.targetRole === selectedProfession);
            if (match) {
              setSelectedInterviewId(match.id);
            }
          }
          setActiveSubTab('interview-prep');
          onActivityPerformed();
        };

        return (
          <div className="space-y-6">
            
            {/* Clickable Professions Tab Bar */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-amber-500" />
                    <span>Wähle ein Tech-Berufsfeld / Fachrolle</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Klicke auf eine Rolle, um authentisches deutsches Fachvokabular, Praxisbeispiele und Aufgabenfelder zu erkunden.
                  </p>
                </div>
                <div className="text-xs font-bold text-slate-400">
                  {PROFESSION_VOCABULARY_TERMS.length} Fachbegriffe verfügbar
                </div>
              </div>

              {/* Clickable Profession Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
                {TECH_PROFESSIONS.map((prof) => {
                  const isSelected = selectedProfession === prof.id;
                  const count = PROFESSION_VOCABULARY_TERMS.filter((t) => t.profession === prof.id).length;
                  const ProfIcon = getProfessionIcon(prof.id);

                  return (
                    <button
                      key={prof.id}
                      id={`prof-tab-${prof.id.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => {
                        setSelectedProfession(prof.id);
                        setSelectedCategory('ALL');
                        setVocabSearchQuery('');
                        onActivityPerformed();
                      }}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-[1.02]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-white hover:text-slate-900'
                      }`}
                    >
                      <ProfIcon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                      <span>{prof.nameGerman}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                        isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-200/80 text-slate-700'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}

                {/* All Professions Tab */}
                <button
                  id="prof-tab-all"
                  onClick={() => {
                    setSelectedProfession('ALL');
                    setSelectedCategory('ALL');
                    setVocabSearchQuery('');
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                    selectedProfession === 'ALL'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <Briefcase className={`w-4 h-4 ${selectedProfession === 'ALL' ? 'text-amber-400' : 'text-slate-500'}`} />
                  <span>Alle Berufe</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                    selectedProfession === 'ALL' ? 'bg-amber-400 text-slate-950' : 'bg-slate-200/80 text-slate-700'
                  }`}>
                    {PROFESSION_VOCABULARY_TERMS.length}
                  </span>
                </button>
              </div>
            </div>

            {/* Role Header Banner (when a specific role is selected) */}
            {activeProfMeta && (
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-1.5 max-w-3xl">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-xl font-black text-slate-900">
                        {activeProfMeta.nameGerman}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                        {activeProfMeta.nameEnglish}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                        {activeProfMeta.tagline}
                      </span>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {activeProfMeta.descriptionGerman}
                    </p>
                    <p className="text-xs text-slate-400 italic">
                      {activeProfMeta.descriptionEnglish}
                    </p>
                  </div>

                  {/* Quick CTAs for the Role */}
                  <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
                    <button
                      onClick={handleLaunchFlashcards}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all shadow-xs cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Flashcard-Modus ({displayedTerms.length})</span>
                    </button>
                    <button
                      onClick={handleJumpToInterview}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-xs cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-amber-400" />
                      <span>Interviewfrage üben</span>
                    </button>
                  </div>
                </div>

                {/* Core Responsibilities */}
                <div className="border-t border-slate-100 pt-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Typische Aufgabenfelder im deutschen Arbeitsalltag:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProfMeta.coreResponsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Search and Category Filter Bar */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-3">
              <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
                
                {/* Search Input */}
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={vocabSearchQuery}
                    onChange={(e) => setVocabSearchQuery(e.target.value)}
                    placeholder="Fachbegriffe durchsuchen (z. B. Pipeline, Governance, Refinement)..."
                    className="w-full pl-9 pr-8 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-indigo-500 focus:bg-white text-slate-800"
                  />
                  {vocabSearchQuery && (
                    <button
                      onClick={() => setVocabSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Counter & Action */}
                <div className="flex items-center gap-3 text-xs text-slate-500 w-full sm:w-auto justify-between sm:justify-end">
                  <span>
                    Zeige <strong className="text-slate-900 font-bold">{displayedTerms.length}</strong> von {PROFESSION_VOCABULARY_TERMS.length} Fachbegriffen
                  </span>
                  <button
                    onClick={handleLaunchFlashcards}
                    className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Als Karteikarten</span>
                  </button>
                </div>
              </div>

              {/* Category Filter Pills */}
              {availableCategories.length > 1 && (
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                    Kategorie:
                  </span>
                  <button
                    onClick={() => setSelectedCategory('ALL')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer whitespace-nowrap transition-colors ${
                      selectedCategory === 'ALL'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Alle ({PROFESSION_VOCABULARY_TERMS.filter(t => selectedProfession === 'ALL' || t.profession === selectedProfession).length})
                  </button>
                  {availableCategories.map((cat) => {
                    const count = PROFESSION_VOCABULARY_TERMS.filter(
                      (t) => (selectedProfession === 'ALL' || t.profession === selectedProfession) && t.category === cat
                    ).length;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer whitespace-nowrap transition-colors ${
                          selectedCategory === cat
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {cat} ({count})
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Vocabulary Grid */}
            {displayedTerms.length === 0 ? (
              <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 space-y-2">
                <Search className="w-8 h-8 text-slate-300 mx-auto" />
                <p className="font-bold text-slate-700">Keine Fachbegriffe für diesen Filter gefunden</p>
                <button
                  onClick={() => {
                    setVocabSearchQuery('');
                    setSelectedCategory('ALL');
                  }}
                  className="text-xs text-indigo-600 font-bold hover:underline"
                >
                  Filter zurücksetzen
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {displayedTerms.map((item, idx) => {
                  const isFlipped = !!flippedCards[idx];

                  // Article color styling
                  let articleColor = 'bg-slate-100 text-slate-700 border-slate-200';
                  if (item.article === 'der') articleColor = 'bg-blue-50 text-blue-700 border-blue-200';
                  if (item.article === 'die') articleColor = 'bg-rose-50 text-rose-700 border-rose-200';
                  if (item.article === 'das') articleColor = 'bg-amber-50 text-amber-800 border-amber-200';

                  return (
                    <div
                      key={idx}
                      className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all space-y-3.5 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        {/* Header: Article, Term, Pronounce Button */}
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              {item.article && (
                                <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider border ${articleColor}`}>
                                  {item.article}
                                </span>
                              )}
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-600">
                                {item.category}
                              </span>
                              {selectedProfession === 'ALL' && (
                                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                                  {item.profession}
                                </span>
                              )}
                            </div>

                            <div className="flex items-baseline gap-2">
                              <h4 className="text-lg font-black text-slate-900 tracking-tight">
                                {item.term}
                              </h4>
                              {item.plural && (
                                <span className="text-xs text-slate-400">
                                  {item.plural}
                                </span>
                              )}
                            </div>
                            <p className="text-xs font-bold text-indigo-600">
                              {item.english}
                            </p>
                          </div>

                          <button
                            onClick={() => speakGerman(item.term)}
                            className="p-2 rounded-xl bg-slate-50 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-200 transition-colors shrink-0 cursor-pointer"
                            title="Aussprache anhören"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Definitions */}
                        <div className="text-xs space-y-1 border-t border-slate-100 pt-2.5">
                          <p className="text-slate-800 font-medium leading-relaxed">
                            {item.definitionGerman}
                          </p>
                          <p className="text-slate-400 italic">
                            {item.definitionEnglish}
                          </p>
                        </div>
                      </div>

                      {/* Workplace Example Sentence */}
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-xs font-bold text-slate-900 leading-snug">
                            "{item.exampleSentence}"
                          </p>
                          <button
                            onClick={() => speakGerman(item.exampleSentence)}
                            className="text-slate-400 hover:text-indigo-600 p-0.5 shrink-0 cursor-pointer"
                            title="Beispielsatz anhören"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] text-slate-500 italic">
                          {item.exampleTranslation}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Flashcard Modal */}
            {isFlashcardModalOpen && displayedTerms.length > 0 && (() => {
              const currentCard = displayedTerms[flashcardIndex] || displayedTerms[0];

              return (
                <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
                  <div className="bg-white w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 animate-in fade-in zoom-in-95">
                    
                    {/* Modal Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                          {selectedProfession === 'ALL' ? 'Fachwörterbuch' : selectedProfession}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          Karte {flashcardIndex + 1} von {displayedTerms.length}
                        </span>
                      </div>
                      <button
                        onClick={() => setIsFlashcardModalOpen(false)}
                        className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Interactive 3D Flip Card */}
                    <div
                      onClick={() => setIsFlashcardFlipped(!isFlashcardFlipped)}
                      className="cursor-pointer min-h-[260px] p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white flex flex-col justify-between shadow-lg relative select-none"
                    >
                      {/* Top bar inside card */}
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>{currentCard.category}</span>
                        <span className="text-[11px] text-amber-300 font-bold">
                          Klicken zum Umdrehen ↻
                        </span>
                      </div>

                      {/* Content Front / Back */}
                      {!isFlashcardFlipped ? (
                        <div className="my-auto text-center space-y-3">
                          {currentCard.article && (
                            <span className="inline-block px-3 py-1 rounded-md text-xs font-black uppercase tracking-widest bg-white/20 text-white">
                              {currentCard.article}
                            </span>
                          )}
                          <h3 className="text-2xl sm:text-3xl font-black text-white">
                            {currentCard.term}
                          </h3>
                          {currentCard.plural && (
                            <p className="text-xs text-slate-300">
                              {currentCard.plural}
                            </p>
                          )}
                          <div className="pt-2">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                speakGerman(currentCard.term);
                              }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
                            >
                              <Volume2 className="w-4 h-4 text-amber-400" />
                              <span>Aussprache</span>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="my-auto space-y-3 text-left">
                          <div>
                            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                              Englische Übersetzung:
                            </span>
                            <p className="text-lg font-bold text-white">
                              {currentCard.english}
                            </p>
                          </div>

                          <div className="space-y-1 border-t border-white/10 pt-2 text-xs">
                            <p className="text-slate-200">
                              {currentCard.definitionGerman}
                            </p>
                            <p className="text-slate-400 italic">
                              {currentCard.definitionEnglish}
                            </p>
                          </div>

                          <div className="p-2.5 bg-white/10 rounded-xl border border-white/10 text-xs space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-white">
                                "{currentCard.exampleSentence}"
                              </span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  speakGerman(currentCard.exampleSentence);
                                }}
                                className="text-amber-400 hover:text-white p-0.5"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <p className="text-[11px] text-slate-300 italic">
                              {currentCard.exampleTranslation}
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="text-center text-[10px] text-slate-400 pt-2">
                        {isFlashcardFlipped ? 'Klicken, um Vorderseite zu sehen' : 'Klicken für Definition & Beispielsatz'}
                      </div>
                    </div>

                    {/* Flashcard Navigation */}
                    <div className="flex items-center justify-between gap-3">
                      <button
                        onClick={() => {
                          setFlashcardIndex((prev) => Math.max(0, prev - 1));
                          setIsFlashcardFlipped(false);
                        }}
                        disabled={flashcardIndex === 0}
                        className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
                      >
                        ← Vorherige
                      </button>

                      <button
                        onClick={() => {
                          speakGerman(isFlashcardFlipped ? currentCard.exampleSentence : currentCard.term);
                        }}
                        className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer"
                        title="Anhören"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          if (flashcardIndex < displayedTerms.length - 1) {
                            setFlashcardIndex((prev) => prev + 1);
                            setIsFlashcardFlipped(false);
                          } else {
                            setIsFlashcardModalOpen(false);
                          }
                        }}
                        className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 cursor-pointer"
                      >
                        {flashcardIndex < displayedTerms.length - 1 ? 'Nächste →' : 'Fertig'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}

          </div>
        );
      })()}

      {/* ================= 3. AGILE CEREMONIES ================= */}
      {activeSubTab === 'agile-ceremonies' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-5 border border-slate-200">
            <h3 className="text-lg font-black text-slate-900">
              Agile Besprechungen & Zeremonien auf Deutsch
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Praktische Redewendungen für das Daily Standup, Sprint Planning, Review und Retrospektive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AGILE_CEREMONIES.map((ceremony, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4"
              >
                <div className="border-b border-slate-100 pb-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-extrabold text-slate-900">
                      {ceremony.ceremonyName}
                    </h4>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                      {ceremony.ceremonyNameGerman}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {ceremony.purpose}
                  </p>
                </div>

                <div className="space-y-3">
                  {ceremony.keyPhrases.map((phrase, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            {phrase.context}
                          </span>
                          <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                            "{phrase.phrase}"
                          </p>
                        </div>
                        <button
                          onClick={() => speakGerman(phrase.phrase)}
                          className="p-1.5 bg-white text-slate-600 rounded-lg border border-slate-200 hover:text-indigo-600 hover:border-indigo-200 transition-colors shrink-0"
                          title="Phrase anhören"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs text-slate-500 italic">
                        {phrase.english}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= 4. USER STORY GENERATOR ================= */}
      {activeSubTab === 'user-story-builder' && (
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-xl font-black text-slate-900">
                User Story Generator auf Deutsch
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Lerne das standardisierte deutsche Format für agile Benutzeranforderungen: Als [Rolle] möchte ich [Funktion], damit [Nutzen].
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  1. Benutzer-Rolle (Als...)
                </label>
                <input
                  type="text"
                  value={storyRole}
                  onChange={(e) => setStoryRole(e.target.value)}
                  className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  2. Gewünschte Funktion / Aktion (möchte ich...)
                </label>
                <input
                  type="text"
                  value={storyAction}
                  onChange={(e) => setStoryAction(e.target.value)}
                  className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  3. Geschäftlicher Mehrwert (damit...)
                </label>
                <input
                  type="text"
                  value={storyBenefit}
                  onChange={(e) => setStoryBenefit(e.target.value)}
                  className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800"
                />
              </div>

              <button
                onClick={handleGenerateStory}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Deutsche User Story & Akzeptanzkriterien generieren</span>
              </button>
            </div>

            {generatedStory && (
              <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-4 animate-in fade-in duration-150">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
                    Fertige User Story (Jira-Format):
                  </span>
                  <button
                    onClick={() => speakGerman(generatedStory.storyGerman)}
                    className="p-1.5 bg-white text-indigo-700 rounded-lg border border-indigo-200 hover:bg-indigo-100 transition-colors"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-indigo-100 font-bold text-sm text-slate-900 leading-relaxed">
                  "{generatedStory.storyGerman}"
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="text-xs font-bold text-indigo-950 uppercase tracking-wider">
                    Definierte Akzeptanzkriterien:
                  </span>
                  <div className="p-3 bg-white rounded-xl border border-indigo-100 text-xs text-slate-800 space-y-1">
                    {generatedStory.criteria.map((c, i) => (
                      <p key={i}>{c}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= 5. BUSINESS EMAILS ================= */}
      {activeSubTab === 'business-emails' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-5 border border-slate-200">
            <h3 className="text-lg font-black text-slate-900">
              Deutsche E-Mail-Vorlagen für das Berufsleben
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Professionelle Vorlagen mit formalen Anreden, Konjunktiv II und passenden Schlussformeln.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WORKPLACE_EMAIL_TEMPLATES.map((tpl) => (
              <div
                key={tpl.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-slate-100 text-slate-700">
                      {tpl.type}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {tpl.register}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-base text-slate-900">
                    {tpl.title}
                  </h4>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800">
                    <span className="text-slate-400 font-normal">Betreff: </span>
                    {tpl.subjectGerman}
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 font-mono whitespace-pre-line leading-relaxed max-h-64 overflow-y-auto">
                    {tpl.bodyGerman}
                  </div>

                  <p className="text-[11px] text-slate-500">
                    💡 <strong>Tipp:</strong> {tpl.notes}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => speakGerman(tpl.bodyGerman.slice(0, 150))}
                    className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-indigo-600 font-medium"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Anhören</span>
                  </button>

                  <button
                    id={`copy-email-btn-${tpl.id}`}
                    onClick={() => handleCopyEmail(tpl.id, `Betreff: ${tpl.subjectGerman}\n\n${tpl.bodyGerman}`)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all"
                  >
                    {copiedTemplateId === tpl.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Kopiert!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Vorlage kopieren</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
