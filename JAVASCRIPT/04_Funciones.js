//Definición de una función:
function sumaTres (x){
    console.log(x + 3);
}
//Invocación de la función con un argumento dado.
sumaTres(5);
console.log (); //Estos "console.log" vacíos los utilizo para fabricar espacios en la vista de consola. No tienen ninguna otra finalidad.

//Formas de declarar una función:
//PRIMERO
function sumaTres(x){
    return x + 3;
}
console.log ();

//SEGUNDO
var sumaTres = function (x){
    return x + 3;
}
console.log ();

//TERCERO
var sumaTres = (x) => {
    return x + 3;
}
console.log ();

//Es MUY IMPORTANTE comprender que las instrucciones "console.log" y "return" cumplen roles diferentes.

//El "console.log" cumple un rol visual al imprimir los valores de las variables solicitadas. Sirve como referencia para el desarrollador.
//NINGUNA APLICACIÓN O PROGRAMA DEBERÍA TENER UN CONSOLE.LOG() DENTRO DE SU CÓDIGO. Deberían borrarse luego de ser utilizados.

//El "return" sí cumple un rol definitorio y fundamental para toda función, ya que es la instrucción que va a indicar qué valor nos debe devolver esta. Almacena datos potencialmente reutilizables en el código.

