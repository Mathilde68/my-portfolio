// checks if the site is loaded
window.addEventListener("load", start);

function start() {
  console.log("site is showing");
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
  
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