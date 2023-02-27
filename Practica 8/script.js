// variables
let contador = 0;
const parrafo = document.getElementById('demo');
const boton_dis = document.getElementById('bt-1');
const boton_rei = document.getElementById('bt-2');
const boton_aum = document.getElementById('bt-3');

// Eventos de accion por cada boton.
boton_dis.addEventListener('click', contador_dis);
boton_rei.addEventListener('click', contador_rei);
boton_aum.addEventListener('click', contador_aum);
// Declaracion de las Funciones

function contador_dis(){
    --contador
    colorContador(contador)
    return(parrafo.innerText = contador);
}
function contador_rei(){
    colorContador(contador)
    contador = 0;
    return(parrafo.innerText = contador);
}
function contador_aum(){
    colorContador(contador)
    ++contador
    return(parrafo.innerText = contador);
}

function colorContador(value){
    let resultado;
    if(value > 0){
        resultado = parrafo.style.color = 'green';
    }if(value == 0){
        resultado = parrafo.style.color = 'black';
    }if(value < 0){
        resultado = parrafo.style.color = 'red';
    }
    return resultado;
}