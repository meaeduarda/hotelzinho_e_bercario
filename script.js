// ========================================
// MOBILE MENU
// ========================================
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ========================================
// SCROLL ANIMATIONS (Intersection Observer)
// ========================================
const fadeElements = document.querySelectorAll('.fade-up');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
});

fadeElements.forEach(el => fadeObserver.observe(el));

// ========================================
// GALLERY FILTER + SHOW MORE
// ========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const galeriaItems = document.querySelectorAll('.galeria-item');
const galleryToggle = document.getElementById('gallery-toggle');
const galleryMore = document.getElementById('gallery-more');
const GALLERY_LIMIT = 8;
let showingAll = false;

function applyFilter(filter) {
  let visibleCount = 0;

  galeriaItems.forEach(item => {
    const category = item.getAttribute('data-category');
    const match = filter === 'all' || category === filter;

    if (match) {
      visibleCount++;
      if (visibleCount > GALLERY_LIMIT && !showingAll) {
        item.classList.add('hidden');
      } else {
        item.classList.remove('hidden');
        item.style.animation = 'fadeInUp 0.4s ease forwards';
      }
    } else {
      item.classList.add('hidden');
    }
  });

  if (visibleCount > GALLERY_LIMIT) {
    galleryMore.style.display = '';
    galleryToggle.innerHTML = showingAll
      ? '<i class="fas fa-minus"></i> Mostrar menos'
      : '<i class="fas fa-plus"></i> Mostrar mais';
    galleryToggle.classList.toggle('expanded', showingAll);
  } else {
    galleryMore.style.display = 'none';
  }
}

let currentFilter = 'all';

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-filter');
    showingAll = false;
    applyFilter(currentFilter);
  });
});

galleryToggle.addEventListener('click', () => {
  showingAll = !showingAll;
  applyFilter(currentFilter);
});

applyFilter('all');

// ========================================
// LIGHTBOX
// ========================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCounter = document.getElementById('lightbox-counter');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentLightboxIndex = 0;
let visibleItems = [];

function getVisibleItems() {
  return Array.from(galeriaItems).filter(item => !item.classList.contains('hidden'));
}

function openLightbox(index) {
  visibleItems = getVisibleItems();
  currentLightboxIndex = index;
  updateLightboxImage();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightboxImage() {
  const item = visibleItems[currentLightboxIndex];
  const img = item.querySelector('img');
  const caption = item.querySelector('.galeria-caption').textContent;

  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = caption;
  lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${visibleItems.length}`;
}

function nextImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % visibleItems.length;
  updateLightboxImage();
}

function prevImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + visibleItems.length) % visibleItems.length;
  updateLightboxImage();
}

// Click on gallery items
galeriaItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    visibleItems = getVisibleItems();
    const visibleIndex = visibleItems.indexOf(item);
    openLightbox(visibleIndex >= 0 ? visibleIndex : 0);
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', nextImage);
lightboxPrev.addEventListener('click', prevImage);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
});

// Touch/Swipe support for lightbox
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

lightbox.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextImage();
    else prevImage();
  }
}, { passive: true });

// ========================================
// MODAL MATRÍCULA
// ========================================
const openModalBtn = document.getElementById('open-matricula');
const closeModalBtn = document.getElementById('close-matricula');
const modalMatricula = document.getElementById('modal-matricula');
const formMatricula = document.getElementById('form-matricula');

function openModal() {
  modalMatricula.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalMatricula.classList.remove('active');
  document.body.style.overflow = '';
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

modalMatricula.addEventListener('click', (e) => {
  if (e.target === modalMatricula) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalMatricula.classList.contains('active')) closeModal();
});

formMatricula.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome-pessoa').value.trim();
  const telefone = document.getElementById('telefone-pessoa').value.trim();
  const turno = document.getElementById('turno-interesse').value;

  if (!nome || !telefone || !turno) return;

  const msg = `Olá! Gostaria de matricular meu filho(a) no Hotelzinho e Berçário Vovó Brytes.%0A%0ANome: ${encodeURIComponent(nome)}%0ATelefone: ${encodeURIComponent(telefone)}%0ATurno de interesse: ${encodeURIComponent(turno)}`;

  window.open(`https://wa.me/5581985789118?text=${msg}`, '_blank');

  formMatricula.reset();
  closeModal();
});

// ========================================
// FOOTER YEAR
// ========================================
document.getElementById('current-year').textContent = new Date().getFullYear();

// ========================================
// SMOOTH SCROLL OFFSET (compensate fixed navbar)
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offset = navbar.offsetHeight + 10;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});
