console.log("Mi archivo clase1.js funca")

//tres formas de reservar espacio en memoria

//Primera con var-- forma no recomendada, MALA practica
//Declaramos Variable
var autor
//Asignamos un valor con =
autor="Jorge Luis Borges"
console.log(autor)

//Segunda forma, variables, recomendado
//Inicializando variables (es decir, delcarar y asignatr valor en la misma linea)
let Autor = "Isabela Allende"
Autor = "Gabriel Garcia Marquez"
console.log(Autor)

//Tercera forma de reservar espacio en memoria
const PI = 3.14
console.log(PI)

let IVA =0.21
console.log(IVA)
//Tres tipos numericos, los strings/cadena o booleano

//Operaciones básicas aritmeticas
// + - * / 
let precioproducto = 500
console.log(3*2)
console.log(IVA*3)
let precioCONIVA = precioproducto * IVA
console.log(precioCONIVA)

console.log(precioproducto+ (precioproducto *IVA))

