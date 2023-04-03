const mobileNavButton = document.querySelector(".header--mobile-menu");
const mobileNav = document.querySelector(".header--nav-mobile");

mobileNavButton.addEventListener("click", function (e) {
  // e.target.classlist.toggle("hidden");
  mobileNav.classList.toggle("hidden");
});
