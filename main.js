
//Creamos las referencias a los botones
var butPiedra = document.getElementById("but-piedra");
var butPapel = document.getElementById("but-papel");
var butTijera = document.getElementById("but-tijera");

//Creamos las referencias con los span
var lblUser = document.getElementById("lbl-user");
var lblCpu = document.getElementById("lbl-cpu");
var lblFinal = document.getElementById("lbl-resultado");
var lblPuntajeUsuario = document.getElementById("lbl-res-user");
var lblPuntajeCpu = document.getElementById("lbl-res-cpu");

var puntajeUser = 0;
var puntajeCpu = 0;

//Arreglo
var opciones = ["PIEDRA", "PAPEL", "TIJERA"];

//Agregamos los eventos click a los botones
butPiedra.addEventListener("click", function () {
    startGame(butPiedra.value);
});

butPapel.addEventListener("click", function () {
    startGame(butPapel.value);
});

butTijera.addEventListener("click", function () {
    startGame(butTijera.value);
});

function startGame(value) {
    // value -> la selección del usuario
    let userSelection = value;
    let cpuSelection = getCpuResponse();
    let resultado = checkWinner(userSelection,cpuSelection);

    if(resultado == "GANASTE"){
        //Sumar un punto al usuario
        puntajeUser++;
        //puntajeUser += 1;
        //puntajeUser = puntajeUser + 1;
    }
    else if(resultado == "PERDISTE"){
        //Sumar un punto a la máquina
        puntajeCpu++;
    }

    lblUser.innerHTML = opciones[userSelection];
    lblCpu.innerHTML = opciones[cpuSelection];
    lblFinal.innerHTML = resultado;
    lblPuntajeUsuario.innerHTML = puntajeUser;
    lblPuntajeCpu.innerHTML = puntajeCpu;
}


/**
 * Método que va a comparar la selección del usuario y de la máquina
 * @param {*} userSel  -> Seleccion del usuario
 * @param {*} cpuSel  -> Selección de la máquina
 */
function checkWinner(userSel, cpuSel){
    /*
        usuario      máquina
        Piedra (0) > Tijera (2)
        Tijera (2) > Papel (1)
        Papel (1) > Piedra (0)
    */

    let respuesta;

    if((userSel == 0 && cpuSel == 2) || (userSel == 2 && cpuSel == 1) || (userSel == 1 && cpuSel == 0)){
        respuesta = "GANASTE";
    }
    else if(userSel == cpuSel){
        respuesta = "EMPATE";
    }
    else{
        respuesta = "PERDISTE";
    }

    return respuesta;

}

//Este método me retorna la selección de la máquina
function getCpuResponse() {

    let x = Math.floor(Math.random() * 3);
    if (x == 3) {
        return 2;
    }
    return x;
}