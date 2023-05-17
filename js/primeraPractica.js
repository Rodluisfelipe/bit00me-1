// Función para realizar una suma
function suma(num1, num2) {
    return num1 + num2;
}
  
// Función para realizar una resta
function resta(num1, num2) {
    return num1 - num2;
}
  
// Función para realizar una multiplicación
function multiplicacion(num1, num2) {
    return num1 * num2;
}

// Función para realizar una division
function division(num1, num2) {
    return num1 / num2;
}

// Función para realizar el modulo
function modulo(num1, num2) {
    return num1 % num2;
}

// // Solicitar los dos números al usuario
// let numero1 = parseFloat(prompt("Ingrese el No.1:"));
// let numero2 = parseFloat(prompt("Ingrese el No.2:"));

// RESULTADOS
var resultadoSuma = suma(numero1, numero2);
var resultadoResta = resta(numero1, numero2);
var resultadoMultiplicacion = multiplicacion(numero1, numero2);
var resultadoDivision = division(numero1, numero2);
var resultadoModulo = modulo(numero1, numero2);

// Calcular y mostrar el resultado en un mensaje de alerta
// alert("Resultados de las operaciones:\n\n" +
//       "Suma: " + resultadoSuma + "\n" +
//       "Resta: " + resultadoResta + "\n" +
//       "Multiplicación: " + resultadoMultiplicacion + "\n" +
//       "Modulo: " + resultadoModulo + "\n" +
//       "División: " + resultadoDivision+"\n"+
//       "MUCHAS GRACIAS!!!"
//     );


// inicio

var nombre = prompt("Por favor, ingresa tu nombre:");
var apellido = prompt("Por favor, ingresa tu apellido:");

// Mostrar el nombre completo
alert("Hola, " + nombre + " " + apellido + "! Bienvenido a mi este curso.");