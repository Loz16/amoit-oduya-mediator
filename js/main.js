// Mobile nav toggle
const burger = document.getElementById('navBurger');
const navLinks = document.querySelector('.nav__links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav__links--open');
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// Contact form — submits to Formspree without reloading the page,
// and shows an inline confirmation or error message.
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    formStatus.textContent = 'Sending...';
    formStatus.className = 'contact__form-status';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formStatus.textContent = "Thank you — your message has been sent. I'll be in touch soon.";
        formStatus.classList.add('contact__form-status--success');
        contactForm.reset();
      } else {
        formStatus.textContent = "Something went wrong. Please try again, or email directly.";
        formStatus.classList.add('contact__form-status--error');
      }
    } catch (err) {
      formStatus.textContent = "Network error — please check your connection and try again.";
      formStatus.classList.add('contact__form-status--error');
    } finally {
      submitBtn.disabled = false;
    }
  });
}
