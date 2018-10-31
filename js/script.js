console.log('test script');

function showMenu(){
    var el = document.getElementById("menu-container");
    el.classList.toggle("show-menu");
}

function goToGaleria(){
    var el = document.getElementById('main-container');
    el.removeAttribute('class');
    el.classList.add('galeria');
}
function goToContacto(){
    var el = document.getElementById('main-container');
    el.removeAttribute('class');
    el.classList.add('contacto');
}
function goToAcerca(){
    var el = document.getElementById('main-container');
    el.removeAttribute('class');
    el.classList.add('acerca');
}
function goToHome() {
    var el = document.getElementById('main-container');
    el.removeAttribute('class');
    el.classList.add('home');
}