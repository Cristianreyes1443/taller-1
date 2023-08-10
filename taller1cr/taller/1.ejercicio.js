'use strict';
/*1. Dado dos números ingresados por el usuario realizar las 4 operaciones básicas, suma, resta, multiplicación, división e imprimir las operaciones.
Validar la división entre 0(cero).
*/
//ds: principales operaciones
//de: dos numeros 

let num1 = parseFloat( prompt('dame un valor'));
let num2 = parseFloat( prompt('dame un valor'));

function suma ( num1 , num2 ){
    return num1 + num2;
}
let sumar = suma (num1,num2);
alert("su resultado de la suma es "+ sumar);

function resta (num1 , num2){
    return num1 - num2;
}
let restar = resta (num1, num2);
alert("su resultado de la resta es "+ restar)

function multiplicacion (num1 , num2){
    return num1*num2;
}
let multiplicar = multiplicacion (num1, num2);
alert("su resultado de la multiplicacion es "+ multiplicar )

function división (num1, num2){
    if(num2 > 0){
        return num1/num2
    }
}
let dividir = división (num1, num2);
alert ("su resultado de la division es "+dividir) 