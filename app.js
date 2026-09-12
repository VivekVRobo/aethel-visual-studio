/* ==========================================================================
   AETHEL Visual Studio — Client-Side Gallery, Filter & Lightbox Engine
   ========================================================================== */

let currentActiveStyle = '';
let currentVisibleCards = [];
let currentLightboxIndex = -1;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  updateVisibleCards();

  // Read URL query parameter for category filtering if on /work
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  if (catParam) {
    const targetPill = document.querySelector(`.filter-pill[data-filter="${catParam}"]`);
    if (targetPill) filterGallery(catParam, targetPill);
  }

  // Read URL query parameter for prefilled style on /contact
  const styleParam = urlParams.get('style');
  if (styleParam) {
    const styleEl = document.getElementById('referenceStyle');
    if (styleEl) styleEl.value = styleParam;
  }

  // Read URL query parameter for prefilled tier
  const tierParam = urlParams.get('tier');
  if (tierParam) {
    const briefEl = document.getElementById('projectBrief');
    if (briefEl && !briefEl.value.includes(`[Selected Package: ${tierParam}]`)) {
      briefEl.value = `[Selected Package: ${tierParam}]\n\n` + briefEl.value;
    }
  }
});

// Category Filtering Function
function filterGallery(category, buttonEl) {
  const cards = document.querySelectorAll('.showcase-card');
  const pills = document.querySelectorAll('.filter-pill');

  // Update active pill button
  pills.forEach(pill => {
    pill.classList.remove('active');
    pill.setAttribute('aria-selected', 'false');
  });

  if (buttonEl) {
    buttonEl.classList.add('active');
    buttonEl.setAttribute('aria-selected', 'true');
  } else {
    const targetPill = document.querySelector(`.filter-pill[data-filter="${category}"]`);
    if (targetPill) {
      targetPill.classList.add('active');
      targetPill.setAttribute('aria-selected', 'true');
    }
  }

  // Filter cards with subtle staggered reveal animation
  let visibleCount = 0;
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.classList.remove('hidden');
      card.style.animation = 'none';
      card.offsetHeight; // trigger reflow
      card.style.animation = `cardReveal 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${Math.min(visibleCount * 0.03, 0.35)}s forwards`;
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });

  updateVisibleCards();
}

// Keep track of currently visible cards for lightbox carousel navigation
function updateVisibleCards() {
  currentVisibleCards = Array.from(document.querySelectorAll('.showcase-card:not(.hidden)'));
}

// Lightbox modal functionality
function openLightbox(imgSrc, title, category, requestStyle) {
  updateVisibleCards();

  currentLightboxIndex = currentVisibleCards.findIndex(card => {
    const cardImg = card.querySelector('.card-media img');
    return cardImg && cardImg.getAttribute('src') === imgSrc;
  });

  displayLightboxItem(imgSrc, title, category, requestStyle || title);

  const modal = document.getElementById('lightbox');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function displayLightboxItem(imgSrc, title, category, requestStyle) {
  const img = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const catEl = document.getElementById('lightboxCategory');

  if (img) {
    img.src = imgSrc;
    img.alt = title || 'Artwork preview';
  }
  if (titleEl) titleEl.textContent = title || '';
  if (catEl) catEl.textContent = category || '';
  currentActiveStyle = requestStyle || title || '';
}

function navigateLightbox(direction) {
  if (!currentVisibleCards.length || currentLightboxIndex === -1) return;

  currentLightboxIndex = (currentLightboxIndex + direction + currentVisibleCards.length) % currentVisibleCards.length;
  const targetCard = currentVisibleCards[currentLightboxIndex];
  if (!targetCard) return;

  const cardImg = targetCard.querySelector('.card-media img');
  const titleEl = targetCard.querySelector('.card-title');
  const catEl = targetCard.querySelector('.card-category');
  const reqBtn = targetCard.querySelector('.card-btn');

  const imgSrc = cardImg ? cardImg.getAttribute('src') : '';
  const title = titleEl ? titleEl.textContent : '';
  const category = catEl ? catEl.textContent : '';
  
  let reqStyle = title;
  if (reqBtn) {
    const clickAttr = reqBtn.getAttribute('onclick') || '';
    const match = clickAttr.match(/prefillBrief\('(.*?)'\)/);
    if (match && match[1]) reqStyle = match[1];
  }

  displayLightboxItem(imgSrc, title, category, reqStyle);
}

function closeLightbox(event) {
  if (event && event.target.closest('.lightbox-dialog') && 
      !event.target.classList.contains('lightbox-close') &&
      !event.target.classList.contains('lightbox-nav')) {
    return;
  }
  const modal = document.getElementById('lightbox');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function requestFromLightbox() {
  closeLightbox();
  if (currentActiveStyle) prefillBrief(currentActiveStyle);
}

function prefillBrief(styleName) {
  const targetEl = document.getElementById('referenceStyle');
  const requestSection = document.getElementById('request');
  const briefEl = document.getElementById('projectBrief');

  if (targetEl && requestSection) {
    targetEl.value = styleName || '';
    requestSection.scrollIntoView({ behavior: 'smooth' });
    if (briefEl) setTimeout(() => briefEl.focus(), 350);
  } else {
    // Navigate directly to contact page with style prefilled in query parameter
    window.location.href = `/contact?style=${encodeURIComponent(styleName || '')}`;
  }
}

function selectTier(tierName) {
  const briefEl = document.getElementById('projectBrief');
  const requestSection = document.getElementById('request');

  if (briefEl && requestSection) {
    requestSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const marker = `Selected package: ${tierName}`;
      if (!briefEl.value.includes(marker)) briefEl.value = `${marker}\n\n${briefEl.value}`;
      briefEl.focus();
    }, 350);
  } else {
    window.location.href = `/contact?tier=${encodeURIComponent(tierName || '')}`;
  }
}

function handleBriefSubmit(event) {
  event.preventDefault();

  const nameEl = document.getElementById('clientName');
  const emailEl = document.getElementById('clientEmail');
  const projectTypeEl = document.getElementById('projectType');
  const resolutionEl = document.getElementById('targetResolution');
  const referenceEl = document.getElementById('referenceStyle');
  const briefEl = document.getElementById('projectBrief');

  if (!nameEl || !emailEl || !projectTypeEl || !resolutionEl || !briefEl) return;

  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const projectType = projectTypeEl.value;
  const resolution = resolutionEl.value;
  const reference = referenceEl ? referenceEl.value.trim() : '';
  const brief = briefEl.value.trim();

  if (!name || !email || !brief) return;

  const subject = encodeURIComponent(`Aethel project inquiry | ${projectType} | ${name}`);
  const bodyText = `Hello Aethel Team,\n\nWe would like to discuss a visual project.\n\nName: ${name}\nEmail: ${email}\nProject type: ${projectType}\nTarget delivery: ${resolution}\nReference direction: ${reference || 'Open to your recommendation'}\n\nProject brief:\n${brief}\n\nThank you,\n${name}`;

  window.location.href = `mailto:vivekvala562@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
}

// Keyboard controls for lightbox navigation & escape
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('lightbox');
  if (!modal || !modal.classList.contains('active')) return;

  if (e.key === 'Escape') {
    closeLightbox();
  } else if (e.key === 'ArrowLeft') {
    navigateLightbox(-1);
  } else if (e.key === 'ArrowRight') {
    navigateLightbox(1);
  }
});
