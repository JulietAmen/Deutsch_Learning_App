import React, { useState, useRef, useEffect } from 'react';
import {
  Flame,
  Zap,
  BookOpen,
  Layers,
  Puzzle,
  CheckCircle2,
  Briefcase,
  ChevronDown,
  Globe,
  Database,
  Stethoscope,
  GraduationCap,
  Check,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { LanguageLevel, StreakData, AppDomain } from '../types';
import { DOMAINS } from '../data/domainData';

export type ActiveTab = 'vocabulary' | 'grammar' | 'sentence-builder' | 'quizzes' | 'career';

interface HeaderProps {
  currentDomain: AppDomain;
  onDomainChange: (domain: AppDomain) => void;
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  selectedLevel: LanguageLevel | 'ALL';
  onLevelChange: (level: LanguageLevel | 'ALL') => void;
  streakData: StreakData;
  onOpenStreakModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentDomain,
  onDomainChange,
  activeTab,
  onTabChange,
  selectedLevel,
  onLevelChange,
  streakData,
  onOpenStreakModal,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeDomainInfo = DOMAINS.find((d) => d.id === currentDomain) || DOMAINS[0];

  const getDomainIcon = (iconType: string, className = "w-4 h-4") => {
    switch (iconType) {
      case 'briefcase':
        return <Briefcase className={className} />;
      case 'database':
        return <Database className={className} />;
      case 'stethoscope':
        return <Stethoscope className={className} />;
      case 'graduation-cap':
        return <GraduationCap className={className} />;
      case 'globe':
      default:
        return <Globe className={className} />;
    }
  };

  // General tabs vs. Profession tabs
  const tabs = currentDomain === 'general'
    ? [
        { id: 'vocabulary' as ActiveTab, label: 'Wortschatz', icon: BookOpen, sub: 'Alltag & Stufen' },
        { id: 'grammar' as ActiveTab, label: 'Grammatik', icon: Layers, sub: 'A2 · B1 · B2 Regeln' },
        { id: 'sentence-builder' as ActiveTab, label: 'Satzbau', icon: Puzzle, sub: 'Satzbau-Trainer' },
        { id: 'quizzes' as ActiveTab, label: 'Quizzes', icon: CheckCircle2, sub: 'Stufen-Tests' },
      ]
    : [
        { id: 'vocabulary' as ActiveTab, label: 'Fach-Wortschatz', icon: BookOpen, sub: 'Begriffe & Karten' },
        { id: 'grammar' as ActiveTab, label: 'Fach-Grammatik', icon: Layers, sub: 'Grammatik im Beruf' },
        { id: 'sentence-builder' as ActiveTab, label: 'Satzbau-Trainer', icon: Puzzle, sub: 'Praxis-Satzbau' },
        { id: 'quizzes' as ActiveTab, label: 'Fach-Quiz', icon: CheckCircle2, sub: 'Wissenstest' },
        { id: 'career' as ActiveTab, label: 'Karriere & Praxis', icon: Briefcase, sub: 'Interview & Vorlagen' },
      ];

  const handleSelectDomain = (domainId: AppDomain) => {
    onDomainChange(domainId);
    setIsDropdownOpen(false);
    // If switching to general and currently on career tab, fallback to vocabulary
    if (domainId === 'general' && activeTab === 'career') {
      onTabChange('vocabulary');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top bar */}
        <div className="flex flex-wrap items-center justify-between py-3 gap-3">
          
          {/* Logo, Title & Domain Dropdown */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* German flag minimal motif */}
            <div
              onClick={() => handleSelectDomain('general')}
              className="w-9 h-9 rounded-xl shadow-xs overflow-hidden flex flex-col border border-slate-300 shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
              title="Zur Startseite (Allgemeines Deutsch)"
            >
              <div className="h-1/3 bg-slate-900" />
              <div className="h-1/3 bg-red-600" />
              <div className="h-1/3 bg-amber-400" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSelectDomain('general')}
                  className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight text-left hover:text-blue-700 transition-colors cursor-pointer"
                >
                  DeutschMeister
                </button>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-md border border-slate-200">
                  A2 · B1 · B2
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden md:block">
                {currentDomain === 'general'
                  ? 'Deutsches Sprachtraining für A2, B1 und B2'
                  : `Fachbezogenes Deutschtraining: ${activeDomainInfo.titleGerman}`}
              </p>
            </div>

            {/* ============================================================== */}
            {/* DROPDOWN MENU FOR PROFESSIONS & GENERAL GERMAN                  */}
            {/* ============================================================== */}
            <div className="relative ml-1 sm:ml-2" ref={dropdownRef}>
              <button
                id="domain-dropdown-trigger"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer shadow-xs ${
                  currentDomain === 'general'
                    ? 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-300'
                    : 'bg-blue-50/80 hover:bg-blue-100 text-blue-900 border-blue-200 ring-2 ring-blue-500/20'
                }`}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <span className="p-1 rounded-lg bg-white shadow-2xs text-blue-700">
                  {getDomainIcon(activeDomainInfo.iconType, 'w-3.5 h-3.5 sm:w-4 sm:h-4')}
                </span>
                <span className="max-w-[130px] sm:max-w-[180px] md:max-w-[220px] truncate text-left">
                  {activeDomainInfo.titleGerman}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu Modal */}
              {isDropdownOpen && (
                <div
                  id="domain-dropdown-menu"
                  className="absolute left-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-slate-200 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Lernbereich auswählen
                    </p>
                    <p className="text-xs text-slate-600 font-medium">
                      Wechsle zwischen Allgemeinem Deutsch und Fachberufen
                    </p>
                  </div>

                  {/* General / Home Item */}
                  <div className="p-1.5 border-b border-slate-100">
                    <button
                      id="dropdown-option-general"
                      onClick={() => handleSelectDomain('general')}
                      className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                        currentDomain === 'general'
                          ? 'bg-blue-50 text-blue-900 font-semibold'
                          : 'hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-bold text-slate-900">
                            Allgemeines Deutsch (Startseite)
                          </span>
                          {currentDomain === 'general' && (
                            <Check className="w-4 h-4 text-blue-600 shrink-0" />
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          A2 · B1 · B2 Wortschatz, Grammatik & Alltagskonversation
                        </p>
                      </div>
                    </button>
                  </div>

                  {/* Profession Heading */}
                  <div className="px-4 pt-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                    <span>Berufsspezifisches Fachdeutsch</span>
                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-sm font-semibold">
                      Fachsprachlich
                    </span>
                  </div>

                  {/* Profession Items */}
                  <div className="p-1.5 space-y-1">
                    {DOMAINS.filter((d) => d.id !== 'general').map((domain) => {
                      const isSelected = currentDomain === domain.id;
                      return (
                        <button
                          key={domain.id}
                          id={`dropdown-option-${domain.id}`}
                          onClick={() => handleSelectDomain(domain.id)}
                          className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-blue-50 text-blue-900 font-semibold'
                              : 'hover:bg-slate-50 text-slate-800'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                            domain.id === 'product'
                              ? 'bg-amber-100 text-amber-700'
                              : domain.id === 'data'
                              ? 'bg-emerald-100 text-emerald-700'
                              : domain.id === 'medical'
                              ? 'bg-rose-100 text-rose-700'
                              : 'bg-purple-100 text-purple-700'
                          }`}>
                            {getDomainIcon(domain.iconType, 'w-4 h-4')}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                                {domain.titleGerman}
                              </span>
                              {isSelected && (
                                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                              {domain.tagline}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Level Switcher & Streak Badges */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Level Selector Pills */}
            <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold">
              {(['ALL', 'A2', 'B1', 'B2'] as const).map((lvl) => (
                <button
                  key={lvl}
                  id={`level-pill-${lvl}`}
                  onClick={() => onLevelChange(lvl)}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    selectedLevel === lvl
                      ? 'bg-white text-slate-900 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lvl === 'ALL' ? 'Alle' : lvl}
                </button>
              ))}
            </div>

            {/* Daily Streak Trigger */}
            <button
              id="header-streak-badge"
              onClick={onOpenStreakModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 hover:border-amber-300 transition-all text-amber-900 shadow-xs group cursor-pointer"
              title="Tages-Serie & Lernfortschritt ansehen"
            >
              <Flame className="w-4 h-4 text-amber-500 fill-amber-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">{streakData.currentStreak} d</span>
              <span className="hidden sm:inline text-[11px] text-amber-700 font-medium">Serie</span>
            </button>

            {/* XP Badge */}
            <button
              id="header-xp-badge"
              onClick={onOpenStreakModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 hover:border-blue-300 transition-all text-blue-900 shadow-xs cursor-pointer"
              title="Erfahrungspunkte"
            >
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span className="text-xs font-bold">{streakData.totalXp}</span>
              <span className="hidden sm:inline text-[11px] text-blue-700 font-medium">XP</span>
            </button>
          </div>
        </div>

        {/* Main Navigation Tabs */}
        <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2 no-scrollbar border-t border-slate-100">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`nav-tab-${tab.id}`}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

