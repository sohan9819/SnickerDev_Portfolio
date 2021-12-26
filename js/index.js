// const navSlide = () => {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".nav-links");
//   const navLinks = document.querySelectorAll(".nav-links li");

//   burger.addEventListener("click", () => {
//     //Toggle Lav
//     nav.classList.toggle("nav-active");
//     //Animate Links
//     navLinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = "";
//       } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${
//           index / 7 + 0.3
//         }s`;
//       }
//     });
//     //Burger Animation
//     burger.classList.toggle("toggle");
//   });
// };

// navSlide();

const loader = document.querySelector('#preloader');
const sections = document.querySelectorAll('section');
// console.log(loader);

sections.forEach((section) => {
  section.style.display = 'none';
});
window.addEventListener('load', () => {
  setTimeout(() => {
    loader.style.display = 'none';
    sections.forEach((section) => {
      section.style.display = '';
    });
  }, 3000);
});
