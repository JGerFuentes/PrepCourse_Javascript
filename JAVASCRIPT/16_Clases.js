//CLASES: Son un conjunto de datos que pertenecen a una entidad. Podrían pensarse como una plantilla o como un modelo de una entidad. NOS PERMITEN CREAR UN OBJETO DE INFORMACIÓN PARA REPRESENTAR DISTINTAS ENTIDADES EN NUESTRO CÓDIGO.
//ENTIDADES: Representación de conceptos del mundo real, por ejemplo, usuarios y videos dentro del contexto de YouTube.

//EJEMPLO: Existen miles de animales en el mundo. Algunas propiedades de estos podrían ser su "hábitat", el tipo de "ojos" o su "color". Todos los animales compartirán estas propiedades pero sus valores serán diferentes.
//La clase "animal" nos permite tener un CONCEPTO BASE para representar animales del mundo real.

//LAS CLASES SE DECLARAN SIEMPRE CON LA PRIMER LETRA DE SU NOMBRE EN MAYÚSCULA.
//Además, CUENTAN CON DOS TIPOS DE DATOS: Propiedades y Métodos.


//Existen dos SINTAXIS para declarar las clases:

//----FUNCIÓN CONSTRUCTORA----
    /**CÓDIGO ANULADO */
    // function Auto(puertas, color, marca, año, ruedas) {
    //     this.puertas = puertas;
    //     this.color = color;
    //     this.marca = marca;
    //     this.año = año;
    //     this.ruedas = ruedas;
    // };

    //Ahora que la definimos, INICIALIZAREMOS nuestra clase Auto (es decir, vamos a utilizar esta plantilla).
    //Para eso CREAREMOS UNA VARIABLE llamada "miPrimerAuto", que será igual a la palabra reservada NEW y NOS PERMITIRÁ CREAR UNA INSTANCIA DE NUESTRA CLASE.

    /**CÓDIGO ANULADO */
    // var miPrimerAuto = new Auto(2, "Rojo", "Ferrari", 2018, 4);
    // console.log(miPrimerAuto);
    // console.log('Su marca es: ' + miPrimerAuto.marca);
    // console.log();

    //Ahora podremos utilizar nuestra clase Auto como una plantilla para la creación de otros autos con diferentes propiedades.

    //Ejemplo:
    //var miSegundoAuto = new Auto (4, "Negro", "Honda", 2022, 5);
    //console.log(miSegundoAuto);
    //console.log('Su marca es: ' * miSegundoAuto.marca);
    //console.log();


    //Ahora agregaremos MÉTODOS a una clase.
        //Queremos que nuestros autos tengan un método que nos de información acerca de la instancia. Para esto utilizaremos "this.'nombreDelMétodo'", dentro de la definición de la clase.

        /**CÓDIGO ANULADO */
        // function Auto(puertas, color, marca, año, ruedas) {
        //     this.puertas = puertas;
        //     this.color = color;
        //     this.marca = marca;
        //     this.año = año;
        //     this.ruedas = ruedas;

        //     this.informacion = function(){
        //         console.log("Este es un " + this.marca + " de color " + this.color);
        //     }
        // }

        //Ahora accedemos a la función:
            //(TENER EN CUENTA QUE YA NOS HABÍA QUEDADO INICIALIZADA DESDE EL INCISO ANTERIOR, SI NO LO ESTUVIERA, DEBEMOS HACERLO)

        /**CÓDIGO ANULADO */
        //miPrimerAuto.informacion();
        
        //En consola se puede leer "Este es un Ferrari de color Rojo".

        //---Esto significa que dentro de los métodos de una clase podemos referirnos a la informacion de esta misma clase mediante la palabra reservada THIS para indicar un contexto.---


//----EXPRESIÓN DE CLASE----
//Utiliza la palabra reservada "class". No se utilizan paréntesis porque no es una función (como sí lo era antes). Recordemos que en su interior almacenan propiedades y métodos.
//Las propiedades se declaran con la palabra reservada "constructor", seguida de paréntesis y llaves.
    //LAS PROPIEDADES LAS RECIBIREMOS POR PARÁMETRO, POR LO QUE LAS ESCRIBIMOS DENTRO DE LOS PARÉNTESIS.
    //DENTRO DE LAS LLAVES, LAS DECLARAMOS Y LAS IGUALAMOS A LOS VALORES RECIBIDOS.

    /**CÓDIGO ANULADO */
    // class Auto{
    //     constructor(puertas, color, marca, año, ruedas){
    //         this.puertas = puertas;
    //         this.color = color;
    //         this.marca = marca;
    //         this.año = año;
    //         this.ruedas = ruedas;
    //     }
    // };

    //Ahora inicializamos la clase y la vemos en consola.

    // var miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
    // console.log(miSegundoAuto);
    // console.log(miSegundoAuto.marca);


//Ahora le asociaremos MÉTODOS.
//COMO ESTOS NO SON PROPIEDADES, LOS AÑADIMOS POR FUERA DEL CONSTRUCTOR.
//Para hacerlo simplemente ESCRIBIMOS EL NOMBRE DEL MÉTODO, SEGUIDO DE PARÉNTESIS Y LLAVES.

    class Auto{
        constructor(puertas, color, marca, año, ruedas){
            this.puertas = puertas;
            this.color = color;
            this.marca = marca;
            this.año = año;
            this.ruedas = ruedas;
        }

        informacion(){
            console.log("Este es un " + this.marca + " de color " + this.color);
        }
    };

    //Ahora, para verificar que funciona, accedemos a él desde la instancia y lo ejecutamos. SIEMPRE CON LA CLASE YA INICIALIZADA.

    var miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);

    miSegundoAuto.informacion();


//----Palabra reservada THIS----
//EJEMPLO: Crearemos la clase "Football" con una sola propiedad (llamada "jugador") y un solo método (llamdo "obtenerNombre"). Este último simplemente mostrará en consola el valor de la propiedad.

class Football{
    constructor(jugador){
        this.jugador = jugador
    }

    obtenerNombre(){
        console.log(this.jugador);
    }
}

//Ahora inicializaremos dos instancias de esta clase. Y ejecutaremos los métodos de ambas.

var argentina = new Football("Messi");
var brasil = new Football("Neymar");

argentina.obtenerNombre();
brasil.obtenerNombre();

//Lo que podemos observar en la consola es que cada método nos devuelve un valor distinto, por más que se esté accediendo a la misma propiedad.
//Esto se debe a que el contexto de cada variable declarada, es diferente.