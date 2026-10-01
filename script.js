/**
 * Nexus Portfolio - Main Script
 * Handles smooth scrolling, dynamic rendering, and interactions.
 * Data is loaded from js/translations.js, js/certifications-data.js, js/projects-data.js
 */

const LANGUAGE_STORAGE_KEY = 'nexus-language';

function getPreferredLanguage() {
  try {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLanguage === 'it' || storedLanguage === 'en') {
      return storedLanguage;
    }
  } catch (error) {
    // Storage can be unavailable in restricted browsing contexts.
  }

  return 'it';
}

function persistLanguage(lang) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (error) {
    // The language still works for the current page when storage is unavailable.
  }
}

// --- Functions ---
/**
 * Renders the projects grid with enhanced features.
 */
function renderProjects() {
  const grid = document.querySelector('.project-grid');
  if (!grid) return;
  grid.innerHTML = '';

  // Use projectsOrder to determine the sequence
  projectsOrder.forEach((projectId, index) => {
    const p = projectsMap[projectId];
    if (!p) return; // Skip if project data is missing

    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = `${index * 0.1}s`;

    // Title doubles as the lightweight primary entry point for the project.
    const primaryUrl = p.links?.[0]?.url || null;
    const titleContent = p.titleKey
      ? `<span data-i18n="${p.titleKey}">${p.titleKey}</span>`
      : p.title;
    const titleClass = p.titleClass ? ` class="${p.titleClass}"` : '';

    const titleHtml = primaryUrl
      ? `<h3${titleClass}>
          <a class="project-title-link" href="${primaryUrl}" target="_blank" rel="noopener noreferrer">
            <span>${titleContent}</span>
            <span class="project-title-arrow" aria-hidden="true">↗</span>
          </a>
        </h3>`
      : `<h3${titleClass}>${titleContent}</h3>`;

    // Tech Tags with category colors and tooltips
    const tagsHtml = p.tags ? p.tags.map(tag => {
      const emoji = tag.emoji ? `${tag.emoji} ` : '';
      const tooltip = tag.tooltip ? `data-tooltip="${tag.tooltip}"` : '';
      return `<span class="tech-tag ${tag.type}" ${tooltip}>${emoji}${tag.text}</span>`;
    }).join('') : '';

    // Compact action hierarchy: live demos are primary, GitHub is icon-only,
    // and supporting destinations stay as lightweight secondary actions.
    const linksHtml = p.links.map(link => {
      const isPrimary = link.textKey === 'liveDemo';
      const isGithub = link.textKey === 'githubRepo';
      const actionClasses = [
        'project-action',
        isPrimary ? 'project-action-primary' : 'project-action-secondary',
        isGithub ? 'project-action-icon' : ''
      ].filter(Boolean).join(' ');

      const title = isGithub ? ' title="GitHub" aria-label="GitHub"' : '';

      return `
        <a class="${actionClasses}" href="${link.url}" target="_blank" rel="noopener noreferrer"${title}>
          <span class="button-text" data-i18n="${link.textKey}">link</span>
          <span class="button-icon" aria-hidden="true"><i class="${link.icon}"></i></span>
        </a>
      `;
    }).join('');

    // Add category data attribute for filtering
    card.setAttribute('data-category', p.category || '');

    const imageHtml = p.image
      ? `<img src="${p.image}" alt="${p.title || 'Project'}" loading="lazy">`
      : `<div class="project-image-fallback" role="img" aria-label="${p.title || 'Project'}">${p.icon || '◆'}</div>`;

    card.innerHTML = `
      ${imageHtml}
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
 * Renders certifications as a compact responsive grid.
 * The first four stay visible by default; the rest are revealed on demand.
 */
function renderCertifications() {
  const list = document.querySelector('.certification-list');
  if (!list) return;
  list.innerHTML = '';

  certificationsData.forEach((c, index) => {
    const item = document.createElement('article');
    item.className = `certification-item${index >= 4 ? ' is-collapsed' : ''}`;

    item.innerHTML = `
      <div class="certification-card">
        <a href="${c.image}" class="cert-thumb-link" title="${c.title}">
          <img src="${c.image}" alt="${c.title}" class="cert-thumb" loading="lazy">
        </a>
        <div class="cert-info">
          <h3>${c.title}</h3>
          <p>${c.issuer}</p>
        </div>
      </div>
    `;
    list.appendChild(item);
  });
}

/**
 * Keeps reusable expand/collapse controls synchronized with their copy,
 * icon state and accessibility attributes.
 */
function updateSectionToggle(button, expanded, collapsedKey, expandedKey) {
  if (!button) return;

  const label = button.querySelector('.section-toggle-label');
  const wrapper = button.closest('.section-toggle-wrap');
  const key = expanded ? expandedKey : collapsedKey;
  const lang = document.documentElement.lang || getPreferredLanguage();

  button.classList.toggle('is-expanded', expanded);
  button.setAttribute('aria-expanded', String(expanded));

  if (wrapper) {
    wrapper.classList.toggle('is-expanded', expanded);
    wrapper.classList.toggle('is-collapsed', !expanded);
  }

  if (label) {
    label.dataset.i18n = key;
    label.textContent = translations[lang]?.[key] || label.textContent;
  }
}

/**
 * Expands/collapses the certification grid.
 */
function initCertificationToggle() {
  const toggle = document.getElementById('certifications-toggle');
  const toggleWrap = toggle?.closest('.section-toggle-wrap');
  const items = Array.from(document.querySelectorAll('.certification-item'));

  if (!toggle || !items.length) return;

  const previewCount = 4;
  let expanded = false;

  const update = () => {
    items.forEach((item, index) => {
      item.classList.toggle('is-collapsed', !expanded && index >= previewCount);
    });

    const canExpand = items.length > previewCount;
    toggle.hidden = !canExpand;
    if (toggleWrap) toggleWrap.hidden = !canExpand;

    updateSectionToggle(
      toggle,
      expanded,
      'showAllCertifications',
      'showLessCertifications'
    );
  };

  toggle.addEventListener('click', () => {
    expanded = !expanded;
    update();
  });

  update();
}

/**
 * Updates the text content of elements based on the selected language.
 * @param {string} lang - 'it' or 'en'
 */
function switchLanguage(lang) {
  if (!translations[lang]) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;
  persistLanguage(lang);

  document.querySelectorAll(".lang-option").forEach(button => {
    const isActive = button.dataset.lang === lang;
    button.setAttribute("aria-pressed", String(isActive));
  });
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
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 68;
        const offset = navbarHeight + 16;
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

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
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
  initCertificationToggle();
  initCertModal();
  initScrollAnimations();
  initScrollProgress();
  initBackToTop();
  initProjectFilter();
  initMobileNav();
  initHeroVideo();

  // Set Current Year in Footer
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Restore the selected language across portfolio pages.
  switchLanguage(getPreferredLanguage());

  // Handle language selector
  document.querySelectorAll(".lang-option").forEach(button => {
    button.addEventListener("click", function () {
      switchLanguage(this.dataset.lang);
    });
  });
});

/**
 * Hero Video: Smooth Loop & Loading Placeholder
 */
function initHeroVideo() {
  const video = document.getElementById('hero-video');
  if (!video) return;

  // Start with video hidden (poster visible via CSS class)
  video.classList.add('video-loading');

  // Show video when it's ready to play
  video.addEventListener('canplaythrough', () => {
    video.classList.remove('video-loading');
    video.classList.remove('video-fading');
  });

  // Fallback: show video after timeout even if not fully loaded
  setTimeout(() => {
    video.classList.remove('video-loading');
  }, 3000);

  // Smooth loop: fade out near end, fade in at start
  video.addEventListener('timeupdate', () => {
    const timeLeft = video.duration - video.currentTime;
    if (timeLeft < 0.3 && timeLeft > 0) {
      video.classList.add('video-fading');
    }
  });

  video.addEventListener('seeked', () => {
    if (video.currentTime < 0.5) {
      setTimeout(() => {
        video.classList.remove('video-fading');
      }, 50);
    }
  });
}

/**
 * Project filtering plus compact default view.
 * "All" shows a responsive curated preview (2 / 4 / 6 cards); explicit
 * category filters show every matching project.
 */
function initProjectFilter() {
  const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
  const projectCards = Array.from(document.querySelectorAll('.project-card'));
  const toggle = document.getElementById('projects-toggle');
  const toggleWrap = toggle?.closest('.section-toggle-wrap');

  if (!filterBtns.length || !projectCards.length) return;

  let activeFilter = 'all';
  let expanded = false;
  let resizeFrame = null;

  const getPreviewLimit = () => {
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth <= 1100) return 4;
    return 6;
  };

  const update = () => {
    const previewLimit = getPreviewLimit();

    projectCards.forEach((card, index) => {
      const category = card.getAttribute('data-category');
      const matchesFilter = activeFilter === 'all' || category === activeFilter;
      const withinPreview = expanded || activeFilter !== 'all' || index < previewLimit;

      card.classList.toggle('hidden', !(matchesFilter && withinPreview));
    });

    if (toggle) {
      const canExpand = activeFilter === 'all' && projectCards.length > previewLimit;
      toggle.hidden = !canExpand;
      if (toggleWrap) toggleWrap.hidden = !canExpand;
      updateSectionToggle(toggle, expanded, 'showAllProjects', 'showLessProjects');
    }
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter') || 'all';
      update();
    });
  });

  if (toggle) {
    toggle.addEventListener('click', () => {
      expanded = !expanded;
      update();
    });
  }

  window.addEventListener('resize', () => {
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      update();
      resizeFrame = null;
    });
  });

  update();
}


/**
 * Scroll Progress Bar & Back to Top (unified, throttled with rAF)
 */
function initScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress');
  if (!progressBar) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.width = (scrollTop / docHeight) * 100 + '%';
        ticking = false;
      });
      ticking = true;
    }
  });
}

function initBackToTop() {
  const backToTop = document.querySelector('.back-to-top');
  if (!backToTop) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        backToTop.classList.toggle('visible', window.scrollY > 500);
        ticking = false;
      });
      ticking = true;
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * Scroll Animations with Intersection Observer
 */
function initScrollAnimations() {
  // Animations disabled by user request
  const projectCards = document.querySelectorAll('.project-card');
  const sections = document.querySelectorAll('.about, .projects, .certifications, .contact');

  // Ensure everything is visible immediately
  projectCards.forEach(el => el.style.opacity = '1');
  sections.forEach(el => el.style.opacity = '1');
}

/**
 * Compact mobile navigation.
 */
function initMobileNav() {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelectorAll('.nav-links a');

  if (!navbar || !toggle) return;

  const setOpen = (open) => {
    navbar.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Chiudi menu' : 'Apri menu');
  };

  toggle.addEventListener('click', () => {
    setOpen(!navbar.classList.contains('nav-open'));
  });

  links.forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) setOpen(false);
  });
}
