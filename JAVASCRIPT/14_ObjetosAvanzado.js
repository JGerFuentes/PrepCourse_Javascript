//Dentro de Javascript, existe un objeto global llamado 'Object' que extiende diferentes métodos a los objetos que definamos.
//Recordemos que los métodos son funciones predefinidas que nos permiten agilizar tareas.

//Método .HASOWNPROPERTY():
//Este método nos permitirá saber si un objeto tiene alguna propiedad específica. La respuesta es un valor booleano. Resulta muy útil al momento de tener que validar cierta información dada.
//En el siguiente ejemplo queremos saber si el objeto 'libro' contiene una propiedad llamada 'nombre':
var libros = { autor:'Borges', genero:'Policial', año:1990};
var contienePropiedad = libros.hasOwnProperty('nombre');
console.log(contienePropiedad);
//Ahora buscaremos que tenga la propiedad 'autor':
var contienePropiedad = libros.hasOwnProperty('autor');
console.log(contienePropiedad);
console.log('-----');

//Método OBJECT.KEYS():
//Este método nos devuelve un ARREGLO con el nombre de TODAS las propiedades de un objeto de nuestro interés.

var todasLasPropiedades = Object.keys(libros);
console.log(todasLasPropiedades);
console.log('-------');
//Más información en: https://www.w3schools.com/jsref/jsref_object_keys.asp


//Método BUCLE FOR-IN:
//Este bucle nos permite recorrer un objeto, propiedad a propiedad.
//PARA ELLO ES NECESARIO DEFINIR UNA VARIABLE DE ITERACIÓN Y ACLARAR CUÁL ES EL OBJETO A RECORRER. En este caso (VAR 'prop' IN 'mundo') (SIN LAS COMILLAS). 

//En el siguiente ejemplo, recorremos el objeto 'mundo' e imprimimos una a una sus propiedades (claves) y sus respectivos valores. Para estos últimos, accedimos mediante BRACKET-NOTATION.


var mundo = {continente:7, paises:195, oceanos:5};
for (var prop in mundo){
    console.log('Esta es la propiedad:', prop);
    console.log('Este es su valor:', mundo[prop]);
    console.log('¿Y si uso dot-notation?', mundo.prop);
};
console.log('------------------');

//ES MUY IMPORTANTE ACLARAR, QUE SÓLO PODEMOS ACCEDER A LOS VALORES DE LAS PROPIEDADES MEDIANTE BRACKET-NOTATION, YA QUE DE ESTE MODO SOLICITAMOS EL VALOR DE UNA PROPIEDAD, NO UNA PROPIEDAD LLAMADA 'PROP'. (Observar la consola)


//CONTEXTO - Objeto global THIS.:
//Esta funcionalidad hace referencia al contexto del objeto. Nos permite manipular el contexto en el que las funciones y la información está siendo ejecutada. De esta forma podremos tener un alcance más preciso dentro de nuestro código.

//Como ejemplo, crearemos un objeto llamado 'mascota'. Este contiene una propiedad llamada 'info' cuyo valor es una función. Esta función, al ejecutarla, debería mostrarnos la raza del perro en la consola.

        //var mascota = {
            //animal: 'Perro', 
            //raza: 'Ovejero Alemán', 
            //amistoso: true, 
            //dueña: 'María López', 
            //info: function(){
        //    console.log('Mi perro es un', raza);
            //}
        //};

//Cuando queremos ejecutar la función ubicada dentro del objeto, nos encontramos con que la consola nos avisa que la plabra raza no exite, no está definida. Esto sucede porque NUESTRA FUNCIÓN NO ESTÁ RECONOCIENDO EL CONTEXTO EN EL QUE QUEREMOS QUE SE EJECUTE.

        //mascota.info();


//Para  poder acceder desde la función a otra propiedad de este mismo objeto, primero debemos informarle a la función que el contexto al que hacemos referencia es un objeto (justamente el mismo en el que se encuentra). Para esto utilizaremos el objeto 'this' de la siguiente manera: 'this.raza'.
    var mascota = {
        animal: 'Perro', 
        raza: 'Ovejero Alemán', 
        amistoso: true, 
        dueña: 'María López', 
        info: function(){
            console.log('Mi perro es un ' + this.raza);
        }
    };

    mascota.info();

    //La función de 'info' también se puede definir de la siguiente manera, dentro del objeto 'mascota':
    
        //info: () => {
            //console.log('Mi perro es un  ' + this.raza);
        //}


//Más información en: https://www.w3schools.com/js/js_this.asp