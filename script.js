document.addEventListener("DOMContentLoaded", () => {
  // Footer year (works on every page)
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form processing (only runs on contact.html)
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const service = document.getElementById("service")?.value;
    const details = document.getElementById("details")?.value.trim();

    if (!name || !email || !service || !details) {
      status.textContent = "Please fill out all fields before submitting.";
      return;
    }

    status.textContent = `Thanks, ${name}! We received your request for ${service}. We'll contact you at ${email}.`;
    form.reset();
  });
});
