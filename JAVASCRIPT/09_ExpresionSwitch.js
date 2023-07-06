//La declaración switch evalúa una expresión, compara el valor de esa expresión con una instancia ('case'), y ejecuta declaraciones asociadas a ese 'case', ¡¡así como las declaraciones en los 'case' que siguen en el caso de no encontrarse con ninguna declaración 'break'!!


//En el siguiente bloque de código de ejemplo, si la variable 'expr' recibe el dato "Platanos", el algoritmo compara el valor con todos los case hasta dar con el case "Platanos" y ejecuta la declaración asociada. Cuando se encuentra un 'break', el programa sale del condicional switch y ejecuta la declaración siguiente del código. Si se omite el break, el case "Cerezas" también es ejecutado.
var expr = 'naranjas';
switch (expr) {
    case 'Naranjas':
      console.log('El kilogramo de naranjas cuesta $0.59.');
      break;
    case 'Manzanas':
      console.log('El kilogramo de manzanas cuesta $0.32.');
      break;
    case 'Platanos':
      console.log('El kilogramo de platanos cuesta $0.48.');
      break;
    case 'Cerezas':
      console.log('El kilogramo de cerezas cuesta $3.00.');
      break;
    case 'Mangos':
    case 'Papayas':
      console.log('El kilogramo de mangos y papayas cuesta $2.79.');
      break;
    default: //Declaración ejecutada cuando ninguno de los valores coincide con el valor de la expresión.
      console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
  }
  
  console.log("¿Hay algo más que quisiera consultar?");
  
//El programa primero busca la primer instancia case, cuya expresión se evalúa con el mismo valor de la expresión de entrada (usando comparación estricta, ===) y luego transfiere el control a esa cláusula, ejecutando las declaraciones asociadas. Si no se encuentra una cláusula de case coincidente, el programa busca la cláusula default opcional, y si se encuentra, transfiere el control a esa instancia, ejecutando las declaraciones asociadas. Si no se encuentra una instancia default el programa continúa la ejecución en la instrucción siguiente al final del switch. Por convención, la instancia default es la última cláusula, pero no tiene que ser así.
//La declaración break es opcional y está asociada con cada etiqueta de case y asegura que el programa salga del switch una vez que se ejecute la instrucción coincidente y continúe la ejecución en la instrucción siguiente. Si se omite el break el programa continúa la ejecución en la siguiente instrucción dentro de la declaración de switch.
//Si olvidas un break, el script se ejecutará desde donde se cumple la condición y ejecutará el siguiente case independientemente si esta condición se cumple o no (VER: Operaciones encadenadas con múltiples casos).

//Operación única con múltiples casos: Funciona de manera similar a un if con operador lógico OR para verificar una condicion.
var Animal = 'Jirafa';
switch (Animal) {
case 'Vaca':
case 'Jirafa':
case 'Perro':
case 'Cerdo':
    console.log('Este animal subirá al Arca de Noé.');
    break;
case 'Dinosaurio':
default:
    console.log('Este animal no lo hará.');
}
  
//Operaciones encadenadas con múltiples casos: 
//Este es un ejemplo de una sentencia switch secuencial con múltiples operaciones, donde, dependiendo del valor entero dado, 
//se pueden recibir diferentes resultados. Esto demuestra que el algoritmo correrá en el orden en que se coloquen las declaraciones 
//case, y que no tiene que ser numéricamente secuencial.
var foo = 1;
var output = 'Salida: ';
switch (foo) {
  case 10:
    output += '¿Y ';
  case 1:
    output += 'Cuál ';
    output += 'Es ';
  case 2:
    output += 'Tu ';
  case 3:
    output += 'Nombre';
  case 4:
    output += '?';
    console.log(output);
    break; 
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Por favor, selecciona un valor del 1 al 6.');
}

//Si el valor de foo es 10, la consola dirá: 'Salida: ¿Y Cuál Es Tu Nombre?', debido a la posición del console.log(output) y del break.
//Si el valor de foo es 1, la consola dirá: 'Salida: Cuál Es Tu Nombre?'
//Si el valor de foo es 2, la consola dirá: 'Salida: Tu Nombre?'
//Si el valor de foo es 3, la consola dirá: 'Salida: Nombre?'
//Si el valor de foo es 4, la consola dirá: 'Salida: ?'
//Si el valor de foo es 5, la consola dirá: 'Salida: !'
//Si el valor es default (NaN o no es 1, 2, 3, 4, 5 ni 10), la consola dirá: 'Por favor, selecciona un valor del 1 al 6.'