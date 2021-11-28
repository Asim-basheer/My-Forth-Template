let megaMenu = document.querySelector(".mega-menu");
let mainNav = document.querySelector(".main-nav li:last-child");
let scrollTop = document.querySelector(".scroll-top");
mainNav.addEventListener("click", () => {
  megaMenu.classList.toggle("active");
});

window.onscroll = function () {
  if (scrollY > 2000) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
};
