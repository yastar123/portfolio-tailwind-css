// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("#home");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
}

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle('hidden')
});

// button
const button = document.querySelector('#button');
button.addEventListener('click', function () {
  const buttonImg = document.querySelector('#button-img');
  const buttoP = document.querySelector('#button-p');
  buttonImg.classList.toggle('hidden');
  buttoP.classList.toggle('hidden');
})
