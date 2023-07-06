//BUCLES EN ARRAYS
//Como siempre, primero debemos inicializar la variable de iteración. Podemos utilizar las palabras reservadas 'var' o 'let', de manera indistinta.
//El segundo parámetro de la definición del bucle, podríamos elegir que la condición del iterador sea que su valor no exceda la longitud del array o que sea igual, mayor o menor a un índice específico del mismo. Por ejemplo, (i < 3) trabajará con el arreglo hasta llegar al índice 3.
//Por último, en el tercer parámetro, daremos cuenta de cómo queremos que se cuantifique nuestra variable de iteración, es decir, cómo se movilizará esta dentro del array.

//En el siguiente ejemplo, sólo queremos que el bucle nos permita imprimir en consola los elementos de las sucesivas posiciones 'i'. De esta manera, veremos que se imprimen todos los números y el bucle finaliza.

var arregloEjemplo = [1, 3, 5, 7, 9];
for(var i = 0; i < arregloEjemplo.length; i++){
    console.log(arregloEjemplo[i]);
};
console.log('--------');

//Ahora nos gustaría desarrollar una función que nos permita recibir un string y encuentrar una letra específica.
function encontrarLetraP(string){
    var arregloFuncion = string.split('');
    var contador = 0;
    for(let i = 0; i < arregloFuncion.length; i++){
        if(arregloFuncion[i] === 'p' || arregloFuncion[i] === 'P'){
            contador = contador + 1;
        }
    }
    if (contador === 0){
        console.log('Vó so medio corqui,no? Dónde viste que "' + string + '" lleve una letra P?? Rajá de acá, otario!');
    } else {
        console.log('Si, macho, tu arreglo efectivamente contiene tu maldita letra P. Tiene ' + contador + '. Ahora, tomatelá!');
    }
}
encontrarLetraP('Javascript');
console.log();
encontrarLetraP('Extraterrestre');
console.log();
encontrarLetraP('Papa empapada en petróleo');
console.log();

//WHILE: Este bucle nos permitirá realizar acciones sobre un arreglo mientras se cumpla ua condición específica. En el siguinte ejemplo, se quiere añadir (o pushear) la palabra 'Wakeup!' dentro del arreglo vacío, definido previamente, la cantidad de necesaria de veces mientras no se supere una longitud dada de 5 elementos.
var arr = [];

while (arr.length < 5){
    arr.push('Wakeup!');
}
console.log(arr);

