/**
 * Autor: Agustin Chumilla  
 * versión: 1.0 
 * fecha: 25/04/24
 * El siguiente script sirve a index2.html y utiliza una accion repetitiva con bucle while.
 */

// 1 - Declaración de variables.
let dato;
let registrar;  // Variable de control.

// 2- Inicializamos registrar con valor de entrada (prompt).
registrar = prompt("¿Desea registrar un dato? (s-n)");

// 3 - Bucle while, se ejecuta SOLO si se cumple la condición, no como el doWhile
while (registrar.toLowerCase() === "s") {
    dato = prompt("Ingrese un dato");
    document.write("<p>Usted ingresó:" + dato + "</p>");

    // Actualización de la variable de control.
    registrar = prompt("¿Desea ingresar otro dato? (s-n)");
}
