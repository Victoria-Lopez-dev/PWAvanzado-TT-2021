console.log("Hola mundo");

interface Producto{
    des:string;
    precio:number;
}

const telefono: Producto ={
    des:'Celular Samsung X20',
    precio:5000
}

const tablet: Producto ={
    des:' Samsung X30',
    precio:70000
}

function calcularImpuestos(productos:Producto[]): number {
    let total =0;
    productos.forEach(prod => {
        total += prod.precio *0.21;
    });
    return total;
}

const articulos: Producto[] =[telefono,tablet];

const impuesto = calcularImpuestos(articulos);

console.log(`El impuesto es: ${impuesto}`);


function calcularImpuestos2(productos:Producto[]): [number,number] {
    let total =0;
    productos.forEach(({precio}) => {
        total += precio ;
    });
    return [total,total * 0.21];
}

const impuestoOtro = calcularImpuestos2(articulos);

console.log(`El otro inpuesto  es: ${impuestoOtro}`);