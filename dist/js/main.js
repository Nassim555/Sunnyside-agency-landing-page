const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-list");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
  toggle.classList.toggle("active");
});
