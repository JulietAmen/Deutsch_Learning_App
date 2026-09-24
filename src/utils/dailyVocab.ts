import { VocabularyItem, LanguageLevel } from '../types';

export interface DailyVocabSet {
  date: string; // YYYY-MM-DD
  formattedDate: string; // e.g. "Montag, 21. September 2026"
  theme: string;
  themeDescription: string;
  items: VocabularyItem[];
  isAiGenerated?: boolean;
}

export const DAILY_THEMES = [
  {
    theme: 'Agiles Arbeiten & Backlog-Management',
    desc: 'Wichtige Begriffe für User Stories, Priorisierung und Scrum Zeremonien.',
  },
  {
    theme: 'Büroalltag & Teamkommunikation',
    desc: 'Flüssige deutsche Phrasen für Absprachen, E-Mails und Status-Updates.',
  },
  {
    theme: 'Produktstrategie & Nutzeranalyse',
    desc: 'Fachsprache für Roadmaps, Zielgruppen und quantitative Metriken.',
  },
  {
    theme: 'Entwicklung, Software & Qualitätssicherung',
    desc: 'Zusammenarbeit mit Tech-Teams, Architekten und QA-Ingenieuren.',
  },
  {
    theme: 'Entscheidungsfindung & Konfliktmanagement',
    desc: 'Diplomatisches Formulieren und konstruktives Feedback im deutschen Berufskontext.',
  },
  {
    theme: 'Präsentationen & Stakeholder-Alignment',
    desc: 'Souveränes Auftreten in Reviews, Vorstands-Pitches und Demos.',
  },
  {
    theme: 'Kundengespräche & Anforderungsanalyse',
    desc: 'Kundenbedürfnisse präzise erfassen und in Akzeptanzkriterien übersetzen.',
  },
  {
    theme: 'Data Engineering & Daten-Pipelines',
    desc: 'Fachbegriffe für ETL, Streaming, Kafka, Fehlertoleranz und Datenintegrität.',
  },
  {
    theme: 'Datenarchitektur, Data Mesh & Governance',
    desc: 'Enterprise Data Strategy, Mandantenfähigkeit, Datenkataloge und DSGVO.',
  },
];

// Rich deterministic curated vocab banks rotated across the days of the year
const CURATED_DAILY_POOLS: Record<LanguageLevel, VocabularyItem[][]> = {
  A2: [
    [
      {
        id: 'daily_a2_1_1',
        german: 'die Vereinbarung',
        article: 'die',
        plural: 'die Vereinbarungen',
        english: 'agreement / arrangement',
        level: 'A2',
        category: 'Büro & Absprachen',
        exampleSentence: 'Wir haben gestern eine klare Vereinbarung getroffen.',
        exampleTranslation: 'We reached a clear agreement yesterday.',
        notes: 'Häufig mit "treffen" verwendet (eine Vereinbarung treffen).',
        tags: ['daily', 'agile']
      },
      {
        id: 'daily_a2_1_2',
        german: 'der Fortschritt',
        article: 'der',
        plural: 'die Fortschritte',
        english: 'progress',
        level: 'A2',
        category: 'Projekt & Status',
        exampleSentence: 'Das Team macht diese Woche große Fortschritte.',
        exampleTranslation: 'The team is making great progress this week.',
        notes: 'Plural: die Fortschritte.',
        tags: ['daily', 'work']
      },
      {
        id: 'daily_a2_1_3',
        german: 'das Feedback',
        article: 'das',
        english: 'feedback / input',
        level: 'A2',
        category: 'Kommunikation',
        exampleSentence: 'Danke für dein schnelles Feedback zum Entwurf.',
        exampleTranslation: 'Thank you for your quick feedback on the draft.',
        notes: 'Neutrum im Deutschen: das Feedback.',
        tags: ['daily', 'agile']
      },
      {
        id: 'daily_a2_1_4',
        german: 'überprüfen',
        english: 'to check / to verify',
        level: 'A2',
        category: 'Qualität & Test',
        exampleSentence: 'Ich überprüfe die Daten noch vor dem Feierabend.',
        exampleTranslation: 'I will verify the data before finishing work.',
        notes: 'Untrennbares Präfix über- (ich überprüfe, hat überprüft).',
        tags: ['daily', 'verbs']
      },
      {
        id: 'daily_a2_1_5',
        german: 'die Zusammenfassung',
        article: 'die',
        plural: 'die Zusammenfassungen',
        english: 'summary / recap',
        level: 'A2',
        category: 'Meeting & Doku',
        exampleSentence: 'Hier ist eine kurze Zusammenfassung unseres Gesprächs.',
        exampleTranslation: 'Here is a short summary of our conversation.',
        notes: 'Nomen auf -ung sind immer feminin (die).',
        tags: ['daily', 'office']
      }
    ],
    [
      {
        id: 'daily_a2_2_1',
        german: 'die Unterstützung',
        article: 'die',
        english: 'support / assistance',
        level: 'A2',
        category: 'Teamarbeit',
        exampleSentence: 'Brauchst du Unterstützung bei dieser Aufgabe?',
        exampleTranslation: 'Do you need support with this task?',
        notes: 'Kollokation: Unterstützung anbieten / anfordern.',
        tags: ['daily', 'team']
      },
      {
        id: 'daily_a2_2_2',
        german: 'der Vorschlag',
        article: 'der',
        plural: 'die Vorschläge',
        english: 'suggestion / proposal',
        level: 'A2',
        category: 'Meeting & Ideen',
        exampleSentence: 'Das ist ein sehr guter Vorschlag für unser nächstes Feature.',
        exampleTranslation: 'That is a very good suggestion for our next feature.',
        notes: 'Vorschlagen (Verb) -> der Vorschlag (Nomen).',
        tags: ['daily', 'office']
      },
      {
        id: 'daily_a2_2_3',
        german: 'das Dokument',
        article: 'das',
        plural: 'die Dokumente',
        english: 'document',
        level: 'A2',
        category: 'Office & Tech',
        exampleSentence: 'Bitte speichere das Dokument im gemeinsamen Ordner.',
        exampleTranslation: 'Please save the document in the shared folder.',
        notes: 'Plural: die Dokumente.',
        tags: ['daily', 'files']
      },
      {
        id: 'daily_a2_2_4',
        german: 'lösen',
        english: 'to solve / to resolve',
        level: 'A2',
        category: 'Problembehandlung',
        exampleSentence: 'Wir können das Problem gemeinsam lösen.',
        exampleTranslation: 'We can solve the problem together.',
        notes: 'Reguläres schwaches Verb (löste, gelöst).',
        tags: ['daily', 'verbs']
      },
      {
        id: 'daily_a2_2_5',
        german: 'die Vorbereitung',
        article: 'die',
        plural: 'die Vorbereitungen',
        english: 'preparation',
        level: 'A2',
        category: 'Planung',
        exampleSentence: 'Die Vorbereitung auf den Sprint hat zwei Stunden gedauert.',
        exampleTranslation: 'The preparation for the sprint took two hours.',
        notes: 'Vorbereiten (Verb mit trennbarem Vor-).',
        tags: ['daily', 'agile']
      }
    ]
  ],
  B1: [
    [
      {
        id: 'daily_b1_1_1',
        german: 'die Abstimmung',
        article: 'die',
        plural: 'die Abstimmungen',
        english: 'coordination / alignment',
        level: 'B1',
        category: 'Workplace & Agile',
        exampleSentence: 'Wir brauchen eine kurze Abstimmung mit dem Design-Team.',
        exampleTranslation: 'We need a quick alignment sync with the design team.',
        notes: 'Sehr gebräuchlich in deutschen Büros anstelle von "Sync".',
        tags: ['daily', 'meeting', 'agile']
      },
      {
        id: 'daily_b1_1_2',
        german: 'der Mehrwert',
        article: 'der',
        plural: 'die Mehrwerte',
        english: 'added value / benefit',
        level: 'B1',
        category: 'Produkt & Business',
        exampleSentence: 'Welchen konkreten Mehrwert bringt diese Funktion für den Nutzer?',
        exampleTranslation: 'What concrete added value does this feature bring to the user?',
        notes: 'Zusammengesetztes Nomen: mehr + Wert.',
        tags: ['daily', 'pm', 'product']
      },
      {
        id: 'daily_b1_1_3',
        german: 'die Anforderung',
        article: 'die',
        plural: 'die Anforderungen',
        english: 'requirement / specification',
        level: 'B1',
        category: 'Backlog & Tech',
        exampleSentence: 'Die technischen Anforderungen müssen vor dem Sprint geklärt sein.',
        exampleTranslation: 'The technical requirements must be clarified before the sprint.',
        notes: 'Anforderungen definieren, erfüllen oder anpassen.',
        tags: ['daily', 'po', 'scrum']
      },
      {
        id: 'daily_b1_1_4',
        german: 'nachvollziehen',
        english: 'to understand / to retrace / to comprehend',
        level: 'B1',
        category: 'Kommunikation & Logik',
        exampleSentence: 'Ich kann deine Bedenken bezüglich der Deadline gut nachvollziehen.',
        exampleTranslation: 'I can easily understand your concerns regarding the deadline.',
        notes: 'Trennbares Verb: ich vollziehe nach, hat nachvollzogen.',
        tags: ['daily', 'verbs']
      },
      {
        id: 'daily_b1_1_5',
        german: 'der Engpass',
        article: 'der',
        plural: 'die Engpässe',
        english: 'bottleneck / constraint',
        level: 'B1',
        category: 'Projektmanagement',
        exampleSentence: 'Die Server-Kapazität ist momentan unser größter Engpass.',
        exampleTranslation: 'Server capacity is currently our biggest bottleneck.',
        notes: 'Metapher: enger Pass -> Flaschenhals.',
        tags: ['daily', 'agile', 'scrum']
      }
    ],
    [
      {
        id: 'daily_b1_2_1',
        german: 'die Machbarkeit',
        article: 'die',
        english: 'feasibility',
        level: 'B1',
        category: 'Tech & Konzeption',
        exampleSentence: 'Wir prüfen zunächst die technische Machbarkeit dieser Lösung.',
        exampleTranslation: 'We first verify the technical feasibility of this solution.',
        notes: 'Machbarkeitsstudie = feasibility study.',
        tags: ['daily', 'tech']
      },
      {
        id: 'daily_b1_2_2',
        german: 'die Zielgruppe',
        article: 'die',
        plural: 'die Zielgruppen',
        english: 'target audience / target group',
        level: 'B1',
        category: 'Produkt & Marketing',
        exampleSentence: 'Wer ist die primäre Zielgruppe für unser neues Onboarding?',
        exampleTranslation: 'Who is the primary target group for our new onboarding?',
        notes: 'Zusammensetzung aus Ziel + Gruppe.',
        tags: ['daily', 'product']
      },
      {
        id: 'daily_b1_2_3',
        german: 'überarbeiten',
        english: 'to revise / to rework',
        level: 'B1',
        category: 'Prozesse & Doku',
        exampleSentence: 'Wir müssen die User Story anhand des Nutzerfeedbacks überarbeiten.',
        exampleTranslation: 'We need to revise the user story based on user feedback.',
        notes: 'Untrennbar: hat überarbeitet.',
        tags: ['daily', 'verbs']
      },
      {
        id: 'daily_b1_2_4',
        german: 'die Schätzung',
        article: 'die',
        plural: 'die Schätzungen',
        english: 'estimate / estimation (Story Points)',
        level: 'B1',
        category: 'Agile & Planning',
        exampleSentence: 'Im Planning Poker geben die Entwickler ihre Schätzung ab.',
        exampleTranslation: 'In Planning Poker, the developers submit their estimate.',
        notes: 'Schätzen = to estimate.',
        tags: ['daily', 'agile']
      },
      {
        id: 'daily_b1_2_5',
        german: 'die Rücksprache',
        article: 'die',
        plural: 'die Rücksprachen',
        english: 'consultation / discussion',
        level: 'B1',
        category: 'Kommunikation',
        exampleSentence: 'Nach Rücksprache mit dem Product Owner ändern wir das Design.',
        exampleTranslation: 'After consultation with the Product Owner, we are changing the design.',
        notes: 'Feste Wendung: "in Rücksprache mit" (+ Dativ).',
        tags: ['daily', 'office']
      }
    ]
  ],
  B2: [
    [
      {
        id: 'daily_b2_1_1',
        german: 'die Weichenstellung',
        article: 'die',
        plural: 'die Weichenstellungen',
        english: 'groundwork / strategic direction / setting the course',
        level: 'B2',
        category: 'Strategie & Leadership',
        exampleSentence: 'Dieser Release ist eine entscheidende Weichenstellung für das Quartal.',
        exampleTranslation: 'This release is a crucial strategic course setting for the quarter.',
        notes: 'Metapher aus der Eisenbahn (Weichen stellen = richtungsweisend entscheiden).',
        tags: ['daily', 'b2', 'strategy']
      },
      {
        id: 'daily_b2_1_2',
        german: 'das Alleinstellungsmerkmal',
        article: 'das',
        plural: 'die Alleinstellungsmerkmale',
        english: 'unique selling proposition (USP)',
        level: 'B2',
        category: 'Produktmanagement',
        exampleSentence: 'Die nahtlose Offline-Fähigkeit ist unser zentrales Alleinstellungsmerkmal.',
        exampleTranslation: 'Seamless offline capability is our core unique selling proposition.',
        notes: 'Oft als USP abgekürzt. Aus allein + Stellung + Merkmal.',
        tags: ['daily', 'b2', 'product']
      },
      {
        id: 'daily_b2_1_3',
        german: 'etwas in Betracht ziehen',
        english: 'to take something into consideration / to contemplate',
        level: 'B2',
        category: 'Nomen-Verb-Verbindung',
        exampleSentence: 'Wir sollten alternative Datenbanken ernsthaft in Betracht ziehen.',
        exampleTranslation: 'We should seriously take alternative databases into consideration.',
        notes: 'Gehobene Nomen-Verb-Verbindung für "berücksichtigen".',
        tags: ['daily', 'b2', 'idiom']
      },
      {
        id: 'daily_b2_1_4',
        german: 'die Skalierbarkeit',
        article: 'die',
        english: 'scalability',
        level: 'B2',
        category: 'Technologie & Architektur',
        exampleSentence: 'Die Cloud-Infrastruktur garantiert die Skalierbarkeit unserer Plattform.',
        exampleTranslation: 'The cloud infrastructure guarantees the scalability of our platform.',
        notes: 'Endung auf -keit ist immer feminin (die).',
        tags: ['daily', 'b2', 'tech']
      },
      {
        id: 'daily_b2_1_5',
        german: 'die Fehlerbehebung',
        article: 'die',
        plural: 'die Fehlerbehebungen',
        english: 'bug fixing / error remediation',
        level: 'B2',
        category: 'Engineering & QA',
        exampleSentence: 'Wir priorisieren die Fehlerbehebung vor neuen Feature-Entwicklungen.',
        exampleTranslation: 'We prioritize bug fixing over new feature developments.',
        notes: 'Formaler als das englische "Bugfixing". Aus Fehler + beheben.',
        tags: ['daily', 'b2', 'dev']
      }
    ],
    [
      {
        id: 'daily_b2_2_1',
        german: 'zur Verfügung stehen',
        english: 'to be available / at disposal',
        level: 'B2',
        category: 'Nomen-Verb-Verbindung',
        exampleSentence: 'Die neue API steht ab nächster Woche allen Partnern zur Verfügung.',
        exampleTranslation: 'The new API will be available to all partners starting next week.',
        notes: 'Passivische Bedeutung (verfügbar sein).',
        tags: ['daily', 'b2', 'idiom']
      },
      {
        id: 'daily_b2_2_2',
        german: 'die Ressourcenallokation',
        article: 'die',
        plural: 'die Ressourcenallokationen',
        english: 'resource allocation',
        level: 'B2',
        category: 'Projektleitung',
        exampleSentence: 'Eine effiziente Ressourcenallokation verhindert Überstunden im Team.',
        exampleTranslation: 'Efficient resource allocation prevents overtime in the team.',
        notes: 'Fachbegriff aus der Betriebswirtschaft und Projektsteuerung.',
        tags: ['daily', 'b2', 'management']
      },
      {
        id: 'daily_b2_2_3',
        german: 'gewährleisten',
        english: 'to ensure / to guarantee / to warrant',
        level: 'B2',
        category: 'Verbindlichkeit & SLAs',
        exampleSentence: 'Wir müssen eine Systemverfügbarkeit von 99,9 % gewährleisten.',
        exampleTranslation: 'We must ensure a system availability of 99.9%.',
        notes: 'Untrennbares Verb: hat gewährleistet.',
        tags: ['daily', 'b2', 'verbs']
      },
      {
        id: 'daily_b2_2_4',
        german: 'die Benutzerfreundlichkeit',
        article: 'die',
        english: 'usability / user-friendliness',
        level: 'B2',
        category: 'UX & Product Design',
        exampleSentence: 'Die Benutzerfreundlichkeit hat sich durch das Redesign signifikant verbessert.',
        exampleTranslation: 'The user-friendliness significantly improved through the redesign.',
        notes: 'Deutsches Äquivalent zu Usability / UX.',
        tags: ['daily', 'b2', 'design']
      },
      {
        id: 'daily_b2_2_5',
        german: 'der Handlungsbedarf',
        article: 'der',
        english: 'need for action / urgency',
        level: 'B2',
        category: 'Entscheidung & Audit',
        exampleSentence: 'Bei den Ladezeiten der App besteht dringender Handlungsbedarf.',
        exampleTranslation: 'There is an urgent need for action regarding the app load times.',
        notes: 'Zusammengesetztes Nomen: Handlung + Bedarf.',
        tags: ['daily', 'b2', 'audit']
      }
    ]
  ]
};

/**
 * Returns today's ISO date string (YYYY-MM-DD)
 */
export function getTodayDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Formats a date string into readable German text
 */
export function formatGermanDate(dateStr: string): string {
  try {
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('de-DE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

/**
 * Generates a stable deterministic numeric hash from date string
 */
function getDateHash(dateStr: string): number {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash << 5) - hash + dateStr.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Returns the theme metadata for a given date
 */
export function getDailyThemeForDate(dateStr: string): { theme: string; desc: string } {
  const hash = getDateHash(dateStr);
  return DAILY_THEMES[hash % DAILY_THEMES.length];
}

/**
 * Gets curated deterministic vocabulary for a specific date and level
 */
export function getCuratedDailyVocab(dateStr: string, level: LanguageLevel | 'ALL'): VocabularyItem[] {
  const hash = getDateHash(dateStr);

  if (level === 'ALL') {
    // Combine items across levels for today
    const a2Pool = CURATED_DAILY_POOLS.A2[hash % CURATED_DAILY_POOLS.A2.length];
    const b1Pool = CURATED_DAILY_POOLS.B1[hash % CURATED_DAILY_POOLS.B1.length];
    const b2Pool = CURATED_DAILY_POOLS.B2[hash % CURATED_DAILY_POOLS.B2.length];
    return [a2Pool[0], a2Pool[1], b1Pool[0], b1Pool[1], b2Pool[0], b2Pool[1]];
  }

  const pool = CURATED_DAILY_POOLS[level];
  const selectedIndex = hash % pool.length;
  return pool[selectedIndex];
}

/**
 * Retrieves daily vocab from localStorage or seeds it
 */
export function loadDailyVocabSet(dateStr: string, level: LanguageLevel | 'ALL'): DailyVocabSet {
  const cacheKey = `deutschmeister_daily_vocab_${dateStr}_${level}`;
  if (typeof window !== 'undefined') {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch (e) {
        console.warn('Failed to parse cached daily vocab:', e);
      }
    }
  }

  const { theme, desc } = getDailyThemeForDate(dateStr);
  const items = getCuratedDailyVocab(dateStr, level);
  const set: DailyVocabSet = {
    date: dateStr,
    formattedDate: formatGermanDate(dateStr),
    theme,
    themeDescription: desc,
    items,
    isAiGenerated: false,
  };

  if (typeof window !== 'undefined') {
    localStorage.setItem(cacheKey, JSON.stringify(set));
  }
  return set;
}

/**
 * Generates fresh AI vocabulary for today via the backend endpoint
 */
export async function requestAiDailyVocab(
  dateStr: string,
  level: LanguageLevel | 'ALL',
  theme?: string
): Promise<DailyVocabSet> {
  const cacheKey = `deutschmeister_daily_vocab_${dateStr}_${level}`;
  try {
    const res = await fetch('/api/ai/daily-vocab', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date: dateStr,
        level: level === 'ALL' ? 'B1' : level,
        theme,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.vocabularies && Array.isArray(data.vocabularies) && data.vocabularies.length > 0) {
        const set: DailyVocabSet = {
          date: dateStr,
          formattedDate: formatGermanDate(dateStr),
          theme: data.theme || theme || 'Aktuelle Tagesvokabeln',
          themeDescription: data.themeDescription || 'Speziell für heute generierte Vokabeln mit Kontext.',
          items: data.vocabularies,
          isAiGenerated: true,
        };
        if (typeof window !== 'undefined') {
          localStorage.setItem(cacheKey, JSON.stringify(set));
        }
        return set;
      }
    }
  } catch (err) {
    console.warn('AI daily vocab generation failed, falling back to curated pool:', err);
  }

  return loadDailyVocabSet(dateStr, level);
}
