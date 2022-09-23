// checks if the site is loaded
window.addEventListener("load", start);

function start() {
  console.log("site is showing");
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);


  document.getElementById("foofestbutton").addEventListener("click", () => {
    location.href = "foofestival.html";
  });

  document.getElementById("hogwartsbutton").addEventListener("click", () => {
    location.href = "hogwarts.html";
  });


  document.getElementById("winebutton").addEventListener("click", () => {
    location.href = "wineshop.html";
  });

  document.getElementById("gamebutton").addEventListener("click", () => {
    location.href = "game.html";
  });

  

}




function toggleMenu() {
  console.log("toggleMenu");
  // toggling the show/hidden of the menu 
  document.querySelector("#menu").classList.toggle("hidden");

  //hides burger menu
  let isHidden = document.querySelector("#menu").classList.contains("hidden");

  if (isHidden == true) {
    document.querySelector("#menuknap").textContent = "☰";
  } else {
    document.querySelector("#menuknap").textContent = "✕";
  }
}