// Form validation and submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".signup-form");
  const emailInput = form.querySelector("input[name='email']");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate success message
    alert("✅ Thanks for signing up! We'll keep you updated.");
    form.reset();
  });

  function validateEmail(email) {
    // Simple email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
