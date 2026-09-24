import React from 'react';
import { Flame, Zap, CheckCircle, Calendar, Award, Target, X } from 'lucide-react';
import { StreakData } from '../types';
import { getTodayDateString } from '../utils/streak';

interface StreakModalProps {
  isOpen: boolean;
  onClose: () => void;
  streakData: StreakData;
}

export const StreakModal: React.FC<StreakModalProps> = ({ isOpen, onClose, streakData }) => {
  if (!isOpen) return null;

  const today = getTodayDateString();
  const daysOfWeek = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  
  // Calculate the last 7 days ending today
  const last7Days: { dateStr: string; label: string; isActive: boolean; isToday: boolean }[] = [];
  const currentDate = new Date();
  
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(currentDate.getDate() - i);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const dateStr = `${y}-${m}-${day}`;
    
    // Day of week index where Monday is 0, Sunday is 6
    const dayIndex = (d.getDay() + 6) % 7;
    const label = daysOfWeek[dayIndex];
    const isActive = streakData.activeDaysHistory.includes(dateStr);
    const isToday = dateStr === today;
    
    last7Days.push({ dateStr, label, isActive, isToday });
  }

  // Daily goal calculation
  const goalProgressPercent = Math.min(100, Math.round((streakData.todayCount / streakData.dailyGoalTarget) * 100));

  // Determine learner tier based on XP
  let rankTitle = 'A2 Deutsch-Entdecker';
  if (streakData.totalXp >= 300) rankTitle = 'B2 Sprachprofi & Product Leader';
  else if (streakData.totalXp >= 150) rankTitle = 'B1 Agiler Kommunikator';

  return (
    <div id="streak-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
      <div id="streak-modal-card" className="w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden text-slate-800 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header with Flame */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-xs">
              <Flame className="w-7 h-7 text-amber-200 fill-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold tracking-tight">Tages-Serie (Streak)</h2>
                <span className="px-2 py-0.5 bg-white/25 text-xs font-semibold rounded-full uppercase tracking-wider">Aktiv</span>
              </div>
              <p className="text-xs text-amber-100 mt-0.5">Jeden Tag Deutsch üben hält den Lernfortschritt lebendig</p>
            </div>
          </div>
          <button
            id="streak-modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Main Streak Counter Stat */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200">
              <div className="text-2xl font-black text-amber-700 flex items-center justify-center gap-1">
                <span>{streakData.currentStreak}</span>
                <span className="text-base font-normal text-amber-600">Tage</span>
              </div>
              <p className="text-xs text-amber-800 font-medium mt-0.5">Aktuelle Serie</p>
            </div>

            <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-200">
              <div className="text-2xl font-black text-rose-700 flex items-center justify-center gap-1">
                <span>{streakData.maxStreak}</span>
                <span className="text-base font-normal text-rose-600">Tage</span>
              </div>
              <p className="text-xs text-rose-800 font-medium mt-0.5">Längste Serie</p>
            </div>

            <div className="p-3.5 bg-blue-50 rounded-xl border border-blue-200">
              <div className="text-2xl font-black text-blue-700 flex items-center justify-center gap-1">
                <span>{streakData.totalXp}</span>
                <Zap className="w-4 h-4 text-amber-500 fill-amber-400" />
              </div>
              <p className="text-xs text-blue-800 font-medium mt-0.5">Gesamt XP</p>
            </div>
          </div>

          {/* 7-Day Activity Matrix */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                Letzte 7 Tage
              </span>
              <span>{streakData.activeDaysHistory.includes(today) ? 'Heute erledigt!' : 'Heute noch ausstehend'}</span>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {last7Days.map((day) => (
                <div
                  key={day.dateStr}
                  className={`flex flex-col items-center p-2 rounded-xl border text-center transition-all ${
                    day.isActive
                      ? 'bg-amber-50 border-amber-300 text-amber-900 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-400'
                  } ${day.isToday ? 'ring-2 ring-orange-400 font-bold' : ''}`}
                >
                  <span className="text-xs font-medium">{day.label}</span>
                  <div className="mt-1.5">
                    {day.isActive ? (
                      <Flame className="w-5 h-5 text-amber-500 fill-amber-400" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-dashed border-slate-300 flex items-center justify-center text-[10px] text-slate-300">
                        •
                      </div>
                    )}
                  </div>
                  {day.isToday && <span className="text-[9px] text-orange-600 font-bold mt-1">HEUTE</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Daily Goal Bar */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-slate-700">Tagesziel: 5 Aktivitäten</span>
              </div>
              <span className="text-xs font-bold text-slate-600">
                {streakData.todayCount} / {streakData.dailyGoalTarget} ({goalProgressPercent}%)
              </span>
            </div>
            
            <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 rounded-full"
                style={{ width: `${goalProgressPercent}%` }}
              />
            </div>
            <p className="text-xs text-slate-500">
              {streakData.todayCount >= streakData.dailyGoalTarget
                ? '🎉 Glückwunsch! Du hast dein heutiges Lernziel erreicht.'
                : `Noch ${streakData.dailyGoalTarget - streakData.todayCount} Übung(en) heute bis zum Erreichen deines Tagesziels.`}
            </p>
          </div>

          {/* Stats Breakdown */}
          <div className="border-t border-slate-200 pt-4">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
              Erreichte Meilensteine
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span><strong>{streakData.completedActivities.vocabCount}</strong> Vokabeln geübt</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                <span><strong>{streakData.completedActivities.quizzesCount}</strong> Quizzes absolviert</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle className="w-4 h-4 text-purple-500 shrink-0" />
                <span><strong>{streakData.completedActivities.sentencesCount}</strong> Sätze gebaut</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span><strong>{streakData.completedActivities.interviewCount}</strong> Berufsübungen</span>
              </div>
            </div>

            <div className="mt-3 p-2.5 bg-indigo-50 border border-indigo-100 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-600" />
                <span className="text-xs text-indigo-900 font-medium">Dein Rang:</span>
              </div>
              <span className="text-xs font-bold text-indigo-700">{rankTitle}</span>
            </div>
          </div>
        </div>

        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors"
          >
            Weiterlernen
          </button>
        </div>
      </div>
    </div>
  );
};
