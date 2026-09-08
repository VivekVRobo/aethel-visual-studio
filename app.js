/* ========================================================================== 
   AETHEL Visual Studio — Client-Side Logic
   ========================================================================== */

let currentActiveStyle = '';

function openLightbox(imgSrc, title, category) {
  const modal = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const catEl = document.getElementById('lightboxCategory');

  if (!modal || !img || !titleEl || !catEl) return;

  img.src = imgSrc;
  img.alt = title || 'Artwork preview';
  titleEl.textContent = title || '';
  catEl.textContent = category || '';
  currentActiveStyle = title || '';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
  const modal = document.getElementById('lightbox');
  if (!modal) return;

  if (event && event.target.closest('.lightbox-dialog') && !event.target.classList.contains('lightbox-close')) {
    return;
  }

  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function requestFromLightbox() {
  closeLightbox();
  if (currentActiveStyle) prefillBrief(currentActiveStyle);
}

function prefillBrief(styleName) {
  const targetEl = document.getElementById('referenceStyle');
  const requestSection = document.getElementById('request');
  const briefEl = document.getElementById('projectBrief');

  if (targetEl) targetEl.value = styleName || '';
  if (requestSection) requestSection.scrollIntoView({ behavior: 'smooth' });
  if (briefEl) setTimeout(() => briefEl.focus(), 350);
}

function selectTier(tierName) {
  const briefEl = document.getElementById('projectBrief');
  const requestSection = document.getElementById('request');

  if (requestSection) requestSection.scrollIntoView({ behavior: 'smooth' });
  if (!briefEl) return;

  setTimeout(() => {
    const marker = `[Selected Tier: ${tierName}]`;
    if (!briefEl.value.includes(marker)) {
      briefEl.value = `${marker}\n\n${briefEl.value}`;
    }
    briefEl.focus();
  }, 350);
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
  const niche = projectTypeEl.value;
  const resolution = resolutionEl.value;
  const reference = referenceEl ? referenceEl.value.trim() : '';
  const brief = briefEl.value.trim();

  if (!name || !email || !brief) return;

  const subject = encodeURIComponent(`Aethel Visual Inquiry — [${niche}] ${name}`);
  const bodyText = `Hello Vivek / Aethel Visual Studio,\n\nI would like to request custom high-resolution visual artwork for my project.\n\n--- CLIENT & PROJECT DETAILS ---\nName: ${name}\nEmail: ${email}\nProject / Niche: ${niche}\nTarget Resolution: ${resolution}\nVisual Style Reference: ${reference || 'Open to recommendations based on portfolio samples'}\n\n--- CREATIVE BRIEF & VISION ---\n${brief}\n\nBest regards,\n${name}`;

  window.location.href = `mailto:vivekvala562@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});
