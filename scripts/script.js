
/* stop animation and transition when resizing the page */

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.   body.classList.remove("resize-animation-stopper");
  }, 400);
});

/* Button click menu */ 

var menuButton = document.querySelector("nav button");
var menuSee = document.querySelector("nav ul");

function toonMenu() {
    menuSee.classList.toggle("terug");
}

menuButton.addEventListener("click", toonMenu);

