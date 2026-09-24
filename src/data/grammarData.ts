import { GrammarTopic } from '../types';

export const GRAMMAR_DATA: GrammarTopic[] = [
  // ================= A2 GRAMMAR =================
  {
    id: 'g_a2_1',
    level: 'A2',
    titleGerman: 'Perfekt vs. Präteritum',
    titleEnglish: 'Past Tenses in Spoken & Written German',
    summary: 'Master when to use haben vs. sein in Perfekt, and when Präteritum is preferred (war, hatte, Modalverben).',
    ruleFormula: 'Perfekt = [haben/sein (konjugiert)] + [...] + [Partizip II am Satzende]',
    explanation: `In modern everyday German and professional meetings, the **Perfekt** is the primary spoken past tense. 
The **Präteritum** is mainly used for:
1. "sein" (ich war, du warst...)
2. "haben" (ich hatte, du hattest...)
3. Modal verbs (ich musste, ich konnte, ich wollte...)
4. Written reports, newspapers, and formal business letters.

**Haben vs. Sein Rule:**
- Use **sein** for verbs of movement from A to B (*gehen, fahren, fliegen, kommen*), change of state (*aufwachen, sterben*), and *sein, werden, bleiben*.
- Use **haben** for all transitive verbs (taking an accusative object) and stationary actions.`,
    ruleTable: {
      headers: ['Auxiliary', 'Verb Category', 'Example Infinitive', 'Perfekt Satz'],
      rows: [
        ['haben', 'Action with object', 'schreiben', 'Ich habe die E-Mail geschrieben.'],
        ['haben', 'Duration / State', 'arbeiten', 'Wir haben lange gearbeitet.'],
        ['sein', 'Movement A -> B', 'gehen', 'Er ist ins Büro gegangen.'],
        ['sein', 'Change of condition', 'aufstehen', 'Sie ist früh aufgestanden.'],
        ['sein', 'Exception verbs', 'bleiben / sein', 'Ich bin zu Hause geblieben.']
      ]
    },
    examples: [
      {
        german: 'Ich habe heute das Backlog aktualisiert.',
        english: 'I updated the backlog today.',
        highlightWord: 'habe ... aktualisiert',
        note: 'Spoken / standard email past tense.'
      },
      {
        german: 'Gestern war ich den ganzen Tag in Besprechungen.',
        english: 'Yesterday I was in meetings all day.',
        highlightWord: 'war',
        note: 'Präteritum of "sein" is preferred over "ich bin gewesen".'
      },
      {
        german: 'Wir mussten den Release verschieben, weil es einen Fehler gab.',
        english: 'We had to postpone the release because there was a bug.',
        highlightWord: 'mussten',
        note: 'Präteritum of modal verb "müssen".'
      }
    ],
    commonMistakes: [
      'Saying "Ich habe nach Berlin gefahren" instead of "Ich bin nach Berlin gefahren".',
      'Placing the Partizip II in the middle rather than at the absolute end of the clause.'
    ],
    tip: 'Memorize regular ge-...-t endings vs irregular ge-...-en strong verbs.'
  },
  {
    id: 'g_a2_2',
    level: 'A2',
    titleGerman: 'Wechselpräpositionen: Akkusativ vs. Dativ',
    titleEnglish: 'Two-Way Prepositions (Wohin vs. Wo)',
    summary: 'The 9 dual-case prepositions (an, auf, hinter, in, neben, über, unter, vor, zwischen).',
    ruleFormula: 'Bewegung / Richtung (Wohin?) -> Akkusativ | Ort / Stillstand (Wo?) -> Dativ',
    explanation: `Nine German prepositions change case depending on the question asked:
- **Wohin?** (Direction, destination, movement to a new location) -> **Akkusativ** (den, die, das, die)
- **Wo?** (Location, position, static occurrence) -> **Dativ** (dem, der, dem, den + n)

The 9 prepositions are: *an, auf, hinter, in, neben, über, unter, vor, zwischen*.`,
    ruleTable: {
      headers: ['Preposition', 'Wo? (Dativ)', 'Wohin? (Akkusativ)'],
      rows: [
        ['in', 'im (in dem) Büro (Where am I? Inside the office)', 'ins (in das) Büro (Where am I going? Into the office)'],
        ['auf', 'auf dem Tisch (Resting on the desk)', 'auf den Tisch (Putting onto the desk)'],
        ['an', 'am (an dem) Whiteboard (Standing at the board)', 'an das Whiteboard (Walking up to the board)'],
        ['vor', 'vor dem Gebäude (Standing in front)', 'vor das Gebäude (Walking in front)']
      ]
    },
    examples: [
      {
        german: 'Ich lege das Dokument auf den Tisch.',
        english: 'I put the document onto the table.',
        highlightWord: 'auf den Tisch (Akkusativ)',
        note: 'Movement / action direction -> Wohin? -> Akkusativ.'
      },
      {
        german: 'Das Dokument liegt auf dem Tisch.',
        english: 'The document is lying on the table.',
        highlightWord: 'auf dem Tisch (Dativ)',
        note: 'Static position -> Wo? -> Dativ.'
      }
    ],
    commonMistakes: [
      'Mixing up "legen/stellen" (require Akkusativ) with "liegen/stehen" (require Dativ).'
    ],
    tip: 'Remember: "Wohin gehst du?" (Akkusativ), "Wo bist du?" (Dativ).'
  },
  {
    id: 'g_a2_3',
    level: 'A2',
    titleGerman: 'Kausale Konnektoren: weil, denn, deshalb',
    titleEnglish: 'Expressing Reasons: Because and Therefore',
    summary: 'Sentence structure changes drastically depending on which connector introduces the reason.',
    ruleFormula: 'weil = Nebensatz (Verb am Ende) | denn = Hauptsatz (Pos. 0, Verb auf Pos. 2) | deshalb = Inversion (Pos. 1, Verb auf Pos. 2)',
    explanation: `All three words express cause and effect, but each enforces a different German syntax structure:
1. **weil** (subordinating connector): Introduces a Nebensatz. The conjugated verb moves to the very end.
2. **denn** (coordinating conjunction): Takes position 0 (does not count). Normal subject + verb order follows.
3. **deshalb / darum / deswegen** (adverbial connector): Takes position 1. The conjugated verb must follow immediately in position 2 (Inversion).`,
    ruleTable: {
      headers: ['Connector', 'Clause Type', 'Verb Position', 'Pattern'],
      rows: [
        ['weil', 'Nebensatz', 'At the very end', '..., weil das System heute nicht funktioniert.'],
        ['denn', 'Hauptsatz', 'Position 2 (normal)', '..., denn das System funktioniert heute nicht.'],
        ['deshalb', 'Hauptsatz with Inversion', 'Position 2 (immediately after)', 'Das System ist down, deshalb können wir nicht testen.']
      ]
    },
    examples: [
      {
        german: 'Ich komme später, weil der Zug Verspätung hat.',
        english: 'I am coming later because the train is delayed.',
        highlightWord: 'weil ... hat',
        note: 'Nebensatz: "hat" moves to the end.'
      },
      {
        german: 'Ich komme später, denn der Zug hat Verspätung.',
        english: 'I am coming later, for the train is delayed.',
        highlightWord: 'denn der Zug hat',
        note: 'Coordinating: "denn" is pos. 0, "der Zug" pos. 1, "hat" pos. 2.'
      },
      {
        german: 'Der Zug hat Verspätung, deshalb komme ich später.',
        english: 'The train is delayed, therefore I am arriving later.',
        highlightWord: 'deshalb komme ich',
        note: 'Inversion: "deshalb" is pos. 1, verb "komme" is pos. 2, subject "ich" is pos. 3.'
      }
    ]
  },

  // ================= B1 GRAMMAR =================
  {
    id: 'g_b1_1',
    level: 'B1',
    titleGerman: 'Konjunktiv II: Höflichkeit & Wünsche',
    titleEnglish: 'Subjunctive II: Politeness & Hypotheticals',
    summary: 'Essential for professional office communication, polite requests, and hypothetical ideas.',
    ruleFormula: 'Höfliche Bitte = [würde + Infinitiv] OR [hätte / wäre / könnte]',
    explanation: `In the workplace, demanding with "Ich will" or "Geben Sie mir" sounds rude. Instead, German professionals rely on **Konjunktiv II**.

Key forms to master:
- **haben** -> ich hätte (I would have / I\'d like)
- **sein** -> ich wäre (I would be)
- **können** -> ich könnte (I could / could you...)
- **müssen** -> ich müsste (I would have to)
- **All other verbs** -> würde + Infinitiv (z.B. "Ich würde gerne vorschlagen...")`,
    ruleTable: {
      headers: ['Verb', 'Indikativ (Direct)', 'Konjunktiv II (Polite / Business)'],
      rows: [
        ['können', 'Können Sie mir helfen?', 'Könnten Sie mir bitte kurz helfen?'],
        ['haben', 'Ich will einen Termin.', 'Ich hätte gerne einen Termin mit Ihnen.'],
        ['vorschlagen', 'Ich schlage vor...', 'Ich würde vorschlagen, dass wir...'],
        ['sein', 'Das ist gut.', 'Das wäre wirklich hilfreich für unser Team.']
      ]
    },
    examples: [
      {
        german: 'Könnten Sie mir bitte das Protokoll der letzten Besprechung zusenden?',
        english: 'Could you please send me the minutes of the last meeting?',
        highlightWord: 'Könnten Sie ... zusenden',
        note: 'Standard polite workplace email request.'
      },
      {
        german: 'Wenn wir mehr Entwickler hätten, könnten wir das Feature schneller veröffentlichen.',
        english: 'If we had more developers, we could release the feature faster.',
        highlightWord: 'hätten ... könnten',
        note: 'Hypothetical condition (Konditionalsatz).'
      }
    ],
    tip: 'In business emails, use "Könnten Sie..." and "Ich würde mich freuen, wenn..." to sound respectful and polished.'
  },
  {
    id: 'g_b1_2',
    level: 'B1',
    titleGerman: 'Das Vorgangspassiv (Passiv Präsens & Präteritum)',
    titleEnglish: 'Passive Voice (Process Focus)',
    summary: 'Focus on the action and result rather than the actor. Crucial for technical documentation and status reports.',
    ruleFormula: 'Passiv = [werden (konjugiert)] + [...] + [Partizip II am Ende]',
    explanation: `In technical, business, and scrum environments, you often talk about features, tickets, and bugs without highlighting a specific person:
- Active: "Der Entwickler behebt den Fehler." (The developer fixes the bug.)
- Passive: "Der Fehler **wird** behoben." (The bug is being fixed.)

**Agent introduction:** If the person or system causing the action needs to be named, use:
- **von + Dativ** (for persons/institutions: *vom Team*)
- **durch + Akkusativ** (for means/methods: *durch automatisierte Tests*)`,
    ruleTable: {
      headers: ['Tense', 'Auxiliary Form', 'Example', 'English Translation'],
      rows: [
        ['Präsens', 'wird / werden', 'Das Ticket wird heute getestet.', 'The ticket is being tested today.'],
        ['Präteritum', 'wurde / wurden', 'Die Version wurde gestern deployt.', 'The version was deployed yesterday.'],
        ['Perfekt', 'ist ... worden', 'Das Problem ist behoben worden.', 'The problem has been resolved.'],
        ['Mit Modalverb', 'kann ... werden', 'Die App kann heruntergeladen werden.', 'The app can be downloaded.']
      ]
    },
    examples: [
      {
        german: 'Die Akzeptanzkriterien werden vom Product Owner definiert.',
        english: 'The acceptance criteria are defined by the Product Owner.',
        highlightWord: 'werden ... definiert',
        note: 'Present passive with "von + Dativ".'
      },
      {
        german: 'Der Bug wurde durch den neuen Testlauf entdeckt.',
        english: 'The bug was discovered through the new test run.',
        highlightWord: 'wurde ... entdeckt',
        note: 'Past passive with "durch + Akkusativ".'
      }
    ]
  },
  {
    id: 'g_b1_3',
    level: 'B1',
    titleGerman: 'Relativsätze mit Präpositionen',
    titleEnglish: 'Relative Clauses with Prepositions',
    summary: 'Connecting ideas and defining requirements precisely with relative pronouns.',
    ruleFormula: 'Hauptsatz, [Präposition + Relativpronomen] + [...] + [finities Verb am Ende].',
    explanation: `A relative clause provides essential details about a noun. The gender and number come from the reference noun; the grammatical case is determined by the preposition or verb inside the relative clause!

Case table for relative pronouns:
- Maskulin: der (Nom), den (Akk), dem (Dat), dessen (Gen)
- Feminin: die (Nom), die (Akk), der (Dat), deren (Gen)
- Neutrum: das (Nom), das (Akk), dem (Dat), dessen (Gen)
- Plural: die (Nom), die (Akk), denen (Dat), deren (Gen)`,
    examples: [
      {
        german: 'Das ist das Projekt, an dem wir seit drei Monaten arbeiten.',
        english: 'That is the project on which we have been working for three months.',
        highlightWord: 'an dem ... arbeiten',
        note: '"arbeiten an" takes Dativ. "Das Projekt" is neuter -> dem.'
      },
      {
        german: 'Hier sind die Kollegen, mit denen ich den Sprint plane.',
        english: 'Here are the colleagues with whom I plan the sprint.',
        highlightWord: 'mit denen ... plane',
        note: 'Plural + Dativ ("mit") -> denen.'
      }
    ]
  },

  // ================= B2 GRAMMAR =================
  {
    id: 'g_b2_1',
    level: 'B2',
    titleGerman: 'Feste Nomen-Verb-Verbindungen im Berufsalltag',
    titleEnglish: 'Fixed Noun-Verb Collocations (Funktionsverbgefüge)',
    summary: 'The hallmark of professional, sophisticated German (C-level and B2 business fluency).',
    ruleFormula: '[Nomen mit Präposition] + [Funktionsverb] (e.g., zur Verfügung stehen, in Betracht ziehen)',
    explanation: `Native German professionals and managers frequently replace simple verbs with elegant noun-verb collocations.
Instead of simple spoken verbs like *entscheiden* or *beantragen*, B2+ speakers say *eine Entscheidung treffen* or *einen Antrag stellen*.

These constructions add precision, neutrality, and professional weight in presentations, contracts, and stakeholder reviews.`,
    ruleTable: {
      headers: ['Nomen-Verb-Verbindung', 'Simple Verb Equivalent', 'Example Sentence'],
      rows: [
        ['eine Entscheidung treffen', 'entscheiden', 'Wir müssen heute eine Entscheidung bezüglich des Release-Datums treffen.'],
        ['zur Verfügung stehen', 'verfügbar sein', 'Die Unterlagen stehen Ihnen im Intranet zur Verfügung.'],
        ['in Betracht ziehen', 'berücksichtigen / überlegen', 'Wir sollten diese Option ernsthaft in Betracht ziehen.'],
        ['zur Sprache bringen', 'ansprechen', 'In der Retrospektive möchte ich das Bottleneck zur Sprache bringen.'],
        ['in Kraft treten', 'gültig werden', 'Die neuen Richtlinien treten ab nächster Woche in Kraft.']
      ]
    },
    examples: [
      {
        german: 'Wir müssen klären, wer für diesen Vorfall die Verantwortung übernimmt.',
        english: 'We need to clarify who will take responsibility for this incident.',
        highlightWord: 'Verantwortung übernimmt',
        note: 'Nomen-Verb collocation for "verantwortlich sein".'
      },
      {
        german: 'Der Product Owner bringt das Thema im nächsten Refinement zur Sprache.',
        english: 'The Product Owner brings up the topic in the next refinement.',
        highlightWord: 'zur Sprache bringt',
        note: 'Elevated register in meeting minutes.'
      }
    ]
  },
  {
    id: 'g_b2_2',
    level: 'B2',
    titleGerman: 'Nominalstil vs. Verbalstil im Geschäftsleben',
    titleEnglish: 'Nominal Style (Business & Technical Writing)',
    summary: 'Transforming clauses into concise, compact prepositional noun phrases used in specifications and reports.',
    ruleFormula: 'Verbal: [Nebensatz mit Konnektor] -> Nominal: [Präposition mit Genitiv/Dativ + Nomen]',
    explanation: `In formal German documentation, tickets, and executive summaries, text is condensed using **Nominalstil** (noun style).
Verbs and clauses turn into nouns and prepositions:
- *weil wir das Budget erhöht haben* -> *wegen der Erhöhung des Budgets*
- *bevor das Produkt veröffentlicht wird* -> *vor der Veröffentlichung des Produkts*
- *obwohl die Frist knapp war* -> *trotz der knappen Frist*`,
    ruleTable: {
      headers: ['Verbal Connector', 'Nominal Preposition + Case', 'Verbal Example', 'Nominal Business Transformation'],
      rows: [
        ['weil / da', 'wegen / aufgrund + Genitiv', 'Weil die Server überlastet waren...', 'Aufgrund der Serverüberlastung...'],
        ['bevor', 'vor + Dativ', 'Bevor wir das Update einspielen...', 'Vor dem Einspielen des Updates...'],
        ['nachdem', 'nach + Dativ', 'Nachdem der Test abgeschlossen war...', 'Nach Abschluss des Tests...'],
        ['obwohl', 'trotz + Genitiv', 'Obwohl die Ressourcen fehlten...', 'Trotz des Ressourcenmangels...']
      ]
    },
    examples: [
      {
        german: 'Nach erfolgreichem Abschluss des Betatests starten wir den weltweiten Rollout.',
        english: 'Following the successful conclusion of the beta test, we will launch the worldwide rollout.',
        highlightWord: 'Nach erfolgreichem Abschluss',
        note: 'Nominal phrase replacing "Nachdem wir den Betatest erfolgreich abgeschlossen haben".'
      }
    ]
  },
  {
    id: 'g_b2_3',
    level: 'B2',
    titleGerman: 'Passiversatzformen (sein + zu + Infinitiv, sich lassen)',
    titleEnglish: 'Passive Alternatives in Technical Documentation',
    summary: 'Elegant ways to express feasibility, obligations, and system behavior without repeating "werden".',
    ruleFormula: 'Möglichkeit: [lässt sich + Infinitiv] | Notwendigkeit: [ist + zu + Infinitiv]',
    explanation: `Instead of overusing "muss gemacht werden" or "kann gemacht werden", German engineers and product teams use these concise structures:
1. **sein + zu + Infinitiv** (expressing necessity or possibility):
   - "Das Problem ist schnell zu lösen." (= Das Problem kann/muss schnell gelöst werden.)
2. **sich lassen + Infinitiv** (expressing possibility):
   - "Dieser Fehler lässt sich reproduzieren." (= Dieser Fehler kann reproduziert werden.)
3. **Adjektive auf -bar / -lich**:
   - machbar, skalierbar, verständlich, wartbar.`,
    examples: [
      {
        german: 'Die Performance-Probleme lassen sich durch Caching beheben.',
        english: 'The performance issues can be resolved through caching.',
        highlightWord: 'lassen sich ... beheben',
        note: 'Equivalent to "können durch Caching behoben werden".'
      },
      {
        german: 'Bis morgen ist das Sicherheitsaudit zwingend abzuschließen.',
        english: 'By tomorrow, the security audit must imperatively be completed.',
        highlightWord: 'ist ... abzuschließen',
        note: 'Equivalent to "muss abgeschlossen werden".'
      }
    ]
  }
];
