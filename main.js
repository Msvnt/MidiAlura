function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
   
    if (elemento && elemento.localName === 'audio' ){
            elemento.play()
        }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
        }
    }


const listaDeTeclas = document.querySelectorAll('.tecla');

for (var contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}` //template string//

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onKeyDown = function(evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onKeyUp = function (){
        tecla.classList.remove('ativa');
    }
    //console.log(idAudio);    console.log(contador);    console.log(instrumento);
}
