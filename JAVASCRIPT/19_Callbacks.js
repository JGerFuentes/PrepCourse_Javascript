//CALLBACKS (cb)
//Se trata de un tipo de funciones que se pasan por parámetro a otras funciones.
//Supongamos que tenemos una función 1 que recibe por parámetro a una función 2. Cuando la función 1 ejecuta a la función 2 en su interior, se produce un proceso llamado “callback”.
//Los callbacks son muy útiles en el mundo de la programación, nos aseguran que una función no se va a ejecutar antes de que se complete una tarea, sino que se ejecutará justo después de que la tarea se haya completado.

//EJEMPLO:
//Crearemos una función llamada "devuelvoUsuario" que consistirá en retornar el string "Camilo". Debajo de esta crearemos otra función llamada "saludo" que retornará el string "Hola". Finalmente, crearemos una tercera función llamada "saludar" que recibirá por parámetro dos funciones o callbacks, a las cuales llamaremos "cb1" y "cb2". Su función será retornar el resultado de la ejecución de ambas funciones callbacks. Por último, crearemos una variable llamada "resultado" y la igualaremos a la ejecución de la función "saludar", pasándole por parámetro la definición de las funciones que creamos anteriormente.
//La definición de una función se refiere a la función sin ser invocada o ejecutada, es decir, LA FUNCIÓN SIN LOS PARÉNTESIS, porque sino estaríamos pasando por parámetro el resultado de la ejecución de la misma, no su definción (la función en su totalidad).

var devuelvoUsuario = function() {
    return "Camilo";
};

var devuelvoSaludo = function() {
    return "Hola";
};

var saludar = function(cb1, cb2) {
    return cb1() + ' ' + cb2();
};

var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
console.log(resultado);

console.log();
//EJEMPLO:
//Crearemos una función llamada "devuelvoFrase" que recibirá por parámetro una "comida". Esta retornará un string concatenado con "comida".
//Luego, definiremos una función llamda "hablar" que recibirá por parámetro una variable llamada "comida" una función callback llamada "cb". Esta RETORNARÁ EL RESULTADO DE LA EJECUCIÓN DE LA FUNCIÓN CALLBACK con el parámetro "comida" entre paréntesis.
//Por último, crearemos una variable llamada "fraseFinal" que será igual a la función "hablar" con los parámetros ('Pizza', devuelvoFrase).

var devuelvoFrase = function (comida) {
    return 'Hoy quiero comer: ' + comida;
};

var hablar = function (comida, cb) {
    return cb(comida);
};

var fraseFinal = hablar('Pizza', devuelvoFrase);
console.log(fraseFinal);

var mayuscula = function(nombre) {
    var primerLetra = nombre.charAt(0);
    var cambio = primerLetra.toUpperCase();
    var nuevoNombre = nombre.replace(primerLetra, cambio);
    console.log(nuevoNombre);
};

mayuscula('Arturo');
