var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Perro = /** @class */ (function () {
    function Perro() {
        this.nombre = "jose";
    }
    Perro.prototype.ladrar = function () {
        return this.nombre + " waw!";
    };
    Perro.prototype.cambioNombre = function (otroNombre) {
        this.nombre = otroNombre;
        return this.nombre + " waw!";
    };
    return Perro;
}());
var otroPerro = new Perro();
console.log(otroPerro.cambioNombre("pepe"));
console.log(otroPerro.nombre);
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, especialidad, matricula, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
        this.matricula = matricula;
        this.telefono = telefono;
        this.edad = edad;
    }
    Persona.prototype.decimeTuNombre = function () {
        return 'La persona se llama ' + this.nombre;
    };
    return Persona;
}());
/* Veterinario hereda todos los metodos de Persona */
var Veterinarios = /** @class */ (function (_super) {
    __extends(Veterinarios, _super);
    function Veterinarios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Veterinarios.prototype.decimeTuMtricula = function () {
        return 'Mi matricula es ' + this.matricula;
    };
    Veterinarios.prototype.alimentarAlPerro = function () {
    };
    return Veterinarios;
}(Persona));
var Empleados = /** @class */ (function (_super) {
    __extends(Empleados, _super);
    /* No se acceden mediante los objetos ,sino llamando a la clase en si.*/
    function Empleados(nombre, apellido, especialidad, matricula, telefono, edad, salario) {
        var _this = _super.call(this, nombre, apellido, especialidad, matricula, telefono, edad) || this;
        _this.nombre = nombre;
        _this.apellido = apellido;
        _this.especialidad = especialidad;
        _this.matricula = matricula;
        _this.telefono = telefono;
        _this.edad = edad;
        _this.salario = salario;
        return _this;
    }
    Empleados.prototype.aumentarSalario = function (incremento) {
        this.salario += incremento;
    };
    Empleados.trabajar = 'Estoy trabajando';
    return Empleados;
}(Persona));
var Clientes = /** @class */ (function (_super) {
    __extends(Clientes, _super);
    function Clientes(nombre, apellido, especialidad, matricula, telefono, edad) {
        var _this = _super.call(this, nombre, apellido, especialidad, matricula, telefono, edad) || this;
        _this.nombre = nombre;
        _this.apellido = apellido;
        _this.especialidad = especialidad;
        _this.matricula = matricula;
        _this.telefono = telefono;
        _this.edad = edad;
        return _this;
    }
    Clientes.prototype.saludar = function () {
        return 'Hola';
    };
    return Clientes;
}(Persona));
var Propietario = /** @class */ (function (_super) {
    __extends(Propietario, _super);
    function Propietario(nombre, apellido, especialidad, matricula, telefono, edad) {
        var _this = _super.call(this, nombre, apellido, especialidad, matricula, telefono, edad) || this;
        _this.nombre = nombre;
        _this.apellido = apellido;
        _this.especialidad = especialidad;
        _this.matricula = matricula;
        _this.telefono = telefono;
        _this.edad = edad;
        return _this;
    }
    return Propietario;
}(Clientes));
var Victoria = new Veterinarios('Victoria', 'Gonzalez', 'Veterinaria', 123456, 1111111, 40);
console.log(Victoria.decimeTuNombre());
var empleado1 = new Empleados('Juan', 'Perez', 'Cajero', 123, 25, 123456789, 1000);
empleado1.aumentarSalario(50);
/*empleado1.trabajar ;

No puedo llamarlo porque aca estoy llamando al objeto, para poder acceder al atributo estatico tengo que llamar a la clase
*/
Empleados.trabajar;
var unCliente = new Clientes('Carlos', 'Perez', 'Cajero', 123, 25, 123456789);
console.log(unCliente.saludar());
console.log(empleado1.apellido);
