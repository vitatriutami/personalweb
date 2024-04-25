const Typed = require("typed.js");

const element = new Typed(".typing-text", {
  strings: [
    "Hei",
    "God morgen!",
    "Velkommen!",
    "Jeg bor i Indonesia",
    "Hvor bor du?"],
  typeSpeed: 100,
  loop: true,
  showcursor: true,
  cursorChar: "|",
  startDelay: 1000,
  fadeOut: true
});