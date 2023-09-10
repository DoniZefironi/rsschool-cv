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

const slider = document.querySelector('.slider');
const buttons = document.querySelectorAll('.button');
let slideIndex = 0;

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    slideIndex = index;
    updateSliderPosition();
  });
});

function updateSliderPosition() {
  slider.style.transform = `translateX(-${slideIndex * 33.33}%)`; // Для большого экрана
  // slider.style.transform = `translateX(-${slideIndex * 20}%)`;   // Для планшета
  
  buttons.forEach((button, index) => {
    if (index === slideIndex) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

// Получаем элементы слайдера и кнопки
const slider1 = document.querySelector('.slider1');
const slides = Array.from(slider1.querySelectorAll('li'));
const buttons1 = document.querySelectorAll('.button1');

// Устанавливаем обработчики событий для кнопок
buttons1.forEach((button1, index) => {
  button1.addEventListener('click', () => {
    // Удаляем класс 'active' у всех слайдов
    slides.forEach((slide) => slide.classList.remove('active'));

    // Удаляем класс 'active' у всех кнопок
    buttons1.forEach((btn) => btn.classList.remove('active'));

    // Добавляем класс 'active' к текущему слайду
    slides[index].classList.add('active');

    // Добавляем класс 'active' к текущей нажатой кнопке
    button1.classList.add('active');
  });
});


const iconButton = document.querySelector('.icon-button');
const profilMenu = document.querySelector('.profil');

iconButton.addEventListener('click', function() {
  profilMenu.classList.toggle('show'); // Переключаем класс "show" для меню
});


function showNextBook() {
  const currentSet = document.querySelector('.items11 .active');
  const nextSet = document.querySelector('.items12 .active');

  currentSet.style.opacity = 0;
  nextSet.style.opacity = 1;

  currentSet.classList.remove('active');
  nextSet.classList.add('active');

  const selectedSeason = document.querySelector('input[name="group"]:checked').id;

  if (selectedSeason === 'btn1') {
    // Если выбрана зима
    document.querySelector('#set1').style.display = 'block';
    document.querySelector('#set2').style.display = 'none';
    document.querySelector('#set3').style.display = 'none';
    document.querySelector('#set4').style.display = 'none';
  } else if (selectedSeason === 'btn2') {
    // Если выбрана весна
    document.querySelector('#set2').style.display = 'block';
    document.querySelector('#set1').style.display = 'none';
    document.querySelector('#set3').style.display = 'none';
    document.querySelector('#set4').style.display = 'none';
  }
  else if (selectedSeason === 'btn3') {
    // Если выбрана лето
    document.querySelector('#set3').style.display = 'block';
    document.querySelector('#set1').style.display = 'none';
    document.querySelector('#set3').style.display = 'none';
    document.querySelector('#set4').style.display = 'none';
  }
  else if (selectedSeason === 'btn4') {
    // Если выбрана осень
    document.querySelector('#set2').style.display = 'block';
    document.querySelector('#set1').style.display = 'none';
    document.querySelector('#set3').style.display = 'none';
    document.querySelector('#set4').style.display = 'none';
  }
}

const registerButton = document.querySelector('.iqa');
const registerMenu = document.querySelector('.registy');

registerButton.addEventListener('click', function() {
  registerMenu.classList.toggle('show'); // Переключаем класс "show" для меню
});

const loginButton = document.querySelector('.iqo');
const loginMenu = document.querySelector('.logins');

loginButton.addEventListener('click', function() {
  loginMenu.classList.toggle('show'); // Переключаем класс "show" для меню
});

const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', function() {
  registerMenu.classList.remove('show'); // Закрываем меню
});

const closButton = document.querySelector('.clos-button');

closButton.addEventListener('click', function() {
  loginMenu.classList.remove('show'); // Закрываем меню
});

const registeButton = document.querySelector('.sign');

registeButton.addEventListener('click', function() {
  registerMenu.classList.toggle('show'); // Переключаем класс "show" для меню
});

const logiButton = document.querySelector('.log');

logiButton.addEventListener('click', function() {
  loginMenu.classList.toggle('show'); // Переключаем класс "show" для меню
});
console.log("блок <header> +2 \n секция Welcome +2 \n секция About +4 \n секция Favorites +2 \n секция CoffeShop +4 \n секция Contacts +4 \n секция LibraryCard +4 \n блок <footer> + 2 \n Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12 \n На ширине экрана 768рх реализовано адаптивное меню +12")
console.log("Вёрстка семантическая +16\nВёрстка соответствует макету +54\nОбщие требования к верстке +20")
console.log("за день наверстал, не за что")

