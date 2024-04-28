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

// FILTERED NAV
// const tgtLink = document.querySelector('.active:text-blue-500');

// navLinks.forEach(navLink => {
//   navLink.addEventListener('click', () => {
//     tgtLink?.classList.remove('active:text-blue-500');
//     navLink.classList.add('active:text-blue-500');
//   });
// });


// FILTERED NAV
const filterNavs = document.querySelectorAll('li');

filterNavs.forEach(filterNav => {
  filterNav.addEventListener('click', () => {
    filterNav.classList.add('opacity-100');
  });
});


// filterNav.addEventListener('click', e => {
//   filterNav?.classList.remove('opacity-100');
//   e.target.classList.add('opacity-100');
// });