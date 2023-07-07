let turnero = "verde";
let posiciones= 0;
let puntosVerde = 0;
let puntosRojo = 0;
let turnos = 0;
let clima = document.getElementsByClassName("clima")


//funciones

function sumarPuntosJugadorUno(){
    boton[0].addEventListener("click",function(){
       puntosVerde++;
    })
}

function sumarPuntosJugadorDos(){
    boton[1].addEventListener("click",function(){
        puntosRojo++;
    })
}

function turno(caja, i){
    caja.addEventListener("click", function(){
        const cuadrado = document.querySelectorAll(".caja__hijo")
        
        if(caja.style.backgroundColor != "rgb(255, 255, 255)"){
            return;
        }

        turnero === "verde" ? caja.style.backgroundColor = "#008000": caja.style.backgroundColor= "#FF0000";
        turnero === "verde" ? turnero = "rojo" : turnero = "verde";
    })
}

function resetearCajas(){

        if(botonReset.innerText==="INICIAR"){
        intrucciones()
        };

        const cuadrado = document.querySelectorAll(".caja__hijo")
        cuadrado.forEach(caja => {
            botonReset.innerText="Reiniciar tablero"
            caja.style.backgroundColor = "rgb(255, 255, 255)"
            
        });
}

    function intrucciones(){
        Swal.fire({
            title: 'INSTRUCCIONES',
            text: 'Empezará jugando el color verde. Una vez marque su ficha en el tablero automáticamente jugará el contrincante de color rojo y así sucesivamente. Al finalizar la partida, el ganador sumará manualmente sus puntos en ambos contadores de la derecha y reiniciará el tablero. Si antes empezó primero verde al reiniciar comenzara primero rojo y viceversa (complete el tablero para que esto ocurra). ¡A jugar! ',
            confirmButtonText: 'Jugar'
          })
    }
     function bienvenido(){
        Swal.fire({
            title: 'BIENVENIDO A TA-TE-TI',
            text: 'Apriete el boton "iniciar" para activar el tablero',
            confirmButtonText: 'Jugar'
          })
     }

     
     /* NO ANDA
     function localizacion(coordenadas){
        let latitud = coordenadas.coords.latitude;
        let longitud = coordenadas.coords.longitude;
        let contraseña ="2bbb2f2e2db7344ec2de697297a60cc4"
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${contraseña}&units=metric&lang=es`)
            .then(response => response.json())
            .then(data =>{
                document.body.innerHTML= `  <p>${data.name}</p>
                                             <p>${data.main.temp}</p>
                                             <p>Clima:${data.weather[0].description}</p>`
            })

        }

        */

//codigo


const cuadrado = document.querySelectorAll(".caja__hijo")
const botonReset = document.getElementById("resetear")
const boton = document.getElementsByClassName("marcador__item")

const  jugador1Btn = document.getElementById("jugador1Btn");
const  jugador2Btn = document.getElementById("jugador2Btn");

const  jugador1Btn1 = document.getElementById("jugador1Btn2");
const  jugador2Btn2 = document.getElementById("jugador2Btn2");

const  jugador1NumeroSpan = document.getElementById("jugador1Numero");
const  jugador2NumeroSpan = document.getElementById("jugador2Numero");

    
    bienvenido()
    
    cuadrado.forEach(turno)
    /*navigator.geolocation.getCurrentPosition(localizacion)*//*NO ANDA*/
    botonReset.innerText="INICIAR"
    botonReset.addEventListener("click", resetearCajas)
    
    jugador1Btn.addEventListener("click", function() {
        puntosVerde++;
        jugador1NumeroSpan.textContent = puntosVerde;
    });
    
    jugador2Btn.addEventListener("click", function() {
        puntosRojo++;
        jugador2NumeroSpan.textContent = puntosRojo;
    });

    jugador1Btn1.addEventListener("click", function() {
        puntosVerde--;
        jugador1NumeroSpan.textContent = puntosVerde;
    });
    
    jugador2Btn2.addEventListener("click", function() {
        puntosRojo--;
        jugador2NumeroSpan.textContent = puntosRojo;
      });
      

      


    



    


