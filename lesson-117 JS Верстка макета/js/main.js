(function () {
    if (document.documentElement.clientWidth > 900) return;

    const burger = document.querySelector(".burger-icon");
    const nav = document.querySelector(".nav");

    burger.addEventListener('click', function () {
        this.classList.toggle("active");
        nav.classList.toggle("open");
    });

    document.querySelectorAll(".nav__link").forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove("active");
            nav.classList.remove("open");
        });
    });
})();
