/**
 * Curated project data for Nexus Portfolio.
 *
 * Nexus is intentionally selective: it is a public portfolio hub, not a mirror
 * of every repository in the GitHub account.
 */

const projectsMap = {
  "Ringmin": {
    title: "Ringmin",
    descriptionKey: "RingminDesc",
    image: "assets/projects/ringmin.webp",
    category: "research",
    tags: [
      { text: "Research", type: "research", emoji: "📝", tooltip: "Two-paper computational-geometry research program" },
      { text: "Python", type: "tech", emoji: "", tooltip: "Exact solver and independent verifier" },
      { text: "Finite + asymptotic", type: "desc", emoji: "", tooltip: "Certified finite optima and global asymptotic theory" }
    ],
    links: [
      { url: "https://arxiv.org/abs/2607.28654", textKey: "paperI", icon: "fas fa-file-lines" },
      { url: "https://arxiv.org/abs/2609.13630", textKey: "paperII", icon: "fas fa-file-lines" },
      { url: "https://github.com/falker47/ringmin", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },

  "RingminSquared": {
    title: "Power-Ringmin",
    descriptionKey: "RingminSquaredDesc",
    icon: "x²",
    category: "research",
    tags: [
      { text: "Research", type: "research", emoji: "📝", tooltip: "Quadratic-radii extension of the central-circle problem" },
      { text: "Python", type: "tech", emoji: "", tooltip: "Exact fixed-order feasibility and certificates" },
      { text: "Optimization", type: "desc", emoji: "", tooltip: "Finite certified results with explicit limitations" }
    ],
    links: [
      { url: "https://github.com/falker47/ringmin-squared", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },

  "ProfGecko": {
    title: "Prof. Gecko",
    descriptionKey: "ProfGeckoDesc",
    image: "assets/projects/prof-gecko.jpg",
    category: "app",
    tags: [
      { text: "App", type: "app", emoji: "💻", tooltip: "Public application with private source code" },
      { text: "Next.js + FastAPI", type: "tech", emoji: "", tooltip: "Full-stack web architecture" },
      { text: "RAG", type: "desc", emoji: "", tooltip: "Generation-aware Pokémon knowledge retrieval" }
    ],
    links: [
      { url: "https://profgecko.vercel.app/", textKey: "liveDemo", icon: "fas fa-globe" }
    ]
  },

  "ChiLhaDetto": {
    title: "Chi l'ha detto?",
    descriptionKey: "ChiLhaDettoDesc",
    image: "assets/projects/chilhadetto.png",
    category: "game",
    tags: [
      { text: "Game", type: "game", emoji: "🎮", tooltip: "Deployed interactive web game" },
      { text: "React + TypeScript", type: "tech", emoji: "", tooltip: "Vite frontend" },
      { text: "Neon + Vercel", type: "desc", emoji: "", tooltip: "Serverless leaderboard and PostgreSQL" }
    ],
    links: [
      { url: "https://chi-l-ha-detto.vercel.app/", textKey: "liveDemo", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/chi-l-ha-detto", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },

  "Camaleonte": {
    title: "Camaleonte",
    descriptionKey: "CamaleonteDesc",
    image: "assets/projects/camaleonte-3-2-ratio.webp",
    category: "game",
    tags: [
      { text: "Game", type: "game", emoji: "🎮", tooltip: "Installable single-device party game" },
      { text: "React + TypeScript", type: "tech", emoji: "", tooltip: "React 19, Vite and Zustand" },
      { text: "PWA", type: "desc", emoji: "", tooltip: "Offline-capable progressive web app" }
    ],
    links: [
      { url: "https://camaleonte.netlify.app/", textKey: "liveDemo", icon: "fas fa-globe" },
      { url: "https://play.google.com/store/apps/details?id=com.falker.camaleonte", textKey: "playStore", icon: "fab fa-google-play" },
      { url: "https://github.com/falker47/camaleonte", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },

  "DiarioDiBordo": {
    title: "Diario di Bordo",
    descriptionKey: "DiarioDiBordoDesc",
    image: "assets/projects/diario-di-bordo-preview.webp",
    category: "app",
    tags: [
      { text: "App", type: "app", emoji: "💻", tooltip: "Mobile-first application for an educational community" },
      { text: "React + TypeScript", type: "tech", emoji: "", tooltip: "Vite frontend" },
      { text: "Supabase", type: "desc", emoji: "", tooltip: "PostgreSQL, Auth, RLS and Edge Functions" }
    ],
    links: [
      { url: "https://diariodibordo.netlify.app/", textKey: "liveDemo", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/Diario-di-Bordo", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },

  "HLSE": {
    title: "Hogwarts Legacy Save Editor",
    descriptionKey: "HLSEDesc",
    image: "assets/projects/HLSE.webp",
    category: "utility",
    tags: [
      { text: "Utility", type: "utility", emoji: "🛠️", tooltip: "Gaming utility for save management" },
      { text: "Python GUI", type: "tech", emoji: "", tooltip: "CustomTkinter and pywebview" },
      { text: "Modding", type: "desc", emoji: "", tooltip: "Integrated save-editing workflow" }
    ],
    links: [
      { url: "https://www.nexusmods.com/hogwartslegacy/mods/2414", textKey: "nexusMods", icon: "fas fa-download" },
      { url: "https://github.com/falker47/HogwartsLegacy-SaveEditor", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },

  "PMDTools": {
    title: "Pokémon Mystery Dungeon Tools",
    titleClass: "project-title-compact",
    descriptionKey: "PMDToolsDesc",
    image: "assets/projects/PMD.webp",
    category: "utility",
    tags: [
      { text: "Utility", type: "utility", emoji: "🛠️", tooltip: "Two focused utilities for classic Pokémon Mystery Dungeon games" },
      { text: "React", type: "tech", emoji: "", tooltip: "Modern browser-based interfaces" },
      { text: "Pokémon", type: "game", emoji: "", tooltip: "Rescue Team and Explorers series" }
    ],
    links: [
      { url: "https://github.com/falker47/PokemonMysteryDungeon-SavEditor", textKey: "saveEditor", icon: "fab fa-github" },
      { url: "https://pokemonmysterydungeon-reversequiz.netlify.app/", textKey: "reverseQuiz", icon: "fas fa-globe" }
    ]
  },

  "ZEROfilez": {
    title: "ZEROfilez",
    descriptionKey: "ZEROfilezDesc",
    image: "assets/projects/zerofilez.webp",
    category: "utility",
    tags: [
      { text: "Utility", type: "utility", emoji: "🛠️", tooltip: "Public software/archive utility plus private-vault frontend" },
      { text: "JavaScript", type: "tech", emoji: "", tooltip: "Client-side application" },
      { text: "Web Crypto", type: "desc", emoji: "", tooltip: "AES-256-GCM + HKDF-SHA256" }
    ],
    links: [
      { url: "https://falker47.github.io/ZEROfilez/", textKey: "liveDemo", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/ZEROfilez", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },

  "IbanChecker": {
    title: "IBAN Checker",
    descriptionKey: "IbanCheckerDesc",
    image: "assets/projects/iban-checker.webp",
    category: "utility",
    tags: [
      { text: "Utility", type: "utility", emoji: "🛠️", tooltip: "Focused browser utility" },
      { text: "JavaScript", type: "tech", emoji: "", tooltip: "ES modules with Vitest coverage" },
      { text: "Validation", type: "desc", emoji: "", tooltip: "Italian IBAN validation and typo correction" }
    ],
    links: [
      { url: "https://falker47.github.io/IBAN-Checker/", textKey: "liveDemo", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/IBAN-Checker", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },

  "CrackTheCode": {
    title: "Crack the Code",
    descriptionKey: "CrackTheCodeDesc",
    image: "assets/projects/crack-the-code.webp",
    category: "game",
    tags: [
      { text: "Game", type: "game", emoji: "🎮", tooltip: "Single-player logic game" },
      { text: "JavaScript", type: "tech", emoji: "", tooltip: "Zero runtime dependencies" },
      { text: "Logic", type: "desc", emoji: "", tooltip: "Mastermind-inspired deduction" }
    ],
    links: [
      { url: "https://falker47.github.io/Crack-the-Code/", textKey: "liveDemo", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/Crack-the-Code", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },

  "Sommatrix": {
    title: "SOMMATRIX",
    descriptionKey: "SommatrixDesc",
    image: "assets/projects/sommatrix.webp",
    category: "game",
    tags: [
      { text: "Game", type: "game", emoji: "🎮", tooltip: "Mathematical browser puzzle" },
      { text: "JavaScript", type: "tech", emoji: "", tooltip: "Vanilla JavaScript with Node tests" },
      { text: "Solver", type: "desc", emoji: "", tooltip: "Generated boards accepted only with one global solution" }
    ],
    links: [
      { url: "https://falker47.github.io/SOMMATRIX/", textKey: "liveDemo", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/SOMMATRIX", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },

  "SocialViewer": {
    title: "Social Viewer",
    descriptionKey: "SocialViewerDesc",
    image: "assets/socialviewer/testers-preview.webp",
    category: "app",
    tags: [
      { text: "Android", type: "app", emoji: "📱", tooltip: "Native Android application" },
      { text: "Kotlin + Compose", type: "tech", emoji: "", tooltip: "Jetpack Compose UI" },
      { text: "Privacy-first", type: "desc", emoji: "", tooltip: "No account, history, analytics or project backend" }
    ],
    links: [
      { url: "testers.html", textKey: "joinTest", icon: "fab fa-google-play" },
      { url: "https://github.com/falker47/SocialViewer", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },

  "EasyContract": {
    title: "Easy Contract",
    descriptionKey: "EasyContractDesc",
    image: "assets/projects/easycontract.webp",
    category: "app",
    tags: [
      { text: "App", type: "app", emoji: "💻", tooltip: "Serverless document-reading aid" },
      { text: "Google GenAI", type: "tech", emoji: "", tooltip: "Gemini document analysis" },
      { text: "Netlify Functions", type: "desc", emoji: "", tooltip: "Validated serverless request boundary" }
    ],
    links: [
      { url: "https://easy-contract.netlify.app/", textKey: "liveDemo", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/easy-contract", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },

  "CarteSenzaUmanita": {
    title: "Carte senza Umanità",
    descriptionKey: "CarteSenzaUmanitaDesc",
    image: "assets/projects/csu_preview.webp",
    category: "game",
    tags: [
      { text: "Game", type: "game", emoji: "🎮", tooltip: "Real-time multiplayer party game" },
      { text: "React + Node.js", type: "tech", emoji: "", tooltip: "Vite client and Express server" },
      { text: "Socket.io", type: "desc", emoji: "", tooltip: "Rooms, rounds and reconnection in real time" }
    ],
    links: [
      { url: "https://carte-senza-umanita.onrender.com/", textKey: "liveDemo", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/Carte-senza-Umanita", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },

  "Panacea": {
    title: "Panacea",
    descriptionKey: "PanaceaDesc",
    image: "assets/projects/panacea.webp",
    category: "utility",
    tags: [
      { text: "Utility", type: "utility", emoji: "🛠️", tooltip: "Windows maintenance application" },
      { text: "Python", type: "tech", emoji: "", tooltip: "CustomTkinter desktop application" },
      { text: "Windows", type: "desc", emoji: "", tooltip: "Native maintenance and repair commands" }
    ],
    links: [
      { url: "https://github.com/falker47/Panacea", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },

  "CodiceFiscale": {
    title: "Codice Fiscale",
    descriptionKey: "CodiceFiscaleDesc",
    image: "assets/projects/codice-fiscale.webp",
    category: "utility",
    tags: [
      { text: "Utility", type: "utility", emoji: "🛠️", tooltip: "Italian fiscal-code calculator and decoder" },
      { text: "JavaScript", type: "tech", emoji: "", tooltip: "Client-side ES modules" },
      { text: "Validation", type: "desc", emoji: "", tooltip: "Formal checks, omocodia and Belfiore codes" }
    ],
    links: [
      { url: "https://falker47.github.io/Codice-Fiscale/", textKey: "liveDemo", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/Codice-Fiscale", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  }

};

const projectsOrder = [
  "ProfGecko",
  "Ringmin",
  "Camaleonte",
  "SocialViewer",
  "ChiLhaDetto",
  "DiarioDiBordo",
  "EasyContract",
  "HLSE",
  "ZEROfilez",
  "PMDTools",
  "CarteSenzaUmanita",
  "Panacea",
  "IbanChecker",
  "CodiceFiscale",
  "Sommatrix",
  "CrackTheCode"
];
