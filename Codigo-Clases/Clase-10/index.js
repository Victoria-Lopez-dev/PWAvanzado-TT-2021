console.log("Hola mundo");
var telefono = {
    des: 'Celular Samsung X20',
    precio: 5000
};
var tablet = {
    des: ' Samsung X30',
    precio: 70000
};
function calcularImpuestos(productos) {
    var total = 0;
    productos.forEach(function (prod) {
        total += prod.precio * 0.21;
    });
    return total;
}
var articulos = [telefono, tablet];
var impuesto = calcularImpuestos(articulos);
console.log("El impuesto es: " + impuesto);
function calcularImpuestos2(productos) {
    var total = 0;
    productos.forEach(function (_a) {
        var precio = _a.precio;
        total += precio;
    });
    return [total, total * 0.21];
}
var impuestoOtro = calcularImpuestos2(articulos);
console.log("El otro inpuesto  es: " + impuestoOtro);
