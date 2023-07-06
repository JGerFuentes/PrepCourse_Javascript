//Esta sentencia crea un bucle que ejecuta una orden especificada hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.
//Ejemplo:

let result = '';
let i = 0;
do {
  i = i + 1;
  result = result + i;
} while (i < 5); //Evaluación de la condición. A esta altura el bucle ya se ejecutó una primera vez para i = 0.

console.log(result);
//Output: "12345"