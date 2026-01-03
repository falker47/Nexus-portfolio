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
    aboutTitle: "Chi sono?",
    aboutText1: "Potrei definirmi un Data Analyst, così come un Full-stack Developer. Ma sono semplicemente una persona piena di passioni con una curiosità insaziabile. Mi piace risolvere problemi con soluzioni che siano in un’equazione, un algoritmo o nella semplice scrittura.",
    aboutText2: "Sono due le forze fondamentali che mi muovono: capire il mondo che mi circonda e creare cose che possano (nel loro piccolo) arricchirlo.",
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

    // Easy Contract
    T_EasyContract: "Easy Contract",
    EasyContract: "Web app AI su LLM Gemini ingegnerizzato per analizzare e sintetizzare contratti in PDF. Individua automaticamente clausole critiche e costi nascosti, restituendo un punteggio di bontà e consigli pratici per l'utente.",
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
    aboutText1: "I could call myself a Data Analyst or a Full-Stack Developer, but more simply I’m a curious person with many passions. I enjoy breaking down complex problems to uncover elegant solutions; be it in an equation, an algorithm, or through writing.",
    aboutText2: "There are two fundamental forces that drive me: understanding the world around me and creating things that can (in their own small way) enrich it.",
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
  }
};

const curriculumLinks = {
  it: "https://www.canva.com/design/DAFjFQpJARI/9DIpYyzdr7U8kKaLgAUVaA/view?utm_content=DAFjFQpJARI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1a1bf25a36",
  en: "https://www.canva.com/design/DAG0KYFzO8U/bSYKCXIni9GasnPtYLzXiA/view?utm_content=DAG0KYFzO8U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcc273b6625"
};

const projectsData = [
  {
    title: "Data Science Capstone",
    descriptionKey: "DataScience",
    image: "assets/SpaceYcapstone.webp",
    links: [
      { url: "assets/capstone-summary.pdf", textKey: "exposition", icon: "fas fa-file-pdf" },
      { url: "https://github.com/falker47/applied-data-science-capstone", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    titleKey: "T_EasyContract",
    descriptionKey: "EasyContract",
    image: "assets/easycontract.webp",
    links: [
      { url: "https://easy-contract.netlify.app/", textKey: "buttonTry", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/easy-contract", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    titleKey: "T_Panacea",
    descriptionKey: "PanaceaDesc",
    image: "assets/panacea.webp",
    links: [
      { url: "https://raw.githubusercontent.com/falker47/panacea/main/Panacea_Source_Installer.zip", textKey: "downloadZip", icon: "fas fa-download" },
      { url: "https://github.com/falker47/panacea", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    titleKey: "T_Onepunch",
    descriptionKey: "OnepunchDesc",
    image: "assets/onepunchsetup.webp",
    links: [
      { url: "https://raw.githubusercontent.com/falker47/onepunch-setup/main/onepunchsetup-installer.zip", textKey: "downloadZip", icon: "fas fa-download" },
      { url: "https://github.com/falker47/onepunch-setup", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    title: "Chi l'ha detto?",
    descriptionKey: "Chi_lha_detto",
    image: "assets/chilhadetto.png",
    links: [
      { url: "https://chi-l-ha-detto.vercel.app/", textKey: "buttonTry", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/chi-l-ha-detto", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    titleKey: "T_IbanChecker",
    descriptionKey: "IbanChecker",
    image: "assets/iban-checker.webp",
    links: [
      { url: "https://falker47.github.io/IBAN-Checker/", textKey: "buttonTry", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/IBAN-Checker", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    titleKey: "T_NFT",
    descriptionKey: "NFT",
    image: "assets/BLOCKBUSTERS_4_EY.webp",
    links: [
      { url: "assets/BLOCKBUSTERS_4_EY.pdf", textKey: "WP", icon: "fas fa-file-pdf" }
    ]
  },
  {
    titleKey: "T_Ripetizioni",
    descriptionKey: "Ripetizioni",
    image: "assets/ripetizioni.webp",
    links: [
      { url: "https://falker47.github.io/mauriziofalconi-ripetizioni/", textKey: "buttonVisitWeb", icon: "fas fa-globe" }
    ]
  },
  {
    title: "Carte senza Umanità",
    descriptionKey: "Carte_S_Umanità",
    image: "assets/csu_preview.webp",
    links: [
      { url: "https://carte-senza-umanita.onrender.com/", textKey: "buttonTry", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/Carte-senza-Umanita", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    title: "LedgerLite",
    descriptionKey: "LedgerLite",
    image: "assets/ledgerlite.webp",
    links: [
      { url: "https://falker47.github.io/LedgerLite/", textKey: "buttonTry", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/LedgerLite", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    title: "Sommatrix",
    descriptionKey: "Sommatrix",
    image: "assets/sommatrix.webp",
    links: [
      { url: "https://falker47.github.io/SOMMATRIX/", textKey: "buttonTry", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/SOMMATRIX", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },
  {
    titleKey: "T_CodiceFiscale",
    descriptionKey: "CodiceFiscale",
    image: "assets/codice-fiscale.webp",
    links: [
      { url: "https://falker47.github.io/Codice-Fiscale/", textKey: "buttonTry", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/Codice-Fiscale", textKey: "githubRepo", icon: "fab fa-github" }
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
 * Renders the projects grid.
 */
function renderProjects() {
  const grid = document.querySelector('.project-grid');
  if (!grid) return;
  grid.innerHTML = '';

  projectsData.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';

    // Title Logic: use localized key if present, otherwise raw title
    let titleHtml = '';
    if (p.titleKey) {
      titleHtml = `<h3 data-i18n="${p.titleKey}">${p.titleKey}</h3>`; // Initial placeholder, updated by switchLanguage
    } else {
      titleHtml = `<h3>${p.title}</h3>`;
    }

    // Links Logic
    const linksHtml = p.links.map(link => `
      <a href="${link.url}" target="_blank">
        <span class="button-text" data-i18n="${link.textKey}">link</span>
        <span class="button-icon"><i class="${link.icon}"></i></span>
      </a>
    `).join('');

    card.innerHTML = `
      <img src="${p.image}" alt="${p.title || p.titleKey}">
      <div class="card-content">
        ${titleHtml}
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
    const item = document.createElement('li');
    item.className = 'certification-item';
    item.innerHTML = `
      <a href="${c.image}" class="cert-thumb-link" title="${c.title}">
        <img src="${c.image}" alt="${c.title}" class="cert-thumb">
      </a>
      <div class="cert-info">
        <h3>${c.title}</h3>
        <p>${c.issuer}</p>
      </div>
    `;
    list.appendChild(item);
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
      el.textContent = translations[lang][key];
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