"use strict";

/* ---------- Mobile navigation ---------- */
(function initNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  function close() {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();

/* ---------- Highlight the current section in the nav ---------- */
(function initActiveLink() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

  function update() {
    let current = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 120) current = section.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
})();

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();