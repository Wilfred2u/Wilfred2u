// uitschuiven menu
const slideOut = function () {
    const menuListOut = document.getElementById('menu-list');
    menuListOut.classList.replace('menu-list-in-no-choice', 'menu-list-in');
    menuListOut.classList.replace('menu-list-in', 'menu-list-out');
};

// ervoor zorgen dat de 'hamburger' een klikfunctie krijgt en een koppeling krijgt met bovenstaande functie
const selectMenuSlideOut = function () {
    const selectMenu = document.getElementById('fa-bars');
    selectMenu.addEventListener('mouseover', function () {
        slideOut();
    });
};

// inschuiven menu
const slideIn = function () {
    const menuListIn = document.getElementById('menu-list');
    menuListIn.classList.replace('menu-list-out', 'menu-list-in');
};

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const bodybg = document.getElementById('body-bgcolor');
const colorText = document.getElementById('colortext');

btn1.addEventListener('click', changeBgColorDefault);
btn2.addEventListener('click', changeBgColorRed);
btn3.addEventListener('click', changeBgColorOrange);
btn4.addEventListener('click', changeBgColorPurple);
btn5.addEventListener('click', changeBgColorGreen);

function changeBgColorDefault() {
    bodybg.classList.remove('red-bgcolor', 'orange-bgcolor', 'purple-bgcolor', 'green-bgcolor');
    bodybg.classList.add('default-bgcolor');
    colorText.innerHTML = 'lightgray';
    slideIn();
}

function changeBgColorRed() {
    bodybg.classList.remove('default-bgcolor', 'orange-bgcolor', 'purple-bgcolor', 'green-bgcolor');
    bodybg.classList.add('red-bgcolor');
    colorText.innerHTML = 'red';
    slideIn();
}

function changeBgColorOrange() {
    bodybg.classList.remove('default-bgcolor', 'red-bgcolor', 'purple-bgcolor', 'green-bgcolor');
    bodybg.classList.add('orange-bgcolor');
    colorText.innerHTML = 'orange';
    slideIn();
}

function changeBgColorPurple() {
    bodybg.classList.remove('default-bgcolor', 'red-bgcolor', 'orange-bgcolor', 'green-bgcolor');
    bodybg.classList.add('purple-bgcolor');
    colorText.innerHTML = 'purple';
    slideIn();
}

function changeBgColorGreen() {
    bodybg.classList.remove('default-bgcolor', 'red-bgcolor', 'orange-bgcolor', 'purple-bgcolor');
    bodybg.classList.add('green-bgcolor');
    colorText.innerHTML = 'green';
    slideIn();
}

selectMenuSlideOut();
changeBgColorDefault();
changeBgColorRed();
changeBgColorOrange();
changeBgColorPurple();
changeBgColorGreen();