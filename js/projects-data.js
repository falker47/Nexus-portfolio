/**
 * Projects Data
 * 
 * projectsMap: Contains all the details for each project, keyed by a unique ID.
 * projectsOrder: Defines the order in which projects are displayed.
 * 
 * To reorder projects, simply rearrange the strings in the projectsOrder array.
 */

const projectsMap = {
    "Kobon": {
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
            { url: "https://github.com/falker47/Kobon-N10-Landscape", textKey: "githubRepo", icon: "fab fa-github" }
        ]
    },
    "ZEROfilez": {
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
            { url: "https://falker47.github.io/ZEROfilez/", textKey: "buttonTry", icon: "fas fa-globe" },
            { url: "https://github.com/falker47/ZEROfilez", textKey: "githubRepo", icon: "fab fa-github" }
        ]
    },
    "HLSE": {
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
    "EasyContract": {
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
    "Panacea": {
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
    "ChiLhaDetto": {
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
    "Onepunch": {
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
    "IbanChecker": {
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
    "NFT": {
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
    "Ripetizioni": {
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
    "CarteSenzaUmanita": {
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
    "LedgerLite": {
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
    "Sommatrix": {
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
    "CodiceFiscale": {
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
    "CrackTheCode": {
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
};


// Lista Progetti
const projectsOrder = [
    "Kobon",
    "EasyContract",
    "Panacea",
    "ZEROfilez",
    "HLSE",
    "ChiLhaDetto",
    "Onepunch",
    "IbanChecker",
    "CarteSenzaUmanita",
    "NFT",
    "Ripetizioni",
    "LedgerLite",
    "Sommatrix",
    "CodiceFiscale",
    "CrackTheCode"
];
