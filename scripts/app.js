function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header-box") {
      x.className += " responsive";
    } else {
      x.className = "header-box";
    }
  }