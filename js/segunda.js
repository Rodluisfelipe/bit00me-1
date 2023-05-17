// inicio
let nombre = prompt("Por favor, ingresa tu nombre:");
let apellido = prompt("Por favor, ingresa tu apellido:");

// Mostrar el nombre completo
alert("Hola, " + nombre + " " + apellido + "! Bienvenido a mi este curso.");


// OPERADOR
function pedirNombreUsuario() {
    var nombre = prompt("Ingresa tu nombre:");
    return nombre;
}

let nombreUsuario = pedirNombreUsuario();

let mensaje = (nombreUsuario === "Pepita") ? "¡Bienvenida!" : "Acceso no autorizado";
  
alert(mensaje);

let esMayor = confirm("¿Eres mayor de edad?. Si es así confirma, de lo contrario presiona Cancelar");

let mensaje2 = esMayor ? "¡Bienvenido!" : "Acceso denegado";

alert(mensaje2);