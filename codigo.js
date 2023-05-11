alert("Solo puede usar esta calculadora si es mayor de edad")

let edad = prompt("Ingrese su edad")
let sumatoria = 1;

while (sumatoria > 0) {
    if (edad < 18) {
        console.log("Usted no puede usar esta calculadora")
        break;
    }

    else {
        console.log("Bienvenido al sistema")
    }



    function suma_de_numeros(numero1, numero2) {

        numero1 = prompt("ingrese el primer numero para sumar")
        numero1 = parseInt(numero1)
        console.log("Número 1: ", numero1)
        numero2 = prompt("ingrese el segundo numero para sumar")
        numero2 = parseInt(numero2)
        console.log("Número 2: ", numero2)
        let suma = numero1 + numero2;
        return suma;
    }

    function multiplicacion_de_numeros(numero1, numero2) {
        numero1 = prompt("ingrese el primer numero para multiplicar")
        numero1 = parseInt(numero1)
        console.log("Número 1: ", numero1)
        numero2 = prompt("ingrese el segundo numero para multiplicar")
        numero2 = parseInt(numero2)
        console.log("Número 2: ", numero2)
        let multiplicacion = numero1 * numero2;
        return multiplicacion;
    }

    function resta_de_numeros(numero1, numero2) {
        numero1 = prompt("ingrese el primer numero para restar")
        numero1 = parseInt(numero1)
        console.log("Número 1: ", numero1)
        numero2 = prompt("ingrese el segundo numero para restar")
        numero2 = parseInt(numero2)
        console.log("Número 2: ", numero2)
        let resta = numero1 - numero2;
        return resta;
    }

    function division_de_numeros(numero1, numero2) {
        numero1 = prompt("ingrese el primer numero para dividir")
        numero1 = parseInt(numero1)
        console.log("Número 1: ", numero1)
        numero2 = prompt("ingrese el segundo numero para dividir")
        numero2 = parseInt(numero2)
        console.log("Número 2: ", numero2)
        let division = numero1 / numero2;
        return division;
    }



    let resultado_suma = suma_de_numeros();
    
    console.log("Su suma es: ", resultado_suma);

    let resultado_multiplicacion = multiplicacion_de_numeros();
    console.log("Su multiplicación es: ", resultado_multiplicacion);

    let resultado_resta = resta_de_numeros()
    console.log("Su resta es: ", resultado_resta);

    let resultado_division = division_de_numeros()
    console.log("Su división es: ", resultado_division);


    let numero_tabla = prompt("ingrese su numero para ver su tabla de multiplicar")
    console.log("Su numero es: ", numero_tabla)
    for (let i = 0; i < 11; i = i + 1) {
        let tabla = numero_tabla * i
        console.log(numero_tabla, " X ", i ," = ", tabla)
    }

    console.log("Usted terminó de usar la calculadora")
    break;

}





















