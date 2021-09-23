var menuButton = document.querySelector("#mobile button");
var menuSee = document.querySelector("#mobile ul");

function toonMenu() {
    menuSee.classList.toggle("terug");
}

menuButton.addEventListener("click", toonMenu);