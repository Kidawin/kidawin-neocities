function topNavMobile() {
  var x = document.getElementById("mainTopNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 