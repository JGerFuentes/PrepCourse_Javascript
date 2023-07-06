//Las expresiones de clase en Javascript pueden participar en la composición de otras clases, es decir que a partir de una clase con ciertas propiedades y ciertos métodos, podemos crear otras clases que hereden algunas de esas propiedades o de esos métodos.
 
//En el siguiente ejemplo, crearemos una clase "persona". Esta tendrá como propiedades: "nombre" y "edad" (por lo que las vamos a escribir en su CONSTRUCTOR). Además, esta clase contará con un método llamado "saludar", que simplemente hará un console.log con un mensaje específico.

    class Persona {
        constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }

        saludar() {
            console.log('Hola, mi nombre es ' + this.nombre + '. Tengo ' + this.edad + ' años.');
        }
    }

    //Ahora pondremos la clase a prueba. Para ello creamos una nueva instancia de "Persona", es decir, la INICIALIZAMOS con la palabra reservada NEW. Luego, ejecutamos el método "saludar" de esta instancia y veremos qué nos devuelve la terminal.

    var martin = new Persona('Martin', 26);

    martin.saludar();
    console.log('-------');

    //Este ejemplo nos muestra cómo una clase nos permite crear una o muchas instancias de una misma entidad.

//----EXTENSIÓN DE CLASE----
//Extender clases nos va a permitir tener una clase general que le heredará propiedades y métodos a otras clases. De esta forma, podremos generar distintas sub-entidades que puedan mantener sus propias características, pero que compartan algunas otras generales.

    //EJEMPLO:
    //Crearemos una clase llamada "Programador". Lo que haremos con ella es EXTENDERLE (HEREDARLE) LAS PROPIEDADES Y/O MÉTODOS DE LA CLASE "PERSONA". Para ello utilizamos la palabra reservada EXTENDS.
    //Posteriormente, decidiremos qué propiedades queremos que tenga la clase "Programador". Para ello, abriremos el constructor y definiremos que tenga las propiedades "nombre", "edad" y "añosDeExperiencia".
    //Para que las primeras dos propiedades sean heredadas, utilizaremos la palabra reservada SUPER. Esta va a dentro del CONSTRUCTOR y le permitirá a esta clase no solo recibir las propiedades heredades, sino también decirle a estas qeu su nuevo contexto será la clase "Programador". Si no lo hiciéramos de esta forma, tendríamos que utilizar la palabra THIS y escribir muchas líneas de código.
    //Entre los paréntesis de SUPER, escribiremos el nombre de estas dos propiedades qeu queremos heredar.
    //Como la propiedad "añosDeExperiencia" no es una propiedad heredada, tendremos que declararla como una propiedad interna utilizando la palabra THIS.
    //Finalmente, agregaremos un método llamado "codear", que simplemente hará un console.log.
    class Programador extends Persona {
        constructor (nombre, edad, añosDeExperiencia) {
            super(nombre, edad);
            this.añosDeExperiencia = añosDeExperiencia;
        }

        codear() {
            console.log('Soy ' + this.nombre + '. Codeo desde hace ' + this.añosDeExperiencia + ' años.');
        }
    }

    var garnacha = new Persona('Garnacha', 87);
    garnacha.saludar();
    var programador = new Programador('Aureliano', 37, 4);
    programador.codear();

    //Los métodos de la clase "Persona" también fueron heredados por la clase "Programador". Si quisiéramos invocar el método 'saludar' de la primera clase, pero con los datos de la última clase, sólo tenemos que escribir lo siguietne sentencia: 

    programador.saludar();

//CONCLUSIÓN:
//DESCUBRIMOS QUE LAS CLASES TIENEN UN PROTOTIPO MEDIANTE EL CUAL PODREMOS ACCEDER A SU CONSTRUCTOR Y ASÍ AGREGAR O EDITAR MÉTODOS.
//LA EXTENSIÓN DE CLASES NOS PUEDE SER DE GRAN UTILIDAD CUANDO NECESITAMOS QUE ALGUNAS ENTIDADES ESTÉN RELACIONADAS EN NUESTRO CÓDIGO. PODEMOS EXTENDER MÁS DE UNA VEZ A CUALQUIER CLASE E, INCLUSO, PODEMOS EXTENDER UNA CLASE DE OTRAS CLASES YA EXTENDIDAS.
//DEPENDIENDO DE LOS PROBLEMAS QUE QUERAMOS RESOLVER Y EL CONTEXTO DE LOS MISMOS, UTILIZAREMOS LAS EXTENSIONES PARA CREAR UN CÓDIGO MÁS CONSISTENTE.
