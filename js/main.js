// Mobile nav toggle
const burger = document.getElementById('navBurger');
const navLinks = document.querySelector('.nav__links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav__links--open');
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// Contact form — placeholder handling.
// NOTE: this only shows a confirmation message right now. To actually
// receive submissions, wire this up to a form backend like Formspree,
// Netlify Forms, or your own email service.
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! (This is a placeholder — connect this form to a real service like Formspree so messages actually get delivered.)");
    contactForm.reset();
  });
}
