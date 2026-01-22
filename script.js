/**
 * Nexus Portfolio - Main Script
 * Handles translations, smooth scrolling, dynamic data, and interactions.
 */

// --- Configuration & Data ---

const translations = {
  it: {
    logoName: "Maurizio Falconi",
    navHome: "Home",
    navAbout: "Chi sono",
    navProjects: "Progetti",
    navContact: "Contatti",
    heroTitle: "Benvenuto in Nexus Portfolio",
    heroSubtitle: "Il punto d'incontro di tutti i miei progetti.",
    heroButton: "Esplora Ora",
    aboutTitle: "Chi sono",
    aboutText1: "Potrei definirmi un Data Engineer, così come un Full-stack Developer. Ma sono semplicemente una persona piena di passioni con una curiosità insaziabile. Mi piace risolvere problemi con soluzioni che siano in un’equazione, un algoritmo o nella semplice scrittura.",
    aboutText2: "Sono due le forze fondamentali che mi muovono: <br>capire il mondo che mi circonda e creare cose che possano (nel loro piccolo) arricchirlo.",
    aboutText3: "Buona navigazione!",
    projectsTitle: "Progetti",
    contactCurriculum: "Curriculum",
    contactMail: "Contattami",
    Certifications: "Certificazioni",
    footerName: "Maurizio Falconi",
    buttonVisitWeb: "Sito web",
    buttonTry: "Provalo!",
    githubRepo: "Repo GitHub",
    exposition: "Paper",
    WP: "Apri Whitepaper",
    NexusMods: "Nexus Mods",

    T_NFT: "Sistema di valorizzazione NFT",
    T_Ripetizioni: "Sito Ripetizioni",
    T_IbanChecker: "Verifica IBAN",
    T_CodiceFiscale: "Calcolo Codice Fiscale",

    IbanChecker: "Web app che verifica la validità degli IBAN italiani. In caso di IBAN errato, propone correzioni ipotizzando che si abbia inserito male un carattere o se ne siano invertiti due.",
    Sommatrix: "Puzzle matematico in cui il giocatore seleziona o cancella numeri in una griglia per far combaciare le somme di ogni riga e colonna con i target prestabiliti.",
    CodiceFiscale: "Web app che calcola il codice fiscale italiano a partire dai dati anagrafici e viceversa, ovvero recuperare dal codice fiscale sesso, data e luogo di nascita.",
    DataScience: "Progetto che attraverso l’analisi dati in Python e tecniche di machine learning prevede il successo dell’atterraggio di razzi per ottimizzare la stima dei costi e identificare eventuali siti di lancio ottimali.",
    CracktheCode: "Gioco di logica basato sulle dinamiche di Mastermind e Hit and Blow in cui devi decifrare un codice segreto usando deduzione e feedback progressivi.",
    LedgerLite: "Questa applicazione ti permette di gestire in modo semplice i tuoi crediti e debiti. In ogni operazione viene specificato il nominativo, l’importo e una descrizione.",
    Ripetizioni: "Il sito web dove presento la mia attività di ripetizioni, permettendo ai miei studenti di prenotare le lezioni di matematica e fisica e consultare il mio materiale didattico.",
    NFT: "White Paper (in italiano) sulla valorizzazione dei dipendenti tramite NFT gamification, adottabile dalle aziende.",
    Carte_S_Umanità: "Versione web tutta italiana del gioco di carte 'Cards Against Humanity', dove i giocatori completano frasi con risposte divertenti o provocatorie.",
    Chi_lha_detto: "Web-quiz dove dovrai indovinare chi ha detto citazioni famose: crea streak o sblocca livelli a tema, con un breve contesto storico dopo ogni risposta.",

    // Onepunch-setup
    T_Onepunch: "Onepunch-setup",
    OnepunchDesc: "Programma Windows (GUI WPF) per installare rapidamente i software più utili in un unico step tramite esecuzione winget. Software suddivisi in categorie con icone, ricerca live, WSL e riavvio opzionale.",
    downloadZip: "Scarica ZIP",

    // Panacea
    T_Panacea: "Panacea",
    PanaceaDesc: "Ottimizzatore di sistema Windows per monitorare lo stato e migliorare le prestazioni. Include rimozione file inutili, ottimizzazione disco e strumenti di riparazione automatica (SFC/DISM).",
    downloadExe: "Scarica .exe",
    // Easy Contract
    T_EasyContract: "Easy Contract",
    EasyContract: "Web app AI su LLM Gemini ingegnerizzato per analizzare e sintetizzare contratti in PDF. Individua automaticamente clausole critiche e costi nascosti, restituendo un punteggio di bontà e consigli pratici per l'utente.",

    // New Projects
    T_Kobon: "Kobon Triangle Landscape",
    KobonDesc: "Analisi delle configurazioni ottimali per N=10, dove il framework algoritmico di supporto ha identificato 11 grafi distinti che replicano l'attuale record di 25 triangoli.",
    T_ZEROfilez: "ZEROfilez Cloud Decryptor",
    ZEROfilezDesc: "Piattaforma dalla doppia natura: Cloud sicuro per i propri file criptati e Archivio pubblico per scaricare rapidamente emulatori, APK e utility fondamentali per PC.",
    T_HLSE: "Hogwarts Legacy Save Editor",
    HLSEDesc: "Applicazione GUI moderna per modificare e gestire i salvataggi di Hogwarts Legacy. Include funzionalità di backup automatico e un editor integrato facile da usare.",
  },
  en: {
    logoName: "Maurizio Falconi",
    navHome: "Home",
    navAbout: "About Me",
    navProjects: "Projects",
    navContact: "Contact",
    heroTitle: "Welcome to Nexus Portfolio",
    heroSubtitle: "The meeting point for all my projects.",
    heroButton: "Explore Now",
    aboutTitle: "About Me",
    aboutText1: "I could call myself a Data Engineer or a Full-Stack Developer, but more simply I’m a curious person with many passions. I enjoy breaking down complex problems to uncover elegant solutions; be it in an equation, an algorithm, or through writing.",
    aboutText2: "There are two fundamental forces that drive me: <br>understanding the world around me and creating things that can (in their own small way) enrich it.",
    aboutText3: "Enjoy your visit!",
    projectsTitle: "Projects",
    contactCurriculum: "Resume",
    contactMail: "Contact Me",
    Certifications: "Certifications",
    footerName: "Maurizio Falconi",
    buttonVisitWeb: "Website",
    buttonTry: "Try it!",
    githubRepo: "GitHub Repo",
    exposition: "Paper",
    WP: "Open Whitepaper",
    NexusMods: "Nexus Mods",

    T_NFT: "NFTs as Valorization System",
    T_Ripetizioni: "Tutoring Website",
    T_IbanChecker: "Iban Checker",
    T_CodiceFiscale: "Tax Code Calculator",

    IbanChecker: "Web app that checks the validity of Italian IBANs. If the IBAN is incorrect, it suggests possible corrections, assuming a character was entered incorrectly or two characters were swapped.",
    Sommatrix: "Mathematical puzzle where the player selects or removes numbers in a grid to make the sums of each row and column match the predetermined targets.",
    CodiceFiscale: "Web app that calculates the Italian tax code from personal data and vice versa, i.e., retrieves gender, date, and place of birth from the tax code.",
    DataScience: "A project that, through data analysis in Python and machine learning techniques, predicts rocket landing success to optimize cost estimation and identify potential optimal launch sites.",
    CracktheCode: "A logic game inspired by the mechanics of Mastermind and Hit and Blow, where you must decipher a secret code using deduction and progressive feedback.",
    LedgerLite: "This application allows you to easily manage your credits and debts. Every transaction includes the name, the amount, and a description.",
    Ripetizioni: "The website where I showcase my tutoring services, where my students can book math and physics lessons and consult my teaching materials.",
    NFT: "White Paper (in italian) about an employees valorization system via NFT gamification, adoptable by companies.",
    Carte_S_Umanità: "Italian web version of the card game 'Cards Against Humanity', where players complete sentences with funny or provocative answers.",
    Chi_lha_detto: "Italian-made web quiz where you guess who said famous quotes: build streaks or clear themed levels, with a short historical context after each answer.",

    // Onepunch-setup
    T_Onepunch: "Onepunch-setup",
    OnepunchDesc: "Windows program (WPF GUI) to quickly install the most useful software in one step via winget. Software grouped into icon-labeled categories, live search, optional WSL and reboot.",
    downloadZip: "Download ZIP",

    // Panacea
    T_Panacea: "Panacea",
    PanaceaDesc: "Windows system optimizer to monitor health and boost performance. Features live dashboard, one-click junk removal, disk optimization, and automated system repair tools (SFC/DISM).",

    // Easy Contract
    T_EasyContract: "Easy Contract",
    EasyContract: "Web app AI on Gemini LLM fine-tuned to analyze and synthesize contracts in PDF. Automatically identifies critical clauses and hidden costs, returning a security score and practical advice for the user.",

    // New Projects
    T_Kobon: "Kobon Triangle Landscape",
    KobonDesc: "Analysis of optimal configurations for N=10, where the supporting algorithmic framework identified 11 distinct graphs replicating the current record of 25 triangles.",
    T_ZEROfilez: "ZEROfilez Cloud Decryptor",
    ZEROfilezDesc: "Dual-nature platform: Secure cloud for personal encrypted files and a Public Repository for quickly downloading emulators, APKs, and essential PC utilities.",
    T_HLSE: "Hogwarts Legacy Save Editor",
    HLSEDesc: "Modern GUI application to edit and manage Hogwarts Legacy save files. Features automatic backups and an easy-to-use integrated editor.",
  }
};

const curriculumLinks = {
  it: "https://www.canva.com/design/DAFjFQpJARI/9DIpYyzdr7U8kKaLgAUVaA/view?utm_content=DAFjFQpJARI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1a1bf25a36",
  en: "https://www.canva.com/design/DAG0KYFzO8U/bSYKCXIni9GasnPtYLzXiA/view?utm_content=DAG0KYFzO8U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcc273b6625"
};

const projectsData = [
  {
    titleKey: "T_Kobon",
    descriptionKey: "KobonDesc",
    image: "assets/projects/kobon.webp",
    category: "research",
    tags: [
      { text: "Research", type: "research", emoji: "📝", tooltip: "Ricerca matematica" },
      { text: "Python", type: "tech", emoji: "", tooltip: "Algoritmi di ottimizzazione" },
      { text: "Geometry", type: "desc", emoji: "", tooltip: "Problema geometrico" }
    ],
    links: [
      { url: "assets/documents/Kobon Paper.pdf", textKey: "exposition", icon: "fas fa-file-pdf" },
      { url: "https://github.com/falker47/Kobon-Triangle-Landscape", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    titleKey: "T_ZEROfilez",
    descriptionKey: "ZEROfilezDesc",
    image: "assets/projects/zerofilez.webp",
    category: "webapp",
    tags: [
      { text: "Web App", type: "webapp", emoji: "🌐", tooltip: "Tool di sicurezza" },
      { text: "Cryptography", type: "tech", emoji: "", tooltip: "Crittografia client-side" },
      { text: "Cloud", type: "desc", emoji: "", tooltip: "Gestione file criptati" }
    ],
    links: [
      { url: "https://falker47.github.io/ZEROfilez-Cloud-Decryptor/", textKey: "buttonTry", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/ZEROfilez-Cloud-Decryptor", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    titleKey: "T_HLSE",
    descriptionKey: "HLSEDesc",
    image: "assets/projects/HLSE.webp",
    category: "tool",
    tags: [
      { text: "Tool", type: "tool", emoji: "🔧", tooltip: "Utility per gaming" },
      { text: "Python GUI", type: "tech", emoji: "", tooltip: "Interfaccia CustomTkinter" },
      { text: "Modding", type: "desc", emoji: "", tooltip: "Modifica salvataggi" }
    ],
    links: [
      { url: "https://www.nexusmods.com/hogwartslegacy/mods/2414", textKey: "NexusMods", icon: "fas fa-download" },
      { url: "https://github.com/falker47/HogwartsLegacy-SaveEditor", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    titleKey: "T_EasyContract",
    descriptionKey: "EasyContract",
    image: "assets/projects/easycontract.webp",
    category: "webapp",
    tags: [
      { text: "Web App", type: "webapp", emoji: "🌐", tooltip: "Applicazione web interattiva" },
      { text: "Gemini AI", type: "tech", emoji: "", tooltip: "Powered by Google Gemini LLM" },
      { text: "Legal", type: "desc", emoji: "", tooltip: "Analisi contratti e documenti legali" }
    ],
    links: [
      { url: "https://easy-contract.netlify.app/", textKey: "buttonTry", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/easy-contract", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    titleKey: "T_Panacea",
    descriptionKey: "PanaceaDesc",
    image: "assets/projects/panacea.webp",
    category: "desktop",
    tags: [
      { text: "Desktop", type: "desktop", emoji: "💻", tooltip: "Applicazione Windows nativa" },
      { text: "Python", type: "tech", emoji: "", tooltip: "Sviluppato in Python con tkinter" },
      { text: "Optimizer", type: "desc", emoji: "", tooltip: "Ottimizzazione e pulizia sistema" }
    ],
    links: [
      { url: "https://raw.githubusercontent.com/falker47/panacea/main/dist/Panacea.exe", textKey: "downloadExe", icon: "fas fa-download" },
      { url: "https://github.com/falker47/panacea", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    title: "Chi l'ha detto?",
    descriptionKey: "Chi_lha_detto",
    image: "assets/projects/chilhadetto.png",
    category: "game",
    tags: [
      { text: "Game", type: "game", emoji: "🎮", tooltip: "Gioco interattivo" },
      { text: "React", type: "tech", emoji: "", tooltip: "Frontend React.js" },
      { text: "Quiz", type: "desc", emoji: "", tooltip: "Indovina chi ha detto la citazione" }
    ],
    links: [
      { url: "https://chi-l-ha-detto.vercel.app/", textKey: "buttonTry", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/chi-l-ha-detto", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    titleKey: "T_Onepunch",
    descriptionKey: "OnepunchDesc",
    image: "assets/projects/onepunchsetup.webp",
    category: "desktop",
    tags: [
      { text: "Desktop", type: "desktop", emoji: "💻", tooltip: "Applicazione Windows nativa" },
      { text: "C# WPF", type: "tech", emoji: "", tooltip: "Interfaccia WPF + Winget" },
      { text: "Installer", type: "desc", emoji: "", tooltip: "Installa software in un click" }
    ],
    links: [
      { url: "https://raw.githubusercontent.com/falker47/onepunch-setup/main/onepunchsetup-installer.zip", textKey: "downloadZip", icon: "fas fa-download" },
      { url: "https://github.com/falker47/onepunch-setup", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    titleKey: "T_IbanChecker",
    descriptionKey: "IbanChecker",
    image: "assets/projects/iban-checker.jpg",
    category: "tool",
    tags: [
      { text: "Tool", type: "tool", emoji: "🔧", tooltip: "Strumento di utilità" },
      { text: "JavaScript", type: "tech", emoji: "", tooltip: "Vanilla JavaScript" },
      { text: "Validation", type: "desc", emoji: "", tooltip: "Verifica e corregge IBAN" }
    ],
    links: [
      { url: "https://falker47.github.io/IBAN-Checker/", textKey: "buttonTry", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/IBAN-Checker", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    titleKey: "T_NFT",
    descriptionKey: "NFT",
    image: "assets/projects/BLOCKBUSTERS_4_EY.webp",
    category: "research",
    tags: [
      { text: "Research", type: "research", emoji: "📝", tooltip: "Paper e ricerca accademica" },
      { text: "Blockchain", type: "tech", emoji: "", tooltip: "Tecnologia decentralizzata" },
      { text: "Whitepaper", type: "desc", emoji: "", tooltip: "Documento tecnico completo" }
    ],
    links: [
      { url: "assets/documents/BLOCKBUSTERS_4_EY.pdf", textKey: "WP", icon: "fas fa-file-pdf" }
    ]
  },
  {
    titleKey: "T_Ripetizioni",
    descriptionKey: "Ripetizioni",
    image: "assets/projects/ripetizioni.webp",
    category: "webapp",
    tags: [
      { text: "Web App", type: "webapp", emoji: "🌐", tooltip: "Sito web responsive" },
      { text: "HTML/CSS", type: "tech", emoji: "", tooltip: "Frontend puro" },
      { text: "Education", type: "desc", emoji: "", tooltip: "Servizi di tutoring" }
    ],
    links: [
      { url: "https://falker47.github.io/mauriziofalconi-ripetizioni/", textKey: "buttonVisitWeb", icon: "fas fa-globe" }
    ]
  },
  {
    title: "Carte senza Umanità",
    descriptionKey: "Carte_S_Umanità",
    image: "assets/projects/csu_preview.webp",
    category: "game",
    tags: [
      { text: "Game", type: "game", emoji: "🎮", tooltip: "Gioco multiplayer online" },
      { text: "Node.js", type: "tech", emoji: "", tooltip: "Backend Node + Socket.io" },
      { text: "Multiplayer", type: "desc", emoji: "", tooltip: "Gioca con gli amici in tempo reale" }
    ],
    links: [
      { url: "https://carte-senza-umanita.onrender.com/", textKey: "buttonTry", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/Carte-senza-Umanita", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    title: "LedgerLite",
    descriptionKey: "LedgerLite",
    image: "assets/projects/ledgerlite.webp",
    category: "finance",
    tags: [
      { text: "Finance", type: "finance", emoji: "💰", tooltip: "Gestione finanziaria" },
      { text: "JavaScript", type: "tech", emoji: "", tooltip: "Con LocalStorage" },
      { text: "Tracker", type: "desc", emoji: "", tooltip: "Traccia crediti e debiti" }
    ],
    links: [
      { url: "https://falker47.github.io/LedgerLite/", textKey: "buttonTry", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/LedgerLite", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    title: "Sommatrix",
    descriptionKey: "Sommatrix",
    image: "assets/projects/sommatrix.webp",
    category: "game",
    tags: [
      { text: "Game", type: "game", emoji: "🎮", tooltip: "Puzzle matematico" },
      { text: "JavaScript", type: "tech", emoji: "", tooltip: "Logica pura JS" },
      { text: "Puzzle", type: "desc", emoji: "", tooltip: "Risolvi la griglia numerica" }
    ],
    links: [
      { url: "https://falker47.github.io/SOMMATRIX/", textKey: "buttonTry", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/SOMMATRIX", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    titleKey: "T_CodiceFiscale",
    descriptionKey: "CodiceFiscale",
    image: "assets/projects/codice-fiscale.webp",
    category: "tool",
    tags: [
      { text: "Tool", type: "tool", emoji: "🔧", tooltip: "Utility pratica" },
      { text: "JavaScript", type: "tech", emoji: "", tooltip: "Calcolo lato client" },
      { text: "Utility", type: "desc", emoji: "", tooltip: "Calcola/decodifica CF italiano" }
    ],
    links: [
      { url: "https://falker47.github.io/Codice-Fiscale/", textKey: "buttonTry", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/Codice-Fiscale", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    title: "Crack the Code",
    descriptionKey: "CracktheCode",
    image: "assets/projects/crack-the-code.webp",
    category: "game",
    tags: [
      { text: "Game", type: "game", emoji: "🎮", tooltip: "Gioco di logica" },
      { text: "JavaScript", type: "tech", emoji: "", tooltip: "Puro JavaScript" },
      { text: "Logic", type: "desc", emoji: "", tooltip: "Decifra il codice segreto" }
    ],
    links: [
      { url: "https://falker47.github.io/Crack-the-Code/", textKey: "buttonTry", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/Crack-the-Code", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  }
];

const certificationsData = [
  { title: "AI & Machine Learning Engineering", issuer: "Microsoft – 2025", image: "assets/certifications/Cert Microsoft AI & ML DR1IFS0JOA2H.png" },
  { title: "Data Science Professional Course", issuer: "IBM - 2023", image: "assets/certifications/Certificate IBM Data Science Coursera UAD9R68X3KPX.png" },
  { title: "BlockChain Project Lead Specialization", issuer: "MasterZ – 2024", image: "assets/certifications/Masterz-Spec 3300x2550.jpeg" },
  { title: "BlockChain & Digital Assets Course", issuer: "MasterZ – 2023", image: "assets/certifications/Cert-5-ED-Master-Z-MAURIZIO-FALCONI 3300x2550.png" },
  { title: "SAS Programming Course", issuer: "SAS – 2024", image: "assets/certifications/Certificate_SAS-1.png" },
  { title: "Data Structures & Algorithms", issuer: "UC San Diego – 2023", image: "assets/certifications/Certificate-Data-Structures-and-Algorithms.png" },
  { title: "Financial Technology Specialization", issuer: "Wharton University – 2023", image: "assets/certifications/Certificate-Fintech-Spec-P6-DZAVHWT3-U4.png" },
  { title: "Cybersecurity Professional Course", issuer: "Google – 2023", image: "assets/certifications/Certificate Google Cybersecurity Coursera 35X5VFX574YU.png" },
  { title: "French B2.2 Certificate", issuer: "Speexx – 2024", image: "assets/certifications/French-Certif-B2.png" },
  { title: "Advanced English: C1 Equivalent", issuer: "Irvine University – 2023", image: "assets/certifications/Certificate Advanced English Coursera 7PGZG57X3H9R.png" },
  { title: "Archaeoastronomy Course", issuer: "Politecnico Milano – 2023", image: "assets/certifications/Coursera archaeoastronomy LMKD4242VB7D.png" },
  { title: "Fullstack Developer Certification", issuer: "Blazar Group – 2023", image: "assets/certifications/Attestato Blazar Maurizio Falconi 2200x1700.jpg" }
];

// --- Functions ---
/**
 * Renders the projects grid with enhanced features.
 */
function renderProjects() {
  const grid = document.querySelector('.project-grid');
  if (!grid) return;
  grid.innerHTML = '';

  projectsData.forEach((p, index) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = `${index * 0.1}s`;

    // Title Logic: use localized key if present, otherwise raw title
    let titleHtml = '';
    if (p.titleKey) {
      titleHtml = `<h3 data-i18n="${p.titleKey}">${p.titleKey}</h3>`;
    } else {
      titleHtml = `<h3>${p.title}</h3>`;
    }

    // Tech Tags with category colors and tooltips
    const tagsHtml = p.tags ? p.tags.map(tag => {
      const emoji = tag.emoji ? `${tag.emoji} ` : '';
      const tooltip = tag.tooltip ? `data-tooltip="${tag.tooltip}"` : '';
      return `<span class="tech-tag ${tag.type}" ${tooltip}>${emoji}${tag.text}</span>`;
    }).join('') : '';

    // Links Logic
    const linksHtml = p.links.map(link => `
      <a href="${link.url}" target="_blank">
        <span class="button-text" data-i18n="${link.textKey}">link</span>
        <span class="button-icon"><i class="${link.icon}"></i></span>
      </a>
    `).join('');

    // Add category data attribute for filtering
    card.setAttribute('data-category', p.category || '');

    card.innerHTML = `
      <img src="${p.image}" alt="${p.title || p.titleKey}">
      <div class="card-content">
        ${titleHtml}
        ${tagsHtml ? `<div class="tech-tags">${tagsHtml}</div>` : ''}
        <p data-i18n="${p.descriptionKey}">Descrizione...</p>
        <div class="button-row">
          ${linksHtml}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/**
 * Renders the certifications list.
 */
function renderCertifications() {
  const list = document.querySelector('.certification-list');
  if (!list) return;
  list.innerHTML = '';

  certificationsData.forEach(c => {
    // Determine class based on orientation (some images might be vertical/horizontal)
    // Defaulting to standard slide
    const slide = document.createElement('div');
    slide.className = 'swiper-slide certification-slide';

    slide.innerHTML = `
      <div class="certification-card">
        <a href="${c.image}" class="cert-thumb-link" title="${c.title}">
          <img src="${c.image}" alt="${c.title}" class="cert-thumb">
        </a>
        <div class="cert-info">
          <h3>${c.title}</h3>
          <p>${c.issuer}</p>
        </div>
      </div>
    `;
    list.appendChild(slide);
  });

  // Initialize Swiper (Mobile Only)
  const swiper = new Swiper('.cert-swiper', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto', /* Respect CSS width */
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // When window width is >= 768px, disable Swiper
      768: {
        enabled: false,
        slidesPerView: 'auto',
      }
    }
  });
}

/**
 * Updates the text content of elements based on the selected language.
 * @param {string} lang - 'it' or 'en'
 */
function switchLanguage(lang) {
  // Update translation texts
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update Curriculum link
  const cvA = document.getElementById("curriculum-link");
  if (cvA && curriculumLinks[lang]) {
    cvA.href = curriculumLinks[lang];
  }
}

/**
 * Initializes Smooth Scroll for anchor links.
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offset = 100; // Adjustable offset
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

/**
 * Initializes the Certification Modal (Lightbox).
 */
function initCertModal() {
  const modal = document.getElementById('cert-modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.cert-modal-close');

  if (!modal || !modalImg || !closeBtn) return; // Exit if elements are missing

  // Use event delegation for dynamically added items
  document.querySelector('.certifications').addEventListener('click', function (e) {
    const link = e.target.closest('.cert-thumb-link');
    if (link) {
      e.preventDefault();
      modal.style.display = 'block';
      modalImg.src = link.href;
    }
  });

  // Close with X button
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close by clicking outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

/**
 * Main Initialization
 */
document.addEventListener("DOMContentLoaded", function () {
  // Render Dynamic Content
  renderProjects();
  renderCertifications();

  // Initialize features
  initSmoothScroll();
  initCertModal();
  initScrollAnimations();
  initScrollProgress();
  initBackToTop();
  initTypingEffect();
  initProjectFilter();
  initSectionTitleAnimations();
  initHeroVideo();

  // Set Current Year in Footer
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Set Default Language (also triggers first translation update for dynamic content)
  switchLanguage("it");

  // Handle Language Toggle
  const toggleLang = document.getElementById("toggle-lang");
  if (toggleLang) {
    toggleLang.addEventListener("change", function () {
      switchLanguage(this.checked ? "en" : "it");
    });
  }
});

/**
 * Hero Video: Smooth Loop & Loading Placeholder
 */
function initHeroVideo() {
  const video = document.getElementById('hero-video');
  if (!video) return;

  // Start with video hidden (poster visible)
  video.style.opacity = '0';
  video.style.transition = 'opacity 0.5s ease';

  // Show video when it's ready to play
  video.addEventListener('canplaythrough', () => {
    video.style.opacity = '1';
  });

  // Fallback: show video after timeout even if not fully loaded
  setTimeout(() => {
    if (video.style.opacity === '0') {
      video.style.opacity = '1';
    }
  }, 3000);

  // Smooth loop: fade out near end, fade in at start
  video.addEventListener('timeupdate', () => {
    const timeLeft = video.duration - video.currentTime;
    if (timeLeft < 0.3 && timeLeft > 0) {
      video.style.opacity = '0.7';
    }
  });

  video.addEventListener('seeked', () => {
    // Only fade back in if we're at the start (looped)
    if (video.currentTime < 0.5) {
      setTimeout(() => {
        video.style.opacity = '1';
      }, 50);
    }
  });
}

/**
 * Project Filter by Category
 */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          // Re-trigger animation
          card.classList.remove('animate-in');
          setTimeout(() => card.classList.add('animate-in'), 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/**
 * Section Title Animations
 */
function initSectionTitleAnimations() {
  // Disabled by user request
}

/**
 * Typing Effect for Hero Title
 */
function initTypingEffect() {
  const heroTitle = document.querySelector('.hero h1');
  if (!heroTitle) return;

  const originalText = heroTitle.getAttribute('data-i18n');
  const lang = document.getElementById('toggle-lang')?.checked ? 'en' : 'it';
  const text = translations[lang]?.[originalText] || heroTitle.textContent;

  heroTitle.innerHTML = '';
  heroTitle.style.opacity = '1';

  let i = 0;
  const cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  heroTitle.appendChild(cursor);

  function type() {
    if (i < text.length) {
      heroTitle.insertBefore(document.createTextNode(text.charAt(i)), cursor);
      i++;
      setTimeout(type, 50);
    } else {
      // Remove cursor after typing complete
      setTimeout(() => cursor.remove(), 2000);
    }
  }

  setTimeout(type, 500);
}

/**
 * Scroll Progress Bar
 */
function initScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
}

/**
 * Back to Top Button
 */
function initBackToTop() {
  const backToTop = document.querySelector('.back-to-top');
  if (!backToTop) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Scroll Animations with Intersection Observer
 */
function initScrollAnimations() {
  // Animations disabled by user request
  const projectCards = document.querySelectorAll('.project-card');
  const certItems = document.querySelectorAll('.certification-item'); // Swiper slides now
  const sections = document.querySelectorAll('.about, .projects, .certifications, .contact');

  // Ensure everything is visible immediately
  projectCards.forEach(el => el.style.opacity = '1');
  sections.forEach(el => el.style.opacity = '1');
}