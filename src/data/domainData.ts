import {
  DomainInfo,
  AppDomain,
  VocabularyItem,
  GrammarTopic,
  SentenceExercise,
  QuizQuestion,
  InterviewQuestion
} from '../types';

export const DOMAINS: DomainInfo[] = [
  {
    id: 'general',
    titleGerman: 'Allgemeines Deutsch',
    titleEnglish: 'General German (A2, B1, B2)',
    tagline: 'Grundlagen, Alltagskommunikation, Grammatik & Konversation',
    descriptionGerman: 'Umfassendes Deutschlernen für Alltag, Beruf und Leben in Deutschland ohne hochspezialisierte Fachterminologie.',
    descriptionEnglish: 'Structured German training covering everyday life, general grammar, interactive sentence builder, and level quizzes.',
    badge: 'A2 · B1 · B2 Basis',
    iconType: 'globe',
    accentColor: 'indigo'
  },
  {
    id: 'product',
    titleGerman: 'Product Manager & Owner',
    titleEnglish: 'Product Management & Agile',
    tagline: 'Backlog, User Stories, Roadmaps & Stakeholder-Alignment',
    descriptionGerman: 'Fachdeutsch für agile Teams: Backlog-Refinements, Akzeptanzkriterien, Sprint Plannings und Verhandlungen mit C-Level & Stakeholdern.',
    descriptionEnglish: 'German for PMs & POs: agile ceremonies, user story writing, backlog grooming, and stakeholder alignment.',
    badge: 'Agile & Produkt',
    iconType: 'briefcase',
    accentColor: 'amber'
  },
  {
    id: 'data',
    titleGerman: 'Data Engineer & Data Architect',
    titleEnglish: 'Data Engineering & Cloud Architecture',
    tagline: 'ETL/ELT, Streaming, Data Mesh, Governance & Big Data',
    descriptionGerman: 'Technisches Fachdeutsch für Pipeline-Architekturen, Ausfallsicherheit, Schema-Evolution, Latenz und DSGVO-Compliance in deutschen Tech-Unternehmen.',
    descriptionEnglish: 'German for Data Engineers & Architects: pipeline operations, failover handling, streaming, and data governance.',
    badge: 'Big Data & Cloud',
    iconType: 'database',
    accentColor: 'emerald'
  },
  {
    id: 'medical',
    titleGerman: 'Medizin & Ärzte (Ärztlicher Dienst)',
    titleEnglish: 'Medical Doctor & Clinical Practice',
    tagline: 'Anamnese, Diagnostik, Arztbriefe, Visite & Patientenaufklärung',
    descriptionGerman: 'Fachsprachprüfung (FSP) & Berufsalltag im Krankenhaus: Flüssige Anamneseerhebung, Befundung, Konjunktiv I in Arztbriefen und kollegiale Übergaben.',
    descriptionEnglish: 'German for Medical Doctors: clinical history, patient communication, case presentations, and hospital reports.',
    badge: 'Klinik & Medizin',
    iconType: 'stethoscope',
    accentColor: 'rose'
  },
  {
    id: 'student_wi',
    titleGerman: 'Student (Wirtschaftsinformatik)',
    titleEnglish: 'Business Administration with Informatics',
    tagline: 'Geschäftsprozesse, ERP, Wissenschaftliches Arbeiten & IT-Strategie',
    descriptionGerman: 'Akademisches & berufsbezogenes Fachdeutsch an der Schnittstelle von BWL und IT: BPMN-Modellierung, wissenschaftlicher Nominalstil, Fallstudien und Seminararbeiten.',
    descriptionEnglish: 'German for Business Informatics Students: academic writing, process modeling, ERP systems, and business-IT alignment.',
    badge: 'BWL & IT-Studium',
    iconType: 'graduation-cap',
    accentColor: 'purple'
  }
];

// =====================================================================
// 1. MEDICAL DOCTOR (Medizin & Klinik / Ärztlicher Dienst)
// =====================================================================

export const MEDICAL_VOCABULARY: VocabularyItem[] = [
  {
    id: 'med_v_1',
    german: 'die Anamnese',
    article: 'die',
    plural: 'die Anamnesen',
    english: 'medical history / anamnesis',
    level: 'B1',
    category: 'Patientengespräch & Aufnahme',
    exampleSentence: 'Bei der Aufnahme erheben wir zunächst eine ausführliche Anamnese der Vorerkrankungen.',
    exampleTranslation: 'Upon admission, we first take a comprehensive medical history of preexisting conditions.',
    notes: 'Kollokationen: eine Anamnese erheben / durchführen; Eigen- und Fremdanamnese.',
    tags: ['medical', 'hospital', 'doctor']
  },
  {
    id: 'med_v_2',
    german: 'der Befund',
    article: 'der',
    plural: 'die Befunde',
    english: 'medical finding / clinical result',
    level: 'B1',
    category: 'Diagnostik & Labor',
    exampleSentence: 'Der sonographische Befund ergab keinen Hinweis auf eine Entzündung der Gallenblase.',
    exampleTranslation: 'The ultrasound finding revealed no indication of gallbladder inflammation.',
    notes: 'Unterscheidung: die Diagnose (Krankheitsname) vs. der Befund (Mess- oder Untersuchungsergebnis).',
    tags: ['medical', 'diagnostics']
  },
  {
    id: 'med_v_3',
    german: 'die Notaufnahme',
    article: 'die',
    plural: 'die Notaufnahmen',
    english: 'emergency room / emergency department',
    level: 'A2',
    category: 'Krankenhausstruktur',
    exampleSentence: 'Der Rettungsdienst brachte den bewusstlosen Patienten direkt in die Notaufnahme.',
    exampleTranslation: 'The ambulance service brought the unconscious patient directly to the emergency department.',
    notes: 'Oft abgekürzt als ZNA (Zentrale Notaufnahme).',
    tags: ['medical', 'emergency']
  },
  {
    id: 'med_v_4',
    german: 'die Dosierung',
    article: 'die',
    plural: 'die Dosierungen',
    english: 'dosage / posology',
    level: 'A2',
    category: 'Pharmakologie & Medikation',
    exampleSentence: 'Bitte reduzieren Sie die Dosierung des Betablockers schrittweise über zwei Wochen.',
    exampleTranslation: 'Please reduce the dosage of the beta blocker gradually over two weeks.',
    notes: 'Kollokation: eine Dosierung anpassen / verordnen / verabreichen.',
    tags: ['medical', 'pharma']
  },
  {
    id: 'med_v_5',
    german: 'die Visite',
    article: 'die',
    plural: 'die Visiten',
    english: 'ward round',
    level: 'B1',
    category: 'Stationsalltag',
    exampleSentence: 'Bei der morgendlichen Chefarztvisite stellen wir die frisch operierten Patienten vor.',
    exampleTranslation: 'During the morning head-physician ward round, we present the newly operated patients.',
    notes: 'Oft im Verbund: Visite machen, an der Visite teilnehmen.',
    tags: ['medical', 'hospital']
  },
  {
    id: 'med_v_6',
    german: 'das Symptom',
    article: 'das',
    plural: 'die Symptome',
    english: 'symptom / clinical sign',
    level: 'A2',
    category: 'Diagnostik & Labor',
    exampleSentence: 'Welche Symptome traten vor dem Kollaps auf: Schwindel, Atemnot oder Brustschmerzen?',
    exampleTranslation: 'Which symptoms occurred before the collapse: dizziness, shortness of breath, or chest pain?',
    notes: 'Begleitsymptome, Leitsymptom (Hauptbeschwerde).',
    tags: ['medical', 'patient']
  },
  {
    id: 'med_v_7',
    german: 'die Diagnose',
    article: 'die',
    plural: 'die Diagnosen',
    english: 'diagnosis',
    level: 'B1',
    category: 'Diagnostik & Labor',
    exampleSentence: 'Die Verdachtsdiagnose lautet akute Gastroenteritis, die Differentialdiagnose Appendizitis.',
    exampleTranslation: 'The suspected diagnosis is acute gastroenteritis; the differential diagnosis is appendicitis.',
    notes: 'Kollokation: eine Diagnose stellen / sichern / ausschließen.',
    tags: ['medical', 'doctor']
  },
  {
    id: 'med_v_8',
    german: 'die Überweisung',
    article: 'die',
    plural: 'die Überweisungen',
    english: 'medical referral',
    level: 'A2',
    category: 'Ambulanz & Praxis',
    exampleSentence: 'Der Hausarzt stellte eine Überweisung zur kardiologischen Abklärung im Klinikum aus.',
    exampleTranslation: 'The family doctor issued a referral for cardiological clarification at the clinic.',
    notes: 'Verb: überweisen (überweist, überwies, hat überwiesen).',
    tags: ['medical', 'office']
  },
  {
    id: 'med_v_9',
    german: 'der Entlassungsbrief',
    article: 'der',
    plural: 'die Entlassungsbriefe',
    english: 'hospital discharge summary / letter',
    level: 'B2',
    category: 'Dokumentation & Arztbrief',
    exampleSentence: 'Der Entlassungsbrief enthält alle Medikationsempfehlungen und den geplanten Wiedervorstellungstermin.',
    exampleTranslation: 'The discharge summary contains all medication recommendations and the scheduled follow-up date.',
    notes: 'Synonym für Arztbrief / Epikrise.',
    tags: ['medical', 'documentation']
  },
  {
    id: 'med_v_10',
    german: 'die Kontraindikation',
    article: 'die',
    plural: 'die Kontraindikationen',
    english: 'contraindication',
    level: 'B2',
    category: 'Pharmakologie & Medikation',
    exampleSentence: 'Bei bekannter Niereninsuffizienz besteht eine Kontraindikation gegen jodhaltige Kontrastmittel.',
    exampleTranslation: 'Known renal insufficiency is a contraindication against iodinated contrast agents.',
    notes: 'Absolute vs. relative Kontraindikation.',
    tags: ['medical', 'pharma']
  },
  {
    id: 'med_v_11',
    german: 'die Vitalzeichen',
    article: 'die',
    plural: 'die Vitalzeichen (Pl.)',
    english: 'vital signs (pulse, BP, oxygen, temp)',
    level: 'B1',
    category: 'Diagnostik & Labor',
    exampleSentence: 'Die Vitalzeichen sind stabil: Blutdruck 125/80 mmHg, Herzfrequenz 74/min und Sauerstoffsättigung 98 Prozent.',
    exampleTranslation: 'The vital signs are stable: blood pressure 125/80 mmHg, heart rate 74/min, and oxygen saturation 98 percent.',
    notes: 'Meist im Plural verwendet.',
    tags: ['medical', 'emergency']
  },
  {
    id: 'med_v_12',
    german: 'die Patientenaufklärung',
    article: 'die',
    plural: 'die Patientenaufklärungen',
    english: 'patient informed consent / counseling',
    level: 'B2',
    category: 'Patientengespräch & Aufnahme',
    exampleSentence: 'Vor jeder Narkose muss eine rechtzeitige und verständliche Patientenaufklärung stattfinden.',
    exampleTranslation: 'Before every anesthesia, timely and comprehensible patient informed consent must take place.',
    notes: 'Rechtlich unabdingbar im deutschen Medizinrecht.',
    tags: ['medical', 'legal']
  }
];

export const MEDICAL_GRAMMAR: GrammarTopic[] = [
  {
    id: 'med_g_1',
    level: 'B2',
    titleGerman: 'Konjunktiv I in Arztbriefen & Fremdanamnese',
    titleEnglish: 'Subjunctive I in Medical Case Notes & Patient Reports',
    summary: 'Distanzierte, juristisch einwandfreie Wiedergabe von Patientenaussagen im Arztbrief.',
    ruleFormula: 'Verbstamm + Konjunktiv I-Endung (-e, -est, -e, -en, -et, -en) / sei / habe',
    explanation: 'Im deutschen Krankenhausalltag und im Arztbrief werden die subjektiven Angaben des Patienten oder von Angehörigen im Konjunktiv I formuliert. Dies verdeutlicht, dass der Arzt die Aussage nicht als bewiesene Tatsache, sondern als Patientenschilderung wiedergibt.',
    examples: [
      {
        german: 'Der 54-jährige Patient berichtet, er leide seit drei Tagen an ziehenden Schmerzen im Epigastrium.',
        english: 'The 54-year-old patient reports that he has been suffering from dragging epigastric pain for three days.',
        highlightWord: 'leide',
        note: 'Konjunktiv I von leiden (3. Person Singular).'
      },
      {
        german: 'Die Ehefrau gab an, der Patient sei kurzzeitig kollabiert und habe über Schwindel geklagt.',
        english: 'The wife stated that the patient had briefly collapsed and complained of dizziness.',
        highlightWord: 'sei ... habe',
        note: 'Zusammengesetzte Vergangenheit im Konjunktiv I (sei kollabiert, habe geklagt).'
      },
      {
        german: 'Auf Nachfrage verneint die Patientin, sie nehme blutverdünnende Medikamente ein.',
        english: 'Upon inquiry, the patient denies taking blood-thinning medications.',
        highlightWord: 'nehme',
        note: 'Präsens Konjunktiv I von einnehmen.'
      }
    ],
    ruleTable: {
      headers: ['Person', 'haben', 'sein', 'klagen (regelmäßig)'],
      rows: [
        ['er / sie / es', 'habe', 'sei', 'klage'],
        ['sie (Plural)', 'hätten (Ersatzform)', 'seien', 'klagten (Ersatzform)']
      ]
    },
    commonMistakes: [
      'Verwendung des Indikativs ("Der Patient sagt, er hat Schmerzen") wirkt im Arztbrief unprofessionell.',
      'Verwechslung mit Konjunktiv II ("er hätte") signalisiert Zweifel oder Irrealität statt neutraler Berichterstattung.'
    ],
    tip: 'Merkhilfe: Im Arztbrief verwendet man für die 3. Person Singular fast immer: "er habe", "er sei", "er leide", "er klage", "er verspüre".'
  },
  {
    id: 'med_g_2',
    level: 'B1',
    titleGerman: 'Vorgangs- & Zustandspassiv in OP- und Verlaufsberichten',
    titleEnglish: 'Passive Voice in Surgical & Clinical Progress Reports',
    summary: 'Fokus auf den diagnostischen oder therapeutischen Eingriff ohne Nennung des Handelnden.',
    ruleFormula: 'wurde + Partizip II (Vorgangspassiv) | ist + Partizip II (Zustandspassiv)',
    explanation: 'In medizinischen Verlaufsberichten und Übergaben steht die Handlung oder der erreichte Zustand im Zentrum, nicht die Person des Arztes oder der Pflegekraft. Vorgangspassiv schildert den Ablauf des Eingriffs, Zustandspassiv den aktuellen Patientenstatus.',
    examples: [
      {
        german: 'Die operative Versorgung der Fraktur wurde ohne Komplikationen durchgeführt.',
        english: 'The surgical repair of the fracture was performed without complications.',
        highlightWord: 'wurde ... durchgeführt',
        note: 'Vorgangspassiv Präteritum: Der chirurgische Prozess steht im Fokus.'
      },
      {
        german: 'Der periphere Venenverweilkatheter ist bereits gelegt und durchgängig.',
        english: 'The peripheral IV cannula is already inserted and patent.',
        highlightWord: 'ist ... gelegt',
        note: 'Zustandspassiv: Das Resultat des Zugangs ist gegenwärtig abgeschlossen.'
      },
      {
        german: 'Der Patient wird auf die Intensivstation verlegt und kontinuierlich überwacht.',
        english: 'The patient is transferred to the ICU and continuously monitored.',
        highlightWord: 'wird verlegt ... überwacht',
        note: 'Vorgangspassiv Präsens bei aktuellen klinischen Maßnahmen.'
      }
    ],
    commonMistakes: [
      'Im Deutschen wird das Passiv in ärztlichen Berichten bevorzugt statt des persönlichen "Ich habe operiert" oder "Wir haben gelegt".'
    ],
    tip: 'Nutze das Zustandspassiv bei der Visite für Statusberichte: "Die Wunde ist reizlos verheilt, die Drainage ist gezogen."'
  },
  {
    id: 'med_g_3',
    level: 'A2',
    titleGerman: 'Höfliche Imperative & Instruktionen bei der Untersuchung',
    titleEnglish: 'Polite Imperatives & Instructions in Physical Examination',
    summary: 'Einfühlsame und klare Aufforderungen bei der körperlichen Untersuchung des Patienten.',
    ruleFormula: 'Bitte + Verb in Sie-Form (z. B. "Atmen Sie bitte...", "Machen Sie bitte...")',
    explanation: 'Während der körperlichen Untersuchung benötigt der Patient klare, beruhigende Handlungsanweisungen. Im Deutschen geschieht dies durch die Höflichkeitsform mit nachgestelltem "bitte" oder vorangestelltem "Würden Sie bitte...".',
    examples: [
      {
        german: 'Bitte machen Sie den Oberkörper frei und setzen Sie sich auf die Untersuchungsliege.',
        english: 'Please strip to the waist and sit on the examination table.',
        highlightWord: 'machen Sie ... setzen Sie sich',
        note: 'Höfliche Aufforderung vor der Auskultation.'
      },
      {
        german: 'Atmen Sie jetzt bitte ganz tief durch den offenen Mund ein und wieder aus.',
        english: 'Please take a deep breath in through your open mouth now and breathe out again.',
        highlightWord: 'Atmen Sie',
        note: 'Klassische Anweisung beim Abhören der Lunge.'
      },
      {
        german: 'Sagen Sie mir bitte sofort Bescheid, wenn dieser Druck schmerzhaft ist.',
        english: 'Please let me know immediately if this pressure is painful.',
        highlightWord: 'Sagen Sie mir',
        note: 'Schmerzlokalisation bei der Palpation des Abdomens.'
      }
    ],
    tip: 'Begleite jede Berührung mit einer Ankündigung: "Ich taste jetzt vorsichtig Ihren Bauch ab."'
  }
];

export const MEDICAL_SENTENCES: SentenceExercise[] = [
  {
    id: 'med_s_1',
    level: 'B1',
    englishPrompt: 'The patient reported that he has been suffering from acute chest pain since yesterday.',
    targetSentenceGerman: 'Der Patient gab an, dass er seit gestern unter akuten Brustschmerzen leide.',
    scrambledWords: ['unter', 'leide.', 'dass', 'Patient', 'Der', 'gab', 'akuten', 'an,', 'er', 'gestern', 'seit', 'Brustschmerzen'],
    ruleHint: 'Konjunktiv I im Nebensatz mit "dass": leide steht am Satzende.',
    explanation: 'In der Fremdanamnese steht nach "gab an, dass..." das Verb "leiden" im Konjunktiv I (er leide) an letzter Position.',
    category: 'workplace'
  },
  {
    id: 'med_s_2',
    level: 'B1',
    englishPrompt: 'Please take this medication twice daily after meals.',
    targetSentenceGerman: 'Nehmen Sie dieses Medikament bitte zweimal täglich nach den Mahlzeiten ein.',
    scrambledWords: ['dieses', 'täglich', 'den', 'Nehmen', 'Mahlzeiten', 'ein.', 'Sie', 'bitte', 'zweimal', 'nach', 'Medikament'],
    ruleHint: 'Trennbares Verb "einnehmen": "Nehmen" an Position 1, "ein" am Satzende.',
    explanation: 'Höflicher Imperativ mit Sie: Das finite Verb "Nehmen" beginnt den Satz, das Präfix "ein" schließt den Satz ab.',
    category: 'workplace'
  },
  {
    id: 'med_s_3',
    level: 'B2',
    englishPrompt: 'Due to suspected appendicitis, the patient was admitted to the hospital.',
    targetSentenceGerman: 'Wegen des dringenden Verdachts auf eine Appendizitis wurde der Patient stationär aufgenommen.',
    scrambledWords: ['der', 'eine', 'Wegen', 'Verdachts', 'auf', 'wurde', 'Appendizitis', 'Patient', 'aufgenommen.', 'stationär', 'des', 'dringenden'],
    ruleHint: 'Präposition "wegen" mit Genitiv (des dringenden Verdachts). Passiv Präteritum: wurde aufgenommen.',
    explanation: 'Genitivkonstruktion leitet die Begründung ein. Das Hilfsverb "wurde" besetzt Position 2, das Partizip II "aufgenommen" schließt ab.',
    category: 'workplace'
  },
  {
    id: 'med_s_4',
    level: 'B1',
    englishPrompt: 'The vital signs must be checked and documented every two hours.',
    targetSentenceGerman: 'Die Vitalzeichen müssen alle zwei Stunden kontrolliert und dokumentiert werden.',
    scrambledWords: ['alle', 'müssen', 'Stunden', 'und', 'Vitalzeichen', 'kontrolliert', 'zwei', 'dokumentiert', 'Die', 'werden.'],
    ruleHint: 'Passiv mit Modalverb: Modalverb "müssen" an Position 2, Partizipien + "werden" am Ende.',
    explanation: 'Im Passiv mit Modalverben steht das Partizip II zusammen mit dem Infinitiv "werden" am Satzende.',
    category: 'workplace'
  }
];

export const MEDICAL_QUIZZES: QuizQuestion[] = [
  {
    id: 'med_q_1',
    level: 'Workplace',
    type: 'multiple-choice',
    question: 'Welche Formulierung ist im deutschen Arztbrief stilistisch am korrektsten für die Schilderung des Patienten?',
    options: [
      'Der Patient behauptet, dass sein Bein sehr weh tut.',
      'Der Patient schildert, er verspüre seit zwei Tagen ein Taubheitsgefühl im linken Arm.',
      'Der Patient hat gesagt, ich habe ein Taubheitsgefühl.',
      'Der Patient leidet angeblich an Taubheit im Arm.'
    ],
    correctAnswer: 'Der Patient schildert, er verspüre seit zwei Tagen ein Taubheitsgefühl im linken Arm.',
    explanation: 'Im Arztbrief wird die Patientenschilderung neutral mit Verben wie "schildert", "berichtet" oder "gibt an" in Kombination mit Konjunktiv I ("er verspüre") wiedergegeben.',
    category: 'Arztbrief & Konjunktiv I'
  },
  {
    id: 'med_q_2',
    level: 'Workplace',
    type: 'multiple-choice',
    question: 'Was bedeutet der Begriff "die Kontraindikation"?',
    options: [
      'Ein zwingender Grund, eine bestimmte Behandlung oder ein Medikament NICHT anzuwenden.',
      'Die genaue zeitliche Einnahme eines Arzneimittels vor dem Essen.',
      'Ein spezieller Laborwert zur Bestimmung von Entzündungsmarkern.',
      'Die Einweisung eines Patienten von der Praxis in die Notaufnahme.'
    ],
    correctAnswer: 'Ein zwingender Grund, eine bestimmte Behandlung oder ein Medikament NICHT anzuwenden.',
    explanation: 'Eine Kontraindikation (Gegenanzeige) verbietet den Einsatz einer diagnostischen oder therapeutischen Maßnahme aufgrund eines Patientenrisikos.',
    category: 'Fachbegriffe'
  },
  {
    id: 'med_q_3',
    level: 'Workplace',
    type: 'multiple-choice',
    question: 'Wie lautet die korrekte Aufforderung beim Abhören (Auskultation) der Lunge?',
    options: [
      'Atmen Sie bitte tief durch den offenen Mund ein und aus.',
      'Hör auf zu atmen für drei Minuten.',
      'Sie müssen stark schnaufen.',
      'Machen Sie den Atemweg auf.'
    ],
    correctAnswer: 'Atmen Sie bitte tief durch den offenen Mund ein und aus.',
    explanation: '"Atmen Sie bitte tief durch den offenen Mund ein und aus" ist die klinisch standardisierte und patientenorientierte Formulierung.',
    category: 'Patientenkommunikation'
  },
  {
    id: 'med_q_4',
    level: 'Workplace',
    type: 'fill-in-blank',
    question: 'Ergänzen Sie den Genitiv: "Aufgrund _____ (akut / Niereninsuffizienz) muss die Medikation angepasst werden."',
    options: [
      'einer akuten Niereninsuffizienz',
      'eine akute Niereninsuffizienz',
      'einen akuten Niereninsuffizienz',
      'eines akutes Niereninsuffizienz'
    ],
    correctAnswer: 'einer akuten Niereninsuffizienz',
    explanation: 'Die Präposition "aufgrund" verlangt den Genitiv. Da Niereninsuffizienz feminin ist (die Niereninsuffizienz), lautet der unbestimmte Genitiv: einer akuten Niereninsuffizienz.',
    category: 'Grammatik im Kontext'
  }
];

export const MEDICAL_INTERVIEWS: InterviewQuestion[] = [
  {
    id: 'med_iq_1',
    questionGerman: 'Wie gehen Sie vor, wenn ein Patient bei der Aufnahme hochgradig ängstlich ist oder der empfohlenen Therapie misstraut?',
    questionEnglish: 'How do you approach a patient who is highly anxious upon admission or distrusts the recommended therapy?',
    category: 'Conflict & Stakeholders',
    level: 'B2',
    targetRole: 'Medical Doctor',
    contextTip: 'Zeige Empathie, strukturierte Aufklärung in verständlicher Patientensprache und professionelles Deeskalieren.',
    modelAnswerGerman: 'In solchen Situationen nehme ich mir Zeit für ein ruhiges, persönliches Gespräch auf Augenhöhe. Zunächst lasse ich den Patienten seine Ängste und Bedenken ohne Unterbrechung schildern. Anschließend erkläre ich die Diagnose und den Nutzen der Therapie in allgemeinverständlicher Sprache ohne lateinische Fachbegriffe. Ich beziehe den Patienten aktiv in die Entscheidung ein und biete bei Bedarf ein Gespräch mit Angehörigen oder Bedenkzeit an. So konnte ich bisher in den allermeisten Fällen eine tragfähige Vertrauensbasis schaffen.',
    modelAnswerEnglish: 'In such situations, I take time for a calm, personal conversation at eye level. First, I let the patient explain their fears and concerns without interruption. Then I explain the diagnosis and benefits of the therapy in plain language without Latin technical terms. I actively involve the patient in the decision and offer consultation with relatives or time to reconsider if needed.',
    powerPhrases: [
      'ein Gespräch auf Augenhöhe führen',
      'auf die Ängste des Patienten empathisch eingehen',
      'medizinische Zusammenhänge laienverständlich erläutern',
      'eine tragfähige Vertrauensbasis aufbauen'
    ],
    starFormula: {
      situation: 'Ein 62-jähriger Patient verweigerte aus Angst vor Komplikationen eine dringliche Koronarangiographie.',
      task: 'Aufbau von Vertrauen und transparente Risiko-Nutzen-Aufklärung ohne Druckausübung.',
      action: 'Ich habe mich zu ihm ans Bett gesetzt, mir seine Befürchtungen angehört und anhand einer Skizze den minimalinvasiven Kathetereingriff erklärt.',
      result: 'Der Patient willigte beruhigt in die Untersuchung ein; die Intervention verlief erfolgreich und komplikationslos.'
    }
  }
];

// =====================================================================
// 2. STUDENT (Wirtschaftsinformatik / Business Admin with Informatics)
// =====================================================================

export const STUDENT_WI_VOCABULARY: VocabularyItem[] = [
  {
    id: 'wi_v_1',
    german: 'der Geschäftsprozess',
    article: 'der',
    plural: 'die Geschäftsprozesse',
    english: 'business process',
    level: 'B1',
    category: 'Prozessmanagement & BPMN',
    exampleSentence: 'Die Analyse und kontinuierliche Optimierung der Geschäftsprozesse bildet das Fundament der Wirtschaftsinformatik.',
    exampleTranslation: 'The analysis and continuous optimization of business processes form the foundation of business informatics.',
    notes: 'Kollokationen: Geschäftsprozesse modellieren, automatisieren, optimieren.',
    tags: ['business', 'it', 'processes']
  },
  {
    id: 'wi_v_2',
    german: 'das ERP-System',
    article: 'das',
    plural: 'die ERP-Systeme',
    english: 'Enterprise Resource Planning system (e.g. SAP)',
    level: 'B1',
    category: 'Betriebliche Informationssysteme',
    exampleSentence: 'Ein modernes ERP-System integriert Finanzwesen, Logistik und Personalmanagement in einer gemeinsamen Datenbank.',
    exampleTranslation: 'A modern ERP system integrates finance, logistics, and HR management in a shared database.',
    notes: 'Klassisches Fallstudien-Thema an deutschen Universitäten (z. B. SAP S/4HANA).',
    tags: ['business', 'software', 'erp']
  },
  {
    id: 'wi_v_3',
    german: 'die Seminararbeit',
    article: 'die',
    plural: 'die Seminararbeiten',
    english: 'seminar paper / academic term paper',
    level: 'B2',
    category: 'Wissenschaftliches Arbeiten',
    exampleSentence: 'In meiner Seminararbeit am Lehrstuhl untersuche ich die Akzeptanz von Low-Code-Plattformen im deutschen Mittelstand.',
    exampleTranslation: 'In my term paper at the university chair, I investigate the adoption of low-code platforms in German SMEs.',
    notes: 'Typischer Aufbau: Einleitung, theoretischer Bezugsrahmen, Methodik, Diskussion, Fazit.',
    tags: ['university', 'academic']
  },
  {
    id: 'wi_v_4',
    german: 'die Modellierung',
    article: 'die',
    plural: 'die Modellierungen',
    english: 'process or data modeling',
    level: 'B1',
    category: 'Prozessmanagement & BPMN',
    exampleSentence: 'Die Modellierung der Ist-Prozesse erfolgte im Projekt mittels BPMN 2.0 und EPK-Diagrammen.',
    exampleTranslation: 'The modeling of as-is processes was carried out in the project using BPMN 2.0 and EPC diagrams.',
    notes: 'EPK = Ereignisgesteuerte Prozesskette (typisch deutsch).',
    tags: ['it', 'modeling']
  },
  {
    id: 'wi_v_5',
    german: 'das Anforderungsmanagement',
    article: 'das',
    plural: 'die Anforderungsmanagements',
    english: 'requirements engineering / management',
    level: 'B2',
    category: 'Software- & Systementwicklung',
    exampleSentence: 'Ein strukturiertes Anforderungsmanagement verhindert Scope Creep und minimiert Budgetüberschreitungen.',
    exampleTranslation: 'Structured requirements management prevents scope creep and minimizes budget overruns.',
    notes: 'Aufteilung in funktionale und nicht-funktionale Anforderungen.',
    tags: ['agile', 'requirements']
  },
  {
    id: 'wi_v_6',
    german: 'die Wirtschaftlichkeitsanalyse',
    article: 'die',
    plural: 'die Wirtschaftlichkeitsanalysen',
    english: 'economic feasibility study / cost-benefit analysis',
    level: 'B2',
    category: 'BWL & IT-Controlling',
    exampleSentence: 'Vor der Anschaffung der neuen Cloud-Infrastruktur verlangt der Lenkungsausschuss eine fundierte Wirtschaftlichkeitsanalyse.',
    exampleTranslation: 'Before purchasing the new cloud infrastructure, the steering committee requires a sound feasibility study.',
    notes: 'Berechnung von ROI (Return on Investment) und TCO (Total Cost of Ownership).',
    tags: ['business', 'finance']
  },
  {
    id: 'wi_v_7',
    german: 'die Fallstudie',
    article: 'die',
    plural: 'die Fallstudien',
    english: 'case study',
    level: 'B1',
    category: 'Wissenschaftliches Arbeiten',
    exampleSentence: 'Im Rahmen der Vorlesung haben wir eine empirische Fallstudie zu agilen Transformationen erarbeitet.',
    exampleTranslation: 'As part of the lecture, we compiled an empirical case study on agile transformations.',
    notes: 'Häufige Prüfungsleistung in BWL- und WI-Modulen.',
    tags: ['university', 'study']
  },
  {
    id: 'wi_v_8',
    german: 'die Wertschöpfungskette',
    article: 'die',
    plural: 'die Wertschöpfungsketten',
    english: 'value chain (Porter)',
    level: 'B2',
    category: 'BWL & Strategie',
    exampleSentence: 'Digitale Plattformen verkürzen die klassische Wertschöpfungskette und ermöglichen direkten Kundenkontakt.',
    exampleTranslation: 'Digital platforms shorten the traditional value chain and enable direct customer contact.',
    notes: 'Zentraler Begriff nach Michael Porter (Value Chain).',
    tags: ['business', 'strategy']
  },
  {
    id: 'wi_v_9',
    german: 'die Bachelorarbeit',
    article: 'die',
    plural: 'die Bachelorarbeiten',
    english: 'bachelor thesis',
    level: 'B2',
    category: 'Wissenschaftliches Arbeiten',
    exampleSentence: 'Ich schreibe meine Bachelorarbeit in Kooperation mit einem Industrieunternehmen über KI-gestützte Logistik.',
    exampleTranslation: 'I am writing my bachelor thesis in cooperation with an industrial enterprise on AI-supported logistics.',
    notes: 'Kollokation: eine Bachelorarbeit anmelden, verfassen, verteidigen.',
    tags: ['university', 'graduation']
  },
  {
    id: 'wi_v_10',
    german: 'die Schnittstelle',
    article: 'die',
    plural: 'die Schnittstellen',
    english: 'interface / API',
    level: 'A2',
    category: 'Software- & Systementwicklung',
    exampleSentence: 'Über eine REST-Schnittstelle tauscht das CRM-System Kundendaten in Echtzeit mit dem ERP aus.',
    exampleTranslation: 'Via a REST interface, the CRM system exchanges customer data in real time with the ERP.',
    notes: 'Sowohl technisch (API) als auch organisatorisch (Abteilungsschnittstelle).',
    tags: ['it', 'tech']
  },
  {
    id: 'wi_v_11',
    german: 'die Prozessoptimierung',
    article: 'die',
    plural: 'die Prozessoptimierungen',
    english: 'process optimization',
    level: 'B1',
    category: 'Prozessmanagement & BPMN',
    exampleSentence: 'Durch gezielte Prozessoptimierung konnten die Durchlaufzeiten in der Rechnungsprüfung halbiert werden.',
    exampleTranslation: 'Through targeted process optimization, throughput times in invoice processing could be halved.',
    notes: 'Wichtige Kennzahlen: Durchlaufzeit, Liegezeit, Fehlerrate.',
    tags: ['business', 'efficiency']
  },
  {
    id: 'wi_v_12',
    german: 'die wissenschaftliche Quelle',
    article: 'die',
    plural: 'die wissenschaftlichen Quellen',
    english: 'scholarly source / peer-reviewed citation',
    level: 'B2',
    category: 'Wissenschaftliches Arbeiten',
    exampleSentence: 'Für die theoretische Fundierung dürfen nur zitierfähige wissenschaftliche Quellen aus Fachzeitschriften herangezogen werden.',
    exampleTranslation: 'For the theoretical foundation, only citable scientific sources from journals may be consulted.',
    notes: 'Plagiatsprävention an deutschen Universitäten.',
    tags: ['university', 'academic']
  }
];

export const STUDENT_WI_GRAMMAR: GrammarTopic[] = [
  {
    id: 'wi_g_1',
    level: 'B2',
    titleGerman: 'Wissenschaftlicher Nominalstil & Funktionsverbgefüge',
    titleEnglish: 'Academic Nominal Style & Light Verb Constructions',
    summary: 'Typische Textverdichtung in Seminararbeiten, Bachelorarbeiten und Fachkonzepten.',
    ruleFormula: 'Nomen-Verb-Verbindung (z. B. "eine Analyse durchführen" statt "analysieren")',
    explanation: 'In wissenschaftlichen Arbeiten an deutschen Universitäten und in formellen IT-Konzepten wird statt einfacher Verben häufig der Nominalstil verwendet. Nomen-Verb-Verbindungen (Funktionsverbgefüge) verleihen dem Text akademische Präzision und Objektivität.',
    examples: [
      {
        german: 'Im Rahmen des Projekts führten die Studierenden eine Modellierung der Geschäftsprozesse durch.',
        english: 'Within the scope of the project, the students conducted a modeling of the business processes.',
        highlightWord: 'führten ... durch',
        note: 'Nominalstil mit "eine Modellierung durchführen" statt "modellierten".'
      },
      {
        german: 'Bei der Auswahl des ERP-Systems kam eine Nutzwertanalyse zur Anwendung.',
        english: 'In selecting the ERP system, a utility value analysis was applied.',
        highlightWord: 'kam ... zur Anwendung',
        note: '"zur Anwendung kommen" ersetzt das Passiv "wurde angewendet".'
      },
      {
        german: 'Die Autoren ziehen die Skalierbarkeit relationaler Datenbanken in Zweifel.',
        english: 'The authors call the scalability of relational databases into question.',
        highlightWord: 'ziehen ... in Zweifel',
        note: '"in Zweifel ziehen" statt "bezweifeln".'
      }
    ],
    ruleTable: {
      headers: ['Einfaches Verb', 'Funktionsverbgefüge (Nominalstil)', 'Englische Bedeutung'],
      rows: [
        ['untersuchen', 'eine Untersuchung anstellen / durchführen', 'to conduct an investigation'],
        ['anwenden', 'zur Anwendung kommen / bringen', 'to apply / put into practice'],
        ['entscheiden', 'eine Entscheidung treffen', 'to make a decision'],
        ['berücksichtigen', 'in Betracht ziehen / Berücksichtigung finden', 'to take into consideration']
      ]
    },
    commonMistakes: [
      'Zu viele Nomen hintereinander (Genitiv-Ketten wie "die Durchführung der Optimierung der Prozesse der Abteilung") hemmen den Lesefluss.',
      'In mündlichen Präsentationen lieber aktive Verben nutzen; der Nominalstil gehört primär in schriftliche Arbeiten.'
    ],
    tip: 'Prüfe in deiner Bachelorarbeit: Nutze Funktionsverbgefüge gezielt, um Forschungshandlungen neutral und methodisch präzise zu formulieren.'
  },
  {
    id: 'wi_g_2',
    level: 'B2',
    titleGerman: 'Passiversatzformen in wissenschaftlichen Arbeiten',
    titleEnglish: 'Passive Substitutes in Academic Thesis Writing',
    summary: 'Objektive Darstellung von Methoden und Forschungsergebnissen ohne das Wort "ich".',
    ruleFormula: 'sich lassen + Infinitiv | sein + zu + Infinitiv | Adjektive auf -bar / -lich',
    explanation: 'In deutschsprachigen Seminar- und Abschlussarbeiten sollte die 1. Person ("ich habe erforscht") vermieden werden. Stattdessen nutzt man Passiversatzformen, um Sachverhalte neutral und elegant darzustellen.',
    examples: [
      {
        german: 'Die Effizienz des Algorithmus lässt sich anhand der Benchmarks belegen.',
        english: 'The efficiency of the algorithm can be substantiated based on the benchmarks.',
        highlightWord: 'lässt sich ... belegen',
        note: '"lässt sich belegen" = kann belegt werden.'
      },
      {
        german: 'Die IT-Sicherheitsrichtlinien sind bei jeder Implementierung zwingend einzuhalten.',
        english: 'The IT security guidelines must be strictly adhered to in every implementation.',
        highlightWord: 'sind ... einzuhalten',
        note: '"sind einzuhalten" = müssen eingehalten werden.'
      },
      {
        german: 'Die Ergebnisse der empirischen Erhebung sind auf KMU übertragbar.',
        english: 'The results of the empirical survey are transferable to SMEs.',
        highlightWord: 'übertragbar',
        note: 'Adjektiv auf -bar: drückt Möglichkeit aus (können übertragen werden).'
      }
    ],
    tip: '"lässt sich + Infinitiv" eignet sich hervorragend für die Zusammenfassung im Fazit: "Zusammenfassend lässt sich festhalten, dass..."'
  }
];

export const STUDENT_WI_SENTENCES: SentenceExercise[] = [
  {
    id: 'wi_s_1',
    level: 'B2',
    englishPrompt: 'Business process modeling was carried out using the BPMN standard.',
    targetSentenceGerman: 'Die Modellierung der Geschäftsprozesse wurde mithilfe des BPMN-Standards durchgeführt.',
    scrambledWords: ['mithilfe', 'der', 'wurde', 'BPMN-Standards', 'Die', 'Modellierung', 'des', 'Geschäftsprozesse', 'durchgeführt.'],
    ruleHint: 'Passiv Präteritum: "wurde" an Position 2, "durchgeführt" am Satzende. Genitiv nach "mithilfe".',
    explanation: 'Im wissenschaftlichen Stil steht das Ereignis im Passiv, "mithilfe des BPMN-Standards" gibt das Werkzeug im Genitiv an.',
    category: 'workplace'
  },
  {
    id: 'wi_s_2',
    level: 'B1',
    englishPrompt: 'Before purchasing the software, we must conduct a feasibility study.',
    targetSentenceGerman: 'Vor der Anschaffung der Software müssen wir eine fundierte Wirtschaftlichkeitsanalyse durchführen.',
    scrambledWords: ['müssen', 'der', 'Wirtschaftlichkeitsanalyse', 'eine', 'Software', 'Vor', 'durchführen.', 'wir', 'fundierte', 'Anschaffung', 'der'],
    ruleHint: 'Temporale Präpositionalphrase am Satzanfang (Vor der Anschaffung...). Modalverb "müssen" an Position 2.',
    explanation: 'Nach einer vorangestellten Präpositionalphrase folgt das finite Modalverb auf Position 2, das Subjekt "wir" schließt direkt an.',
    category: 'workplace'
  },
  {
    id: 'wi_s_3',
    level: 'B2',
    englishPrompt: 'Although the ERP migration requires high investments, it offers significant efficiency gains.',
    targetSentenceGerman: 'Obwohl die ERP-Migration hohe Investitionen erfordert, bietet sie erhebliche Effizienzgewinne.',
    scrambledWords: ['sie', 'erfordert,', 'erhebliche', 'die', 'hohe', 'ERP-Migration', 'bietet', 'Obwohl', 'Investitionen', 'Effizienzgewinne.'],
    ruleHint: 'Konzessivsatz mit "obwohl": Verb "erfordert" am Ende des Nebensatzes, Hauptsatz beginnt mit Verb "bietet".',
    explanation: 'Wenn ein Nebensatz vorangestellt ist, beginnt der Hauptsatz sofort mit dem finiten Verb ("bietet sie...").',
    category: 'workplace'
  }
];

export const STUDENT_WI_QUIZZES: QuizQuestion[] = [
  {
    id: 'wi_q_1',
    level: 'Workplace',
    type: 'multiple-choice',
    question: 'Welche Formulierung entspricht dem wissenschaftlichen Stil in einer Bachelorarbeit am besten?',
    options: [
      'Ich glaube, dass ERP-Systeme ganz toll für Firmen sind.',
      'Die Untersuchung zeigt, dass ERP-Systeme zur Steigerung der Prozesseffizienz beitragen.',
      'Man sieht halt, dass ERP-Systeme gut laufen.',
      'Wir finden heraus, dass ERP-Systeme viel Geld sparen.'
    ],
    correctAnswer: 'Die Untersuchung zeigt, dass ERP-Systeme zur Steigerung der Prozesseffizienz beitragen.',
    explanation: 'Wissenschaftlicher Stil vermeidet die 1. Person ("ich", "wir") und umgangssprachliche Floskeln ("ganz toll", "halt"). "Die Untersuchung zeigt, dass..." ist präzise und objektiv.',
    category: 'Wissenschaftliches Schreiben'
  },
  {
    id: 'wi_q_2',
    level: 'Workplace',
    type: 'multiple-choice',
    question: 'Was drückt die Passiversatzform "Die Ergebnisse lassen sich validieren" aus?',
    options: [
      'Die Ergebnisse müssen nicht geprüft werden.',
      'Die Ergebnisse können validiert werden.',
      'Niemand darf die Ergebnisse validieren.',
      'Die Ergebnisse wurden bereits gestern validiert.'
    ],
    correctAnswer: 'Die Ergebnisse können validiert werden.',
    explanation: '"sich lassen + Infinitiv" drückt eine Möglichkeit aus und ist gleichbedeutend mit "können + Passiv-Infinitiv".',
    category: 'Grammatik im Kontext'
  },
  {
    id: 'wi_q_3',
    level: 'Workplace',
    type: 'multiple-choice',
    question: 'Was versteht man in der Wirtschaftsinformatik unter einer "Schnittstelle" (API)?',
    options: [
      'Eine Übergabestelle für Daten und Befehle zwischen verschiedenen Programmen oder Systemen.',
      'Der Schnittpunkt zweier Diagrammachsen in der Kostenrechnung.',
      'Eine Entlassung von Mitarbeitern nach einer Restrukturierung.',
      'Das physische Abschneiden eines Netzwerkkabels im Serverraum.'
    ],
    correctAnswer: 'Eine Übergabestelle für Daten und Befehle zwischen verschiedenen Programmen oder Systemen.',
    explanation: 'Eine Schnittstelle (technisch API) verbindet IT-Systeme (z. B. ERP und Shop-System) und standardisiert den Datenaustausch.',
    category: 'Fachterminologie'
  }
];

export const STUDENT_WI_INTERVIEWS: InterviewQuestion[] = [
  {
    id: 'wi_iq_1',
    questionGerman: 'Warum haben Sie sich für Wirtschaftsinformatik entschieden und wie sehen Sie Ihre Brückenfunktion zwischen Fachbereich und IT?',
    questionEnglish: 'Why did you choose Business Informatics and how do you view your bridging role between business departments and IT?',
    category: 'Personal',
    level: 'B2',
    targetRole: 'Student (Wirtschaftsinformatik)',
    contextTip: 'Hebe die Vermittlungskompetenz hervor: Du verstehst sowohl betriebswirtschaftliche ROI-Kennzahlen als auch Software-Architekturen.',
    modelAnswerGerman: 'Ich habe mich für die Wirtschaftsinformatik entschieden, weil mich genau die Schnittstelle zwischen betriebswirtschaftlicher Strategie und technischer Realisierung fasziniert. In vielen Unternehmen scheitern Digitalisierungsprojekte nicht an der Software, sondern an Missverständnissen zwischen Management und Entwicklerteams. Ich sehe meine Stärke darin, als Übersetzer zu fungieren: Ich kann Business-Anforderungen in präzise technische Spezifikationen und User Stories überführen und umgekehrt technologische Potenziale in einen klaren Geschäftswert für Entscheider übersetzen.',
    modelAnswerEnglish: 'I chose Business Informatics because the exact intersection between business strategy and technical implementation fascinates me. In many enterprises, digital projects fail not because of software, but due to misunderstandings between management and developers. I see my strength in acting as a translator.',
    powerPhrases: [
      'die Schnittstelle zwischen Betriebswirtschaft und IT',
      'als Übersetzer zwischen Fachbereich und Entwicklung fungieren',
      'Business-Anforderungen in technische Spezifikationen überführen',
      'einen messbaren Geschäftswert schaffen'
    ],
    starFormula: {
      situation: 'In einem universitären Praxisprojekt plante ein mittelständischer Großhändler die Einführung eines neuen Warenwirtschaftssystems.',
      task: 'Anforderungsanalyse und Vermittlung zwischen dem skeptischen Lagerleiter und den externen Softwareentwicklern.',
      action: 'Ich habe Workshops mit beiden Seiten moderiert, die Ist-Prozesse in BPMN visualisiert und die Schmerzpunkte in konkrete Akzeptanzkriterien übersetzt.',
      result: 'Beide Parteien einigten sich auf einen gemeinsamen Projektplan; das System wurde termingerecht und mit hoher Nutzerakzeptanz eingeführt.'
    }
  }
];

// =====================================================================
// 3. PRODUCT MANAGER & PRODUCT OWNER
// =====================================================================

export const PRODUCT_VOCABULARY: VocabularyItem[] = [
  {
    id: 'pm_v_1',
    german: 'das Product Backlog',
    article: 'das',
    plural: 'die Product Backlogs',
    english: 'product backlog',
    level: 'B1',
    category: 'Agile & Backlog',
    exampleSentence: 'Der Product Owner priorisiert das Product Backlog kontinuierlich nach geschäftlichem Mehrwert.',
    exampleTranslation: 'The product owner continuously prioritizes the product backlog according to business value.',
    notes: 'Kollokation: das Backlog pflegen / verfeinern (grooming/refinement) / priorisieren.',
    tags: ['product', 'agile', 'scrum']
  },
  {
    id: 'pm_v_2',
    german: 'die User Story',
    article: 'die',
    plural: 'die User Stories',
    english: 'user story',
    level: 'A2',
    category: 'Agile & Backlog',
    exampleSentence: 'Jede User Story folgt dem Muster: Als [Rolle] möchte ich [Ziel], um [Nutzen] zu erreichen.',
    exampleTranslation: 'Every user story follows the template: As a [role], I want [goal], so that [benefit].',
    notes: 'Wird im Deutschen als Femininum ("die User Story") verwendet.',
    tags: ['product', 'agile']
  },
  {
    id: 'pm_v_3',
    german: 'das Akzeptanzkriterium',
    article: 'das',
    plural: 'die Akzeptanzkriterien',
    english: 'acceptance criterion',
    level: 'B1',
    category: 'Spezifikation & Qualität',
    exampleSentence: 'Ein Ticket gilt erst dann als abgenommen, wenn alle Akzeptanzkriterien nachweisbar erfüllt sind.',
    exampleTranslation: 'A ticket is only considered accepted when all acceptance criteria are demonstrably fulfilled.',
    notes: 'Meist im Plural: die Akzeptanzkriterien definieren / abhaken.',
    tags: ['product', 'agile']
  },
  {
    id: 'pm_v_4',
    german: 'der Stakeholder',
    article: 'der',
    plural: 'die Stakeholder',
    english: 'stakeholder / interested party',
    level: 'B1',
    category: 'Stakeholder & Strategie',
    exampleSentence: 'Im Sprint Review präsentieren wir den wichtigsten Stakeholdern das neue Produktinkrement.',
    exampleTranslation: 'In the sprint review, we present the new product increment to key stakeholders.',
    notes: 'Kollokation: Stakeholder managen / einbinden / auf dem Laufenden halten.',
    tags: ['product', 'business']
  },
  {
    id: 'pm_v_5',
    german: 'die Roadmap',
    article: 'die',
    plural: 'die Roadmaps',
    english: 'product roadmap',
    level: 'B1',
    category: 'Stakeholder & Strategie',
    exampleSentence: 'Die strategische Roadmap visualisiert die geplanten Meilensteine für die kommenden zwei Quartale.',
    exampleTranslation: 'The strategic roadmap visualizes the planned milestones for the upcoming two quarters.',
    notes: 'Unterscheidung zwischen outcome-basierter und feature-basierter Roadmap.',
    tags: ['product', 'strategy']
  },
  {
    id: 'pm_v_6',
    german: 'das Refinement',
    article: 'das',
    plural: 'die Refinements',
    english: 'backlog refinement / grooming',
    level: 'B1',
    category: 'Agile & Backlog',
    exampleSentence: 'Im wöchentlichen Refinement schätzen die Entwickler den Aufwand der nächsten User Stories.',
    exampleTranslation: 'In the weekly refinement, developers estimate the effort of upcoming user stories.',
    notes: 'Dient der Erreichung der Definition of Ready.',
    tags: ['product', 'agile']
  },
  {
    id: 'pm_v_7',
    german: 'der Kundennutzen',
    article: 'der',
    plural: 'die Kundennutzen (selten)',
    english: 'customer value / benefit',
    level: 'B2',
    category: 'Stakeholder & Strategie',
    exampleSentence: 'Features mit dem höchsten Kundennutzen und geringem Entwicklungsaufwand haben oberste Priorität.',
    exampleTranslation: 'Features with the highest customer value and low development effort have top priority.',
    notes: 'Zentraler Begriff im Value-Driven-Development.',
    tags: ['product', 'business']
  },
  {
    id: 'pm_v_8',
    german: 'die Machbarkeitsanalyse',
    article: 'die',
    plural: 'die Machbarkeitsanalysen',
    english: 'feasibility study',
    level: 'B2',
    category: 'Spezifikation & Qualität',
    exampleSentence: 'Vor der Umsetzung führen Entwicklungsleiter und PO eine technische Machbarkeitsanalyse durch.',
    exampleTranslation: 'Before implementation, the tech lead and PO conduct a technical feasibility study.',
    notes: 'Prüfung von Budget, Architektur, Recht und Zeitrahmen.',
    tags: ['product', 'tech']
  },
  {
    id: 'pm_v_9',
    german: 'das Inkrement',
    article: 'das',
    plural: 'die Inkremente',
    english: 'product increment',
    level: 'B1',
    category: 'Agile & Backlog',
    exampleSentence: 'Am Ende jedes Sprints muss ein potenziell auslieferbares Produktinkrement vorliegen.',
    exampleTranslation: 'At the end of every sprint, a potentially shippable product increment must be available.',
    notes: 'Grundpfeiler des Scrum-Frameworks.',
    tags: ['product', 'agile']
  },
  {
    id: 'pm_v_10',
    german: 'die Priorisierung',
    article: 'die',
    plural: 'die Priorisierungen',
    english: 'prioritization',
    level: 'B1',
    category: 'Agile & Backlog',
    exampleSentence: 'Für die Priorisierung nutzen wir Frameworks wie WSJF (Weighted Shortest Job First) und MoSCoW.',
    exampleTranslation: 'For prioritization, we use frameworks like WSJF and MoSCoW.',
    notes: 'Kollokation: eine Priorisierung vornehmen / anpassen / verteidigen.',
    tags: ['product', 'agile']
  }
];

export const PRODUCT_GRAMMAR: GrammarTopic[] = [
  {
    id: 'pm_g_1',
    level: 'B1',
    titleGerman: 'Finalsätze mit "um... zu" und "damit" in User Stories',
    titleEnglish: 'Purpose Clauses with "um... zu" & "damit" in User Stories',
    summary: 'Klarer Ausdruck von Produktzielen und geschäftlichem Kundennutzen.',
    ruleFormula: 'um + [Ergänzungen] + zu + Infinitiv (gleiches Subjekt) | damit + Nebensatz (verschiedene Subjekte)',
    explanation: 'In User Stories und Akzeptanzkriterien wird der beabsichtigte Nutzen präzise mit Finalsätzen ausgedrückt. Haben Haupt- und Nebensatz dasselbe Subjekt, wird "um... zu" verwendet. Bei unterschiedlichen Subjekten steht "damit".',
    examples: [
      {
        german: 'Als Nutzer möchte ich mein Profilfoto hochladen, um mein Konto individuell zu gestalten.',
        english: 'As a user, I want to upload my profile photo in order to personalize my account.',
        highlightWord: 'um ... zu gestalten',
        note: 'Gleiches Subjekt (ich möchte... / ich gestalte).'
      },
      {
        german: 'Wir führen eine Zwei-Faktor-Authentifizierung ein, damit unbefugte Dritte keinen Zugriff auf sensible Kundendaten erhalten.',
        english: 'We introduce two-factor authentication so that unauthorized third parties do not gain access to sensitive customer data.',
        highlightWord: 'damit',
        note: 'Verschiedene Subjekte (wir vs. Dritte).'
      }
    ],
    tip: 'Prüfe jede User Story: Der "Damit / Um zu"-Teil ist der wichtigste für die Geschäftswert-Bewertung!'
  },
  {
    id: 'pm_g_2',
    level: 'B2',
    titleGerman: 'Relativsätze in Akzeptanzkriterien & Spezifikationen',
    titleEnglish: 'Relative Clauses in Acceptance Criteria & Specifications',
    summary: 'Missverständnisfreie Bedingungs- und Nutzerbeschreibungen für Entwicklerteams.',
    ruleFormula: 'Substantiv, [Relativpronomen: der / die / das / welche] ... [Verb am Ende].',
    explanation: 'Präzise Akzeptanzkriterien vermeiden Auslegungsspielraum. Relativsätze definieren exakt die Zielgruppe oder den Systemzustand, auf den sich ein Verhalten bezieht.',
    examples: [
      {
        german: 'Ein Kunde, der sein Passwort dreimal falsch eingibt, wird für 15 Minuten gesperrt.',
        english: 'A customer who enters their password incorrectly three times is locked out for 15 minutes.',
        highlightWord: 'der ... eingibt',
        note: 'Maskulines Relativpronomen im Nominativ.'
      },
      {
        german: 'Die Anwendung zeigt ein Modal, das den Nutzer zur Bestätigung der AGB auffordert.',
        english: 'The application displays a modal that prompts the user to confirm the terms and conditions.',
        highlightWord: 'das ... auffordert',
        note: 'Neutrales Relativpronomen (das Modal).'
      }
    ],
    tip: 'Halte Relativsätze kurz und setze Kommata vor und nach dem Relativsatz!'
  }
];

export const PRODUCT_SENTENCES: SentenceExercise[] = [
  {
    id: 'pm_s_1',
    level: 'B1',
    englishPrompt: 'As a product owner, I prioritize the backlog based on expected customer value.',
    targetSentenceGerman: 'Als Product Owner priorisiere ich das Backlog nach dem erwarteten Kundennutzen.',
    scrambledWords: ['nach', 'dem', 'Als', 'Product', 'Owner', 'priorisiere', 'Backlog', 'Kundennutzen.', 'ich', 'das', 'erwarteten'],
    ruleHint: 'Vorangestellte Rollenbezeichnung (Als Product Owner...). Verb "priorisiere" an Position 2.',
    explanation: 'Die Rollenbezeichnung besetzt Position 1, danach folgt sofort das finite Verb, dann das Subjekt "ich".',
    category: 'workplace'
  },
  {
    id: 'pm_s_2',
    level: 'B1',
    englishPrompt: 'In order to lower the bounce rate, we need to simplify the checkout process.',
    targetSentenceGerman: 'Um die Absprungrate zu senken, müssen wir den Checkout-Prozess vereinfachen.',
    scrambledWords: ['die', 'senken,', 'wir', 'den', 'Checkout-Prozess', 'vereinfachen.', 'müssen', 'Um', 'Absprungrate', 'zu'],
    ruleHint: 'Infinitivgruppe mit "um... zu" am Satzanfang. Hauptsatz beginnt mit Modalverb "müssen".',
    explanation: 'Wenn die Finalphrase vorangestellt ist, leitet das konjugierte Verb "müssen" den nachfolgenden Hauptsatz ein.',
    category: 'workplace'
  },
  {
    id: 'pm_s_3',
    level: 'B2',
    englishPrompt: 'The developers check whether all acceptance criteria for this ticket are fulfilled.',
    targetSentenceGerman: 'Die Entwickler prüfen, ob alle Akzeptanzkriterien für dieses Ticket erfüllt sind.',
    scrambledWords: ['ob', 'prüfen,', 'dieses', 'erfüllt', 'Die', 'Ticket', 'alle', 'Entwickler', 'für', 'Akzeptanzkriterien', 'sind.'],
    ruleHint: 'Indirekte Frage mit "ob": Das Hilfsverb "sind" wandert an das Satzende.',
    explanation: 'In Nebensätzen, die mit "ob" eingeleitet werden, steht das konjugierte Hilfsverb ("sind") an allerletzter Stelle.',
    category: 'workplace'
  }
];

export const PRODUCT_QUIZZES: QuizQuestion[] = [
  {
    id: 'pm_q_1',
    level: 'Workplace',
    type: 'multiple-choice',
    question: 'Welcher Satz drückt ein Akzeptanzkriterium grammatikalisch und fachlich am präzisesten aus?',
    options: [
      'Ein Kunde, der nicht angemeldet ist, wird automatisch auf die Login-Seite umgeleitet.',
      'Kunden machen Login wenn sie wollen.',
      'Wir leiten vielleicht den User um wenn es geht.',
      'Der User soll mal gucken wo er sich einloggt.'
    ],
    correctAnswer: 'Ein Kunde, der nicht angemeldet ist, wird automatisch auf die Login-Seite umgeleitet.',
    explanation: 'Präzise Akzeptanzkriterien nutzen klare Relativsätze ("der nicht angemeldet ist") und verbindliche Zustandsverben im Präsens/Passiv ("wird umgeleitet").',
    category: 'Akzeptanzkriterien'
  },
  {
    id: 'pm_q_2',
    level: 'Workplace',
    type: 'multiple-choice',
    question: 'Was ist die Kernaufgabe eines Product Owners im Sprint Planning?',
    options: [
      'Den Entwicklern die Story Points und Schätzungen vorzugeben.',
      'Die priorisierten Backlog-Items vorzustellen und das Sprint-Ziel mit dem Team abzustimmen.',
      'Den Code auf syntaktische Fehler zu überprüfen.',
      'Den Urlaubsplan der Software-Ingenieure zu genehmigen.'
    ],
    correctAnswer: 'Die priorisierten Backlog-Items vorzustellen und das Sprint-Ziel mit dem Team abzustimmen.',
    explanation: 'Der PO verantwortet das "Was" und "Warum" (Backlog-Priorisierung und Sprint-Ziel), während das Entwicklerteam das "Wie" und die Schätzung bestimmt.',
    category: 'Scrum Rollen'
  }
];

export const PRODUCT_INTERVIEWS: InterviewQuestion[] = [
  {
    id: 'pm_iq_1',
    questionGerman: 'Wie gehen Sie vor, wenn zwei wichtige Stakeholder diametral entgegengesetzte Anforderungen an das nächste Release stellen?',
    questionEnglish: 'How do you handle a situation where two key stakeholders have diametrically opposed requirements for the next release?',
    category: 'Conflict & Stakeholders',
    level: 'B2',
    targetRole: 'Product Owner',
    contextTip: 'Betone Datenorientierung, Bezug auf übergeordnete Unternehmens- und Produktziele (OKRs) und transparente Kriterien.',
    modelAnswerGerman: 'In solchen Konfliktsituationen verlasse ich mich auf objektive Daten und unsere strategischen Produktziele. Zunächst hole ich beide Stakeholder in ein persönliches Gespräch, um die eigentlichen Geschäftsgründe und Kennzahlen hinter ihren Wünschen zu verstehen. Anschließend bewerten wir beide Initiativen transparent anhand unseres Priorisierungsframeworks (z. B. RICE oder WSJF) im Hinblick auf Kundennutzen und geschäftlichen Impact. Sollte danach immer noch Uneinigkeit herrschen, schlage ich oft einen pragmatischen A/B-Test oder ein MVP vor, um das Nutzerverhalten direkt am Markt zu validieren.',
    modelAnswerEnglish: 'In such conflict situations, I rely on objective data and our strategic product goals. First, I bring both stakeholders into a personal discussion to understand the underlying business drivers behind their requests. Then we evaluate both initiatives transparently using our prioritization framework.',
    powerPhrases: [
      'Entscheidungen auf Basis von Daten und OKRs treffen',
      'die zugrundeliegenden Geschäftsgründe verstehen',
      'transparent nach Kundennutzen priorisieren',
      'eine pragmatische MVP-Lösung vorschlagen'
    ],
    starFormula: {
      situation: 'Vertrieb forderte ein komplexes Enterprise-Feature, während Marketing den Checkout für B2C-Kunden überarbeiten wollte.',
      task: 'Auflösung des Priorisierungskonflikts ohne Verzögerung des anstehenden Release-Zyklus.',
      action: 'Ich habe eine quantitative Impact-Analyse vorgelegt und beide Stakeholder gezeigt, dass der B2C-Checkout kurzfristig 40 % mehr Umsatz bringt, das Enterprise-Feature aber für Q3 eingeplant wird.',
      result: 'Beide Parteien stimmten der Roadmap zu; der Release verlief planmäßig und steigerte den Quartalsumsatz um 18 %.'
    }
  }
];

// =====================================================================
// 4. DATA ENGINEER & DATA ARCHITECT
// =====================================================================

export const DATA_VOCABULARY: VocabularyItem[] = [
  {
    id: 'data_v_1',
    german: 'die Daten-Pipeline',
    article: 'die',
    plural: 'die Daten-Pipelines',
    english: 'data pipeline',
    level: 'B1',
    category: 'Pipelines & ETL',
    exampleSentence: 'Unsere neue Daten-Pipeline verarbeitet täglich über 50 Millionen Ereignisse mit einer Latenz von unter zwei Sekunden.',
    exampleTranslation: 'Our new data pipeline processes over 50 million events daily with a latency of under two seconds.',
    notes: 'Kollokation: eine Pipeline aufsetzen / überwachen / refaktorisieren.',
    tags: ['data', 'pipeline', 'engineering']
  },
  {
    id: 'data_v_2',
    german: 'die Batch-Verarbeitung',
    article: 'die',
    plural: 'die Batch-Verarbeitungen',
    english: 'batch processing',
    level: 'B1',
    category: 'Pipelines & ETL',
    exampleSentence: 'Die nächtliche Batch-Verarbeitung aggregiert die Verkaufsdaten aller Filialen für das morgendliche Reporting.',
    exampleTranslation: 'Nightly batch processing aggregates sales data from all branch stores for morning reporting.',
    notes: 'Gegensatz: Stream-Processing (Echtzeit-Verarbeitung).',
    tags: ['data', 'etl']
  },
  {
    id: 'data_v_3',
    german: 'das Stream-Processing',
    article: 'das',
    plural: 'die Stream-Processings',
    english: 'stream processing / real-time data streaming',
    level: 'B2',
    category: 'Streaming & Messaging',
    exampleSentence: 'Mithilfe von Apache Kafka und Flink realisieren wir Stream-Processing für die Betrugserkennung in Echtzeit.',
    exampleTranslation: 'Using Apache Kafka and Flink, we implement stream processing for real-time fraud detection.',
    notes: 'Ermöglicht Subsekunden-Latenzen.',
    tags: ['data', 'kafka', 'streaming']
  },
  {
    id: 'data_v_4',
    german: 'das Data Lakehouse',
    article: 'das',
    plural: 'die Data Lakehouses',
    english: 'data lakehouse',
    level: 'B2',
    category: 'Architektur & Speicher',
    exampleSentence: 'Das Data Lakehouse verbindet die Flexibilität kostengünstiger Objektspeicher mit ACID-Transaktionssicherheit.',
    exampleTranslation: 'The data lakehouse unites the flexibility of low-cost object storage with ACID transactional consistency.',
    notes: 'Kombiniert Data Lake und Data Warehouse (z. B. Delta Lake, Iceberg).',
    tags: ['data', 'architecture']
  },
  {
    id: 'data_v_5',
    german: 'die Daten-Governance',
    article: 'die',
    plural: 'die Daten-Governances',
    english: 'data governance',
    level: 'B2',
    category: 'Governance & Compliance',
    exampleSentence: 'Eine strikte Daten-Governance stellt Datenqualität, Zugriffskontrollen und die Einhaltung der DSGVO sicher.',
    exampleTranslation: 'Strict data governance ensures data quality, access controls, and GDPR compliance.',
    notes: 'Umfasst Datenkataloge, Data Lineage und Richtlinien.',
    tags: ['data', 'security']
  },
  {
    id: 'data_v_6',
    german: 'die Fehlertoleranz',
    article: 'die',
    plural: 'die Fehlertoleranzen',
    english: 'fault tolerance / resilience',
    level: 'B2',
    category: 'Zuverlässigkeit & Monitoring',
    exampleSentence: 'Durch verteilte Replikation und Checkpointing garantieren wir maximale Fehlertoleranz bei Serverausfällen.',
    exampleTranslation: 'Through distributed replication and checkpointing, we guarantee maximum fault tolerance during server failures.',
    notes: 'Essentiell für Hochverfügbarkeit (High Availability).',
    tags: ['data', 'architecture']
  },
  {
    id: 'data_v_7',
    german: 'das Schema-Drift',
    article: 'das',
    plural: 'die Schema-Drifts',
    english: 'schema drift',
    level: 'B2',
    category: 'Qualität & Hygiene',
    exampleSentence: 'Unerwartetes Schema-Drift in Quell-Systemen führt häufig zu Abbrüchen in nachgelagerten Transformations-Jobs.',
    exampleTranslation: 'Unexpected schema drift in source systems frequently causes failures in downstream transformation jobs.',
    notes: 'Wird durch Schema Registries (z. B. Confluent Schema Registry) verhindert.',
    tags: ['data', 'engineering']
  },
  {
    id: 'data_v_8',
    german: 'die Mandantenfähigkeit',
    article: 'die',
    plural: 'die Mandantenfähigkeiten',
    english: 'multi-tenancy',
    level: 'B2',
    category: 'Architektur & Speicher',
    exampleSentence: 'Aus Datenschutzgründen erfordert die Plattform vollständige Mandantenfähigkeit mit strikter Datentrennung.',
    exampleTranslation: 'For data privacy reasons, the platform requires complete multi-tenancy with strict data separation.',
    notes: 'Zentral für SaaS- und Cloud-Architekturen.',
    tags: ['data', 'cloud']
  }
];

export const DATA_GRAMMAR: GrammarTopic[] = [
  {
    id: 'data_g_1',
    level: 'B1',
    titleGerman: 'Vorgangspassiv in Pipeline-Architekturen & Datenflüssen',
    titleEnglish: 'Passive Voice in Data Pipelines & Flow Descriptions',
    summary: 'Präzise technische Dokumentation ohne menschliche Akteure.',
    ruleFormula: 'werden + Partizip II (Präsens) | wurden + Partizip II (Präteritum)',
    explanation: 'In Architektur-Dokumentationen, Incident-Reports und technischen Spezifikationen wird das Vorgangspassiv verwendet, da die automatisierten Prozesse der Datenverarbeitung im Mittelpunkt stehen.',
    examples: [
      {
        german: 'Die Rohdaten werden über Apache Kafka gestreamt, bereinigt und stündlich in Delta Lake persistiert.',
        english: 'Raw data is streamed via Apache Kafka, cleansed, and persisted hourly in Delta Lake.',
        highlightWord: 'werden gestreamt ... persistiert',
        note: 'Passiv Präsens für den Regelbetrieb.'
      },
      {
        german: 'Korrupte Datensätze wurden automatisch isoliert und in die Dead-Letter-Queue umgeleitet.',
        english: 'Corrupt records were automatically isolated and rerouted to the dead-letter queue.',
        highlightWord: 'wurden isoliert ... umgeleitet',
        note: 'Passiv Präteritum für Vorfälle und Auswertungen.'
      }
    ],
    tip: 'Im Deutschen werden technische Abläufe idealerweise im Passiv beschrieben: "Daten werden validiert" statt "Wir validieren Daten".'
  },
  {
    id: 'data_g_2',
    level: 'B2',
    titleGerman: 'Konditionalsätze für Fehlertoleranz & Failover (Falls / Wenn)',
    titleEnglish: 'Conditional Clauses for Fault Tolerance & Failover Logic',
    summary: 'Formulierung robuster Ausfallszenarien und architektonischer Garantien.',
    ruleFormula: 'Falls / Wenn + [Nebensatz: Verb am Ende], [Hauptsatz: Verb an Position 1 oder 2].',
    explanation: 'Architektur-Entscheidungen (ADRs) definieren genau, wie das System auf Teilausfälle reagiert. Konditionalsätze mit "falls" oder "wenn" spezifizieren diese Eventualitäten präzise.',
    examples: [
      {
        german: 'Falls ein Knoten im Spark-Cluster ausfällt, wird der fehlerhafte Task auf einem gesunden Node neu gestartet.',
        english: 'If a node in the Spark cluster fails, the failed task is restarted on a healthy node.',
        highlightWord: 'Falls ... ausfällt, wird',
        note: '"Falls" unterstreicht die Bedingung; das Hauptsatz-Verb "wird" steht direkt nach dem Komma.'
      },
      {
        german: 'Wenn die Latenz den Schwellenwert von zwei Sekunden überschreitet, schlägt der PagerDuty-Alarm an.',
        english: 'When latency exceeds the threshold of two seconds, the PagerDuty alarm triggers.',
        highlightWord: 'Wenn ... überschreitet',
        note: 'Temporale/konditionale Bedingung für Monitoring-Alerts.'
      }
    ],
    tip: 'Verwende "falls" bevorzugt für Ausnahmebedingungen und Systemfehler.'
  }
];

export const DATA_SENTENCES: SentenceExercise[] = [
  {
    id: 'data_s_1',
    level: 'B1',
    englishPrompt: 'The raw data is continuously streamed via Kafka and stored in the data lakehouse.',
    targetSentenceGerman: 'Die Rohdaten werden kontinuierlich über Kafka gestreamt und im Data Lakehouse gespeichert.',
    scrambledWords: ['über', 'im', 'Rohdaten', 'gespeichert.', 'werden', 'kontinuierlich', 'Kafka', 'Data', 'gestreamt', 'Die', 'und', 'Lakehouse'],
    ruleHint: 'Passiv Präsens: "werden" an Position 2, Partizipien "gestreamt" und "gespeichert" am Satzende.',
    explanation: 'Das Passivhilfsverb "werden" verbindet sich mit den Partizipien II am Satzende.',
    category: 'workplace'
  },
  {
    id: 'data_s_2',
    level: 'B2',
    englishPrompt: 'If a worker node in the cluster fails, a replacement node takes over processing automatically.',
    targetSentenceGerman: 'Falls ein Knoten im Cluster ausfällt, übernimmt ein Ersatz-Node die Verarbeitung automatisch.',
    scrambledWords: ['im', 'übernimmt', 'ausfällt,', 'Cluster', 'ein', 'die', 'Knoten', 'Falls', 'automatisch.', 'Ersatz-Node', 'Verarbeitung', 'ein'],
    ruleHint: 'Konditionalsatz mit "Falls": Verb "ausfällt" am Ende des Nebensatzes, Hauptsatz startet mit Verb "übernimmt".',
    explanation: 'Nach dem mit "Falls" eingeleiteten Nebensatz besetzt das finite Verb "übernimmt" die erste Position des Hauptsatzes.',
    category: 'workplace'
  },
  {
    id: 'data_s_3',
    level: 'B2',
    englishPrompt: 'By partitioning by date, we were able to drastically reduce analytical query costs.',
    targetSentenceGerman: 'Durch die Partitionierung nach Datum konnten wir die Kosten für analytische Abfragen drastisch senken.',
    scrambledWords: ['konnten', 'Partitionierung', 'Kosten', 'Abfragen', 'Durch', 'senken.', 'wir', 'die', 'drastisch', 'nach', 'Datum', 'die', 'für', 'analytische'],
    ruleHint: 'Kausale/instrumentale Präpositionalphrase "Durch die Partitionierung...". Modalverb "konnten" an Position 2.',
    explanation: 'Das Präteritum des Modalverbs "konnten" steht an Position 2, der Vollverb-Infinitiv "senken" schließt den Satz ab.',
    category: 'workplace'
  }
];

export const DATA_QUIZZES: QuizQuestion[] = [
  {
    id: 'data_q_1',
    level: 'Workplace',
    type: 'multiple-choice',
    question: 'Welcher Satz beschreibt eine Streaming-Pipeline im korrekten technischen Vorgangspassiv?',
    options: [
      'Die Ereignisse werden in Echtzeit aggregiert und in das Lakehouse geschrieben.',
      'Wir streamen die Daten und machen sie fertig.',
      'Die Daten sind am gestreamt sein.',
      'Der Entwickler hat Daten ins System getan.'
    ],
    correctAnswer: 'Die Ereignisse werden in Echtzeit aggregiert und in das Lakehouse geschrieben.',
    explanation: 'Technisches Vorgangspassiv ("werden aggregiert und geschrieben") beschreibt den automatisierten Systemprozess objektiv und präzise.',
    category: 'Architektur-Deutsch'
  },
  {
    id: 'data_q_2',
    level: 'Workplace',
    type: 'multiple-choice',
    question: 'Was versteht man im Data Engineering unter dem Begriff "Schema-Drift"?',
    options: [
      'Die unerwartete Änderung von Datentypen, Spaltennamen oder Feldern in den Quellsystemen.',
      'Das langsame Wegdriften eines Servers im Rechenzentrum.',
      'Die Migration eines Entwicklers in ein anderes Team.',
      'Das Löschen alter Backups nach Ablauf der Aufbewahrungsfrist.'
    ],
    correctAnswer: 'Die unerwartete Änderung von Datentypen, Spaltennamen oder Feldern in den Quellsystemen.',
    explanation: 'Schema-Drift beschreibt Struktur- und Typänderungen von Datenquellen, die nachgelagerte Pipelines beschädigen können, wenn kein Schema Enforcement existiert.',
    category: 'Fachbegriffe'
  }
];

export const DATA_INTERVIEWS: InterviewQuestion[] = [
  {
    id: 'data_iq_1',
    questionGerman: 'Beschreiben Sie einen schwerwiegenden Pipeline-Ausfall in Ihrer bisherigen Praxis und wie Sie ihn analysiert und behoben haben.',
    questionEnglish: 'Describe a severe pipeline outage in your past experience and how you analyzed and resolved it.',
    category: 'Data Pipelines & Reliability',
    level: 'B2',
    targetRole: 'Data Engineer',
    contextTip: 'Nutze die STAR-Methode: Strukturiertes Vorgehen, Incident Management, Root-Cause-Analyse und dauerhafte Prävention.',
    modelAnswerGerman: 'In meiner vorherigen Position fiel am Monatsende unsere zentrale Abrechnungs-Pipeline aus, da eine Drittanbieter-API ohne Vorankündigung ein neues Pflichtfeld im JSON-Payload einführte. Das führte zu einem Schema-Validierungsfehler in Spark und einem Rückstau von Millionen Nachrichten im Kafka-Cluster. Ich habe sofort das Incident-Team einberufen, den Traffic über eine Dead-Letter-Queue entkoppelt und den nachgelagerten Ingestion-Job mit Schema-Evolution gepatcht. Nach der Datenbereinigung haben wir die aufgestauten Datensätze verarbeitet. Zur Prävention führten wir eine strikte Schema-Registry und automatisierte Contract-Tests ein.',
    modelAnswerEnglish: 'In my previous position, our central billing pipeline failed at month-end because a third-party API introduced a new mandatory field in the JSON payload without prior notice. This caused a schema validation error in Spark.',
    powerPhrases: [
      'eine strukturierte Ursachenanalyse (Root-Cause-Analysis) durchführen',
      'die fehlerhaften Datensätze in eine Dead-Letter-Queue umleiten',
      'die Pipeline mit Schema-Evolution patchen',
      'dauerhafte Maßnahmen zur Ausfallsicherheit etablieren'
    ],
    starFormula: {
      situation: 'Ein ungekündigtes Schema-Update eines Partners führte zu einem Totalausfall des täglichen ETL-Jobs.',
      task: 'Wiederherstellung des Datenflusses innerhalb des SLAs und Vermeidung von Datenverlust.',
      action: 'Ich habe das fehlerhafte Feld in der Pydantic/Spark-Validierung optional deklariert und den Kafka-Consumer neu gestartet.',
      result: 'Die Pipeline war nach 45 Minuten wieder betriebsbereit; kein einziger Transaktionsdatensatz ging verloren.'
    }
  }
];

// =====================================================================
// UNIFIED GETTERS
// =====================================================================

export function getDomainVocabulary(domain: AppDomain, generalVocab: VocabularyItem[]): VocabularyItem[] {
  switch (domain) {
    case 'medical':
      return MEDICAL_VOCABULARY;
    case 'student_wi':
      return STUDENT_WI_VOCABULARY;
    case 'product':
      return PRODUCT_VOCABULARY;
    case 'data':
      return DATA_VOCABULARY;
    case 'general':
    default:
      return generalVocab;
  }
}

export function getDomainGrammar(domain: AppDomain, generalGrammar: GrammarTopic[]): GrammarTopic[] {
  switch (domain) {
    case 'medical':
      return MEDICAL_GRAMMAR;
    case 'student_wi':
      return STUDENT_WI_GRAMMAR;
    case 'product':
      return PRODUCT_GRAMMAR;
    case 'data':
      return DATA_GRAMMAR;
    case 'general':
    default:
      return generalGrammar;
  }
}

export function getDomainSentences(domain: AppDomain, generalSentences: SentenceExercise[]): SentenceExercise[] {
  switch (domain) {
    case 'medical':
      return MEDICAL_SENTENCES;
    case 'student_wi':
      return STUDENT_WI_SENTENCES;
    case 'product':
      return PRODUCT_SENTENCES;
    case 'data':
      return DATA_SENTENCES;
    case 'general':
    default:
      return generalSentences;
  }
}

export function getDomainQuizzes(domain: AppDomain, generalQuizzes: QuizQuestion[]): QuizQuestion[] {
  switch (domain) {
    case 'medical':
      return MEDICAL_QUIZZES;
    case 'student_wi':
      return STUDENT_WI_QUIZZES;
    case 'product':
      return PRODUCT_QUIZZES;
    case 'data':
      return DATA_QUIZZES;
    case 'general':
    default:
      return generalQuizzes;
  }
}

export function getDomainInterviews(domain: AppDomain, generalInterviews: InterviewQuestion[]): InterviewQuestion[] {
  switch (domain) {
    case 'medical':
      return MEDICAL_INTERVIEWS;
    case 'student_wi':
      return STUDENT_WI_INTERVIEWS;
    case 'product':
      return PRODUCT_INTERVIEWS;
    case 'data':
      return DATA_INTERVIEWS;
    case 'general':
    default:
      return generalInterviews;
  }
}

