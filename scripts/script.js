var menuButton = document.querySelector("nav button");
var menuSee = document.querySelector("nav ul");

function toonMenu() {
    menuSee.classList.toggle("terug");
}

menuButton.addEventListener("click", toonMenu);
