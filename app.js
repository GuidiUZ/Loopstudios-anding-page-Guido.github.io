const iconMenu = document.querySelector(".icon-menu"),
    menu = document.querySelector(".nav-list");

/*Alternamos estilos para el menu y el body*/


iconMenu.addEventListener('click' , (e) => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
})



