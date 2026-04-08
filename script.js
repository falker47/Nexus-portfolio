/**
 * Nexus Portfolio - Main Script
 * Handles smooth scrolling, dynamic rendering, and interactions.
 * Data is loaded from js/translations.js, js/certifications-data.js, js/projects-data.js
 */

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
      <a href="${link.url}" target="_blank" rel="noopener noreferrer">
        <span class="button-text" data-i18n="${link.textKey}">link</span>
        <span class="button-icon"><i class="${link.icon}"></i></span>
      </a>
    `).join('');

    // Add category data attribute for filtering
    card.setAttribute('data-category', p.category || '');

    card.innerHTML = `
      <img src="${p.image}" alt="${p.title || p.titleKey}" loading="lazy">
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
          <img src="${c.image}" alt="${c.title}" class="cert-thumb" loading="lazy">
        </a>
        <div class="cert-info">
          <h3>${c.title}</h3>
          <p>${c.issuer}</p>
        </div>
      </div>
    `;
    list.appendChild(slide);
  });

  // Initialize Swiper only on mobile
  const mobileQuery = window.matchMedia('(max-width: 767px)');
  let swiper = null;

  function initSwiper() {
    if (mobileQuery.matches && !swiper) {
      swiper = new Swiper('.cert-swiper', {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 'auto',
        centeredSlides: true,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

      // Custom navigation buttons
      document.querySelector('.cert-nav-prev').addEventListener('click', () => swiper.slidePrev());
      document.querySelector('.cert-nav-next').addEventListener('click', () => swiper.slideNext());
    } else if (!mobileQuery.matches && swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }

  initSwiper();
  mobileQuery.addEventListener('change', initSwiper);
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
  initCertModal();
  initScrollAnimations();
  initScrollProgress();
  initBackToTop();
  initProjectFilter();
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
  const certItems = document.querySelectorAll('.certification-item'); // Swiper slides now
  const sections = document.querySelectorAll('.about, .projects, .certifications, .contact');

  // Ensure everything is visible immediately
  projectCards.forEach(el => el.style.opacity = '1');
  sections.forEach(el => el.style.opacity = '1');
}