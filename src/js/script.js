const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', e => {
    e.preventDefault();
    const arrow = menuBtn.querySelector('.header__logo-mobile-arrow');
    arrow.classList.toggle('header__logo-mobile-arrow-active');
    menu.classList.toggle('menu-active');
    document.body.classList.toggle('overflow-h');
});

const sidebarItems = document.querySelectorAll('.sidebar__item');

sidebarItems.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        const anchor = item.children[0].getAttribute('data-anchor');
        document.querySelector(`#${anchor}`).scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});

