document.addEventListener('DOMContentLoaded', () => {
    const menu_btn = document.querySelector('.btn__menu');
    const menu = document.querySelector('.menu');

    menu_btn.addEventListener('click', function (e){
        menu.classList.toggle('open');
    })
});