// JavaScript Document

/* Menu. */

var menuButton = document.querySelector("button");
var menuSee = document.querySelector("header nav ul");

function menuVerschijnt() {
    menuSee.classList.toggle("terug")
}

menuButton.addEventListener("click", menuVerschijnt);
