const fs = require('fs');

fs.mkdir('./nuevaCarpeta',(error)=>{    //funcion para crear una carpeta con la condicion por si ya existe una carpeta con dicho nombre
if(error){
    console.log(error)
}else{
    console.log("carpeta creada");
}

});