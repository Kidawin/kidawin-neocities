function topNavResponsive() {
  var x = document.getElementById("responsive-top-nav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}