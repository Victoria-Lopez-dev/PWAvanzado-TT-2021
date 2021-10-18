const http = require('http');
//requerimos un modulo
//creamos un objeto
//con http creamos un servidor con node nativo, sin express 
const server= http.createServer( function(peticion,respuesta) {
    respuesta.end("Mi primer servidor con HTTP nativo");
});

server.listen(3000,()=> {
    console.log("mi primer servidor");
})