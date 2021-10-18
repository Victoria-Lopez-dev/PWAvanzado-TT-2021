const fs = require('fs');

const data = fs.writeFileSync('./archivo.txt', 'escribimos algo en el archivo/si no existe, lo crea');

console.log(data)