const btn = document.querySelector(".btn-open");
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal__close-btn");

btn.onclick = function() {
    modal.style.display = "block"
}

close.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none"
    }
}