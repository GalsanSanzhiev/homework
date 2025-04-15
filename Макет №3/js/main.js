// Бургер ==============================================================================

(function () {
    if (document.documentElement.clientWidth > 900) return;

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

    document.querySelectorAll(".nav__link").forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove("active");
            nav.classList.remove("open");
            body.classList.remove("body--opened-menu");
        });
    });

    
})();

// Модалка ========================================================================
const open = document.querySelector(".about__img-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal__cancel");

open.addEventListener('click', function () {
    modal.classList.add("active");
    document.body.classList.add("body--opened-modal");
})
close.addEventListener('click', function () {
    modal.classList.remove("active");
    document.body.classList.remove("body--opened-modal");
});
window.onclick = function(event) {
    if(event.target == modal) {
        modal.classList.remove("active");
        document.body.classList.remove("body--opened-modal")
    }
}


const tab = document.querySelector(".tab-controls")

tab.addEventListener('click', toggleTab)

function toggleTab(e) {
    const tabControl = e.target.closest(".tab-controls__link")
    
    if(!tabControl) return
    e.preventDefault()
    if(tabControl.classList.contains("tab-controls__link--active")) return

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeContent =  document.querySelector('.tab-content--show')

    activeContent.classList.remove('tab-content--show')
    activeControl.classList.remove('tab-controls__link--active')
    
    tabContent.classList.add('tab-content--show')
    tabControl.classList.add('tab-controls__link--active')
}

// Аккордеон ========================================================

const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {
    el.addEventListener('click', (e) => {
        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return;

        const accordionItem = accordionControl.parentElement; 
        const accordionContent = accordionControl.nextElementSibling; 
        const accordionOpenedContent = el.querySelector('.accordion-list__item--opened .accordion__list-content');

        
        if (accordionOpenedContent && accordionItem !== accordionOpenedContent.parentElement) {
            const accordionOpenedItem = el.querySelector('.accordion-list__item--opened');
            accordionOpenedItem.classList.remove('accordion-list__item--opened');
            accordionOpenedContent.style.maxHeight = null; 
        }

        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; 
        } else {
            accordionContent.style.maxHeight = null; 
        }
    });
});
