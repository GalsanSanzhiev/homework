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



// Тень для слайдов ================================================== 
const slides = document.querySelectorAll('.gallery__slide');

slides.forEach(slide => {
    slide.addEventListener('mousemove', (e) => {
        const rect = slide.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top; 
        
        const xPercent = (x / rect.width) * 100; 
        const yPercent = (y / rect.height) * 100; 
        
        slide.style.boxShadow = `${(xPercent - 50) / 5}px ${(yPercent - 50) / 5}px 35px rgba(0, 0, 0, 0.59)`;
    });

    slide.addEventListener('mouseleave', () => {
        slide.style.boxShadow = '0px 4px 35px rgba(0, 0, 0, 0.14)';
    });
});


