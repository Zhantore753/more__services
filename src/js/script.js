const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', e => {
    e.preventDefault();
    const arrow = menuBtn.querySelector('.header__logo-mobile-arrow');
    arrow.classList.toggle('header__logo-mobile-arrow-active');
    menu.classList.toggle('menu-active');
    document.body.classList.toggle('overflow-h');
});