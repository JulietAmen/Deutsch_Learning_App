import React, { useState, useMemo } from 'react';
import { Layers, Volume2, CheckCircle2, AlertTriangle, Lightbulb, BookCheck, ArrowRight } from 'lucide-react';
import { GrammarTopic, LanguageLevel } from '../types';
import { GRAMMAR_DATA } from '../data/grammarData';
import { speakGerman } from '../utils/speech';

interface GrammarViewProps {
  currentLevel: LanguageLevel | 'ALL';
  onActivityPerformed: () => void;
  customTopics?: GrammarTopic[];
  professionTitle?: string;
}

export const GrammarView: React.FC<GrammarViewProps> = ({
  currentLevel,
  onActivityPerformed,
  customTopics,
  professionTitle,
}) => {
  const topicsSource = customTopics && customTopics.length > 0 ? customTopics : GRAMMAR_DATA;
  const [selectedTopicId, setSelectedTopicId] = useState<string>(topicsSource[0]?.id || '');
  const [completedTopicIds, setCompletedTopicIds] = useState<string[]>([]);
  const [playingExampleIndex, setPlayingExampleIndex] = useState<number | null>(null);

  // Filter topics based on level
  const availableTopics = useMemo(() => {
    if (currentLevel === 'ALL') return topicsSource;
    const filtered = topicsSource.filter((t) => t.level === currentLevel);
    // Fallback if no topics exist at the selected level for this domain
    return filtered.length > 0 ? filtered : topicsSource;
  }, [currentLevel, topicsSource]);

  // Current active topic
  const activeTopic = useMemo(() => {
    const found = availableTopics.find((t) => t.id === selectedTopicId);
    return found || availableTopics[0] || topicsSource[0];
  }, [availableTopics, selectedTopicId, topicsSource]);

  const handlePlayAudio = (text: string, index: number) => {
    setPlayingExampleIndex(index);
    speakGerman(text, {
      onEnd: () => setPlayingExampleIndex(null),
      onError: () => setPlayingExampleIndex(null),
    });
  };

  const handleMarkCompleted = (id: string) => {
    if (!completedTopicIds.includes(id)) {
      setCompletedTopicIds([...completedTopicIds, id]);
      onActivityPerformed();
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Intro Header */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
              <Layers className="w-6 h-6 text-blue-600" />
              {professionTitle ? `${professionTitle} – Fach-Grammatik` : 'Deutsche Grammatik nach Stufen'}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {professionTitle
                ? `Fachrelevante Grammatikregeln, Satzmuster und berufstypische Formulierungen für ${professionTitle}.`
                : 'Verständliche Erklärungen, Satzbauformeln, Praxistabellen und typische Fehler für A2, B1 und B2.'}
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 self-start sm:self-auto">
            <BookCheck className="w-4 h-4 text-emerald-600" />
            <span>{completedTopicIds.length} von {availableTopics.length} Lektionen verstanden</span>
          </div>
        </div>
      </div>

      {/* Main Grammar Layout: Topic Sidebar & Lesson Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Topics List */}
        <div className="lg:col-span-4 space-y-2.5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1 mb-2">
            Themenauswahl ({availableTopics.length})
          </div>

          <div className="space-y-2">
            {availableTopics.map((topic) => {
              const isSelected = activeTopic.id === topic.id;
              const isCompleted = completedTopicIds.includes(topic.id);

              return (
                <button
                  key={topic.id}
                  id={`grammar-topic-btn-${topic.id}`}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all text-sm flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900/10'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                        isSelected ? 'bg-amber-400 text-slate-900' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {topic.level}
                      </span>
                      <h4 className="font-bold text-sm leading-snug">
                        {topic.titleGerman}
                      </h4>
                    </div>
                    <p className={`text-xs ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {topic.titleEnglish}
                    </p>
                  </div>

                  <div className="shrink-0 mt-1">
                    {isCompleted ? (
                      <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    ) : (
                      <ArrowRight className={`w-4 h-4 ${isSelected ? 'text-slate-400' : 'text-slate-300'}`} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Detailed Lesson Content */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            
            {/* Lesson Title Header */}
            <div className="border-b border-slate-100 pb-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-black bg-blue-100 text-blue-800 border border-blue-200">
                  Niveau {activeTopic.level}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {activeTopic.titleEnglish}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {activeTopic.titleGerman}
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                {activeTopic.summary}
              </p>
            </div>

            {/* Rule Formula Banner */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>Kernformel & Satzbau</span>
              </div>
              <p className="text-sm sm:text-base font-mono font-bold text-amber-950">
                {activeTopic.ruleFormula}
              </p>
            </div>

            {/* Textual Explanation */}
            <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line space-y-2">
              {activeTopic.explanation}
            </div>

            {/* Rule Table if provided */}
            {activeTopic.ruleTable && (
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Übersichtstabelle
                </h4>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                        {activeTopic.ruleTable.headers.map((h, i) => (
                          <th key={i} className="p-3 whitespace-nowrap">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {activeTopic.ruleTable.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-3 text-slate-700">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Examples Section */}
            <div className="space-y-3 pt-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Beispielsätze aus dem Alltag & Beruf
              </h4>
              <div className="space-y-2.5">
                {activeTopic.examples.map((ex, exIdx) => {
                  const isPlaying = playingExampleIndex === exIdx;
                  return (
                    <div
                      key={exIdx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <p className="text-sm font-bold text-slate-900">
                            {ex.german}
                          </p>
                          {ex.highlightWord && (
                            <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                              {ex.highlightWord}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 italic">
                          {ex.english}
                        </p>
                        {ex.note && (
                          <p className="text-[11px] text-slate-600 font-medium">
                            💡 {ex.note}
                          </p>
                        )}
                      </div>

                      <button
                        onClick={() => handlePlayAudio(ex.german, exIdx)}
                        className={`p-2 rounded-lg border transition-all shrink-0 ${
                          isPlaying
                            ? 'bg-blue-600 text-white border-blue-600 scale-105'
                            : 'bg-white text-slate-600 border-slate-200 hover:text-blue-600 hover:border-blue-200'
                        }`}
                        title="Beispielsatz anhören"
                      >
                        <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'animate-pulse' : ''}`} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Common Mistakes Warning */}
            {activeTopic.commonMistakes && activeTopic.commonMistakes.length > 0 && (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-rose-800 uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Häufige Fehler vermeiden (Typische Stolperfallen)</span>
                </div>
                <ul className="text-xs text-rose-900 space-y-1.5 list-disc list-inside">
                  {activeTopic.commonMistakes.map((m, mIdx) => (
                    <li key={mIdx} className="font-medium">
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Completion Button */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs text-slate-500">
                Lerneffizienz: Regel verstehen und direkt im Satzbau anwenden.
              </span>

              <button
                id={`mark-topic-completed-${activeTopic.id}`}
                onClick={() => handleMarkCompleted(activeTopic.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  completedTopicIds.includes(activeTopic.id)
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {completedTopicIds.includes(activeTopic.id)
                    ? 'Lektion verstanden (+15 XP erfasst)'
                    : 'Gelesen & Verstanden (+15 XP)'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
