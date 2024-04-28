// NPM PACKAGE - Typed.js 
const Typed = require("typed.js");

const element = new Typed(".typing-text", {
  strings: [
    "Vita",
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