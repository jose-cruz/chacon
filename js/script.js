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