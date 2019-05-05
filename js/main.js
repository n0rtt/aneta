let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("body section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("navbar__menu__item__link--current");
    } else {
      link.classList.remove("navbar__menu__item__link--current");
    }
  });
});