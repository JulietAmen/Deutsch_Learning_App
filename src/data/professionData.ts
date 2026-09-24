import { ProfessionVocabTerm, TechProfession, InterviewQuestion } from '../types';

export interface ProfessionMeta {
  id: TechProfession;
  nameGerman: string;
  nameEnglish: string;
  tagline: string;
  descriptionGerman: string;
  descriptionEnglish: string;
  coreResponsibilities: string[];
  iconName: 'target' | 'database' | 'cpu' | 'code' | 'bar-chart' | 'layers';
  colorBadge: string;
}

export const TECH_PROFESSIONS: ProfessionMeta[] = [
  {
    id: 'Data Engineer',
    nameGerman: 'Data Engineer (Dateningenieur)',
    nameEnglish: 'Data Engineer',
    tagline: 'Pipelines, ETL/ELT, Streaming & Big Data Infrastruktur',
    descriptionGerman: 'Konzipiert, implementiert und betreibt robuste Daten-Pipelines, Speichersysteme und Streaming-Architekturen für Analytics und maschinelles Lernen.',
    descriptionEnglish: 'Designs, builds, and maintains robust data pipelines, storage systems, and streaming architectures for analytics and ML.',
    coreResponsibilities: [
      'Entwicklung skalierbarer Batch- und Streaming-Pipelines (z. B. Kafka, Spark, Airflow)',
      'Sicherstellung von Datenqualität, Latenz-Zielen und Datenintegrität',
      'Integration heterogener Datenquellen in Data Lakes und Data Warehouses',
      'Monitoring, Fehlerbehandlung und Performance-Tuning von Datenbankabfragen'
    ],
    iconName: 'database',
    colorBadge: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  },
  {
    id: 'Data Architect',
    nameGerman: 'Data Architect (Datenarchitekt)',
    nameEnglish: 'Data Architect',
    tagline: 'Enterprise-Datenstrategie, Governance, Data Mesh & Compliance',
    descriptionGerman: 'Definiert die übergeordnete Datenstrategie, entwirft unternehmensweite Datenmodelle und stellt Skalierbarkeit, Sicherheit und DSGVO-Konformität sicher.',
    descriptionEnglish: 'Defines the overarching data strategy, designs enterprise-wide data models, and enforces scalability, security, and GDPR compliance.',
    coreResponsibilities: [
      'Entwurf zukunftssicherer Datenarchitekturen (Data Mesh, Lakehouse, Modern Data Stack)',
      'Etablierung von Data Governance, Datenkatalogen und Data Lineage',
      'Einhaltung von Datensicherheit, Mandantenfähigkeit und DSGVO-Regularien',
      'Technische Beratung für Führungskräfte, Data Engineers und Fachabteilungen'
    ],
    iconName: 'layers',
    colorBadge: 'bg-indigo-100 text-indigo-800 border-indigo-300'
  },
  {
    id: 'Product Owner',
    nameGerman: 'Product Owner (PO)',
    nameEnglish: 'Product Owner',
    tagline: 'Backlog-Management, Sprint-Ziele & Kundennutzen',
    descriptionGerman: 'Verantwortet das Product Backlog, formuliert klare User Stories und maximiert den geschäftlichen Wert für das Entwicklungsteam und Stakeholder.',
    descriptionEnglish: 'Owns the product backlog, defines crisp user stories, and maximizes business value delivery.',
    coreResponsibilities: [
      'Priorisierung des Product Backlogs nach Geschäftswert und Dringlichkeit',
      'Definition von Akzeptanzkriterien und Definition of Ready / Done',
      'Enge Zusammenarbeit mit Entwicklern in Refinements und Planning-Meetings',
      'Abnahme entwickelter Inkremente und Einholen von Nutzerfeedback'
    ],
    iconName: 'target',
    colorBadge: 'bg-amber-100 text-amber-800 border-amber-300'
  },
  {
    id: 'Product Manager',
    nameGerman: 'Product Manager (PM)',
    nameEnglish: 'Product Manager',
    tagline: 'Produktstrategie, Roadmap, Marktanalyse & Stakeholder',
    descriptionGerman: 'Definiert die langfristige Produktvision, führt Markt- und Wettbewerbsanalysen durch und stimmt sich strategisch mit Führungskräften ab.',
    descriptionEnglish: 'Defines the strategic vision, runs market analyses, and aligns roadmap goals across stakeholders.',
    coreResponsibilities: [
      'Erstellung und Pflege der strategischen Produkt-Roadmap',
      'Messung von Produkt-KPIs (Churn, Conversion, Retention, ROI)',
      'Austausch mit Geschäftsführung, Vertrieb, Marketing und Schlüsselkunden',
      'Entscheidungsfindung bei widersprüchlichen Stakeholder-Anforderungen'
    ],
    iconName: 'cpu',
    colorBadge: 'bg-blue-100 text-blue-800 border-blue-300'
  },
  {
    id: 'Software Engineer',
    nameGerman: 'Software Engineer (Softwareentwickler)',
    nameEnglish: 'Software Engineer',
    tagline: 'Microservices, APIs, Codequalität & CI/CD',
    descriptionGerman: 'Entwickelt wartbaren Code, konzipiert Schnittstellen und setzt moderne Software-Architekturmuster in agilen Teams um.',
    descriptionEnglish: 'Builds maintainable software, designs robust APIs, and implements modern architecture patterns.',
    coreResponsibilities: [
      'Entwicklung robuster Backend- und Frontend-Komponenten',
      'Durchführung von Code Reviews und automatisierter Testabdeckung',
      'Bereitstellung über CI/CD-Pipelines und Cloud-Infrastruktur',
      'Zusammenarbeit im Team bei der Schätzung und technischen Konzeption'
    ],
    iconName: 'code',
    colorBadge: 'bg-purple-100 text-purple-800 border-purple-300'
  },
  {
    id: 'Data Analyst',
    nameGerman: 'Data Analyst & BI Specialist',
    nameEnglish: 'Data Analyst / BI',
    tagline: 'Dashboards, Datenvisualisierung, Kohorten & Metriken',
    descriptionGerman: 'Übersetzt komplexe Datenmengen in verständliche Visualisierungen, Dashboards und Handlungsempfehlungen für das Business.',
    descriptionEnglish: 'Translates raw data into intuitive business dashboards, trend analyses, and actionable decisions.',
    coreResponsibilities: [
      'Konzeption und Pflege von BI-Dashboards (PowerBI, Tableau, Looker)',
      'Erstellung von Kohortenanalysen, Funnels und A/B-Test-Auswertungen',
      'Ad-hoc SQL-Abfragen für Management und Produktteams',
      'Identifikation von Trends, Anomalien und Wachstumshebeln'
    ],
    iconName: 'bar-chart',
    colorBadge: 'bg-rose-100 text-rose-800 border-rose-300'
  }
];

export const PROFESSION_VOCABULARY_TERMS: ProfessionVocabTerm[] = [
  // ==========================================
  // DATA ENGINEER VOCABULARY
  // ==========================================
  {
    term: 'die Daten-Pipeline',
    article: 'die',
    plural: 'die Daten-Pipelines',
    english: 'data pipeline',
    profession: 'Data Engineer',
    category: 'Pipelines & ETL',
    definitionGerman: 'Automatisierte Kette von Prozessen, die Daten aus heterogenen Quellsystemen extrahiert, bereinigt, transformiert und in ein Zielsystem lädt.',
    definitionEnglish: 'An automated series of steps that extracts, transforms, and loads data from raw sources into destination stores.',
    exampleSentence: 'Unsere neue Daten-Pipeline verarbeitet täglich über 50 Millionen Ereignisse mit einer Latenz von unter zwei Sekunden.',
    exampleTranslation: 'Our new data pipeline processes over 50 million events daily with a latency of under two seconds.'
  },
  {
    term: 'die Echtzeit-Verarbeitung (Streaming)',
    article: 'die',
    plural: 'die Echtzeit-Verarbeitungen',
    english: 'real-time / stream processing',
    profession: 'Data Engineer',
    category: 'Streaming & Messaging',
    definitionGerman: 'Die unterbrechungsfreie Verarbeitung kontinuierlicher Datenströme unmittelbar nach deren Entstehung (z. B. mit Apache Kafka oder Apache Flink).',
    definitionEnglish: 'Continuous processing of incoming data streams immediately upon generation with sub-second latency.',
    exampleSentence: 'Wir stellen von nächtlichen Batches auf Echtzeit-Verarbeitung um, um Betrugsfälle sofort erkennen zu können.',
    exampleTranslation: 'We are transitioning from nightly batches to real-time stream processing to detect fraud instantly.'
  },
  {
    term: 'die Batch-Verarbeitung',
    article: 'die',
    plural: 'die Batch-Verarbeitungen',
    english: 'batch processing',
    profession: 'Data Engineer',
    category: 'Pipelines & ETL',
    definitionGerman: 'Die gesammelte, periodische Abarbeitung großer Datenpakete zu vorab definierten Zeitfenstern (z. B. nächtlicher Abgleich).',
    definitionEnglish: 'Processing large volumes of accumulated data in scheduled intervals or offline batches.',
    exampleSentence: 'Die Batch-Verarbeitung der Finanzdaten startet jeden Morgen pünktlich um 3:00 Uhr.',
    exampleTranslation: 'The batch processing of financial data starts every morning at 3:00 AM sharp.'
  },
  {
    term: 'das Data Lakehouse',
    article: 'das',
    plural: 'die Data Lakehouses',
    english: 'data lakehouse',
    profession: 'Data Engineer',
    category: 'Architektur & Speicher',
    definitionGerman: 'Hybride Architektur, die die kostengünstige Skalierbarkeit eines Data Lakes mit den ACID-Transaktionen und der Performance eines Data Warehouses kombiniert.',
    definitionEnglish: 'Modern hybrid data architecture combining low-cost data lake storage with data warehouse ACID guarantees and governance.',
    exampleSentence: 'Durch das Data Lakehouse vermeiden wir doppelte Datenspeicherung und ermöglichen direkte SQL-Abfragen auf Rohdaten.',
    exampleTranslation: 'Through the data lakehouse, we prevent duplicate storage and allow direct SQL queries on raw data.'
  },
  {
    term: 'die Datenbereinigung',
    article: 'die',
    plural: 'die Datenbereinigungen',
    english: 'data cleansing / data scrubbing',
    profession: 'Data Engineer',
    category: 'Qualität & Hygiene',
    definitionGerman: 'Identifikation, Korrektur oder Entfernung von doppelten, fehlerhaften oder unvollständigen Datensätzen vor der Weiterverarbeitung.',
    definitionEnglish: 'Detecting and removing corrupt, inaccurate, or incomplete records from record sets.',
    exampleSentence: 'Die Datenbereinigung ist ein kritischer Schritt, um korrekte Trainingsdaten für unsere ML-Modelle sicherzustellen.',
    exampleTranslation: 'Data cleansing is a critical step to ensure accurate training data for our ML models.'
  },
  {
    term: 'die Partitionierung',
    article: 'die',
    plural: 'die Partitionierungen',
    english: 'partitioning / sharding',
    profession: 'Data Engineer',
    category: 'Performance & Tuning',
    definitionGerman: 'Die Aufteilung großer Tabellen oder Dateien in kleinere, handhabbare Einheiten (z. B. nach Datum oder Region), um Abfragen zu beschleunigen.',
    definitionEnglish: 'Dividing large datasets or tables into smaller distinct segments to optimize query execution and storage costs.',
    exampleSentence: 'Durch die Partitionierung nach Kalenderwochen konnten wir die Kosten für analytische Cloud-Abfragen um 70 % senken.',
    exampleTranslation: 'By partitioning by calendar week, we reduced cloud analytical query costs by 70%.'
  },
  {
    term: 'die Fehlerbehandlung (Dead-Letter-Queue)',
    article: 'die',
    plural: 'die Fehlerbehandlungen',
    english: 'error handling / dead-letter queue (DLQ)',
    profession: 'Data Engineer',
    category: 'Zuverlässigkeit & Monitoring',
    definitionGerman: 'Verfahren zur Isolierung und Protokollierung korrupter Nachrichten in einer separaten Warteschlange, ohne den Gesamtprozess zu stoppen.',
    definitionEnglish: 'Mechanism to route failed or malformed messages into a dedicated queue for inspection without pipeline halts.',
    exampleSentence: 'Ungültige JSON-Payloads leiten wir automatisch in die Dead-Letter-Queue weiter und benachrichtigen das On-Call-Team.',
    exampleTranslation: 'We automatically route invalid JSON payloads into the dead-letter queue and notify the on-call team.'
  },
  {
    term: 'die Datenkonsistenz',
    article: 'die',
    english: 'data consistency (ACID vs. Eventual)',
    profession: 'Data Engineer',
    category: 'Integrität & Speicherung',
    definitionGerman: 'Der Zustand, in dem Daten über alle verteilten Datenbanken und Replikate hinweg fehlerfrei, logisch und synchron vorliegen.',
    definitionEnglish: 'Ensuring that data across distributed systems, nodes, and replicas remains accurate, valid, and synchronized.',
    exampleSentence: 'Bei Finanztransaktionen verlangen wir strikte Datenkonsistenz, während wir bei Log-Events mit Eventual Consistency arbeiten.',
    exampleTranslation: 'For financial transactions, we require strict data consistency, whereas for log events, we rely on eventual consistency.'
  },
  {
    term: 'die Schema-Evolution',
    article: 'die',
    english: 'schema evolution / schema migration',
    profession: 'Data Engineer',
    category: 'Pipelines & ETL',
    definitionGerman: 'Die kontrollierte Anpassung von Datenstrukturen (z. B. Avro, Protobuf, SQL) unter Erhalt der Abwärtskompatibilität für bestehende Konsumenten.',
    definitionEnglish: 'Systematic modification of database or event schemas while maintaining backward compatibility for data consumers.',
    exampleSentence: 'Dank Schema-Evolution können wir neue Attribute hinzufügen, ohne dass nachgelagerte Dashboards abstürzen.',
    exampleTranslation: 'Thanks to schema evolution, we can add new attributes without breaking downstream dashboards.'
  },

  // ==========================================
  // DATA ARCHITECT VOCABULARY
  // ==========================================
  {
    term: 'die Datenarchitektur',
    article: 'die',
    plural: 'die Datenarchitekturen',
    english: 'data architecture',
    profession: 'Data Architect',
    category: 'Architektur & Strategie',
    definitionGerman: 'Das übergeordnete Framework aus Richtlinien, Datenmodellen, Standards und Technologien, das den Datenfluss im gesamten Unternehmen strukturiert.',
    definitionEnglish: 'The comprehensive framework defining models, standards, and technologies governing enterprise data assets.',
    exampleSentence: 'Als Data Architect entwerfe ich eine zukunftssichere Datenarchitektur, die hybride Cloud-Umgebungen nahtlos verbindet.',
    exampleTranslation: 'As a Data Architect, I design a future-proof data architecture that seamlessly connects hybrid cloud environments.'
  },
  {
    term: 'die Data Governance',
    article: 'die',
    english: 'data governance / data compliance',
    profession: 'Data Architect',
    category: 'Governance & Richtlinien',
    definitionGerman: 'Gesamtheit aller strategischen Regeln, Verantwortlichkeiten und Kontrollprozesse zur Gewährleistung von Datenqualität, Sicherheit und Compliance.',
    definitionEnglish: 'The strategic framework of principles, responsibilities, and control processes ensuring data quality and compliance.',
    exampleSentence: 'Eine funktionierende Data Governance stellt sicher, dass sensible Kundendaten nur von autorisierten Systemen verarbeitet werden.',
    exampleTranslation: 'Functional data governance ensures that sensitive customer data is only processed by authorized systems.'
  },
  {
    term: 'das Data Mesh',
    article: 'das',
    english: 'data mesh architecture',
    profession: 'Data Architect',
    category: 'Architektur & Strategie',
    definitionGerman: 'Dezentrales Paradigma, das Datenverantwortung als Produkt (Data-as-a-Product) in autonome, fachliche Domänenteams delegiert.',
    definitionEnglish: 'Decentralized paradigm shifting data ownership to domain-driven product teams treating data as a product.',
    exampleSentence: 'Mit der Einführung von Data Mesh lösen wir das zentrale Data-Warehouse-Team auf und befähigen die Fachdomänen zur Eigenverantwortung.',
    exampleTranslation: 'By implementing a Data Mesh, we break up the central data warehouse team and empower functional domains to own their data.'
  },
  {
    term: 'die Datensouveränität (DSGVO)',
    article: 'die',
    english: 'data sovereignty / GDPR compliance',
    profession: 'Data Architect',
    category: 'Sicherheit & Recht',
    definitionGerman: 'Rechtliche und technische Kontrolle über den physischen Speicherort, Verarbeitungszwecke und Löschfristen personenbezogener Daten.',
    definitionEnglish: 'Legal and technical dominion over data physical residency, processing scope, and retention compliance.',
    exampleSentence: 'Wir müssen die Datensouveränität gewährleisten, indem alle personenbezogenen Daten innerhalb der EU verschlüsselt gehostet werden.',
    exampleTranslation: 'We must ensure data sovereignty by hosting and encrypting all personally identifiable data within the EU.'
  },
  {
    term: 'die Mandantenfähigkeit',
    article: 'die',
    english: 'multi-tenancy / tenant isolation',
    profession: 'Data Architect',
    category: 'Architektur & Sicherheit',
    definitionGerman: 'Fähigkeit einer Datenplattform, Daten verschiedener Unternehmenskunden (Mandanten) strikt voneinander zu trennen, trotz geteilter Infrastruktur.',
    definitionEnglish: 'Ability of a software and data platform to serve multiple tenants while strictly isolating data and access credentials.',
    exampleSentence: 'Die Mandantenfähigkeit unseres Daten-Layers garantiert, dass Kunde A unter keinen Umständen Einsicht in Daten von Kunde B erhält.',
    exampleTranslation: 'The multi-tenancy of our data layer guarantees that Client A can never access Client B\'s data under any circumstance.'
  },
  {
    term: 'die Datenherkunft (Data Lineage)',
    article: 'die',
    english: 'data lineage / provenance',
    profession: 'Data Architect',
    category: 'Governance & Metadaten',
    definitionGerman: 'Die lückenlose Nachverfolgbarkeit des gesamten Lebenszyklus eines Datenpunktes von der Quelle über alle Transformationen bis zum Endreport.',
    definitionEnglish: 'The transparent tracking of data lifecycle, origin, and transformations across systems to the end dashboard.',
    exampleSentence: 'Data Lineage ist unerlässlich bei Finanz-Audits, um die genaue Entstehung jeder Kennzahl im Geschäftsbericht nachzuweisen.',
    exampleTranslation: 'Data Lineage is essential during financial audits to prove the exact origin of every KPI in the annual report.'
  },
  {
    term: 'das dimensionale Datenmodell',
    article: 'das',
    plural: 'die dimensionalen Datenmodelle',
    english: 'dimensional modeling (Star / Snowflake Schema)',
    profession: 'Data Architect',
    category: 'Modellierung & Analytics',
    definitionGerman: 'Modellierungsmethode für analytische Abfragen basierend auf Faktentabellen (Messwerte) und Dimensionstabellen (Kontext wie Zeit, Kunde, Produkt).',
    definitionEnglish: 'Modeling technique optimized for analytical querying, organized into fact and dimension tables (Star/Snowflake schema).',
    exampleSentence: 'Für das Vertriebs-Reporting wählen wir ein Star-Schema, um SQL-Abfragen performant und für Business-User intuitiv zu halten.',
    exampleTranslation: 'For sales reporting, we choose a star schema to keep SQL queries performant and intuitive for business users.'
  },
  {
    term: 'die Skalierbarkeit (horizontal / vertikal)',
    article: 'die',
    english: 'scalability (horizontal vs. vertical)',
    profession: 'Data Architect',
    category: 'Performance & Infrastruktur',
    definitionGerman: 'Die Eigenschaft einer Architektur, wachsende Datenmengen und gleichzeitige Nutzeranfragen ohne Performance-Verlust durch Hinzufügen von Knoten zu bewältigen.',
    definitionEnglish: 'The capacity of a data architecture to handle growing workloads and concurrent queries smoothly by adding computational nodes.',
    exampleSentence: 'Unsere Architektur setzt auf horizontale Skalierbarkeit, sodass wir bei Lastspitzen flexibel Cloud-Instanzen zuschalten können.',
    exampleTranslation: 'Our architecture relies on horizontal scalability, allowing us to spin up cloud instances dynamically during peak loads.'
  },
  {
    term: 'das Stammdatenmanagement (MDM)',
    article: 'das',
    english: 'master data management (MDM)',
    profession: 'Data Architect',
    category: 'Governance & Richtlinien',
    definitionGerman: 'Methoden und Werkzeuge zur Schaffung einer einheitlichen, verlässlichen "Single Source of Truth" für zentrale Geschäftsdaten wie Kunden oder Produkte.',
    definitionEnglish: 'Comprehensive discipline establishing a single reliable source of truth for critical enterprise entities.',
    exampleSentence: 'Durch ein zentrales Stammdatenmanagement verhindern wir doppelte Kundendatensätze in CRM und ERP.',
    exampleTranslation: 'Through centralized master data management, we eliminate duplicate customer records across CRM and ERP.'
  },

  // ==========================================
  // PRODUCT OWNER VOCABULARY
  // ==========================================
  {
    term: 'das Backlog Refinement',
    article: 'das',
    english: 'backlog refinement / grooming',
    profession: 'Product Owner',
    category: 'Scrum & Agil',
    definitionGerman: 'Regelmäßiges Meeting, in dem User Stories präzisiert, geschätzt und für kommende Sprints vorbereitet werden.',
    definitionEnglish: 'Regular session where user stories are clarified, estimated, and refined with the development team.',
    exampleSentence: 'Im heutigen Backlog Refinement haben wir die Akzeptanzkriterien für das Zahlungs-Gateway geschärft.',
    exampleTranslation: 'In today\'s backlog refinement, we sharpened the acceptance criteria for the payment gateway.'
  },
  {
    term: 'die Akzeptanzkriterien',
    article: 'die',
    plural: 'die Akzeptanzkriterien (Plural)',
    english: 'acceptance criteria',
    profession: 'Product Owner',
    category: 'Anforderungen & Backlog',
    definitionGerman: 'Eindeutige Bedingungen, die ein Feature erfüllen muss, um als fertig ("Done") akzeptiert zu werden.',
    definitionEnglish: 'Clear conditions that a user story must meet to be accepted as complete and shippable.',
    exampleSentence: 'Bitte definiere messbare Akzeptanzkriterien für diesen Jira-Vorgang.',
    exampleTranslation: 'Please define measurable acceptance criteria for this Jira ticket.'
  },
  {
    term: 'die Benutzeranforderung (User Story)',
    article: 'die',
    plural: 'die Benutzeranforderungen',
    english: 'user story / requirement',
    profession: 'Product Owner',
    category: 'Anforderungen & Backlog',
    definitionGerman: 'Eine funktionale Beschreibung aus Sicht des Endnutzers: Als [Rolle] möchte ich [Ziel], um [Nutzen] zu erreichen.',
    definitionEnglish: 'Functional description written from the end user\'s perspective capturing role, desire, and benefit.',
    exampleSentence: 'Als Product Owner formuliere ich Benutzeranforderungen stets mit klarem Kundenfokus.',
    exampleTranslation: 'As a Product Owner, I always formulate user stories with a clear customer focus.'
  },
  {
    term: 'das Sprint-Ziel',
    article: 'das',
    plural: 'die Sprint-Ziele',
    english: 'sprint goal',
    profession: 'Product Owner',
    category: 'Scrum & Agil',
    definitionGerman: 'Das übergeordnete fachliche Ziel, auf das sich das Entwicklungsteam für die Dauer einer Iteration verpflichtet.',
    definitionEnglish: 'The singular business objective the scrum team commits to achieving during a sprint.',
    exampleSentence: 'Unser Sprint-Ziel lautet: Vollständige Migration des Checkout-Prozesses auf Microservices.',
    exampleTranslation: 'Our sprint goal is: Complete migration of the checkout process to microservices.'
  },

  // ==========================================
  // PRODUCT MANAGER VOCABULARY
  // ==========================================
  {
    term: 'die Wertschöpfung / der Geschäftswert',
    article: 'der',
    english: 'business value delivery',
    profession: 'Product Manager',
    category: 'Roadmap & Strategie',
    definitionGerman: 'Der ökonomische oder strategische Mehrwert, den ein Produkt für das Unternehmen und Kunden stiftet.',
    definitionEnglish: 'The economic or strategic benefit delivered to the business and its customers.',
    exampleSentence: 'Wir priorisieren die Roadmap-Initiativen primär nach ihrem erwarteten Geschäftswert.',
    exampleTranslation: 'We prioritize roadmap initiatives primarily by their expected business value.'
  },
  {
    term: 'die Stakeholder-Einbindung',
    article: 'die',
    english: 'stakeholder engagement',
    profession: 'Product Manager',
    category: 'Kommunikation & Alignment',
    definitionGerman: 'Die kontinuierliche Abstimmung mit internen und externen Interessensgruppen wie Vertrieb, Geschäftsführung und Kunden.',
    definitionEnglish: 'Continuous alignment with key internal and external interest groups and sponsors.',
    exampleSentence: 'Eine transparente Stakeholder-Einbindung verhindert Missverständnisse vor dem Rollout.',
    exampleTranslation: 'Transparent stakeholder engagement prevents misunderstandings prior to rollout.'
  },
  {
    term: 'die Machbarkeitsprüfung (Spike)',
    article: 'die',
    plural: 'die Machbarkeitsprüfungen',
    english: 'feasibility test / spike',
    profession: 'Product Manager',
    category: 'Roadmap & Strategie',
    definitionGerman: 'Eine zeitlich begrenzte Untersuchung durch das Dev-Team, um technische Risiken vorab zu klären.',
    definitionEnglish: 'A time-boxed research activity by engineers to eliminate technical uncertainties before committing.',
    exampleSentence: 'Wir planen einen zweitägigen Spike ein, um die API-Performance zu validieren.',
    exampleTranslation: 'We are scheduling a two-day spike to validate API performance.'
  },
  {
    term: 'der Engpass (Bottleneck)',
    article: 'der',
    plural: 'die Engpässe',
    english: 'bottleneck / constraint',
    profession: 'Product Manager',
    category: 'Prozesse & KPIs',
    definitionGerman: 'Eine Stelle im Prozess oder System, die den Durchsatz und das Ausliefern von Features verlangsamt.',
    definitionEnglish: 'A point of congestion in a system that constrains throughput and speed to market.',
    exampleSentence: 'Aktuell liegt der Engpass bei der manuellen Qualitätssicherung.',
    exampleTranslation: 'Currently, the bottleneck lies in manual quality assurance.'
  },

  // ==========================================
  // SOFTWARE ENGINEER VOCABULARY
  // ==========================================
  {
    term: 'die Schnittstellenkompatibilität',
    article: 'die',
    english: 'API compatibility',
    profession: 'Software Engineer',
    category: 'APIs & Integration',
    definitionGerman: 'Sicherstellung, dass neue Software-Versionen bestehende Schnittstellen ohne Versionsbrüche bedienen.',
    definitionEnglish: 'Ensuring that new software versions interact smoothly with existing APIs without breaking changes.',
    exampleSentence: 'Bei REST-Endpunkten achten wir penibel auf Schnittstellenkompatibilität für Drittanbieter.',
    exampleTranslation: 'With REST endpoints, we pay strict attention to API compatibility for third-party consumers.'
  },
  {
    term: 'die Ausfallsicherheit',
    article: 'die',
    english: 'high availability / resilience',
    profession: 'Software Engineer',
    category: 'Infrastruktur & Cloud',
    definitionGerman: 'Konstruktion von Systemen, die trotz Hard- oder Softwarefehlern ohne Dienstunterbrechung weiterarbeiten.',
    definitionEnglish: 'Designing systems that continue operating without interruption despite partial component failures.',
    exampleSentence: 'Durch Multi-Zone-Deployments garantieren wir eine Ausfallsicherheit von 99,99 %.',
    exampleTranslation: 'Through multi-zone deployments, we guarantee high availability of 99.99%.'
  },
  {
    term: 'das Code-Refactoring',
    article: 'das',
    english: 'code refactoring',
    profession: 'Software Engineer',
    category: 'Codequalität',
    definitionGerman: 'Strukturverbesserung von bestehendem Quellcode ohne Veränderung des beobachtbaren externen Verhaltens.',
    definitionEnglish: 'Improving internal structure and readability of code without changing its external behavior.',
    exampleSentence: 'Wir reservieren 20 % der Sprint-Kapazität für kontinuierliches Code-Refactoring.',
    exampleTranslation: 'We reserve 20% of sprint capacity for continuous code refactoring.'
  },

  // ==========================================
  // DATA ANALYST VOCABULARY
  // ==========================================
  {
    term: 'die Kohortenanalyse',
    article: 'die',
    plural: 'die Kohortenanalysen',
    english: 'cohort analysis',
    profession: 'Data Analyst',
    category: 'Analytics & Trends',
    definitionGerman: 'Untersuchung des Verhaltens von Nutzergruppen, die ein gemeinsames Merkmal teilen (z. B. Anmeldemonat).',
    definitionEnglish: 'Behavioral analysis of user groups sharing a common attribute over defined intervals.',
    exampleSentence: 'Die Kohortenanalyse zeigt, dass Nutzer mit aktivem Onboarding eine deutlich höhere Retention aufweisen.',
    exampleTranslation: 'Cohort analysis reveals that users with active onboarding have significantly higher retention.'
  },
  {
    term: 'die Abwanderungsquote (Churn Rate)',
    article: 'die',
    english: 'churn rate / attrition',
    profession: 'Data Analyst',
    category: 'Metriken & KPIs',
    definitionGerman: 'Prozentsatz der Kunden, die ihren Vertrag oder ihre Nutzung innerhalb eines bestimmten Zeitraums kündigen.',
    definitionEnglish: 'The percentage of customers who cancel their subscription or cease engagement over a timeframe.',
    exampleSentence: 'Unser primäres Q3-Ziel ist die Senkung der monatlichen Abwanderungsquote unter 2 %.',
    exampleTranslation: 'Our primary Q3 goal is lowering the monthly churn rate below 2%.'
  }
];

export const PROFESSION_INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  // DATA ENGINEER INTERVIEW QUESTION
  {
    id: 'iq_de_1',
    questionGerman: 'Wie entwerfen Sie eine fehlertolerante Daten-Pipeline für unstrukturierte Streaming-Daten bei hohen Lastspitzen?',
    questionEnglish: 'How do you design a fault-tolerant data pipeline for unstructured streaming data under high traffic spikes?',
    category: 'Data Pipelines & Reliability',
    level: 'B2',
    targetRole: 'Data Engineer',
    contextTip: 'Mention backpressure, decoupled message brokers (Kafka), schema validation, dead-letter queues, and idempotency.',
    modelAnswerGerman: 'Um eine fehlertolerante Streaming-Pipeline aufzubauen, entkoppele ich die Datenerfassung von der Verarbeitung mithilfe eines verteilten Brokers wie Apache Kafka. Für unvorhergesehene Lastspitzen implementiere ich Backpressure-Mechanismen und horizontales Autoscaling der Worker-Knoten. Korrupte oder ungültige Payloads werden nicht einfach verworfen, sondern über Schema-Validierung in eine Dead-Letter-Queue geleitet, damit der Hauptdatenstrom nicht blockiert wird. Schließlich stelle ich durch idempotente Schreiboperationen sicher, dass auch bei Netzwerk-Retries keine doppelten Datensätze in der Zieldatenbank entstehen.',
    modelAnswerEnglish: 'To build a fault-tolerant streaming pipeline, I decouple ingestion from processing using a distributed broker like Kafka. For traffic spikes, I implement backpressure and horizontal autoscaling. Malformed payloads are validated against schemas and routed to a dead-letter queue so the main stream never halts. Finally, I enforce idempotent writes so retries never create duplicate records in destination tables.',
    powerPhrases: [
      'Ich entkoppele die Datenerfassung von der Verarbeitung mittels...',
      'Um Datenverlust bei Lastspitzen zu verhindern, setzen wir auf...',
      'Korrupte Payloads isolieren wir über eine Dead-Letter-Queue...',
      'Durch idempotente Schreibvorgänge garantieren wir Exactly-Once-Semantik...'
    ],
    starFormula: {
      situation: 'Ein E-Commerce-Kunde verzeichnete während des Black Friday Pipeline-Abbrüche und Datenverluste.',
      task: 'Aufbau einer hochverfügbaren Streaming-Architektur mit minimaler Latenz und robuster Fehlerisolation.',
      action: 'Einführung von Kafka-Partitionierung, automatischer Dead-Letter-Queue und idempotenten Spark-Stream-Loads.',
      result: 'Null Datenverlust bei 150.000 Events/Sekunde und Reduktion der Latenz von 45 Minuten auf unter 800 Millisekunden.'
    }
  },

  // DATA ARCHITECT INTERVIEW QUESTION
  {
    id: 'iq_da_1',
    questionGerman: 'Wie balancieren Sie Data Governance und DSGVO-Konformität mit dem Wunsch der Entwickler nach schnellem Datenzugriff in einer Cloud-Umgebung?',
    questionEnglish: 'How do you balance data governance and GDPR compliance with developer demand for rapid data access in the cloud?',
    category: 'System & Data Architecture',
    level: 'B2',
    targetRole: 'Data Architect',
    contextTip: 'Highlight automated data catalogs, role-based access control (RBAC), data masking/anonymization, and domain ownership (Data Mesh).',
    modelAnswerGerman: 'Sicherheit und Entwicklungsgeschwindigkeit müssen sich nicht ausschließen. Als Data Architect etabliere ich ein Automated Governance Framework: Personenbezogene Daten werden bereits an der Systemgrenze pseudonymisiert oder mit dynamischer Datenmaskierung belegt. Für Entwickler und Data Scientists stellen wir über einen zentralen Datenkatalog standardisierte, synthetische Testdatensätze sowie rollenbasierte Zugriffsrechte (RBAC) bereit. Durch klare Data-Lineage können wir Auditoren jederzeit nachweisen, wer wann auf welche Daten zugegriffen hat, während Entwickler innerhalb von Minuten Zugriff auf freigegebene Sandboxes erhalten.',
    modelAnswerEnglish: 'Security and developer velocity don\'t have to be mutually exclusive. As a Data Architect, I institute an automated governance framework: personal data is pseudonymized at ingestion or masked dynamically. We provide standardized synthetic data and RBAC via a central catalog. Clear data lineage enables auditability while giving engineers approved sandbox access within minutes.',
    powerPhrases: [
      'Mein Ansatz verbindet automatisierte Data Governance mit Self-Service...',
      'Personenbezogene Daten schützen wir durch dynamische Datenmaskierung...',
      'Durch einen zentralen Datenkatalog mit lückenloser Data Lineage...',
      'Wir ermöglichen Entwicklern schnelle Sandboxes bei voller DSGVO-Konformität...'
    ],
    starFormula: {
      situation: 'Ein FinTech-Unternehmen stand vor der Herausforderung, strenge BaFin- und DSGVO-Auflagen zu erfüllen, ohne das Produkt-Release zu bremsen.',
      task: 'Entwurf einer mandantenfähigen Cloud-Datenarchitektur mit granularem Berechtigungskonzept.',
      action: 'Implementierung von attributbasierter Zugriffskontrolle (ABAC), automatischer Metadaten-Erfassung und Datenkatalog.',
      result: 'Erfolgreiches Audit ohne Beanstandungen bei gleichzeitiger Verkürzung der Bereitstellungszeit von Testdaten von 3 Wochen auf 1 Stunde.'
    }
  }
];
