console.log (4<7);
console.log (4>1);
console.log (4>4);
console.log (4==7);
console.log ();

//Diferencia entre operador de asignacion y operadores de igualdad.
var cajon1 = 'BufandaVerde';
console.log (cajon1);
var r1 = 3 == 3;   //Operador Igualdad:: Verifica que el valor sea el mismo entre ambos datos.
var r2 = 3 === 3;  //Operador Igualdad estricta: Verifica la igualdad tanto en el tipo de dato como en su valor.
var r3 = 3 == '3';   //Arroja resultado TRUE, porque compara los valores de manera abstracta.
var r4 = 3 === '3';  //Arroja resultado FALSE, porque el valor de uno de los datos es de tipo number, mientras que el del otro es de tipo string.
console.log ();
//El uso de operadores de igualdad es considerado una buena práctica, ya que aporta mayor previsibilidad a nuestro código.

console.log (r1);
console.log (r2);
console.log (r3);
console.log (r4);
console.log ();
//Valores de asociatividad
//La tabla de precedencias nos dice que en el caso de las Asignaciones (con el operador =), las mismas son de derecha a izquierda.

var a = 1;  //A la variable 'a' le asignamos el valor 1.
console.log (a);
console.log ();

var b = 3;  //A la variable 'b' le asignamos el valor 3.
var c = a = b;  // Primero se realizará la operación a=b y luego c=a. Por lo tanto, el valor final de 'c' será 3, porque a 'a' ya se le había reasignado ese valor.
console.log (a);
console.log (b);
console.log (c);
console.log ();

//En el caso de la operación división, es al revés, la asignación se realiza de izquierda a derecha.
console.log (16 / 2 / 4);
//La resolución de esta operación sería: primero 16/2 = 8, y luego 8/4= 2. El resultado final es 2.