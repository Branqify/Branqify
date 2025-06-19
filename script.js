// script.js

// Smooth scroll to sections
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll animation for service cards (simple fade-in)
const serviceCards = document.querySelectorAll(".service");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

serviceCards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(40px)";
  observer.observe(card);
});
