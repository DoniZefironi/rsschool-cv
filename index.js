
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
console.log("блок <header> +2 \n секция Welcome +2 \n секция About +4 \n секция Favorites +2 \n секция CoffeShop +4 \n секция Contacts +4 \n секция LibraryCard +4 \n блок <footer> + 2 \n Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12 \n На ширине экрана 768рх реализовано адаптивное меню +12")
console.log("Вёрстка семантическая +16\nВёрстка соответствует макету +54\nОбщие требования к верстке +20")

