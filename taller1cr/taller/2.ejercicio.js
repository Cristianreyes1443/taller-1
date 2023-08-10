'use strict';
/* Calcular el sueldo a pagar de un trabajador dado que se debe ingresar la cantidad de 
horas trabajadas y el valor de la hora en pesos.

Cristian Reyes*/

let horasTrabajadas = parseFloat(prompt("ingrese su cantidad de horas trabajadas"));
let valorDeLaHora = parseFloat(prompt("cual es el valor de la hora"));

function multiplicacion ( horasTrabajadas , valorDeLaHora ){
    return horasTrabajadas* valorDeLaHora

}
let resultado= multiplicacion(horasTrabajadas, valorDeLaHora);
alert ("el total a pagar es" + resultado);