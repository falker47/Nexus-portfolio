// Scroll smooth per i link interni
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute('href'));
    const offset = 100; // Modifica questo valore per regolare l'offset desiderato
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});

// Smooth scroll e aggiornamento anno (già presenti)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute('href'));
    const offset = 100;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
});

// Traduzioni
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
    aboutText1: "Potrei dire un Data Analyst, così come un Full-stack Developer. Ma sono semplicemente una persona piena di passioni con una curiosità insaziabile. Mi piace scomporre problemi complessi per trovare soluzioni eleganti, che sia in un’equazione, un algoritmo o attraverso la scrittura.",
    aboutText2: "Sono due le forze fondamentali che mi muovono: capire il mondo che mi circonda e creare cose che possano (nel loro piccolo) arricchirlo.",
    aboutText3: "Buona navigazione!",
    projectsTitle: "Progetti",
    contactCurriculum: "Curriculum",
    contactMail: "Contattami",
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
    Ripetizioni: "Il sito web dove presento la mia attività di ripetizioni dove i miei studenti possono prenotare le lezioni di matematica e fisica e consultare il mio materiale didattico.",
    NFT: "White Paper (in italiano) sulla valorizzazione dei dipendenti tramite NFT gamification, adottabile dalle aziende.",
    Carte_S_Umanità: "Versione web tutta italiana del gioco di carte 'Cards Against Humanity', dove i giocatori completano frasi con risposte divertenti o provocatorie.",
    Chi_lha_detto: "Web-quiz dove dovrai indovinare chi ha detto citazioni famose: crea streak o sblocca livelli a tema, con un breve contesto storico dopo ogni risposta.",

    // Onepunch-setup
    T_Onepunch: "Onepunch-setup",
    OnepunchDesc: "Programma Windows (GUI WPF) per installare rapidamente i software più utili in un unico step tramite esecuzione winget. Software suddivisi in categorie con icone, ricerca live, WSL e riavvio opzionale.",
    downloadZip: "Scarica ZIP"
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
    NFT: "White Paper (in italian) about an employees valoritazion system via NFT gamification, adoptable by companies.",
    Carte_S_Umanità: "Italian web version of the card game 'Cards Against Humanity', where players complete sentences with funny or provocative answers.",
    Chi_lha_detto: "Italian-made web quiz where you guess who said famous quotes: build streaks or clear themed levels, with a short historical context after each answer.",

    // Onepunch-setup
    T_Onepunch: "Onepunch-setup",
    OnepunchDesc: "WPF GUI in PowerShell to quickly install useful Windows software in one step. Collapsible categories with icons, live search, multi-select, light/dark mode, Install/Download-only badges, non-blocking winget execution, progress tracking, optional WSL and reboot.",
    downloadZip: "Download ZIP"
  }
};

const curriculumLinks = {
  it: "https://www.canva.com/design/DAFjFQpJARI/9DIpYyzdr7U8kKaLgAUVaA/view?utm_content=DAFjFQpJARI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1a1bf25a36",
  en: "https://www.canva.com/design/DAG0KYFzO8U/bSYKCXIni9GasnPtYLzXiA/view?utm_content=DAG0KYFzO8U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcc273b6625"
};

function switchLanguage(lang) {
  // Aggiorna tutti i testi
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  //  Aggiorna il link del Curriculum
  const cvA = document.getElementById("curriculum-link");
  if (cvA && curriculumLinks[lang]) {
    cvA.href = curriculumLinks[lang];
  }
}


// Imposta la lingua di default su italiano
switchLanguage("it");

// Gestione del toggle lingua
const toggleLang = document.getElementById("toggle-lang");
toggleLang.addEventListener("change", function () {
  if (this.checked) {
    switchLanguage("en");
  } else {
    switchLanguage("it");
  }
});



document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
});


document.getElementById("currentYear").textContent = new Date().getFullYear();

// Lightbox per certificazioni
const modal = document.getElementById('cert-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.cert-modal-close');

document.querySelectorAll('.cert-thumb-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'block';
    modalImg.src = this.href;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Chiudi cliccando fuori dall'immagine
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});