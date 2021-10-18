"use strict";
console.log("Hola mundo ");
//Variables
var nombre = "Pepe";
var persona = 25;
var apellido = 25;
var ganar = false;
//Objetos
var personaje = {
    nombre: 'Aquaman',
    pv: 100,
    habilidades: ['Agua', 'Rayo']
};
console.table(personaje);
//Funciones
function sumar(num1, num2) {
    return num1 + num2;
}
var sumarA = function (num1, num2) {
    return num1 + num2;
};
var resultado = sumar(100, 300);
console.log(resultado);
function multiplicar(a, b, c) {
    /* return a * b * c;     va a marcar el c para avisarnos que puede generar un error, ya que al hacer esa funcion, en caso que no sea un number el parametro c, va a dar error.*/
    return a * b;
}
//Objeto tipo personajeJuego
var nuevoPersonaje = {
    nombre: 'Goku',
    pv: 80,
    mostrarPv: function () {
        console.log(nuevoPersonaje.nombre + " tiene " + nuevoPersonaje.pv + " puntos de vida ");
    }
};
function curarPersonaje(personaje, curar) {
    personaje.pv += curar;
    console.log(personaje.nombre + " ha sido curado con " + curar + " puntos de vida y ahora tiene " + personaje.pv);
}
curarPersonaje(nuevoPersonaje, 20);
console.log(nuevoPersonaje.mostrarPv());
console.log(nuevoPersonaje);
var marvel = {
    nombre: 'Logan',
    edad: 35,
    direccion: {
        calle: 'USA',
        numero: 1234
    }
};
//Clases en TypeScript
//Las clases son modelos
var Heroe = /** @class */ (function () {
    function Heroe(nombre, pv, poder, ciudad, edad) {
        this.pv = pv;
        this.poder = poder;
        this.ciudad = ciudad;
        this.edad = edad;
    }
    return Heroe;
}());
var Thor = new Heroe('Thor', 100, 'Martillo', 'USA', 28);
