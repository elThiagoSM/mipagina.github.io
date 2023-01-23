const iconoMenu = document.querySelector('#icono-menu'),
menu = document.querySelector('#menu');

const iconoMenuSalir = document.querySelector('#icono-menu-salir');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menú y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
    
});

iconoMenuSalir.addEventListener('click', (e) => {

    // Alternamos estilos para el menú y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

});