// Surprise button action
const btn = document.getElementById("surpriseBtn");

btn.addEventListener("click", () => {
  document.body.style.background =
    `linear-gradient(120deg,
      hsl(${Math.random() * 360}, 80%, 20%),
      hsl(${Math.random() * 360}, 80%, 30%))`;
  alert("✨ You just changed the vibe ✨");
});

// Scroll reveal animation
const revealElements = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  revealElements.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

// Initial hidden state
revealElements.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(60px)";
  section.style.transition = "all 0.8s ease";
});
