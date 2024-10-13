document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling effect for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Handle form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message Sent!');
    });
  }
});

// Function to copy email
function copyEmail() {
  const emailText = document.getElementById("email").innerText;
  if (emailText) {
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = emailText;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Email copied: " + emailText);
  } else {
    alert("Email not found!");
  }
}
