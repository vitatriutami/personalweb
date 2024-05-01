// Confetti
const confetti = require("canvas-confetti");

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


// TAB NAVIGATION
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const activeClass = 'bg-indigo-200';

// when nav clicked
nav1.addEventListener("click", () => {
  content1.style.display = "block";
  content2.style.display = "none";
  content3.style.display = "none";
  nav1.classList.add(activeClass);
  nav2.classList.remove(activeClass);
  nav3.classList.remove(activeClass);
});

nav2.addEventListener("click", () => {
  content1.style.display = "none";
  content2.style.display = "block";
  content3.style.display = "none";
  nav2.classList.add(activeClass);
  nav1.classList.remove(activeClass);
  nav3.classList.remove(activeClass);
});

nav3.addEventListener("click", () => {
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "block";
  nav3.classList.add(activeClass);
  nav1.classList.remove(activeClass);
  nav2.classList.remove(activeClass);
});

// when read clicked
const readBtn = document.getElementById("readBtn");

readBtn.addEventListener("click", () => {
  content1.style.display = "none";
  content2.style.display = "block";
  content3.style.display = "none";
  nav2.classList.add(activeClass);
  nav1.classList.remove(activeClass);
  nav3.classList.remove(activeClass);
});



// NPM PACKAGE - Typed.js 
const Typed = require("typed.js");

const element = new Typed(".typing-text", {
  strings: [
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


// NPM PACKAGE - GREET VISITOR
const greet = require("greet-visitor");

const elementGreet = new greet(".greeting", {
  emoji: true,
  morning: "Good morning!"
});