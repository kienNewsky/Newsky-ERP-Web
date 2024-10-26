function w3_open() {
  const x = document.getElementById("mySidebar");
  x.style.width = "300px";
  x.style.paddingTop = "10%";
  x.style.display = "block";
}

// Close side navigation
// eslint-disable-next-line camelcase
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// eslint-disable-next-line no-unused-vars
function openNav() {
  const x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") === -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}