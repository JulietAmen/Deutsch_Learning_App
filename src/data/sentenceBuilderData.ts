import { SentenceExercise } from '../types';

export const SENTENCE_EXERCISES: SentenceExercise[] = [
  // ================= A2 LEVEL =================
  {
    id: 'sb_a2_1',
    level: 'A2',
    category: 'daily',
    englishPrompt: 'I am reading the important report today in the office.',
    targetSentenceGerman: 'Ich lese heute den wichtigen Bericht im Büro.',
    scrambledWords: ['lese', 'Ich', 'heute', 'im Büro.', 'den wichtigen Bericht'],
    ruleHint: 'V2 Rule & TeKaMoLo: Verb on position 2, followed by temporal (heute), then object / local (im Büro).',
    explanation: 'In a German main clause, the conjugated verb ("lese") MUST occupy Position 2. "Ich" is at Position 1.'
  },
  {
    id: 'sb_a2_2',
    level: 'A2',
    category: 'workplace',
    englishPrompt: 'We must reschedule the team meeting tomorrow.',
    targetSentenceGerman: 'Wir müssen morgen das Teammeeting verschieben.',
    scrambledWords: ['müssen', 'Wir', 'verschieben.', 'morgen', 'das Teammeeting'],
    ruleHint: 'Modal Verb Bracket (Satzklammer): Modal verb in Position 2, main infinitive at the very end.',
    explanation: '"Wir müssen" (Position 1 & 2), and the infinitive verb "verschieben" goes to the very end of the sentence.'
  },
  {
    id: 'sb_a2_3',
    level: 'A2',
    category: 'grammar-focus',
    englishPrompt: 'He is arriving late because the train is delayed.',
    targetSentenceGerman: 'Er kommt spät, weil der Zug Verspätung hat.',
    scrambledWords: ['Er', 'spät,', 'kommt', 'weil', 'der Zug', 'hat.', 'Verspätung'],
    ruleHint: 'Subordinating Conjunction "weil": Verb goes to the end of the subordinate clause.',
    explanation: 'In a subordinate clause introduced by "weil", the conjugated verb "hat" is pushed to the final position.'
  },
  {
    id: 'sb_a2_4',
    level: 'A2',
    category: 'workplace',
    englishPrompt: 'Could you please send me the file?',
    targetSentenceGerman: 'Könnten Sie mir bitte die Datei senden?',
    scrambledWords: ['Könnten', 'Sie', 'bitte', 'senden?', 'mir', 'die Datei'],
    ruleHint: 'Polite Question: Verb in Position 1, pronoun before noun, infinitive at end.',
    explanation: 'In a polite request question with "könnten", the verb starts the sentence, followed by subject "Sie", dative pronoun "mir", accusative "die Datei", and infinitive "senden".'
  },

  // ================= B1 LEVEL =================
  {
    id: 'sb_b1_1',
    level: 'B1',
    category: 'workplace',
    englishPrompt: 'The Product Owner defines the acceptance criteria for the new feature.',
    targetSentenceGerman: 'Der Product Owner definiert die Akzeptanzkriterien für das neue Feature.',
    scrambledWords: ['definiert', 'Der Product Owner', 'für das neue Feature.', 'die Akzeptanzkriterien'],
    ruleHint: 'Direct object (Akkusativ) followed by prepositional phrase (für das neue Feature).',
    explanation: '"Der Product Owner" is the subject (Nominativ), "definiert" is Position 2, followed by the accusative object and prepositional complement.'
  },
  {
    id: 'sb_b1_2',
    level: 'B1',
    category: 'grammar-focus',
    englishPrompt: 'Although the deadline is very tight, we will finish the sprint on time.',
    targetSentenceGerman: 'Obwohl die Frist sehr knapp ist, schließen wir den Sprint pünktlich ab.',
    scrambledWords: ['Obwohl', 'die Frist', 'sehr knapp ist,', 'schließen wir', 'den Sprint', 'pünktlich ab.'],
    ruleHint: 'Nebensatz first: Main clause must immediately follow with verb (Inversion).',
    explanation: 'When a subordinate clause (with "obwohl") comes first, the entire clause counts as Position 1. The main clause must therefore start immediately with its conjugated verb "schließen".'
  },
  {
    id: 'sb_b1_3',
    level: 'B1',
    category: 'workplace',
    englishPrompt: 'All user stories have been reviewed by the team yesterday.',
    targetSentenceGerman: 'Alle User Stories wurden gestern vom Team überprüft.',
    scrambledWords: ['wurden', 'Alle User Stories', 'gestern', 'vom Team', 'überprüft.'],
    ruleHint: 'Passive voice in Präteritum: "wurden" + TeKaMoLo (gestern [T], vom Team [K/M]) + Partizip II (überprüft).',
    explanation: 'Passive structure: Subject ("Alle User Stories") + auxiliary "wurden" (Pos 2) + temporal "gestern" + agent "vom Team" + participle "überprüft" at the end.'
  },
  {
    id: 'sb_b1_4',
    level: 'B1',
    category: 'daily',
    englishPrompt: 'I would recommend that we test the user feedback first.',
    targetSentenceGerman: 'Ich würde empfehlen, dass wir zuerst das Nutzerfeedback testen.',
    scrambledWords: ['Ich', 'würde empfehlen,', 'dass wir', 'zuerst', 'das Nutzerfeedback', 'testen.'],
    ruleHint: 'Konjunktiv II + "dass" clause with verb "testen" at the end.',
    explanation: '"Ich würde empfehlen" frames a polite workplace suggestion; the dependent "dass" clause places "testen" in the final spot.'
  },

  // ================= B2 LEVEL =================
  {
    id: 'sb_b2_1',
    level: 'B2',
    category: 'workplace',
    englishPrompt: 'In my role as Product Manager, I must make well-founded decisions regarding prioritization.',
    targetSentenceGerman: 'In meiner Rolle als Product Manager muss ich fundierte Entscheidungen bezüglich der Priorisierung treffen.',
    scrambledWords: ['In meiner Rolle als Product Manager', 'muss ich', 'fundierte Entscheidungen', 'bezüglich der Priorisierung', 'treffen.'],
    ruleHint: 'Nomen-Verb-Verbindung ("Entscheidungen treffen") with fronted prepositional element.',
    explanation: 'The fronted prepositional phrase counts as Position 1. "muss ich" follows in Position 2. The functional verb "treffen" anchors the sentence at the end.'
  },
  {
    id: 'sb_b2_2',
    level: 'B2',
    category: 'workplace',
    englishPrompt: 'These technical requirements can easily be implemented through modular architecture.',
    targetSentenceGerman: 'Diese technischen Anforderungen lassen sich durch eine modulare Architektur problemlos umsetzen.',
    scrambledWords: ['Diese technischen Anforderungen', 'lassen sich', 'durch eine modulare Architektur', 'problemlos', 'umsetzen.'],
    ruleHint: 'Passiversatzform "sich lassen + Infinitiv" (expressing feasibility).',
    explanation: '"lassen sich ... umsetzen" is an advanced German alternative to "können umgesetzt werden". Notice "durch + Akkusativ" for the method.'
  },
  {
    id: 'sb_b2_3',
    level: 'B2',
    category: 'grammar-focus',
    englishPrompt: 'Due to the continuous user tests, we were able to minimize the risk of a misguided development.',
    targetSentenceGerman: 'Aufgrund der kontinuierlichen Nutzertests konnten wir das Risiko einer Fehlentwicklung minimieren.',
    scrambledWords: ['Aufgrund der kontinuierlichen Nutzertests', 'konnten wir', 'das Risiko', 'einer Fehlentwicklung', 'minimieren.'],
    ruleHint: 'Nominalstil with Genitiv: "Aufgrund" requires the Genitive case.',
    explanation: 'Nominal style: "Aufgrund der kontinuierlichen Nutzertests" (Genitiv) in Position 1, followed by modal verb "konnten wir", genitive noun "einer Fehlentwicklung", and infinitive "minimieren".'
  },
  {
    id: 'sb_b2_4',
    level: 'B2',
    category: 'workplace',
    englishPrompt: 'I remain available at any time should you have further questions regarding the roadmap.',
    targetSentenceGerman: 'Für weitere Fragen bezüglich der Roadmap stehe ich Ihnen jederzeit gerne zur Verfügung.',
    scrambledWords: ['Für weitere Fragen bezüglich der Roadmap', 'stehe ich', 'Ihnen', 'jederzeit gerne', 'zur Verfügung.'],
    ruleHint: 'Nomen-Verb-Verbindung: "jemandem zur Verfügung stehen" in professional correspondence.',
    explanation: 'A staple of German executive and professional communication. Fronted prepositional phrase, inverted verb "stehe ich", dative pronoun "Ihnen", and "zur Verfügung" at the end.'
  }
];
