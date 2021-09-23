var menuButton = document.querySelector("#mobile button");
var menuSee = document.querySelector("#mobile ul");

function menuverschijnt() {
    menuSee.classList.toggle("terug");
}

menuButton.addEventListener("click", menuverschijnt);