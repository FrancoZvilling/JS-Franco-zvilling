//Variables://
let jugadorUnot1 = 0;
let jugadorDost1 = 0;
let jugadorUnot2 = 0;
let jugadorDost2 = 0;
let jugadorUnot3 = 0;
let jugadorDost3 = 0;

//Arreglos://
let posicionesJugadorUno = [];
let posicionesJugadorDos = [];

//Objetos://
class jugador{
    constructor(nombre, apellido, edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }
    

    get_datos(){
        console.log("Los datos del jugador son: Nombre:", this.nombre,"- Apellido:",this.apellido,"- Edad:", this.edad);
    }

    get_mayor_de_edad(){
        if(this.edad>17){
            console.log("El jugador",this.nombre,"es mayor de edad.");
        }

        else{
            console.log("El jugador",this.nombre,"es menor de edad.");
        }
    }
}

//Codigo://
let jugadorUno = new jugador("Franco", "Zvilling", 6);
let jugadorDos = new jugador("Mirta", "Legrand", 1000000);
jugadorUno.get_datos();
jugadorUno.get_mayor_de_edad()
jugadorDos.get_datos()
jugadorDos.get_mayor_de_edad()

alert("Bienvenido al TA-TE-TI")
alert("Reglas del juego:")
alert("Imagine un tablero de 3x3 donde la primera posicion de abajo a la izquierda es la numero 1 y la ultima posicion de arriba a la derecha es la posicion 9.")
alert("Los jugadores iran ingresando por turnos una posicion del 1 al 9 que sera guardada. El primero en colocar 3 posiciones seguidas tanto en fila, columna o diagonal gana la partida.")

//Primer turno del jugador 1//

do{
    jugadorUnot1 = prompt("Jugador 1: ingrese su primera posicion:");
    if(jugadorUnot1>0 && jugadorUnot1<10){
        posicionesJugadorUno.push(jugadorUnot1);
    }

    else{
        alert("El valor ingresado no es correcto, por favor elija una posicion del 1 al 9")
    }
}

while(jugadorUnot1<1 || jugadorUnot1>9)


//Primer turno del jugador2//

do{
    jugadorDost1 = prompt("Jugador 2: ingrese su primera posicion");
    if(jugadorDost1 != jugadorUnot1 && jugadorDost1>0 && jugadorDost1<10){
        posicionesJugadorDos.push(jugadorDost1);
    }

    else if(jugadorDost1<1 || jugadorDost1>9){
        alert("El valor ingresado no es correcto, por favor elija una posicion del 1 al 9")
    }

    else{
        alert("El numero ingresado ya esta ocupado por el jugador 1. Elija otra posicion")
    }
}

while(jugadorDost1==jugadorUnot1 || jugadorDost1<1 || jugadorDost1>9);

//Segundo turno del jugador 1//
do{
    jugadorUnot2 = prompt("Jugador 1: ingrese su segunda posicion:");
    if(jugadorDost1 != jugadorUnot2 && jugadorUnot1 != jugadorUnot2 && jugadorUnot2>0 && jugadorUnot2<10){
        posicionesJugadorUno.push(jugadorUnot2);
    }

    else if(jugadorUnot2==jugadorDost1){
        alert("El numero ingresado ya esta ocupado por el jugador 2. Elija otra posicion")
        
    }

    else if(jugadorUnot2<1 || jugadorUnot2>9){
        alert("El valor ingresado no es correcto, por favor elija una posicion del 1 al 9")
    }

    else if(jugadorUnot2==jugadorUnot1){
        alert("Ya estas ocupando esta posicion. Elija otra")
        
    }

}
while(jugadorDost1==jugadorUnot2 || jugadorUnot2 == jugadorUnot1 || jugadorUnot2<1 || jugadorUnot2>9);

//Segundo turno del jugador 2//

do{
    jugadorDost2 = prompt("Jugador 2: ingrese su segunda posicion:");
    if(jugadorDost2 != jugadorUnot2 && jugadorDost1 != jugadorDost2 && jugadorDost2 != jugadorUnot1 && jugadorDost2>0 && jugadorDost2<10){
        posicionesJugadorDos.push(jugadorDost2);
    }

    else if(jugadorUnot2==jugadorDost2){
        alert("El numero ingresado ya esta ocupado por el jugador 1. Elija otra posicion")
        
    }

    else if(jugadorDost2<1 || jugadorDost2>9){
        alert("El valor ingresado no es correcto, por favor elija una posicion del 1 al 9")
    }

    else if(jugadorDost1==jugadorDost2){
        alert("Ya estas ocupando esta posicion. Elija otra")
        
    }

    else if(jugadorDost2==jugadorUnot1){
        alert("El numero ingresado ya esta ocupado por el jugador 1. Elija otra posicion")
        
    }
}
while(jugadorUnot2==jugadorDost2 || jugadorDost1==jugadorDost2 || jugadorDost2==jugadorUnot1 || jugadorDost2<1 || jugadorDost2>9);

//Tercer turno del jugador 1//

do{
    jugadorUnot3 = prompt("Jugador 1: ingrese su tercera posicion:");
    if(jugadorUnot3 != jugadorUnot1 && jugadorUnot3 != jugadorUnot2 && jugadorUnot3 != jugadorDost1 && jugadorUnot3 != jugadorDost2 && jugadorUnot3>0 && jugadorUnot3<10){
        posicionesJugadorUno.push(jugadorUnot3);
    }

    else if(jugadorUnot3==jugadorUnot1){
        alert("Ya estas ocupando esta posicion. Elija otra")
        
    }

    else if(jugadorUnot3==jugadorUnot2){
        alert("Ya estas ocupando esta posicion. Elija otra")
        
    }

    else if(jugadorUnot3<1 || jugadorUnot3>9){
        alert("El valor ingresado no es correcto, por favor elija una posicion del 1 al 9")
    }

    else if(jugadorUnot3==jugadorDost1){
        alert("El numero ingresado ya esta ocupado por el jugador 2. Elija otra posicion")
        
    }

    else if(jugadorUnot3==jugadorDost2){
        alert("El numero ingresado ya esta ocupado por el jugador 2. Elija otra posicion")
        
    }
}
while(jugadorUnot3==jugadorUnot1 || jugadorUnot3==jugadorUnot2 || jugadorUnot3==jugadorDost1 || jugadorUnot3==jugadorDost2 || jugadorUnot3<1 || jugadorUnot3>9);

//Jugador uno posible ganador//

//if(posicionesJugadorUno == "1","2","3"){
    
    //|| posicionesJugadorUno === "4","5","6"||posicionesJugadorUno === "7","8","9"|| posicionesJugadorUno === "9","8","7" || posicionesJugadorUno==="6","5","4" || 
    //posicionesJugadorUno==="3","2","1" || posicionesJugadorUno==="1","4","7" || posicionesJugadorUno==="7","4","1" || posicionesJugadorUno==="3","6","9"||posicionesJugadorUno==="9","6","3"||posicionesJugadorUno==="7","5","3"
    //|| posicionesJugadorUno==="3","5","7"||posicionesJugadorUno==="1","5","9"||posicionesJugadorUno==="9","5","2" || posicionesJugadorUno==="2","5","8"||posicionesJugadorUno==="8","5","2"){
        
    //alert("EL JUGADOR 1 HA GANADO: FELICITACIONES!");
    
//}
//else{

//Tercer turno del jugador 2//

do{
    jugadorDost3 = prompt("Jugador 2: ingrese su tercera posicion:");
    if(jugadorDost3 != jugadorUnot1 && jugadorDost3 != jugadorUnot2 && jugadorDost3 != jugadorUnot3 && jugadorDost3 != jugadorDost2 && jugadorDost3 != jugadorDost1 && jugadorDost3>0 && jugadorDost3<10){
        posicionesJugadorDos.push(jugadorDost3);
    }

    else if(jugadorDost3==jugadorUnot1){
        alert("El numero ingresado ya esta ocupado por el jugador 1. Elija otra posicion")
        
    }

    else if(jugadorDost3==jugadorUnot2){
        alert("El numero ingresado ya esta ocupado por el jugador 1. Elija otra posicion")
        
    }

    else if(jugadorDost3<1 || jugadorDost3>9){
        alert("El valor ingresado no es correcto, por favor elija una posicion del 1 al 9")
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
while(jugadorDost3==jugadorUnot1 || jugadorDost3==jugadorUnot2 || jugadorDost3==jugadorUnot3 || jugadorDost3==jugadorDost1 || jugadorDost3==jugadorDost2 || jugadorDost3<1 || jugadorDost3>9);

//Jugador dos posible ganador//

//if(posicionesJugadorDos == "1","2","3"|| posicionesJugadorDos == "4","5","6"||posicionesJugadorDos == "7","8","9"|| posicionesJugadorDos == "9","8","7" || posicionesJugadorDos=="6","5","4" || 
 //   posicionesJugadorDos=="3","2","1" || posicionesJugadorDos=="1","4","7" || posicionesJugadorDos=="7","4","1" || posicionesJugadorDos=="3","6","9"||posicionesJugadorDos=="9","6","3"||posicionesJugadorDos=="7","5","3"
  //  || posicionesJugadorDos=="3","5","7"||posicionesJugadorDos=="1","5","9"||posicionesJugadorDos=="9","5","2" || posicionesJugadorDos=="2","5","8"||posicionesJugadorDos=="8","5","2"){
  //  alert("EL JUGADOR 2 HA GANADO: FELICITACIONES!")
    
//}

//else{
   // alert("Han empatado");
//}
//}











