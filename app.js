/* ==========================================================================
   AETHEL Visual Studio — Client-Side Logic
   ========================================================================== */

let currentActiveStyle = '';

function openLightbox(imgSrc, title, category) {
  const modal = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const catEl = document.getElementById('lightboxCategory');

  img.src = imgSrc;
  img.alt = title;
  titleEl.textContent = title;
  catEl.textContent = category;
  currentActiveStyle = title;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
  if (event && event.target.closest('.lightbox-dialog') && !event.target.classList.contains('lightbox-close')) {
    return;
  }
  const modal = document.getElementById('lightbox');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function requestFromLightbox() {
  closeLightbox();
  prefillBrief(currentActiveStyle);
}

function prefillBrief(styleName) {
  const targetEl = document.getElementById('referenceStyle');
  const requestSection = document.getElementById('request');
  const briefEl = document.getElementById('projectBrief');

  if (targetEl) {
    targetEl.value = styleName;
  }

  requestSection.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    if (briefEl) briefEl.focus();
  }, 500);
}

function selectTier(tierName) {
  const briefEl = document.getElementById('projectBrief');
  const requestSection = document.getElementById('request');

  requestSection.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    if (briefEl) {
      if (!briefEl.value.includes(`[Selected Tier: ${tierName}]`)) {
        briefEl.value = `[Selected Tier: ${tierName}]\n\n` + briefEl.value;
      }
      briefEl.focus();
    }
  }, 500);
}

function handleBriefSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('clientName').value.trim();
  const email = document.getElementById('clientEmail').value.trim();
  const niche = document.getElementById('projectType').value;
  const resolution = document.getElementById('targetResolution').value;
  const reference = document.getElementById('referenceStyle').value.trim();
  const brief = document.getElementById('projectBrief').value.trim();

  const subject = encodeURIComponent(`Aethel Visual Inquiry — [${niche}] ${name}`);
  const bodyText = 
`Hello Vivek / Aethel Visual Studio,

I would like to request custom high-resolution visual artwork for my project.

--- CLIENT & PROJECT DETAILS ---
Name: ${name}
Email: ${email}
Project / Niche: ${niche}
Target Resolution: ${resolution}
Visual Style Reference: ${reference || 'Open to recommendations based on portfolio samples'}

--- CREATIVE BRIEF & VISION ---
${brief}

Looking forward to your thoughts and initial concept preview notes!

Best regards,
${name}
`;

  const mailtoUrl = `mailto:vivekvala562@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  window.location.href = mailtoUrl;
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});
