const Typed = require("typed.js");
const confetti = require("canvas-confetti");


// NPM PACKAGE - Typed.js 

const element = new Typed(".typing-text", {
  strings: [
    "Vita",
    "a Fullstack Developer",
    "a Longlife Learner",
    "based in Indonesia",
  ],
  typeSpeed: 100,
  loop: true,
  showcursor: true,
  cursorChar: "|",
  startDelay: 1000,
  fadeOut: true
});

// Confetti
const helloBtn = document.getElementById('helloBtn');

helloBtn.addEventListener("click", () => {
  const myCanvas = document.createElement("canvas");
  myCanvas.style.width = "100vw";
  myCanvas.style.height = "100vh";
  myCanvas.style.position = "fixed";
  myCanvas.style.inset = 0;
  myCanvas.style.zIndex = 9999;

  document.body.appendChild(myCanvas);

  const myConfetti = confetti.create(myCanvas, { resize: true });

  myConfetti({
    particleCount: 500,
    spread: 160
  });
});