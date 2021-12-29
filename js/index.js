const navbar_burger = document.querySelector('.burger');
const navbar = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-links > li');

console.log(navLinks);

const toggleActive = (e) => {
  navbar.classList.toggle('active');
  navbar_burger.classList.toggle('active');
};
navLinks.forEach((links) => {
  links.addEventListener('click', toggleActive);
});

// console.log(navbar, navbar_burger);

navbar_burger.addEventListener('click', toggleActive);

// ######################################

const loader = document.querySelector('#preloader');
const sections = document.querySelectorAll('section');
// console.log(loader);

sections.forEach((section) => {
  section.style.display = 'none';
});

navbar_burger.style.display = 'none';

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.style.display = 'none';
    sections.forEach((section) => {
      section.style.display = '';
      navbar_burger.style.display = '';
    });
  }, 2000);
});
