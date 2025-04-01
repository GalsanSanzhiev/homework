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