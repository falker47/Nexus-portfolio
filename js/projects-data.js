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
      { text: "Research", type: "research", emoji: "📝", tooltip: "Certified computational geometry" },
      { text: "Python", type: "tech", emoji: "", tooltip: "Exact solver and independent verifier" },
      { text: "Geometry", type: "desc", emoji: "", tooltip: "Global optima certified for finite cases" }
    ],
    links: [
      { url: "https://arxiv.org/abs/2607.28654", textKey: "paper", icon: "fas fa-file-lines" },
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
    category: "product",
    tags: [
      { text: "AI Product", type: "webapp", emoji: "🤖", tooltip: "Public product with private source code" },
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
    category: "product",
    tags: [
      { text: "Product", type: "webapp", emoji: "🌐", tooltip: "Deployed interactive web product" },
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
    category: "product",
    tags: [
      { text: "Product", type: "webapp", emoji: "📱", tooltip: "Installable single-device party game" },
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
    icon: "📖",
    category: "product",
    tags: [
      { text: "Web App", type: "webapp", emoji: "🌐", tooltip: "Mobile-first application for an educational community" },
      { text: "React + TypeScript", type: "tech", emoji: "", tooltip: "Vite frontend" },
      { text: "Supabase", type: "desc", emoji: "", tooltip: "PostgreSQL, Auth, RLS and Edge Functions" }
    ],
    links: [
      { url: "https://github.com/falker47/Diario-di-Bordo", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  },

  "HLSE": {
    title: "Hogwarts Legacy Save Editor",
    descriptionKey: "HLSEDesc",
    image: "assets/projects/HLSE.webp",
    category: "gaming",
    tags: [
      { text: "Tool", type: "tool", emoji: "🔧", tooltip: "Gaming utility for save management" },
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
    descriptionKey: "PMDToolsDesc",
    image: "assets/projects/PMD.webp",
    category: "gaming",
    tags: [
      { text: "Tooling", type: "tool", emoji: "🔧", tooltip: "Two focused utilities for classic Pokémon Mystery Dungeon games" },
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
    category: "gaming",
    tags: [
      { text: "Tooling", type: "tool", emoji: "🧰", tooltip: "Public software/archive utility plus private-vault frontend" },
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
      { text: "Utility", type: "tool", emoji: "🔧", tooltip: "Focused browser utility" },
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
    category: "utility",
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
    category: "utility",
    tags: [
      { text: "Game", type: "game", emoji: "🎮", tooltip: "Mathematical browser puzzle" },
      { text: "JavaScript", type: "tech", emoji: "", tooltip: "Vanilla JavaScript with Node tests" },
      { text: "Solver", type: "desc", emoji: "", tooltip: "Generated boards accepted only with one global solution" }
    ],
    links: [
      { url: "https://falker47.github.io/SOMMATRIX/", textKey: "liveDemo", icon: "fas fa-globe" },
      { url: "https://github.com/falker47/SOMMATRIX", textKey: "githubRepo", icon: "fab fa-github" }
    ]
  }
};

const projectsOrder = [
  "ProfGecko",
  "Ringmin",
  "Camaleonte",
  "ChiLhaDetto",
  "DiarioDiBordo",
  "HLSE",
  "ZEROfilez",
  "PMDTools",
  "IbanChecker",
  "Sommatrix",
  "CrackTheCode"
];
