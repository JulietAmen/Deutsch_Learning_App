export type LanguageLevel = 'A2' | 'B1' | 'B2';

export type Article = 'der' | 'die' | 'das';

export type AppDomain = 
  | 'general' 
  | 'product' 
  | 'data' 
  | 'medical' 
  | 'student_wi';

export interface DomainInfo {
  id: AppDomain;
  titleGerman: string;
  titleEnglish: string;
  tagline: string;
  descriptionGerman: string;
  descriptionEnglish: string;
  badge: string;
  iconType: 'globe' | 'briefcase' | 'database' | 'stethoscope' | 'graduation-cap';
  accentColor: string;
}

export interface VocabularyItem {
  id: string;
  german: string;
  article?: Article;
  plural?: string;
  english: string;
  level: LanguageLevel;
  category: string;
  exampleSentence: string;
  exampleTranslation: string;
  notes?: string;
  tags?: string[];
}

export interface GrammarExample {
  german: string;
  english: string;
  highlightWord?: string;
  note?: string;
}

export interface GrammarRuleTable {
  headers: string[];
  rows: string[][];
}

export interface GrammarTopic {
  id: string;
  level: LanguageLevel;
  titleGerman: string;
  titleEnglish: string;
  summary: string;
  ruleFormula: string;
  explanation: string;
  examples: GrammarExample[];
  ruleTable?: GrammarRuleTable;
  commonMistakes?: string[];
  tip?: string;
}

export interface SentenceExercise {
  id: string;
  level: LanguageLevel;
  englishPrompt: string;
  targetSentenceGerman: string;
  scrambledWords: string[];
  explanation: string;
  ruleHint: string;
  category: 'daily' | 'workplace' | 'grammar-focus';
}

export type QuizType = 'multiple-choice' | 'fill-in-blank' | 'article-picker' | 'sentence-order';

export interface QuizQuestion {
  id: string;
  level: LanguageLevel | 'Workplace';
  type: QuizType;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  category: string;
}

export interface AgileCeremony {
  ceremonyName: string;
  ceremonyNameGerman: string;
  purpose: string;
  keyPhrases: {
    phrase: string;
    english: string;
    context: string;
  }[];
}

export type TechProfession =
  | 'Product Owner'
  | 'Product Manager'
  | 'Data Engineer'
  | 'Data Architect'
  | 'Medical Doctor'
  | 'Student (Wirtschaftsinformatik)'
  | 'Software Engineer'
  | 'Data Analyst';

export interface ProfessionVocabTerm {
  term: string;
  article?: Article;
  plural?: string;
  english: string;
  profession: TechProfession;
  definitionGerman: string;
  definitionEnglish: string;
  exampleSentence: string;
  exampleTranslation: string;
  category: string;
}

export type ProductManagementTerm = ProfessionVocabTerm;

export interface InterviewQuestion {
  id: string;
  questionGerman: string;
  questionEnglish: string;
  category: 'Personal' | 'Product Strategy' | 'Agile & Team' | 'Conflict & Stakeholders' | 'Technical Collaboration' | 'System & Data Architecture' | 'Data Pipelines & Reliability';
  level: LanguageLevel;
  targetRole: TechProfession | 'General Workplace';
  contextTip: string;
  modelAnswerGerman: string;
  modelAnswerEnglish: string;
  powerPhrases: string[];
  starFormula: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
}

export interface StreakData {
  currentStreak: number;
  maxStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
  activeDaysHistory: string[]; // array of YYYY-MM-DD
  todayCount: number;
  dailyGoalTarget: number;
  totalXp: number;
  completedActivities: {
    vocabCount: number;
    quizzesCount: number;
    sentencesCount: number;
    interviewCount: number;
  };
  learnedVocabIds: string[];
}
