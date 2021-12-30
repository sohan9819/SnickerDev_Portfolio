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

// #######################################

// const links = document.querySelectorAll('a');
// console.log(links);
// links.forEach((link) => {
//   link.addEventListener('click', removeHash);
// });
// // console.log(window.location.origin);
// // console.log(window.location.pathname);
// // console.log(window.location.search);

// console.log(location.href);
// function removeHash(e) {
//   // console.log('hello world');
//   // history.replaceState(
//   //   '',
//   //   document.title,
//   //   window.location.origin + window.location.pathname
//   // );
//   location.href = location.href.replace(location.hash, '');
//   e.preventDefault();
// }

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
