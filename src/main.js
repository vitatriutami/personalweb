// NPM PACKAGE - Typed.js 
const Typed = require("typed.js");

const element = new Typed(".typing-text", {
  strings: [
    "Vita",
    "a Longlife Learner",
    "a Devscale student",
    "a Software Engineer"],
  typeSpeed: 100,
  loop: true,
  showcursor: true,
  cursorChar: "|",
  startDelay: 1000,
  fadeOut: true
});

// FILTERED NAV
const navLinks = document.querySelector('li');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    document.querySelector('.active:text-blue-500')?.classList.remove('.active:text-blue-500');
    navLink.classList.add('.active:text-blue-500');
  });
});