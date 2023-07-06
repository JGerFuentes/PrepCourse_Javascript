//OBJETOS: Se trata de estructuras que permiten guardar todo tipo de información y/o funcionalidades. Estas estrucuras se basan en un PAR CLAVE:VALOR. Los diferentes pares de un objeto se conocen como PROPIEDADES de tal objeto.
//Se declaran como variables con su contenido encerrado entre llaves. Los Objetos pueden tener todas las CLAVES (también llamadas "identificadores" o "grupos") que nosotros querramos. SIEMPRE SEPARADAS POR COMA.

//En el siguiente Objeto vamos a guardar y clasificar diferentes grupos de información. Los nombres de los grupos se conocen como CLAVES o IDENTIFICADORES. La información que contienen se conoce como VALOR (pueden ser arreglos, números, strings, booleanos, funciones o, incluso, otros objetos).
var deportes = {conBalon: ['Futbol', 'Basket', 'Rugby'], sinBalon: ['Boxeo', 'Surf', 'Trekking']};
console.log();
//Claves o Identificadores: conBalon, sinBalon
//Valores o Información: 'Futbol', 'Basket', 'Rugby', 'Boxeo', 'Surf' y 'Trekking'.


//Ejemplo de anidación de objetos.
var persona = {nombre: 'Lucas', edad: 26, estudios: {esProgramador: true}};
console.log();
//Claves o Identificadores: nombre, edad, estudios y esProgramador.
//Valores o Información: 'Lucas', 26, {esProgramador} y true.

//Existen dos maneras de notar los objetos:
        //Dot-Notation.
        //Bracket-Notation.


//DOT - NOTATION
//Si quisiéramos conocer alguna información del objeto 'persona' definido previamente, podemos hacerlo de la siguiente manera:
console.log(persona.edad);
console.log(deportes.conBalon);
console.log(deportes.sinBalon[2]);
console.log(persona.estudios);
console.log('----');

//Si quisiéramos modificar alguno de los valores de nuestro objeto, sólo debemos asignarlo a la clave correcta. Por ejemplo, si quisiéramos cambiar el nombre de la persona descrita:
console.log(persona.nombre);
console.log('----Corrección! Mala mía...----');
persona.nombre = 'Mambaruli';
console.group(persona.nombre);
console.log();


//Ahora crearemos propiedades utilizando la Dot-notation.
//*(NOTA: Estas jamás pueden ser vacías! SIEMPRE DEBEN TENER UN VALOR ASIGNADO!)**/

var autos = {}; //Objeto vacío.
autos.marcas = ['Ford', 'Audi', 'Ferrari']; //Creación de la propiedad 'marcas'
console.log(autos);
console.log('---');

//Vemos que la sintáxis utilizada para introducir o crear una propiedad es la misma que para modificar el valor de una propiedad ya existente.
autos.modelos = ['F-100', 'Pulentería', 'Gambertuni'];
console.log(autos);
console.log('----');

//EN EL CASO DE QUERER ELIMINAR ALGUNA PROPIEDAD, utilizamos la palabra reservada 'DELETE', seguida del objeto junto a la propiedad de interés. Por ejemplo:

delete autos.marcas;
console.log(autos);
console.log('------');

//Si quisiéramos agregar FUNCIONES, lo hacemos de la siguiente manera:
var misFunciones = {
    saludar: function(){
        console.log('¿Qué hacé boló?! ¿Qué me contursi?');
    }
};

misFunciones.saludar();
console.log();

//BRACKET - NOTATION
//Esta notación cumple la misma función que la "dot - notation", pero requiere del uso de corchetes.

//En el caso de utilizar este formato PARA CREAR PROPIEDADES dentro de un objeto, ES CRUCIAL ESCRIBIR LA MISMA COMO UN STRING, sino no va andar.

//En el siguiente ejemplo, le queremos agregar la propiedad 'piernas' a nuestro objeto 'atuendos' (creado previamente).

var atuendos = {manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes']};
console.log(atuendos);
console.log();
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);
console.log('-------');

//Una particularidad muy útil de este tipo de notación es la de poder GUARDAR UNA VARIABLE EXTERNA COMO PROPIEDAD DE UN OBJETO.
//En el sigueinte ejemplo veremos lo que sucede si utilizamos dot y bracket notation del modo inadecuado:

var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos){

    comidas.propUno = ['Frutas', 'Vegetales'];
    comidas['propDos'] = ['Hamburguesas','Papas Fritas'];

};
diferenciaDeNotaciones('saludable', 'noSaludable');
console.log(comidas);
console.log();
//La consola nos da como resultado un objeto con las propiedades 'propUno' y 'propDos'. Es decir, no le puso a estas propiedades los nombres de las variables que nosotros le pasamos como argumentos ('saludable' y 'noSaludable').
//Para solucionar esto, lo que tenemos que hacer DENTRO DE LA FUNCIÓN es DEFINIR LAS PROPIEDADES CON BRACKET-NOTATION SIN UTILIZAR LAS COMILLAS, de este modo, le estaremos indicando a Javascript que el nombre de la propiedad será la variable y no la palabra que utilizamos para definirla (dentro de la función) de manera literal.
//Por lo tanto, ahora, la definicion de las propiedades del objeto 'comidas2' será:

//comidas2[propUno] y comidas2[propDos]
//En bracket-notation y sin comillas.

var comidas2 = {};
var diferenciaDeNotaciones2 = function (propUno, propDos){

    comidas2[propUno] = ['Frutas', 'Vegetales', 'Grasas saludables'];
    comidas2[propDos] = ['Hamburguesas', 'Salchicas', 'Cerveza'];

};
diferenciaDeNotaciones2('saludable', 'noSaludable');
console.log(comidas2);


//CON BRACKET NOTATION Y COMILLAS DOBLES PODEMOS CREAR UNA NUEVA PROPIEDAD O ACCEDER AL VALOR DE UNA PROPIEDAD.

//objetoProducto["precioFinal"] = cuentita random;
//console.log(objetoProducto["productoFinal"]);

//SI USAMOS BRACKET NOTATION SIN COMILLAS, SÓLO ESTAMOS ACCEDIENDO A LA PROPIEDAD, NO A SU CONTENIDO. SÓLO ES ÚTIL SI QUEREMOS ELMIINAR UNA PROPIEDAD POR COMPLETO DE NUESTRO OBJETO.

//LA DOT NOTATION SÓLO LA UTILIZAMOS PARA ACCEDER A INFORMACIÓN QUE YA SABEMOS QUE EXISTE EN EL OBJETO.