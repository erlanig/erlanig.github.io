// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-show');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(el => observer.observe(el));

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');

    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('mobile-menu-enter');
      // force reflow
      void mobileMenu.offsetWidth;
      mobileMenu.classList.add('mobile-menu-enter-active');
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('mobile-menu-enter', 'mobile-menu-enter-active');
    }
  });

  // Close mobile menu when link clicked
  mobileMenu.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('mobile-menu-enter', 'mobile-menu-enter-active');
    });
  });
}