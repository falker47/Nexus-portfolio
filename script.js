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
    aboutTitle: "Chi sono",
    aboutText1: "Semplicemente una persona che si appassiona facilmente ad ogni cosa. Mi piace scomporre problemi complessi per trovare soluzioni eleganti.",
    aboutText2: "Sono due le forze fondamentali che mi muovono: capire il mondo che mi circonda e creare cose che possano arricchirlo.",
    aboutText3: "Buona navigazione!",
    projectsTitle: "Progetti",
    contactCurriculum: "Curriculum",
    contactMail: "Contattami",
    footerName: "Maurizio Falconi",
    buttonVisitWeb: "Sito web",
    githubRepo: "Repo GitHub",
    exposition: "Esposizione",
    WP: "Apri Whitepaper",

    T_NFT: "Sistema di valorizzazione NFT",
    T_Ripetizioni: "Sito Ripetizioni",
    T_IbanChecker: "Verifica IBAN",
    T_CodiceFiscale: "Calcolo Codice Fiscale",

    IbanChecker: "Web app che verifica la validità degli IBAN italiani. In caso di IBAN errato, propone correzioni ipotizzando che si abbia inserito male un carattere o se ne siano invertiti due.",
    Sommatrix: "Puzzle matematico in cui il giocatore seleziona o cancella numeri in una griglia per far combaciare le somme di ogni riga e colonna con i target prestabiliti.",
    CodiceFiscale: "Web app che calcola il codice fiscale italiano a partire dai dati anagrafici e viceversa, ovvero recuperare dal codice fiscale sesso, data e luogo di nascita.",
    DataScience: "Progetto che attraverso l’analisi dati in Python e tecniche di machine learning prevede il successo dell’atterraggio dei razzi per ottimizzare la stima dei costi e identificare eventuali siti di lancio ottimali.",
    CracktheCode: "Gioco di logica basato sulle dinamiche di Mastermind e Hit and Blow in cui devi decifrare un codice segreto usando deduzione e feedback progressivi.",
    LedgerLite: "Questa applicazione ti permette di gestire in modo semplice i tuoi crediti e debiti. In ogni operazione viene specificato il nominativo, l’importo e una descrizione.",
    Ripetizioni: "Il sito web dove presento la mia attività di ripetizioni dove i miei studenti possono prenotare le lezioni di matematica e fisica e consultare il mio materiale didattico.",
    NFT: "White Paper (in italiano) sulla valorizzazione dei dipendenti tramite NFT, adottabile dalle aziende."

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
    aboutText1: "Just a person passionate about everything. I love breaking down complex problems to find elegant solutions.",
    aboutText2: "Two fundamental forces drive me: understanding the world around me and creating things that enrich it.",
    aboutText3: "Enjoy your visit!",
    projectsTitle: "Projects",
    contactCurriculum: "Resume",
    contactMail: "Contact Me",
    footerName: "Maurizio Falconi",
    buttonVisitWeb: "Website",
    githubRepo: "GitHub Repo",
    exposition: "Exposition",
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
    NFT: "White Paper (in italian) about the valoritazion of the employees via NFT adoptable by companies."
  }
};

function switchLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
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