import { ProductManagementTerm, AgileCeremony, InterviewQuestion } from '../types';
import {
  PROFESSION_VOCABULARY_TERMS,
  TECH_PROFESSIONS,
  PROFESSION_INTERVIEW_QUESTIONS
} from './professionData';

export { PROFESSION_VOCABULARY_TERMS, TECH_PROFESSIONS, PROFESSION_INTERVIEW_QUESTIONS };

export const PRODUCT_MANAGEMENT_TERMS: ProductManagementTerm[] = PROFESSION_VOCABULARY_TERMS.filter(
  (t) => t.profession === 'Product Owner' || t.profession === 'Product Manager'
);

export const AGILE_CEREMONIES: AgileCeremony[] = [
  {
    ceremonyName: 'Daily Standup',
    ceremonyNameGerman: 'Das tägliche Abstimmungsmeeting',
    purpose: '15-minute sync focusing on progress toward the sprint goal and surfacing obstacles.',
    keyPhrases: [
      {
        phrase: 'Gestern habe ich die User Story zur Zwei-Faktor-Authentifizierung abgeschlossen.',
        english: 'Yesterday I completed the user story on two-factor authentication.',
        context: 'Reporting completed work.'
      },
      {
        phrase: 'Heute konzentriere ich mich auf die Abstimmung mit dem UX-Team bezüglich des Onboardings.',
        english: 'Today I am focusing on coordinating with the UX team regarding onboarding.',
        context: 'Stating today\'s priority.'
      },
      {
        phrase: 'Ich habe aktuell einen Blocker: Mir fehlt der Zugriff auf die Testumgebung.',
        english: 'I currently have a blocker: I am missing access to the test environment.',
        context: 'Surfacing an impediment.'
      },
      {
        phrase: 'Können wir das kurz nach dem Standup in einem separaten Gespräch vertiefen?',
        english: 'Can we dive into this briefly after the standup in a separate discussion?',
        context: 'Taking detailed discussions offline.'
      }
    ]
  },
  {
    ceremonyName: 'Sprint Planning',
    ceremonyNameGerman: 'Die Sprint-Planung',
    purpose: 'PO presents the prioritized backlog and sprint goal; the engineering team commits to stories.',
    keyPhrases: [
      {
        phrase: 'Unser Hauptfokus für diesen Sprint liegt auf der Performance-Optimierung der Suche.',
        english: 'Our main focus for this sprint is the search performance optimization.',
        context: 'Introducing the sprint goal.'
      },
      {
        phrase: 'Sind die Akzeptanzkriterien für dieses Ticket für alle verständlich und vollständig?',
        english: 'Are the acceptance criteria for this ticket clear and complete for everyone?',
        context: 'Checking definition of ready.'
      },
      {
        phrase: 'Wie schätzen wir die Komplexität dieser Aufgabe in Story Points ein?',
        english: 'How do we estimate the complexity of this task in story points?',
        context: 'Estimation discussion.'
      },
      {
        phrase: 'Aufgrund der Urlaubszeit haben wir eine reduzierte Teamkapazität von 60 Story Points.',
        english: 'Due to vacation time, we have a reduced team capacity of 60 story points.',
        context: 'Capacity planning.'
      }
    ]
  },
  {
    ceremonyName: 'Sprint Review & Demo',
    ceremonyNameGerman: 'Die Sprint-Präsentation & Abnahme',
    purpose: 'Demonstrating working increments to stakeholders, gathering feedback, and updating the roadmap.',
    keyPhrases: [
      {
        phrase: 'Herzlich willkommen zum Sprint Review. Heute präsentieren wir Ihnen die neuen Dashboard-Widgets.',
        english: 'Warm welcome to the sprint review. Today we present to you the new dashboard widgets.',
        context: 'Welcoming stakeholders.'
      },
      {
        phrase: 'Wie Sie live sehen können, verkürzt diese Optimierung die Ladezeit um 40 Prozent.',
        english: 'As you can see live, this optimization reduces loading time by 40 percent.',
        context: 'Demonstrating real impact.'
      },
      {
        phrase: 'Wir nehmen Ihr Feedback sehr gerne in das Backlog für die nächste Iteration auf.',
        english: 'We will gladly incorporate your feedback into the backlog for the next iteration.',
        context: 'Accepting stakeholder feedback.'
      }
    ]
  },
  {
    ceremonyName: 'Sprint Retrospective',
    ceremonyNameGerman: 'Die Retrospektive (Rückblick & Verbesserung)',
    purpose: 'Inspecting team collaboration, processes, and tools to define concrete action items.',
    keyPhrases: [
      {
        phrase: 'Was lief in diesem Sprint besonders gut, und worauf können wir stolz sein?',
        english: 'What went particularly well in this sprint, and what can we be proud of?',
        context: 'Positive retrospective opener.'
      },
      {
        phrase: 'Wir sollten unsere Definition of Done anpassen, um automatisierte Regressionstests einzuschließen.',
        english: 'We should adapt our Definition of Done to include automated regression tests.',
        context: 'Process improvement suggestion.'
      },
      {
        phrase: 'Lassen Sie uns als konkretes Action Item festhalten: Tägliche Code Reviews vor 14 Uhr.',
        english: 'Let us record as a concrete action item: Daily code reviews before 2 PM.',
        context: 'Defining binding action items.'
      }
    ]
  }
];

export const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'iq_1',
    questionGerman: 'Erzählen Sie etwas über sich selbst und Ihren bisherigen Werdegang.',
    questionEnglish: 'Tell us about yourself and your professional journey so far.',
    category: 'Personal',
    level: 'B1',
    targetRole: 'Product Manager',
    contextTip: 'Keep your response under 2 minutes. Focus on: Present role -> Past relevant achievement -> Why this company now.',
    modelAnswerGerman: 'Sehr gerne. In den letzten vier Jahren war ich als Product Manager im B2B-SaaS-Bereich tätig. Dort habe ich die Verantwortung für unser Kernprodukt getragen und eng mit cross-funktionalen Entwicklungsteams zusammengearbeitet. Ein besonderer Meilenstein war der Relaunch unseres Kundenportals, wodurch wir die Nutzerzufriedenheit um 25% steigern konnten. Jetzt suche ich eine neue Herausforderung in einem innovativen Umfeld wie Ihrem Unternehmen.',
    modelAnswerEnglish: 'With pleasure. Over the past four years, I worked as a Product Manager in the B2B SaaS space. There, I was responsible for our core product and worked closely with cross-functional development teams. A particular milestone was the relaunch of our customer portal, through which we increased customer satisfaction by 25%. Now I am seeking a new challenge in an innovative environment like your company.',
    powerPhrases: [
      'In meiner bisherigen Laufbahn habe ich...',
      'Ich trug die fachliche Verantwortung für...',
      'Ein entscheidender Meilenstein war...',
      'Besonders reizt mich an dieser Position...'
    ],
    starFormula: {
      situation: 'In den letzten vier Jahren im SaaS-Bereich...',
      task: 'Verantwortung für das Kernprodukt und Kundenzufriedenheit...',
      action: 'Enge Abstimmung mit UX und agiler Entwicklung...',
      result: 'Steigerung der Nutzerzufriedenheit um 25%.'
    }
  },
  {
    id: 'iq_2',
    questionGerman: 'Wie gehen Sie mit widersprüchlichen Anforderungen verschiedener Stakeholder um?',
    questionEnglish: 'How do you handle conflicting requirements from different stakeholders?',
    category: 'Conflict & Stakeholders',
    level: 'B2',
    targetRole: 'Product Owner',
    contextTip: 'Demonstrate objective prioritization criteria (data, business value, user needs) rather than emotional arguments.',
    modelAnswerGerman: 'Widersprüchliche Anforderungen sind im Produktalltag die Regel. Mein Ansatz basiert auf Transparenz und Daten. Zunächst höre ich allen Stakeholdern aufmerksam zu, um die zugrunde liegende Motivation und den geschäftlichen Nutzen zu verstehen. Anschließend nutzen wir klare Priorisierungsframeworks wie RICE oder WSJF. Ich erkläre den Stakeholdern offen, warum bestimmte Features vorgezogen werden und wie sich das auf die strategischen Unternehmensziele auswirkt.',
    modelAnswerEnglish: 'Conflicting requirements are the norm in product management. My approach is grounded in transparency and data. First, I listen attentively to all stakeholders to understand the underlying motivation and business benefit. Then we employ clear prioritization frameworks such as RICE or WSJF. I openly explain to stakeholders why certain features take priority and how that aligns with company goals.',
    powerPhrases: [
      'Mein Ansatz basiert auf Transparenz und Daten.',
      'Um die zugrunde liegende Motivation zu verstehen...',
      'Ich mache Entscheidungen nachvollziehbar, indem...',
      'Im Sinne der übergeordneten Unternehmensstrategie...'
    ],
    starFormula: {
      situation: 'Vertrieb forderte Feature A, während die Geschäftsführung Feature B priorisieren wollte.',
      task: 'Einen Konsens finden, ohne die Roadmap zu überfrachten.',
      action: 'Einführung eines objektiven Scoring-Modells und transparenter Austausch.',
      result: 'Akzeptanz beider Parteien und planmäßige Auslieferung des wertvollsten Features.'
    }
  },
  {
    id: 'iq_3',
    questionGerman: 'Wie definieren Sie eine gute User Story und wie stellen Sie sicher, dass sie "Ready for Sprint" ist?',
    questionEnglish: 'How do you define a good user story and ensure it is "Ready for Sprint"?',
    category: 'Agile & Team',
    level: 'B1',
    targetRole: 'Product Owner',
    contextTip: 'Mention the INVEST criteria, clear acceptance criteria, and team collaboration in Refinement.',
    modelAnswerGerman: 'Eine gute User Story folgt den bewährten INVEST-Kriterien: Sie muss unabhängig, verhandelbar, wertstiftend, schätzbar, kompakt und testbar sein. Gemeinsam mit dem Team verfasse ich präzise Akzeptanzkriterien. Eine Story gilt erst dann als bereit für den Sprint (Definition of Ready), wenn das gesamte Entwicklungsteam das fachliche Ziel verstanden hat und alle offenen Fragen geklärt sind.',
    modelAnswerEnglish: 'A good user story follows the proven INVEST criteria: it must be independent, negotiable, valuable, estimable, small, and testable. Together with the team, I write precise acceptance criteria. A story is only considered ready for the sprint when the entire development team understands the functional goal and all open questions are clarified.',
    powerPhrases: [
      'Nach den bewährten INVEST-Kriterien...',
      'Gemeinsam mit dem Entwicklungsteam...',
      'Die Definition of Ready garantiert, dass...',
      'Messbare und testbare Akzeptanzkriterien...'
    ],
    starFormula: {
      situation: 'Früher gab es im Team Unklarheiten während der Sprint-Ausführung.',
      task: 'Den Übergang vom Backlog in den Sprint sauber strukturieren.',
      action: 'Etablierung klarer Checklisten für die Definition of Ready im Refinement.',
      result: 'Null Nachfragen während des Sprints und pünktliche Fertigstellung.'
    }
  },
  {
    id: 'iq_4',
    questionGerman: 'Beschreiben Sie eine Situation, in der ein Release oder ein Feature fehlschlug. Was haben Sie gelernt?',
    questionEnglish: 'Describe a situation where a release or feature failed. What did you learn?',
    category: 'Product Strategy',
    level: 'B2',
    targetRole: 'Product Manager',
    contextTip: 'German interviewers value honest reflection, constructive failure culture ("Fehlerkultur"), and rapid learning.',
    modelAnswerGerman: 'Vor zwei Jahren haben wir eine neue Filterfunktion gelauncht, die von den Nutzern kaum angenommen wurde. Anstatt das Feature sofort zu verwerfen, führten wir quantitative Datenanalysen und qualitative Nutzerinterviews durch. Dabei stellte sich heraus, dass die Bedienung zu komplex war. Wir haben die Benutzeroberfläche radikal vereinfacht und A/B-getestet. Das Ergebnis war eine Verdopplung der Nutzungsrate. Ich habe daraus gelernt, Prototypen noch früher mit echten Nutzern zu testen.',
    modelAnswerEnglish: 'Two years ago, we launched a new filter feature that was barely adopted by users. Instead of discarding the feature immediately, we conducted quantitative data analyses and qualitative user interviews. It turned out that the interaction was too complex. We radically simplified the UI and A/B tested it. The result was a doubling of adoption. From this, I learned to test prototypes with real users even earlier.',
    powerPhrases: [
      'Aus dieser Erfahrung habe ich die wertvolle Lektion gezogen, dass...',
      'Anstatt in Hektik zu verfallen, analysierten wir...',
      'Eine gelebte Fehlerkultur ermöglicht schnelles Dazulernen.',
      'Frühzeitige Validierung minimiert Risiken.'
    ],
    starFormula: {
      situation: 'Launch eines neuen Filters mit geringer Nutzerakzeptanz.',
      task: 'Ursachen für die niedrige Konversion ermitteln und beheben.',
      action: 'Durchführung von Nutzerinterviews und radikale Vereinfachung des UIs.',
      result: 'Verdopplung der Nutzungsrate und Etablierung früher Usability-Tests.'
    }
  },
  ...PROFESSION_INTERVIEW_QUESTIONS
];

export const WORKPLACE_EMAIL_TEMPLATES = [
  {
    id: 'mail_1',
    title: 'Terminanfrage für Sprint Planning & Abstimmung',
    type: 'Meeting Request',
    register: 'Formal / Professional',
    subjectGerman: 'Terminanfrage: Abstimmung der Roadmap & Sprint-Ziele Q4',
    subjectEnglish: 'Meeting Request: Alignment on Roadmap & Sprint Goals Q4',
    bodyGerman: `Sehr geehrte Frau Dr. Müller, / Liebes Team,

ich hoffe, Sie hatten einen angenehmen Start in die Woche.

Gerne möchte ich einen kurzen Termin (ca. 45 Minuten) mit Ihnen vereinbaren, um die Priorisierung unserer nächsten Roadmap-Initiativen für das vierte Quartal abzustimmen.

Folgende Terminvorschläge möchte ich Ihnen unterbreiten:
- Dienstag, 14:00 – 14:45 Uhr
- Donnerstag, 10:00 – 10:45 Uhr

Bitte geben Sie mir kurz Bescheid, welcher Zeitraum Ihnen am besten passt. Die vorbereitete Agenda sowie das vorläufige Backlog sende ich Ihnen vorab zu.

Für Rückfragen stehe ich Ihnen jederzeit gerne zur Verfügung.

Mit freundlichen Grüßen
[Ihr Name]
Product Owner / Product Manager`,
    notes: 'Classic formal German business correspondence structure: Polite opening, clear purpose, concrete time proposals, call to action, formal closing.'
  },
  {
    id: 'mail_2',
    title: 'Statusbericht & Release-Verschiebung (Transparent Communicating Delays)',
    type: 'Status Report',
    register: 'Professional & Objective',
    subjectGerman: 'Update zum Release Version 3.2: Notwendige Verschiebung um zwei Tage',
    subjectEnglish: 'Update on Release Version 3.2: Necessary two-day postponement',
    bodyGerman: `Liebe Stakeholder, liebes Führungsteam,

im Rahmen unseres finalen Regressions- und Sicherheitstests für Version 3.2 ist ein unerwarteter Fehler im Zahlungsmodul aufgetreten.

Um die gewohnte Systemstabilität und höchste Datensicherheit für unsere Kunden zu gewährleisten, haben wir im Team beschlossen, den weltweiten Rollout um zwei Arbeitstage auf Donnerstag zu verschieben.

Aktueller Stand der Maßnahmen:
1. Das Engineering-Team arbeitet mit Hochdruck an dem Hotfix.
2. Der abschließende Testlauf ist für morgen, 11:00 Uhr, terminiert.

Wir halten Sie selbstverständlich über alle weiteren Meilensteine auf dem Laufenden.

Vielen Dank für Ihr Verständnis und Ihre Unterstützung.

Beste Grüße
[Ihr Name]`,
    notes: 'Handles bad news proactively: State problem clearly, emphasize customer value / security rationale, list concrete action steps, provide new date.'
  }
];
