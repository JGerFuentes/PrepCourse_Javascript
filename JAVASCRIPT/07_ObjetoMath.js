//Además de 'console' existe otro objeto global integrado llamado 'Math'.
//Este objeto tiene 4 métodos importantes:

//Math.pow: Sirve para potenciar un número.
Math.pow(2,3); //Eleva al número 2 al cubo.
console.log(Math.pow(2,3));
console.log();

//Math.round: Redondea un decimal al entero más próximo.
Math.round(3.50); //Resultado: 4.
Math.round(3.14); //Resultado: 3.
console.log(Math.round(3.50));
console.log(Math.round(3.14));
console.log();

//Math.floor: Redondea al número decimal al entero de menor valor.
Math.floor(5.74); //Resultado: 5.
console.log(Math.floor(5.74));
console.log();

//Math.ceil: Redondea al número decimal al siguiente entero (de mayor valor).
Math.ceil(5.22); //Resultado: 6.
console.log(Math.ceil(5.22));
console.log();

//Math.max: Identifica el valor máximo de un conjunto de números.
//Math.min: Identifica el valor mínimo de un conjunto de números.
Math.max(1,2,3,4,5,6); //Resultado: 6.
Math.min(1,2,3,4,5,6); //Resultado: 1.
console.log(Math.max(1,2,3,4,5,6));
console.log(Math.min(1,2,3,4,5,6));
console.log();

//Math.random: Genera un número decimal al azar, entre 0 y 1.
Math.random();
console.log(Math.random());