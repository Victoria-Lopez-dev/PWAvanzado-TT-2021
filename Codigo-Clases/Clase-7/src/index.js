const{ PORT } = require('./global');
const { getConnection } = require('./connection');
const app = require('./server');

getConnection().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Este servidor esta corriendo en el puerto ${PORT}`)
    });
}).catch(err =>{
console.log(err);
});


