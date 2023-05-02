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


//Creación de objetos que responde a los empleados pre existentes.
const empleado1 = {
    nombre: "Leonardo",
    edad: 35,
    ciudad: "Lanús",
    rol: "Profesor",
    turnoLaboral: "Matutino"
}

const empleado2 = {
    nombre: "Soledad",
    edad: 26,
    ciudad: "Lomas de Zamora",
    rol: "Tutor",
    turnoLaboral: "Matutino"
}

const empleado3 = {
    nombre: "Juan",
    edad: 40,
    ciudad: "Banfield",
    rol: "Tutor",
    turnoLaboral: "Vespertino"
}

const empleado4 = {
    nombre: "Tomás",
    edad: 20,
    ciudad: "Banfield",
    rol: "Tutor",
    turnoLaboral: "Vespertino"
}

//Información prioritaria respecto a los empleados
console.log(empleado1.nombre)
console.log(empleado1.rol)
console.log(empleado1.turnoLaboral)

console.log(empleado2.nombre)
console.log(empleado2.rol)
console.log(empleado2.turnoLaboral)

console.log(empleado3.nombre)
console.log(empleado3.rol)
console.log(empleado3.turnoLaboral)

console.log(empleado4.nombre)
console.log(empleado4.rol)
console.log(empleado4.turnoLaboral)

let i = 0
for(const prop in empleado1){
    i++
    console.log("el valor de la propiedad n° " +i + " es " + empleado1 [prop])
}

//Function para crear objetos para el ingreso de nuevos empleados. Funcion constructora.
function Empleado (nombre, edad, ciudad, rol, turnoLaboral){
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.rol = rol;
    this.turnoLaboral = turnoLaboral;

    this.mostrarInfo = function(){
        console.log(`El empleado ${this.nombre} que posée ${this.edad} años de edad es ${this.rol} de la tienda.`)
    }
}
//Instanciación de objeto.
const Empleado5 = new Empleado("Sandra", 28, "La Plata", "Profesora", "Vespertino")
console.log(Empleado5)

//Aplicación de métodos.
Empleado5.mostrarInfo()

//Creacion de un array como carpeta "Recursos Humanos"
const recursosHumanos = []
recursosHumanos.push(empleado1, empleado2, empleado3, empleado4, Empleado5)
console.log(recursosHumanos)

//Recorriendo el array
console.log("Los empleados y sus turnos son:")
for(let elemento of recursosHumanos){
    console.log(elemento.nombre, elemento.rol, elemento.turnoLaboral)
}
