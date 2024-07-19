
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 4500)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}

//-------------

var manualControls = document.querySelectorAll('.manual-control');
var count = 1;

document.getElementById('slide1').checked = true;

setInterval(() => {
    nextImage();
}, 4300);

function nextImage() {
    count++;

    if (count > 6) { // Atualizado para 6 slides
        count = 1;
    }

    document.getElementById('slide' + count).checked = true;
}

