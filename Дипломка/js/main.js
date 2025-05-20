// Переключатель меню
const toggle = document.querySelector('.solutions');
const menu = document.querySelector('.solutions__menu');

toggle.addEventListener('click', function() { 
    menu.classList.toggle("active");
})

// Слайдер ==============================================================

const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});


// БУРГЕР =============================================================



(function () {
    if (document.documentElement.clientWidth > 880) return;

    const burger = document.querySelector(".burger-icon");
    const nav = document.querySelector(".nav");
    const body = document.querySelector(".body");

    burger.addEventListener('click', function () {
        this.classList.toggle("active");
        nav.classList.toggle("open");


        if (nav.classList.contains("open")) {
            body.classList.add("body--opened-menu");
        } else {
            body.classList.remove("body--opened-menu");
        }
    });

    document.querySelectorAll(".nav__list-link").forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove("active");
            nav.classList.remove("open");
            body.classList.remove("body--opened-menu");
        });
    });


})();

