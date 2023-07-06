//PROTOTIPOS
//Se trata de un mecanismo por el cual todos los objetos o elementos de Javascript pueden extender sus propiedades y métodos. Estan muy ligados a los métodos que poseen los objetos y las clases.
//El proceso en el que los procesos globales de Javascript le extienden métodos y propiedades a cualquier tipo de dato se denomina HERENCIA.
//Todos los objetos pueden heredar propiedades y métodos por medio de un prototipo. Es gracias a estos prototipos que podemos acceder al CONSTRUCTOR de cualquier objeto para modificarlo.
        //RECORDAR QUE: Las PROPIEDADES SE DECLARAN con la palabra reservada CONSTRUCTOR, seguida de paréntesis y llaves.

//EJEMPLO:
    //QUEREMOS AGREGAR UN NUEVO MÉTODO AL "CONSTRUCTOR" DE UN PROTOTIPO. Este método nos devolverá un arreglo en el cual se encuentren todos los números mayores a 3 que tenga un arreglo dado, convertidos en el valor booleano "false".

    //Primero escribiremos la palabra "Array" para poder ingresar al objeto global. Le agregamos un punto y a continuación escribimos "prototype". De esta manera, indicamos que queremos INGRESAR a esta propiedad: AL PROTOTIPO DEL OBJETO GLOBAL ARRAY.
    //Luego especificamos el nombre que queremos para este nuevo método, "mayoresQueTres". Todo esto lo igualaremos a una función.
    //Luego desarrollaremos la lógica que nos permita acceder a los valores que tendrá el arreglo y que ejecute este método. Para ello, utilizaremos la palabra reservada "THIS", para definir el contexto de la acción. En este caso, THIS EQUIVALE AL ARREGLO QUE EJECUTA EL MÉTODO "mayorQueTres". Por lo tanto, como ahora THIS equivale a un arreglo, vamos a poder utilizar todas las propiedades y métodos que ya conocemos que corresponden a los arrays.

    //La lógica consiste en:
        //- Crear una variable llamada "arregloModificado" igual a una arreglo vacío.
        //- Recorremos el arreglo dado (representado por THIS), con un bucle for.
        //- Verificamos la condición de que cada valor sea mayor a 3 y, si lo cumple, pusheamos un false en nuestro arreglo vacío. Si no se cumple la condición, pusheamos el valor leído.
        //- Finalmente retornamos en arreglo creado con los nuevos valores.

    Array.prototype.mayoresQueTres = function(){
        var arregloModificado = [];
        for (let i = 0; i < this.length; i++){
            if (this[i] > 3){
                arregloModificado.push(false);
            } else{
                arregloModificado.push(this[i]);
            }
        }
        return arregloModificado;
    };

    //LISTO! Ya agregamos nuestro método al "constructor" del objeto global "Array".
    //Para probarlo, declaramos una variable de tipo array llamada "arreglo" que contiene los números del 1 al 5. A esta variable le aplicaremos el nuevo método que acabamos de crear y guardamos el resultado en una variable llamada "nuevoArreglo". Por último, hacemos un console.log del nuevo arreglo.

    var arreglo = [1, 2, 3, 4, 5];
    var nuevoArreglo = arreglo.mayoresQueTres();

    console.log(nuevoArreglo);

    //De este modo, ahora podremos crear todos los métodos que querramos para acelerar los procesos de desarrollo de código.

//OTRO EJEMPLO:

    //Crearemos una clase llamada "Latinoamerica". Esta contendrá una única propiedad llamada "paises" dentro de su "constructor". Esa propiedad será igual a un arreglo vacío.
    //Mediante el prototipo de esta clase, crearemos un método que nos permita agregar el nombre de un país dentro de la propiedad llamada "paises". Por lo tanto, esta propiedad será un arreglo de strings.
    //Para la creación del método, escribimos el nombre de la clase, seguida de un punto y de la palabra "prototype". Luego, escribiremos el nombre del método, por ejemplo, "agregarPais". Esto será igual a una función que recibirá por parámetro un país, accederá a la propiedad "paises" utilizando la palabra THIS y pusheará en ella el valor recibido por parámetro.

    class Latinoamerica {
        constructor() {
            this.paises = [];
        }
    }

    Latinoamerica.prototype.agregarPais = function(pais){
        this.paises.push(pais);
    };

    //Listo! Ahora, para probarlo, creamos una variable de nombre "continente" que será igual a una NUEVA INSTANCIA DE LA CLASE "Latinoamerica".
    //A partir de esta instancia, accederemos al método "agregarPais" y le pasaremos por parámetro la palabra "Mexico".
    //Por último, haremos un console.log de la propiedad "paises", de nuestra instancia "continente". Y ejecutaremos el archivo.

    var continente = new Latinoamerica();
    continente.agregarPais('Mexico');

    console.log(continente.paises);

//Conclusión:
// VIMOS QUE LOS PROTOTIPOS LE PERMITEN A LOS OBJETOS DE JAVASCRIPT HEREDAR PROPIEDADES Y MÉTODOS A OTROS ELEMENTOS, COMO POR EJEPLO A OTROS OBJETOS.
// PODEMOS UTILIZAR ESTOS PROTOTIPOS PARA ACCEDER AL CONSTRUCTOR DE UNA CLASE Y AGREGAR MÉTODOS.



