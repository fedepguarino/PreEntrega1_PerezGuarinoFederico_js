alert("¡Bienvenidos al curso de JavaScript!");

let nombre = prompt ("Escribi tu nombre");
alert("Mucho gusto en conocerte " + [nombre]);

// Condicionales
let edad = parseInt(prompt("Ingrese su edad"))

// el IF pregunta una sola vez y ejecuta, y esa es la diferencia fundamental con While (es bucle)
if(edad >= 18){
    alert("Sos mayor de edad, disfruta de nuestro contendo sin restricciones")
    console.log("Usuario confirma mayoría de edad")
}else{
    alert("No sos mayor, lamentablemente no podes continuar")
    console.log("Usuario informa ser menor de edad")
}

//Ciclo por conteo, como sistema de reserva de turnos
for (let i = 1; i < 6; i++){
    let nombreCliente = prompt("Escriba su nombre y apellido para validar el turno")
    alert (`El turno N° ${i} le corresponde a ${nombreCliente}`)
    console.log(nombreCliente + " obtiene el turno Número " + (i))
}


function calculadora(numero1, operacion, numero2){
    switch (operacion){
        case "+":
            return numero1 + numero2;
            break;

        case "-":
            return numero1- numero2;
            break;

        case "*":
            return numero1 * numero2;
            break;

        case "/":
            return numero1 / numero2;
            break;

        default:
            return 0;
            break;

        return resultado
    }
}


function mostrarDesarrolloWeb(){
    document.getElementById("infoDesarrolloWeb").style.display="";
}

function mostrarJavaScript(){
    document.getElementById("infoJavaScript").style.display="";
}

function calcular(){
    document.getElementById("botonCalcular")
    let resultado = calculadora(numero1 = parseInt(prompt("Ingrese valor del curso seleccionado")), 
                            operacion = prompt("ingrese el operador numerico correspondiente"), 
                            numero2 = parseInt(prompt("Ingrese valor de segundo curso seleccionado")));

alert("El valor total del servicio es de: $" + resultado)
console.log("El valor total del servicio es de: $" + resultado)
}


