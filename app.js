let numeroSecreto;
let intentos;
let listaDeNumerosSorteados = {};
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego Adivinar Numero');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numeroSecreto);
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    if(numeroUsuario===numeroSecreto){
        asignarTextoElemento('p', `Felicidades, Acertaste, en: ${intentos} ${intentos == 1 ? 'Intento' : 'Intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p', `El numero secreto es menor`);
        }else{
            asignarTextoElemento('p', `El numero secreto es mayor`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto(){
    if(listaDeNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', `Ya has adivinado todos los numeros`)
    }else{
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
        if(!listaDeNumerosSorteados.includes(numeroGenerado)){
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }else{
            return generarNumeroSecreto();
        }
    }
    
    
}

function limpiarCaja(){
    document.querySelector('#numeroUsuario').value = '';
    return;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
}

condicionesIniciales();