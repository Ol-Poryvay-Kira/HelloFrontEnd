let burger = document.getElementsByClassName('header-burger')[0];
let header = document.getElementsByClassName('header')[0];
burger.addEventListener("click", function(e) {
    burger.classList.toggle('header-burger__active')
    header.classList.toggle('header-active')
}, false);