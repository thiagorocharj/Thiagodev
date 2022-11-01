
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if(elemento === null) {
        console.log('elemento nao encontrado');
    }
    if(elemento != null) {
        elemento.play();
    }
  
}


const Listadeteclas = document.querySelectorAll('.tecla');

let contator = 0

for (let contator = 0; contator  < Listadeteclas.length; contator++) {
    
    const tecla = Listadeteclas[contator]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento) {
           
        if (evento.code === 'Space'|| evento.code ==='Enter'){
        tecla.classList.add('ativa');
        }

    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}



