burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".nav-list");
rightnav = document.querySelector(".right-nav");

burger.addEventListener("click", () => {
  rightnav.classList.toggle("visibility");
  navlist.classList.toggle("visibility");
  navbar.classList.toggle("nav-height");
});
