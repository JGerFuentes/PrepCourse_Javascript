//BUCLE FOR:
//Queremos ir sumando los números del 1 al 10 e ir imprimiendo el resultado en la terminal.
var suma = 0;
    //console.log(suma);
    //suma = suma + 1;
    //console.log(suma);
    //suma = suma + 2;
    ///suma = suma + 3;
    //suma = suma + 4;
    //console.log(suma);
    //suma = suma + 5;
    //suma = suma + 6;
    //suma = suma + 7;
    //suma = suma + 8;
    //suma = suma + 9;
    //suma = suma + 10;
    //console.log(suma);

//Todo este código se puede reducir a un simple bucle FOR, para el cual:
//El primer parámetro contiene la definición e inicialización de la variable de iteración 'i'.
//El segundo parámetro es la condición de cumplimiento. Ientras esta condición sea verdadera, el bucle seguirá ejecutándose.
    //En otras palabras, también representa la cantidad máxima de iteraciones que queremos ejecutar.
//Y el tercer parámetro es la forma en que queremos que se modifique la variable de iteración cada vez que termine de ejecutarse el ciclo.
    //En este ejemplo, queremos que la variable incremente en 1 su valor por cada iteración.
for (var i =0; i < 10; i++){
    suma = suma + 1;
    console.log(suma);
}
console.log();

var suma = 0; //Esta sentencia es para volver a hacer 0 el valor de la variable suma.

//Ahora implementaremos un contador de iteración:
for (var i =0; i < 5; i++){
    suma = suma + i;
    console.log('Variable de iteración: ', i);
    console.log('Resultado de la suma en esta iteración: ', suma);
}
console.log('Valor final de la variable suma: ', suma); //Esto se mostrará en consola una vez finalizado el bucle.

console.log('------------SEPARADOR------------');

//BUCLE WHILE:
var suma = 0;
while (suma < 3){
    suma = suma + 1;
    console.log(suma);
}
//Podemos ver que la operación se realiza hasta llegar al valor limite fijado con el WHILE.
//La condición del bucle WHILE está dada por una evaluación lógica que retornará un true o un false.
//Si esa evaluación es true, entonces se continuará repitiendo la acción.


//IMPORTANTE!!!
//** Un bucle FOR se utilizará cuando sabemos la cantidad máxima exacta de pasos que queremos ejecutar (el valor del segundo parámetro).

//++ Un blucle WHILE se utilizará cuando no sabemos con certeza cuántos pasos necesitaremos hasta finalizar la ejecución del ciclo.
