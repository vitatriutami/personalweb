const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const activeClass = 'bg-indigo-200';

const navs = document.querySelectorAll('[data-tab-target]');
const navContents = document.querySelectorAll('.tab-content');

// ketika nav di-klik, maka yg konten nav tsb muncul dan konten lain hilang
nav1.addEventListener("click", () => {
  content1.style.display = "block";
  content2.style.display = "none";
  content3.style.display = "none";
  nav1.classList.add(activeClass)
  nav2.classList.remove(activeClass)
  nav2.classList.remove(activeClass);
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
  nav1.classList.remove(activeClass)
  nav2.classList.remove(activeClass);
});

// const navs = document.querySelectorAll('[data-tab-target]');
// const activeClass = 'bg-indigo-200';
// const navContents = document.querySelectorAll('.tab-content');

// // Select the first tab as default
// navs[0].classList.add(activeClass);
// document.querySelector('#tab1').classList.remove('hidden');

// navs.forEach(nav => {
//   nav.addEventListener("click", () => {
//     const navTarget = nav.getAttribute()
//   })
// })


// // Add event listener to all nav
// navs.forEach((nav, index) => {
//   nav.addEventListener("click", () => {

//     // setiap nav diklik, content akan aktif
//     navContents.forEach((content) => {
//       content.classList.remove('hidden');
//     });

//     // setiap nav diklik, akan meremove nav lain yg bg biru
//     navs.forEach((nav) => {
//       nav.classList.remove(activeClass);
//     });

//     // tiap konten yang nav-nya dipilih: 
//     navContents[index].classList.add('hidden');
//     navs[index].classList.add(activeClass);
//   });
// });



// // Add event listener to each tab
// navs.forEach(nav => {
//   nav.addEventListener('click', () => {
//     const targetContent = document.querySelector(nav.dataset.navTarget);
//     // console.log(targetContent);

//     // Add hidden class to add the tab-content div
//     document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
//     // Remove the hidden class from clicked tab-content
//     targetContent.classList.remove('hidden');

//     // Remove the active class ie bg-indigo-200 from all the tab button
//     document.querySelectorAll('.bg-indigo-200').forEach(target => target.classList.remove(activeClass));
//     // Add the active class to the clicked button
//     nav.classList.add(activeClass);
//   });
// });



// const tabs = document.querySelectorAll(".tab");
// const indicator = document.querySelector(".indicator");
// const panels = document.querySelectorAll(".tab-panel");

// indicator.style.width = tabs[0].getBoundingClientRect().width + 'px';
// indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px';

// tabs.forEach(tab => {
//   tab.addEventListener("click", () => {
//     const tabTarget = tab.getAttribute("aria-controls");

//     indicator.style.width = tab.getBoundingClientRect().width + 'px';
//     indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px';

//     panels.forEach(panel => {
//       const panelId = panel.getAttribute("id");
//       if (tabTarget === panelId) {
//         panel.classList.remove("invisible", "opacity-0");
//         panel.classList.add("visible", "opacity-100");
//       } else {
//         panel.classList.add("invisible", "opacity-0");
//       }
//     });
//   });
// });

// // Confetti
// const confetti = require("canvas-confetti");

// const helloBtn = document.getElementById('helloBtn');

// helloBtn.addEventListener("click", () => {
//   const myCanvas = document.createElement("canvas");
//   myCanvas.style.width = "100vw";
//   myCanvas.style.height = "100vh";
//   myCanvas.style.position = "fixed";
//   myCanvas.style.inset = 0;
//   myCanvas.style.zIndex = 9999;

//   document.body.appendChild(myCanvas);

//   const myConfetti = confetti.create(myCanvas, { resize: true });

//   myConfetti({
//     particleCount: 500,
//     spread: 160
//   });
// });

// // NPM PACKAGE - Typed.js 
// const Typed = require("typed.js");
// const element = new Typed(".typing-text", {
//   strings: [
//     "a Webdev Student",
//     "a Longlife Learner",
//     "based in Indonesia",
//   ],
//   typeSpeed: 100,
//   loop: true,
//   showcursor: true,
//   cursorChar: "|",
//   startDelay: 1000,
//   fadeOut: true
// });