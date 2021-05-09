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
        sidebarItems.forEach(item => {
            item.classList.remove('sidebar__item-active');
        });
        e.preventDefault();
        const anchor = item.children[0].getAttribute('data-anchor');
        document.querySelector(`#${anchor}`).scrollIntoView({ 
            behavior: 'smooth' 
        });
        item.classList.add('sidebar__item-active');
    });
});


const additionalLinks = document.querySelectorAll('.styles__simpleService___2ldni');

additionalLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(`#home`).scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});