const menu = document.querySelector('.sidebar');
const button = document.querySelector('.header__nav-icon');
const button2 = document.querySelector('.sidebar__icon');
const body = document.querySelector('.body');
const modal = document.querySelector('.modal');

button.onclick = function () {
    menu.classList.toggle('active');
    modal.classList.toggle('active');
    body.classList.toggle('lock');
};

button2.onclick = function () {
    menu.classList.toggle('active');
    modal.classList.toggle('active');
    body.classList.toggle('lock');
};
