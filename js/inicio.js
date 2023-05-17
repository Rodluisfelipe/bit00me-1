"use strict"
// modo estricto buena practica

console.log("hola");

// VARIABLES--->Nombres descriptivos
var nombre = 'Madison';
const edad = 16;
let pais = "Colombia"

// AMBITO
// Let no es global sino por bloque de codigo
//var es global

// funciones
function imprimirAño() {
    var año = 2020;
}

// TIPO DE DATOS

// Primitivos-->Fundametales de js
let nombreCompleto = "Sara Acuña Benavides"
console.log(typeof nombreCompleto);
let edadNombre = 12;

// concatenar
let nombres = "Sara";
let ape =  "Acuña";
let nombreape = nombres + ape;
console.log("concatenar",nombreape);

// CONVERSION DE TIPOS
nombreCompleto = "23";
console.log(typeof nombreCompleto);

// convertir de string a numero
var numero = 42;
var cadena = numero.toString();
console.log(cadena);

// OPERADORES
let numero1 = 10;
let numero2 = 5;
let resultado;
resultado = numero1 + numero2;
resultado = numero1 - numero2;
resultado = numero1 / numero2;
resultado = numero1 * numero2;
resultado = numero1 % numero2;




