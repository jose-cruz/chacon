function nextPicSlider(totalImgs){
    var changeThis;
    var el = document.getElementById("slider");
    var children = el.children;
    for (var i = 0; i < children.length; i++){
        if(changeThis){
            changeThis = false;
            children[i].classList.replace('hide', 'show');
            break;
        }
        if(children[i].classList[1] == 'show'){
            changeThis = true;
            children[i].classList.replace('show', 'hide');
            if(i == totalImgs - 1){
                children[0].classList.replace('hide','show');
            }
        }
    }
}
function prevPicSlider(totalImgs){
    var changeThis;
    var el = document.getElementById("slider");
    var children = el.children;
    for (var i = children.length - 1; i >= 0; i--){
        if(changeThis){
            changeThis = false;
            children[i].classList.replace('hide', 'show');
            break;
        }
        if(children[i].classList[1] == 'show'){
            changeThis = true;
            children[i].classList.replace('show', 'hide');
            if(i == 0){
                children[totalImgs - 1].classList.replace('hide','show');
            }
        }
    }
}