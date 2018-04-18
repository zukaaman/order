var hamButton = document.querySelector(".hamburger-button"),
    menu = document.querySelector(".ham-menu");

hamButton.addEventListener("click", function() {
  menu.classList.toggle("active");
});
