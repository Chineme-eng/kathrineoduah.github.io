
/* Typing effect */
const text = [
  "I design experiences.",
  "I build creative projects.",
  "I turn ideas into visuals."
];
let index = 0;
let charIndex = 0;
const typingEl = document.querySelector(".typing");

function type() {
  if (charIndex < text[index].length) {
    typingEl.textContent += text[index][charIndex];
    charIndex++;
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingEl.textContent = text[index].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 40);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 300);
  }
}
type();

/* Count-up stats */
const counters = document.querySelectorAll("[data-count]");

counters.forEach(counter => {
  const update = () => {
    const target = +counter.dataset.count;
    const current = +counter.innerText;
    const increment = Math.ceil(target / 100);

    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(update, 30);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

/* Emoji click feedback */
document.querySelectorAll(".emoji-row span").forEach(emoji => {
  emoji.addEventListener("click", () => {
    emoji.textContent = "💥";
    setTimeout(() => location.reload(), 500);
  });
});

/* Magnetic buttons */
document.querySelectorAll(".magnetic").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    btn.style.transform = `
      translate(
        ${(e.clientX - rect.left - rect.width / 2) / 8}px,
        ${(e.clientY - rect.top - rect.height / 2) / 8}px
      )
    `;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

