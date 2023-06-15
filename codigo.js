let jugadorUnot1 = 0;
let jugadorDost1 = 0;
let jugadorUnot2 = 0;
let jugadorDost2 = 0;
let jugadorUnot3 = 0;
let jugadorDost3 = 0;
let contadorJugador1 = 0;
let contadorJugador2 = 0;

//Arreglos//
let posicionesJugadorUno = [];
let posicionesJugadorDos = [];

//Funciones://
function turnoJugador1(lista_turno){
    tablero[lista_turno].addEventListener("click",function(){
        tablero[lista_turno].style.backgroundColor= "#008000"
    })
}

function turnoJugador2(lista_turno){
    tablero[lista_turno].addEventListener("click",function(){
        tablero[lista_turno].style.backgroundColor= "#FF0000"
    
    })
}

function sumarPuntosJugadorUno(){
    boton[0].addEventListener("click",function(){
        contadorJugador1=contadorJugador1 + 1
        console.log("Puntos del jugador 1: ", contadorJugador1)
        sessionStorage.setItem("Puntos_del_jugador_1: ", contadorJugador1)
    })
}

function sumarPuntosJugadorDos(){
    boton[1].addEventListener("click",function(){
        contadorJugador2=contadorJugador2 + 1
        console.log("Puntos del jugador 2: ", contadorJugador2)
        sessionStorage.setItem("Puntos_del_jugador_2: ", contadorJugador2)
    })
}

//Codigo://

alert("Bienvenido al TA-TE-TI")
alert("Reglas del juego:")
alert("Imagine un tablero de 3x3 donde la primera posicion de arriba a la izquierda es la numero 0 y la ultima posicion de abajo a la derecha es la posicion 8.")
alert("Los jugadores iran ingresando por turnos una posicion del 0 al 8 que sera guardada. El primero en colocar 3 posiciones seguidas tanto en fila, columna o diagonal gana la partida.")
alert("Al final de la partida se le mostrará un tablero en pantalla en el cual haciendo click en las posiciones ya elegidas anteriormente podra ver de color VERDE las posiciones elegidas por el jugador uno y de color ROJO las posiciones elegidas por el jugador 2")
let tablero = document.getElementsByClassName("caja__hijo");

//Primer turno del jugador 1//

do{
    jugadorUnot1 = prompt("Jugador 1: ingrese su primera posicion:");
    if(jugadorUnot1>-1 && jugadorUnot1<9){
        posicionesJugadorUno.push(jugadorUnot1);
        turnoJugador1(jugadorUnot1)
    }

    else{
        alert("El valor ingresado no es correcto, por favor elija una posicion del 0 al 8")
    }
}

while(jugadorUnot1<0 || jugadorUnot1>8)


//Primer turno del jugador2//

do{
    jugadorDost1 = prompt("Jugador 2: ingrese su primera posicion");
    if(jugadorDost1 != jugadorUnot1 && jugadorDost1>-1 && jugadorDost1<9){
        posicionesJugadorDos.push(jugadorDost1);
        turnoJugador2(jugadorDost1)
    }

    else if(jugadorDost1<0 || jugadorDost1>8){
        alert("El valor ingresado no es correcto, por favor elija una posicion del 0 al 8")
    }

    else{
        alert("El numero ingresado ya esta ocupado por el jugador 1. Elija otra posicion")
    }
}

while(jugadorDost1==jugadorUnot1 || jugadorDost1<0 || jugadorDost1>8);

//Segundo turno del jugador 1//
do{
    jugadorUnot2 = prompt("Jugador 1: ingrese su segunda posicion:");
    if(jugadorDost1 != jugadorUnot2 && jugadorUnot1 != jugadorUnot2 && jugadorUnot2>-1 && jugadorUnot2<9){
        posicionesJugadorUno.push(jugadorUnot2);
        turnoJugador1(jugadorUnot2)
    }

    else if(jugadorUnot2==jugadorDost1){
        alert("El numero ingresado ya esta ocupado por el jugador 2. Elija otra posicion")
        
    }

    else if(jugadorUnot2<0 || jugadorUnot2>8){
        alert("El valor ingresado no es correcto, por favor elija una posicion del 0 al 8")
    }

    else if(jugadorUnot2==jugadorUnot1){
        alert("Ya estas ocupando esta posicion. Elija otra")
        
    }

}
while(jugadorDost1==jugadorUnot2 || jugadorUnot2 == jugadorUnot1 || jugadorUnot2<1 || jugadorUnot2>9);

//Segundo turno del jugador 2//

do{
    jugadorDost2 = prompt("Jugador 2: ingrese su segunda posicion:");
    if(jugadorDost2 != jugadorUnot2 && jugadorDost1 != jugadorDost2 && jugadorDost2 != jugadorUnot1 && jugadorDost2>-1 && jugadorDost2<9){
        posicionesJugadorDos.push(jugadorDost2);
        turnoJugador2(jugadorDost2)
    }

    else if(jugadorUnot2==jugadorDost2){
        alert("El numero ingresado ya esta ocupado por el jugador 1. Elija otra posicion")
        
    }

    else if(jugadorDost2<0 || jugadorDost2>8){
        alert("El valor ingresado no es correcto, por favor elija una posicion del 0 al 8")
    }

    else if(jugadorDost1==jugadorDost2){
        alert("Ya estas ocupando esta posicion. Elija otra")
        
    }

    else if(jugadorDost2==jugadorUnot1){
        alert("El numero ingresado ya esta ocupado por el jugador 1. Elija otra posicion")
        
    }
}
while(jugadorUnot2==jugadorDost2 || jugadorDost1==jugadorDost2 || jugadorDost2==jugadorUnot1 || jugadorDost2<0 || jugadorDost2>8);

//Tercer turno del jugador 1//

do{
    jugadorUnot3 = prompt("Jugador 1: ingrese su tercera posicion:");
    if(jugadorUnot3 != jugadorUnot1 && jugadorUnot3 != jugadorUnot2 && jugadorUnot3 != jugadorDost1 && jugadorUnot3 != jugadorDost2 && jugadorUnot3>-1 && jugadorUnot3<9){
        posicionesJugadorUno.push(jugadorUnot3);
        turnoJugador1(jugadorUnot3)
    }

    else if(jugadorUnot3==jugadorUnot1){
        alert("Ya estas ocupando esta posicion. Elija otra")
        
    }

    else if(jugadorUnot3==jugadorUnot2){
        alert("Ya estas ocupando esta posicion. Elija otra")
        
    }

    else if(jugadorUnot3<0 || jugadorUnot3>8){
        alert("El valor ingresado no es correcto, por favor elija una posicion del 0 al 8")
    }

    else if(jugadorUnot3==jugadorDost1){
        alert("El numero ingresado ya esta ocupado por el jugador 2. Elija otra posicion")
        
    }

    else if(jugadorUnot3==jugadorDost2){
        alert("El numero ingresado ya esta ocupado por el jugador 2. Elija otra posicion")
        
    }
}
while(jugadorUnot3==jugadorUnot1 || jugadorUnot3==jugadorUnot2 || jugadorUnot3==jugadorDost1 || jugadorUnot3==jugadorDost2 || jugadorUnot3<0 || jugadorUnot3>8);


//Tercer turno del jugador 2//

do{
    jugadorDost3 = prompt("Jugador 2: ingrese su tercera posicion:");
    if(jugadorDost3 != jugadorUnot1 && jugadorDost3 != jugadorUnot2 && jugadorDost3 != jugadorUnot3 && jugadorDost3 != jugadorDost2 && jugadorDost3 != jugadorDost1 && jugadorDost3>-1 && jugadorDost3<9){
        posicionesJugadorDos.push(jugadorDost3);
        turnoJugador2(jugadorDost3)
    }

    else if(jugadorDost3==jugadorUnot1){
        alert("El numero ingresado ya esta ocupado por el jugador 1. Elija otra posicion")
        
    }

    else if(jugadorDost3==jugadorUnot2){
        alert("El numero ingresado ya esta ocupado por el jugador 1. Elija otra posicion")
        
    }

    else if(jugadorDost3<0 || jugadorDost3>8){
        alert("El valor ingresado no es correcto, por favor elija una posicion del 0 al 8")
    }

    else if(jugadorDost3==jugadorUnot3){
        alert("El numero ingresado ya esta ocupado por el jugador 1. Elija otra posicion")
        
    }

    else if(jugadorDost3==jugadorDost1){
        alert("Ya estas ocupando esta posicion. Elija otra")
        
    }

    else if(jugadorDost3==jugadorDost2){
        alert("Ya estas ocupando esta posicion. Elija otra")
        
    }
}
while(jugadorDost3==jugadorUnot1 || jugadorDost3==jugadorUnot2 || jugadorDost3==jugadorUnot3 || jugadorDost3==jugadorDost1 || jugadorDost3==jugadorDost2 || jugadorDost3<0 || jugadorDost3>8);

//SUMATORIA DE PUNTOS MANUAL//

let boton = document.getElementsByClassName("boton")

sumarPuntosJugadorUno()
sumarPuntosJugadorDos()












