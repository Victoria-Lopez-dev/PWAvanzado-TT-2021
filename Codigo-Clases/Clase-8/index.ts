console.log("Hola mundo ");

//Variables

let nombre:string = "Pepe";
let persona:number = 25;
let apellido: string | number = 25
let ganar:boolean = false;

//Interfaces

interface Personaje {
    nombre:string;
    pv:number;
    habilidades:string[];
    ciudad?: string ; //dato 
}

//Objetos

const personaje: Personaje = {
    nombre:'Aquaman',
    pv:100,
    habilidades:['Agua','Rayo'],
    ciudad:'45645'
}

console.table(personaje);


//Funciones

function sumar(num1:number, num2:number) {
    return num1 + num2;
}

const sumarA = (num1:number ,num2:number)=>{
    return num1 + num2
}

const resultado = sumar(100,300);
console.log(resultado);


 function multiplicar(a:number,b:number,c?:number):number { // function name ():number -> quiere decir que el resultado debe ser si o si number.Tipamos el resultado

    /* return a * b * c;     va a marcar el c para avisarnos que puede generar un error, ya que al hacer esa funcion, en caso que no sea un number el parametro c, va a dar error.*/
    return a*b;
 }

 //Funciones a la interfaces

 interface personajeJuego{
     nombre:string;
     pv:number;
     mostrarPv:()=> void;
 }


//Objeto tipo personajeJuego

const nuevoPersonaje : personajeJuego = {
    nombre:'Goku',
    pv:80,
    mostrarPv: ():void =>{
        console.log(`${nuevoPersonaje.nombre} tiene ${nuevoPersonaje.pv} puntos de vida `);
    }
}


 function curarPersonaje(personaje:personajeJuego, curar: number):void{
     personaje.pv += curar;
     console.log(`${personaje.nombre} ha sido curado con ${curar} puntos de vida y ahora tiene ${personaje.pv}`);
     
 }
 curarPersonaje(nuevoPersonaje,20)
 console.log(nuevoPersonaje.mostrarPv());
console.log(nuevoPersonaje);


// Objetos
/* Puedo crear una iterfaz que puedo utilizar dentro de otra interfaz*/
interface Direccion{
    calle:string;
    numero:number
}

interface superHeroe {
    nombre:String;
    edad:Number;
    direccion:Direccion  
}

const marvel: superHeroe ={
    nombre:'Logan',
    edad:35,
    direccion:{
        calle:'USA',
        numero:1234
    }
}


//Clases en TypeScript
//Las clases son modelos

class Heroe{
    constructor(
         nombre: string, 
        public pv: number,
        public poder: string, 
        public ciudad: string,
        public edad: number,
    ){}
  
}


const Thor = new Heroe('Thor',100,'Martillo','USA',28);

