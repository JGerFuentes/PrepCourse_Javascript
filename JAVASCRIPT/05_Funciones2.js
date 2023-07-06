function cuidadoConElConsoleLog(nombre){
    console.log(nombre);
    return nombre;
}
//Ahora, con el comando "node", ejecutaremos Node desde la terminal de VSCode. Este motor es capaz de leer, interpretar y ejecutar código de Javascript.
//Pegamos las líneas de código en el motor de Node. Este nos devuelve la sentencia "undefined".
//Invocamos la función en el mismo motor. Utilizamos el argumento "Panchuli".
//La primera sentencia es el console.log() imprimiendo el valor del argumento "nombre". Es nuestro ayudante recordándonos el valor del argumento.
//La segunda sentencia es el valor que nos retornó la función: un string con la palabra "Panchuli". Esto es lo que importa de nuestra función, el dato que nos devuelve, "el resultado de la operación".

//Si volvemos a definir la fución pero sin la sentencia "return", al invocarla/ejecutarla en el motor de Node, sólo se nos imprime el valor de la variable "nombre", es decir "Panchuli".
function cuidadoConElConsoleLog(nombre){
    console.log(nombre);
}
//La última línea dice "undefined". Esto significa que la función no nos devuelve nada.
//Es importante que nuestro código nos garantice la disponibilidad de un resultado potencialmente reutilizable en otras partes del código. Ahí radica la importancia del "return".

//Ahora definimos una función que va a reutilizar el valor retornado por "cuidadoConElConsoleLog":
function otraFuncion(){
    return(
        "El nombre retornado por la funcion 'cuidadConElConsoleLog' es: " + cuidadoConElConsoleLog('Panchuli')
    );
}
//Lo que se imprime en nuestra terminal es:
//Primero: El resultado de console.log, es decir, el resultado de la primera función invocada: El valor que le dimos a nuestra variable/argumento "nombre" --> Panchuli.
//Segundo: El resultado de la ejecución de nuestra segunda función, el texto "El nombre retornado... es: undefined".
//Esto se debe a que, si bien podemos ver en la consola el argumento que recibe la primera función, no estamos retornado ningún valor.

//Esto se soluciona añadiendo la sentencia "return nombre" a la primera función.

function cuidadoConElConsoleLog(nombre){
    console.log(nombre);
    return nombre;
}
function otraFuncion(){
    return(
        "El nombre retornado por la funcion 'cuidadConElConsoleLog' es: " + cuidadoConElConsoleLog('Panchuli')
    );
}

//Ahora, si damos vuelta las sentencias en la primera función:
function cuidadoConElConsoleLog(nombre){
    return nombre;
    console.log(nombre);
}
//Al ejecutarla, sólo nos va a mostrar el resultado del "return" y no el de "console.log()", porque la función termina su ejecución luego de esta sentencia. Todo lo que se encuentra debajo del "return" no se va a ejecutar.


//cualquier mensajito. El otro día estaba fumando un churrito y me gustó mucho, la verdad que ayuda mucho con la ansiedad y el estado de ánimo en general, es más... me parece que me voy a fumar uno ahora... 
//XD
