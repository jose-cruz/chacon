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

function nextPicSlider(){
    var changeThis;
    var el = document.getElementById("home-slider");
    var elId = el.classList[1]
    var nextImageNumber = parseInt(elId.split('-')[1]) + 1;
    if(nextImageNumber > 3){
        nextImageNumber = 1;
    }
    console.log('testing ' , el.classList.contains(elId)) ;
    el.classList.replace(elId, 'show-'+nextImageNumber);

}