document.addEventListener('DOMContentLoaded', function () {
  const ham = document.querySelector('.ham');
  const menu = document.querySelector('.menu');
  const navLinks = document.querySelectorAll('.menu a');
  
  // Ensure elements exist before adding event listeners
  if (ham && menu) {
    // Toggle the menu visibility when the hamburger icon is clicked
    ham.addEventListener('click', function () {
      ham.classList.toggle('active');
      menu.classList.toggle('on');
    });
  }

  // Smooth scroll to sections when menu links are clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Add dynamic year to the footer (optional)
  const footer = document.querySelector('footer .dev-info');
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML += `<span> | &copy; ${year}</span>`;
  }

  // Form validation for the contact page (optional)
  const contactForm = document.querySelector('.contact-form'); // Assuming a form with this class
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = contactForm.querySelector('input[name="name"]');
      const email = contactForm.querySelector('input[name="email"]');
      const phone = contactForm.querySelector('input[name="phone"]');
      const message = contactForm.querySelector('textarea[name="message"]');

      if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        alert('Please fill out all required fields.');
      } else {
        // Ideally, here you would send the form data to the server
        alert('Thank you for your message!');
        contactForm.reset();
      }
    });
  }
});
