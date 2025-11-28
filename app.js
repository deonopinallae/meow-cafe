const menuBtn = document.querySelector(".header__btn-menu");
const menu = document.querySelector(".header__btn-menu--event");
const x = document.querySelector(".header__btn-menu--x");

menuBtn.addEventListener("click", function () {
  menu.classList.add("open");
});

x.addEventListener("click", function () {
  menu.classList.remove("open");
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      menu.classList.remove("open");
    }
  });
});
