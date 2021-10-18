class Persona{
    constructor(
        public nombre: string,
        public apellido: string,
        public especialidad: string,
        public matricula: number,
        public telefono: number,
        public edad: number,
        

    ){}
    
    decimeTuNombre(){
        return 'La persona se llama ' + this.nombre;
    }

}



/* Veterinario hereda todos los metodos de Persona */
class Veterinarios extends Persona{
  
    decimeTuMtricula(){
        return 'Mi matricula es ' + this.matricula;
    }
    alimentarAlPerro(){

    }
}

class Empleados extends Persona{

    static trabajar: string = 'Estoy trabajando';
    /* No se acceden mediante los objetos ,sino llamando a la clase en si.*/

    constructor(
        public nombre: string,
        public apellido: string,
        public especialidad: string,
        public matricula: number,
        public telefono: number,
        public edad: number,
        private salario:number, 
        /* atributo que no le va a pasar a Persona, esto va a quedar unicamente en la clase de Empleados y las demas clases no van a poder ver dicho atributo , lo encapsula.
        
        Por mas que lo instancie, no puedo tocar ni ver el atributo privado.Solamente puedo cambiarlo y modificarlo en la clase*/

    ){
        super(nombre,apellido,especialidad,matricula,telefono,edad)
    }

    aumentarSalario(incremento:number){
        this.salario+= incremento;
    }
}

class Clientes extends Persona {
    constructor(
        public nombre: string,
        public apellido: string,
        public especialidad: string,
        public matricula: number,
        public telefono: number,
        public edad: number,

    ){
        super(nombre,apellido,especialidad,matricula,telefono,edad)
    }
    saludar(){
        return 'Hola'
    }
}

class Propietario extends Clientes {
    constructor(
        public nombre: string,
        public apellido: string,
        public especialidad: string,
        public matricula: number,
        public telefono: number,
        public edad: number,

    ){
        super(nombre,apellido,especialidad,matricula,telefono,edad)
    }
}

const Victoria = new Veterinarios('Victoria','Gonzalez','Veterinaria',123456,1111111,40);

console.log(Victoria.decimeTuNombre());


const empleado1= new Empleados('Juan','Perez','Cajero',123,25,123456789,1000)

empleado1.aumentarSalario(50);

/*empleado1.trabajar ;     

No puedo llamarlo porque aca estoy llamando al objeto, para poder acceder al atributo estatico tengo que llamar a la clase
*/

Empleados.trabajar;
const unCliente = new Clientes('Carlos','Perez','Cajero',123,25,123456789)


console.log(unCliente.saludar());

console.log(empleado1.apellido)