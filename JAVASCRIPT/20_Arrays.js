//ARRAYS
//Es un objeto de tipo GLOBAL (posee ciertos métodos asociados) dentro de Javascript que nos permiten guardar y gestionar información. En principio se trata de una lista ordenada de datos.
//Es importante diferenciar dos conceptos importantes ligados a los arrays o arreglos:
    //Elemento: Se trata de los datos almacenados.
    //Índice: Los índices no representan al dato en sí mismo, sino la posición en la que se está guardando. Siempre se comienza a contabilizar las posiciones desde el número 0, no el uno.

var listaDeCompras = [];
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';
listaDeCompras[4] = 'Zanahoria'
console.log(listaDeCompras);
console.log();
console.log(listaDeCompras[0]);
//Este último elemento (con índice 0), al no tener ingresado ningún dato en el array, nos devuelve un 'undefined'.

//También, si quisiéramos ver/imprimir un elemento específico del array, podemos asignar su valor a una variable específica. Por ejemplo:
console.log();
var elementoDelArray = listaDeCompras[3];
console.log(elementoDelArray);
console.log();

//Si quisiéramos saber cuántos elementos contiene un arreglo, podemos utilizar el método Length, de la siguiente manera:
console.log(listaDeCompras.length);
console.log();

//Algunos MÉTODOS:

    //.LENGTH: En este caso, podemos también definir una variable a la cual asignar el valor de la longitud del array, en el caso de que necesitaramos trabajar con ese dato más tarde.

var listaDeAlumnos = ['Matias', 'Maria', 'Diego', 'Rosa'];
console.log(listaDeAlumnos);
var cantidadDeAlumnos = listaDeAlumnos.length;
console.log(cantidadDeAlumnos);
var ultimo = cantidadDeAlumnos - 1;
console.log(listaDeAlumnos[ultimo]);
console.log('---------------');

    //.PUSH: Sirve para añadir más elementos al array. Por defecto lo hará en la última posición.
var colores = ['amarillo', 'azul'];
console.log(colores);

colores.push('rojo');
console.log(colores);

colores.push('verde', 'naranja');
console.log(colores);
console.log('---------------');
    
    //.UNSHIFT: Permite añadir un nuevo elemento al array en la primera posición (índice 0).
colores.unshift('dorado');
console.log(colores);

colores.unshift('salmón', 'turquesa');
console.log(colores);
console.log('La cantidad de elementos del array "colores" es: ' + colores.length);

console.log('---------------');

    //.POP: Permite eliminar elementos de nuestro array. Por defecto eliminará el último elemento de la lista (último índice)
colores.pop(); //Saca el color 'naranja'.
console.log(colores);
console.log('La cantidad de elementos del array "colores" es: ' + colores.length);
console.log('Sacamos el color naranja');
console.log('---------------');
    
    //.SHIFT: Permite eliminar el primer elemento del array (índice 0).
colores.shift();
console.log(colores);
console.log('La cantidad de elementos del array "colores" es: ' + colores.length);
console.log('Sacamos el color salmón');
console.log('---------------');

    //.INCLUDES: Permite determinar si un arreglo incluye o no un elemento. Su resultado es un valor booleano.
var musicos = ['Townsend', 'Cornell', 'Prodan', 'Akerfeldt', 'Tchaikovsky'];
var loIncluye = musicos.includes('Solari');
console.log(loIncluye);
console.log('---------------');

    //.EVERY: Nos va a permitir saber si TODOS los elementos de un arreglo cumplen con alguna condición específica. El resultado es un valor booleano. Para poder utilizarlo es necesario indicar un parámetro de un tipo acorde al tipo de dato por el que estamos consultando. En este caso se va a tratar de un parámetro de tipo 'num' porque estamos trabajando con números.
var conjuntoNumerico = [2, 60, 14, 22, 48];
var todosMayoresADiez = conjuntoNumerico.every ((num) => {
    return num > 10;
});
console.log(todosMayoresADiez);
console.log();
var todosPares = conjuntoNumerico.every ((num) =>{
    return num % 2 === 0;
});
console.log(todosPares);
console.log('---------------');
console.log();

    //.SPLIT: Permite transformar un string en un arreglo. Esto es útil si quisiéramos modificar alguna letra o palabra del string original.
    //En este ejemplo, entre los paréntesis se colocan dos comillas, sin espacio entre ellas. Esto le indica al método que queremos que separe a la palabra por cada caracter que la compone. Si dejáramos un espacio, el método separará el string en función de los espacios que en él encuentre. Si escribiéramos una letra 'a' entre los paréntesis, separararía al string en función de las letras 'a' que encuentre en su camino.
var palabra = 'HENRI';
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);
console.log('-----Corregimos el ultimo elemento del array-----');
palabraSeparada [4] = 'Y'; //Reasignación por corrección de caracter.
console.log(palabraSeparada);
    //Esta reasignación podríamos realizarla a través de los otros métodos ya vistos, de la siguiente manera:
    //palabraSeparada.pop();
    //palabraSeparada.push('Y');
console.log('------Ahora volveremos a formar el string------')

    //.JOIN: Nos permite realizar la operación contraria al método split. Con él podemos convertir el array en un string. Entre paréntesis colocaremos el criterio que queremos que utilice para realizarlo. En este caso, queremos que junte todos los elementos (letras), sin dejar espacios entre ellas, por eso usamos dos comillas juntas, sin espacios.
console.log(palabraSeparada.join(''));
console.log('--------------');
console.log();

    //.FOREACH: Este método nos permite recorrer el array, elemento por elemento, y realizar alguna ACCIÓN ESPECÍFICA para cada uno. Su definición tiene un formato similar al del método every, porque se define una pequeña función.
    //En este ejemplo, queremos que el método nos permite imprimir en consola, uno a uno, los números que componen el arreglo. El tipo de dato que se utilizará como parámetro en el método es de tipo 'num'.
var numeritos = [1, 2, 3, 4, 9];
numeritos.forEach((num) => { 
    console.log(num);
    }
);
console.log();
    //En este otro ejemplo, le vamos a pedir al método que sólo imprima aquellos números que cumplen una condición específica: ser mayores e iguales a 3.
numeritos.forEach((num) => {
    if(num >= 3){
        console.log(num);
    }
});
console.log('---------');

    //.MAP: Este método funciona de manera similar a forEach, pero este SÍ NOS PERMITE REALIZAR MODIFICACIONES AL ARREGLO. Lo que hace es una copia del array original y realiza los cambios solicitados a los elementos que lo componen. DA COMO RESULTADO UN NUEVO ARRAY!!
    //Por ejemplo, si quisiéramos sumarle 1 a todos los números del arreglo, haríamos lo siguiente:
var masUnoATodos = numeritos.map( (num) =>{
    return(num + 1);
});
console.log(masUnoATodos);


//SECCION DE PRUEBA DE HOMEWORK M05
function empiezaConNueve(num) {
    // Esta función recibe por parámetro un número.
    // Debe retornar true si el entero inicia con 9 y false en otro caso.
    // Tu código:
    var conversion = num.toString();
    console.log(conversion);
    var arreglo = conversion.split('');
    console.log(arreglo);
    
    if(arreglo[0] === '9'){
             console.log (true);
    } else{
       console.log(false);
    }
}
empiezaConNueve(789);
empiezaConNueve(93);
empiezaConNueve(9);
empiezaConNueve(396);
console.log('----------');


function mayorACien(array) {
    // La función recibe un arreglo con enteros entre 0 y 200.
    // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
    // Tu código:
    var nuevoArray = [];
    array.forEach( (num) =>{
       if (num > 100){
          nuevoArray.push(num);
       }
    })
    console.log (nuevoArray);
 }
 var prueba = [0, 33, 18, 102, 175, 200, 199,100];
 mayorACien(prueba);
 console.log('------');

 function incrementarPorUno(array) {
    // El arreglo recibido por parámetro contiene números.
    // Retornar un arreglo con los elementos incrementados en +1.
    // Tu código:
    var nuevoArray = [];
    for (let i = 0; i < array.length; i++){
        nuevoArray[i] = array[i] + 1;
    };
    console.log (nuevoArray);
 }
 var varios = [1, 1, 1, 2, 3];
 incrementarPorUno(varios);
 console.log('-------');

 function devolverUltimoElemento(array) {
    // Retornar el último elemento del arreglo recibido por parámetro.
    // Tu código:
    var totalElementos = array.length;
    var ultimoElemento = totalElementos - 1;
    console.log (array[ultimoElemento]);
 }
devolverUltimoElemento(varios);
console.log('----basta---');

function agregarItemAlFinalDelArray(array, elemento) {
    // Agrega el "elemento" al final del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
    array.push(elemento);
    console.log (array);
 }
 agregarItemAlFinalDelArray(varios, 65);
console.log('-------fuua--------');

function tablaDelSeis() {
    // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
    // Tu código:
    var arrayTabla = [];
    for(let i = 0; i <= 10; i++){
       arrayTabla.push((i*6));
    }
    console.log (arrayTabla);
 }
 tablaDelSeis();

    function invertir(string){
        var cadenaRecibida = string.split('');
        var cadenaInvertida = [];
        for (let i = cadenaRecibida.length; i > -1; i--){
            cadenaInvertida.push(cadenaRecibida[i]);
        }

      console.log(cadenaInvertida.join(''));
    }
    invertir('HENRY');


    var filtroInicial = function (string){
        if (string[0] === 'a'){
           console.log (string);
        }
     };

     filtroInicial('auto');
     filtroInicial('bauzo');
     filtroInicial('Avion');


    var funchion = function(arrayOfStrings){
        var nuevoArray = [];
        for (let i = 0; i<arrayOfStrings.length; i++){
            if(arrayOfStrings[i][0] === 'a'){
                nuevoArray.push(arrayOfStrings[i]);     
            };
        };
        console.log(nuevoArray);
    };   

    funchion(['auto', 'buzo', 'Avion', 'aff']);
    console.log('************************')

   var pedorreta = function(frase){
        var newArray = frase.split(' ');
        var nuevaFrase = '';
        var subFrase =[];
        for (let i = 0; i< newArray.length; i++){

            for (let j = newArray[i].length; j>-1; j--){
                
                if (newArray[i][j] === undefined){
                    continue;
                } else {
                    subFrase.push(newArray[i][j]);
                }
            }
            subFrase.join('');
            
        };
        nuevaFrase = subFrase + ' ';
        console.log(nuevaFrase);

//     var nuevaFrase = '';
//    for (let i = 0; i< frase.length; i++){
//       for (let j = frase[i].length; j>0; j--){
//          nuevaFrase.charAt([j]) = frase[i][j];
//       }
//    }
//    console.log (nuevaFrase);
   };

   pedorreta('hola LOCURA cósmica espacial de Urano!');
   console.log('______________________');