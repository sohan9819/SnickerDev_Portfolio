const navbar_burger = document.querySelector('.burger');
const navbar = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-links > li');

const toggleActive = (e) => {
  if (window.screen.width <= 800) {
    navbar.classList.toggle('active');
    navbar_burger.classList.toggle('active');
  }
};
navLinks.forEach((links) => {
  links.addEventListener('click', toggleActive);
});

navbar_burger.addEventListener('click', toggleActive);

// ######################################

const loader = document.querySelector('#preloader');
const sections = document.querySelectorAll('section');

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

// #######################################
document.querySelectorAll('a').forEach(function (current) {
  if (!current.hash) return;
  if (current.origin + current.pathname != self.location.href) return;
  (function (anchorPoint) {
    if (anchorPoint) {
      current.addEventListener(
        'click',
        function (e) {
          anchorPoint.scrollIntoView({ behavior: 'smooth' });
          e.preventDefault();
        },
        false
      );
    }
  })(document.querySelector(current.hash));
});
