
interface Plantas {
    nombre:string;
    color:string;
    flor:boolean;
    origen?: string ; //dato 
}


const rosa: Plantas = {
    nombre:'Rosa',
    color:'rojo',
    flor:true,
}


interface Perros {
    nombre:string;
    raza:string;
    size:number;
    juguetes:string[];
 
}

const unPerro: Perros = {
    nombre:'Skipy',
    raza:'Labrador',
    size:100,
    juguetes:['pelota','mordillo']
}

interface Persona1 {
    nombre:string;
    edad:number;
    trabaja:boolean;
    actividades:string[];
    ciudad?: string ; //dato 
}

const roberto: Persona1 = {
    nombre:'Aquaman',
    edad:40,
    trabaja:true,
    actividades:['Trabajar','Ir a comprar','Ir al gim','Sacar a pasear al perro','regar plantas'],
    ciudad:"Barcelona"
}
console.log(rosa)
console.log(unPerro)
console.log(roberto)


