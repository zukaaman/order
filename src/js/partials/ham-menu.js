var hamButton = document.querySelector(".hamburger-button"),
    menu = document.querySelector(".middle");

hamButton.addEventListener("click", function() {
  menu.classList.toggle("active");
});
