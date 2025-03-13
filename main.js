let bars = document.querySelector('.bars');
let menu = document.querySelector('.menu');

bars.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
})

function lightBlueTheme() {
    document.body.setAttribute('data-theme', 'lightBlue');
}

function lightGreenTheme() {
    document.body.setAttribute('data-theme', 'lightGreen');
}

function lightBrownTheme() {
    document.body.setAttribute('data-theme', 'lightBrown');
}

function lightPurpleTheme() {
    document.body.setAttribute('data-theme', 'lightPurple');
}

function DarkTheme() {
    document.body.setAttribute('data-theme', 'DarkTheme');
}

//Theme Button

const ColorChangerWrapper = document.querySelector("#colorChangerWrapper");

const ThemeChanger = document.querySelector("#ThemeChanger");
ThemeChanger.addEventListener("click", function () {
    ColorChangerWrapper.classList.add('show-color-changer');
});

const ColorWrapperClose = document.querySelector("#colorChangerWrapper i");
ColorWrapperClose.addEventListener("click", function () {
    ColorChangerWrapper.classList.remove('show-color-changer');
});

const btnlightBlue = document.querySelector('.colors-container .lightBlue');
      btnlightBlue.addEventListener('click', function () {
    lightBlueTheme();
})

const btnlightGreen = document.querySelector('.colors-container .lightGreen');
      btnlightGreen.addEventListener('click', function () {
    lightGreenTheme();
})

const btnlightBrown = document.querySelector('.colors-container .lightBrown');
      btnlightBrown.addEventListener('click', function () {
    lightBrownTheme();
})

const btnlightPurple = document.querySelector('.colors-container .lightPurple');
      btnlightPurple.addEventListener('click', function () {
    lightPurpleTheme();
})

const btnDark = document.querySelector('#btnDark');
      btnDark.addEventListener('click', function () {
    DarkTheme();
})