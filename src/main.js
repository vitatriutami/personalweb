const Typed = require("typed.js");

const element = new Typed(".typing-text", {
  strings: [
    "Vita",
    "a Longlife Learner",
    "a Devscale student",
    "a Software Engineer wannabe!"],
  typeSpeed: 100,
  loop: true,
  showcursor: true,
  cursorChar: "|",
  startDelay: 1000,
  fadeOut: true
});