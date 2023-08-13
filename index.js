var menuButton = document.getElementById("menu-button");
var menuContent = document.getElementById("menu-content");

menuButton.addEventListener("click", function() {
  if (menuContent.style.display === "none") {
    menuContent.style.display = "flex";
  } else {
    menuContent.style.display = "none";
  }
});

var menuButton1 = document.getElementById("menu-button1");
var menuContent1 = document.getElementById("menu-content");

menuButton1.addEventListener("click", function() {
  if (menuContent1.style.display === "flex") {
    menuContent1.style.display = "none";
  } else {
    menuContent1.style.display = "flex";
  }
});