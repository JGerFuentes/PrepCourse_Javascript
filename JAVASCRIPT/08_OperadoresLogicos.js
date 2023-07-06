//Operador AND: &&
function mayorYMenor(num){
    if (num > 5 && num < 10)
        console.log(true);
    else
        console.log(false);
};

mayorYMenor(3);
mayorYMenor(11);
mayorYMenor(6);
console.log();

//Si tenemos varias condiciones con el operador &&, entonces todas se deben cumplir para que la condición sea cierta y proceda con la acción.
function mayorYMenorYPar(num){
    if (num > 5 && num < 10 && num % 2 === 0)
        console.log(true);
    else
        console.log(false);
};

mayorYMenorYPar(7);
mayorYMenorYPar(8);
console.log();


//Operador OR: ||
function operadorOr(str){
    if (str === 'Henry' || str.length < 2)
        console.log(true);
    else
        console.log(false);
};

operadorOr('Henry');
operadorOr('Java');
operadorOr('d');
console.log();


//Operador NOT: !
function negacion(permiso){
    if (permiso)
        console.log('Tiene permiso');
    else
        console.log('No se cumplió la condición');
};
//En esta función se recibe por parámetro un valor 
//booleano llamado 'permiso'. El condicional verifica que el 
//parámetro 'permiso' sea true, es decir, 
//si existe o no el VALOR del parámetro. En ese caso imprimirá 
//el mensaje 'Tiene permiso'.
negacion(true);
negacion(false);
console.log();

//Esta condición es equivalente a preguntar si el valor introducido es verdadero, pero del siguiente modo:
function negacionOpcional(permiso){
    if (permiso === true)
        console.log('Tiene permiso');
    else
        console.log('No se cumplió la condición');
};

negacionOpcional(true);
negacionOpcional(false);
console.log();

//Ahora introduciremos el operador NOT para que el condicional
//busque lo contrario, es decir, que NO se cumpla la condición dada.
//El operador NOT, busca el valor opuesto al parámetro.
function negacion2(permiso){
    if (!permiso)
        console.log ('Tiene permiso');
    else
        console.log('No se cumplió la condición');
};

negacion2(true);
negacion2(false);
console.log();

//Aquí otro modo de verificar lo mismo:
function negacion2Opcional(permiso){
    if (permiso !== true)
        console.log ('Tiene permiso');
    else
        console.log('No se cumplió la condición');
};

negacion2Opcional(true);
negacion2Opcional(false);
console.log();
console.log('-----------Separador-----------');

//Ahora crearemos una función con una condición compleja:
function condicionCompleja(num){
    if (num > 9 && num % 2 === 0 || num === 3)
        console.log(true);
    else
        console.log(false);
};

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);
//Lo que sucede en este caso es que el operador OR es el que separa los dos grupos condicionales principales.
//Es por este motivo que 10 da true, porque cumple con las primeras 2 condiciones.
//Y el valor 3 también da true por cumplir con la segunda condición principal.
//La PRECEDENCIA de los operadores es: OR precede a AND.
//Es decir, primero se chequea OR y luego AND.

//IMPORTANTE!
// En una declaración &&, si la primera expresión es false, la segunda expresión no se evaluará porque AMBAS expresiones deben ser true.
//Para la declaración ||, si la primera expresión es verdadera, la segunda no se evaluará porque solo debe haber una declaración verdadera para cumplir con los requisitos del operador.
//Utilizar paréntesis para evaluar PRIMERO lo que se encuentra dentro de ellos, y luego aplicamos la negación.
//Podemos ajustar cualquier expresión entre paréntesis y se evaluará antes que toda la expresión en conjunto.
