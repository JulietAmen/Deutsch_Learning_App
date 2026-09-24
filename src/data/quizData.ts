import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ================= A2 QUIZ =================
  {
    id: 'q_a2_1',
    level: 'A2',
    type: 'article-picker',
    question: 'Welcher Artikel gehört zu diesem Wort: "___ Besprechung"?',
    options: ['der', 'die', 'das'],
    correctAnswer: 'die',
    explanation: 'Substantive mit der Endung "-ung" sind im Deutschen immer feminin: "die Besprechung", "die Erfahrung", "die Priorisierung".',
    category: 'Artikel & Nomen'
  },
  {
    id: 'q_a2_2',
    level: 'A2',
    type: 'fill-in-blank',
    question: 'Er kommt heute später zur Arbeit, _____ sein Zug Verspätung hat.',
    options: ['denn', 'weil', 'deshalb', 'trotzdem'],
    correctAnswer: 'weil',
    explanation: '"weil" leitet einen Nebensatz ein und schiebt das Verb ("hat") an das absolute Satzende. ("denn" würde normale Hauptsatzstellung erfordern).',
    category: 'Konnektoren'
  },
  {
    id: 'q_a2_3',
    level: 'A2',
    type: 'multiple-choice',
    question: 'Welcher Satz im Perfekt ist grammatikalisch korrekt?',
    options: [
      'Ich habe gestern ins Büro gegangen.',
      'Ich bin gestern ins Büro gegangen.',
      'Ich habe gestern ins Büro gegangen worden.',
      'Ich bin gestern ins Büro gegangt.'
    ],
    correctAnswer: 'Ich bin gestern ins Büro gegangen.',
    explanation: 'Verben der Ortsveränderung von A nach B (wie "gehen", "fahren", "fliegen") bilden das Perfekt stets mit dem Hilfsverb "sein" + Partizip II ("gegangen").',
    category: 'Perfekt'
  },
  {
    id: 'q_a2_4',
    level: 'A2',
    type: 'fill-in-blank',
    question: 'Der Laptop steht auf _____ Tisch (Wo? -> Stillstand / Dativ).',
    options: ['den', 'dem', 'der', 'das'],
    correctAnswer: 'dem',
    explanation: 'Wechselpräposition "auf": Auf die Frage "Wo steht der Laptop?" folgt der Dativ. "der Tisch" wird im Dativ zu "dem Tisch".',
    category: 'Wechselpräpositionen'
  },

  // ================= B1 QUIZ =================
  {
    id: 'q_b1_1',
    level: 'B1',
    type: 'multiple-choice',
    question: 'Wie formulieren Sie diese Bitte im beruflichen Kontext am höflichsten (Konjunktiv II)?',
    options: [
      'Geben Sie mir sofort die Dokumente!',
      'Ich will die Dokumente haben.',
      'Könnten Sie mir bitte die Dokumente zusenden?',
      'Sie müssen mir die Dokumente schicken.'
    ],
    correctAnswer: 'Könnten Sie mir bitte die Dokumente zusenden?',
    explanation: 'Im geschäftlichen Deutsch nutzt man "Könnten Sie bitte..." oder "Würden Sie...", um respektvoll und professionell aufzutreten.',
    category: 'Konjunktiv II'
  },
  {
    id: 'q_b1_2',
    level: 'B1',
    type: 'fill-in-blank',
    question: 'Das Ticket _____ gestern vom QA-Team erfolgreich getestet.',
    options: ['wird', 'wurde', 'worden', 'hatte'],
    correctAnswer: 'wurde',
    explanation: 'Vorgangspassiv in der Vergangenheit (Präteritum): "wurde" + Partizip II ("getestet").',
    category: 'Passiv'
  },
  {
    id: 'q_b1_3',
    level: 'B1',
    type: 'fill-in-blank',
    question: 'Das ist die Kollegin, mit _____ ich die Roadmap ausgearbeitet habe.',
    options: ['der', 'die', 'deren', 'denen'],
    correctAnswer: 'der',
    explanation: 'Relativsatz mit Präposition: Die Präposition "mit" verlangt zwingend den Dativ. "Die Kollegin" ist feminin -> "mit der".',
    category: 'Relativsätze'
  },
  {
    id: 'q_b1_4',
    level: 'B1',
    type: 'multiple-choice',
    question: 'Welcher Satz drückt eine Absicht mit "um...zu" grammatikalisch korrekt aus?',
    options: [
      'Wir testen das Feature, um Fehler frühzeitig zu entdecken.',
      'Wir testen das Feature, um Fehler frühzeitig entdecken.',
      'Wir testen das Feature, damit Fehler frühzeitig zu entdecken.',
      'Wir testen das Feature für Fehler frühzeitig zu entdecken.'
    ],
    correctAnswer: 'Wir testen das Feature, um Fehler frühzeitig zu entdecken.',
    explanation: 'Infinitivgruppe der Finalität: "um" + Erweiterung + "zu" + Infinitiv am Satzende ("zu entdecken"). Das Subjekt in beiden Teilsätzen ist identisch.',
    category: 'Infinitiv mit zu'
  },

  // ================= B2 QUIZ =================
  {
    id: 'q_b2_1',
    level: 'B2',
    type: 'multiple-choice',
    question: 'Welche Nomen-Verb-Verbindung bedeutet "etwas berücksichtigen / überlegen"?',
    options: [
      'in Betracht ziehen',
      'zur Verfügung stehen',
      'eine Entscheidung treffen',
      'zur Sprache bringen'
    ],
    correctAnswer: 'in Betracht ziehen',
    explanation: '"in Betracht ziehen" ist eine gehobene Nomen-Verb-Verbindung für "berücksichtigen" oder "in Erwägung ziehen".',
    category: 'Nomen-Verb-Verbindungen'
  },
  {
    id: 'q_b2_2',
    level: 'B2',
    type: 'fill-in-blank',
    question: 'Aufgrund _____ Serverausfalls konnten wir das Deployment nicht abschließen.',
    options: ['des', 'dem', 'der', 'den'],
    correctAnswer: 'des',
    explanation: 'Die Präposition "aufgrund" verlangt im Standarddeutschen den Genitiv. "Der Serverausfall" (maskulin) wird im Genitiv zu "des Serverausfalls".',
    category: 'Nominalstil & Genitiv'
  },
  {
    id: 'q_b2_3',
    level: 'B2',
    type: 'multiple-choice',
    question: 'Was drückt der Satz "Dieser Fehler lässt sich reproduzieren" aus?',
    options: [
      'Der Fehler muss unbedingt behoben werden.',
      'Der Fehler kann reproduziert werden (Möglichkeit).',
      'Der Fehler wurde absichtlich herbeigeführt.',
      'Niemand darf diesen Fehler reproduzieren.'
    ],
    correctAnswer: 'Der Fehler kann reproduziert werden (Möglichkeit).',
    explanation: '"sich lassen + Infinitiv" ist eine Passiversatzform, die eine passive Möglichkeit ausdrückt ("kann ... werden").',
    category: 'Passiversatzformen'
  },
  {
    id: 'q_b2_4',
    level: 'B2',
    type: 'fill-in-blank',
    question: 'Für Rückfragen stehe ich Ihnen jederzeit gerne _____ Verfügung.',
    options: ['zur', 'an die', 'in', 'mit'],
    correctAnswer: 'zur',
    explanation: 'Die feste Formulierung im geschäftlichen E-Mail-Verkehr lautet: "jemandem zur Verfügung stehen".',
    category: 'Geschäftsdeutsch'
  },

  // ================= WORKPLACE & PRODUCT OWNER QUIZ =================
  {
    id: 'q_wp_1',
    level: 'Workplace',
    type: 'multiple-choice',
    question: 'In einem Scrum Daily Standup: Welche 3 Kernfragen beantwortet jedes Teammitglied auf Deutsch?',
    options: [
      'Was habe ich gestern getan? Woran arbeite ich heute? Gibt es Blocker?',
      'Wie viel Budget haben wir noch? Wer ist schuld am Bug? Wann ist Feierabend?',
      'Wie gefällt mir das Design? Welche Story Points vergebe ich? Wer testet?',
      'Wann ist der nächste Urlaub? Welche E-Mails habe ich bekommen? Wer leitet das Meeting?'
    ],
    correctAnswer: 'Was habe ich gestern getan? Woran arbeite ich heute? Gibt es Blocker?',
    explanation: 'Das klassische agile Standup fokussiert sich auf: Fortschritt seit gestern, Ziel für heute und Hindernisse (Blocker/Impediments).',
    category: 'Agile & Scrum'
  },
  {
    id: 'q_wp_2',
    level: 'Workplace',
    type: 'fill-in-blank',
    question: 'Als Product Owner definiere ich die _____ , damit die Entwickler wissen, wann eine Story abgeschlossen ist.',
    options: ['Akzeptanzkriterien', 'Programmiersprachen', 'Urlaubstage', 'Hardwarekosten'],
    correctAnswer: 'Akzeptanzkriterien',
    explanation: 'Akzeptanzkriterien legen die konkreten Bedingungen fest, die ein Feature erfüllen muss, um als "Done" abgenommen zu werden.',
    category: 'Product Management'
  },
  {
    id: 'q_wp_3',
    level: 'Workplace',
    type: 'multiple-choice',
    question: 'Welches Priorisierungsprinzip bedeutet, dass man Aufgaben nach ihrem Verhältnis von Kosten der Verzögerung zur Dauer ordnet?',
    options: [
      'WSJF (Weighted Shortest Job First)',
      'Wasserfall-Modell',
      'Alphabetische Sortierung',
      'First In, First Out (FIFO)'
    ],
    correctAnswer: 'WSJF (Weighted Shortest Job First)',
    explanation: 'WSJF ist ein gängiges Priorisierungsmodell in agilen Organisationen (z.B. SAFe), um den maximalen ökonomischen Durchsatz zu erzielen.',
    category: 'Product Strategy'
  }
];
