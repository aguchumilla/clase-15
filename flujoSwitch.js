/**
 * Autor: Agustin Chumilla
 * version: 1.0
 * fecha: 25/04/24
 * El siguiente script genera control de flujos mediante switch.
 */

// 1 - Declaración de variables.
let opc;

// Declaración de variables de control o de bandera.

let repite = false;


//do{} while(); se ejecuta y despues se comprueba si se sigue.

do {
// 2 - Inicializar las variables con instruccion de entrada (prompt()).
opc = prompt(
    "Bienvenido/a\nIngrese 1 si desea un saludo\nIngrese 2 si desea una despedida"
);
// Se cambia el valor de la variable para que si esta en true no quede un bucle infinito. 
repite = false;
// 3 - Proceso de selección mediante estructura switch.
switch (opc) {
    case "1":
        document.write("<h1>Hola! que tengas un buen día...</h1>");
        break;                                                      
        //Si no se pone el break sigue la ejecucion de las demás opciones, aunque no coincida la opción

    case "2":
        document.write("<h1>Adiós! que tengas un buen día...</h1>");
        break;

    default:
        // Se cambia la bandera para que salga del bucle
        repite = true;
        alert("Introduzca una opción correcta");

        break;
}
} while (repite);