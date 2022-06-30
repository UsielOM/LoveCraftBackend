const sequelize = require('./configDb');


init = function() {
    sequelize.authenticate().then(() => {
        console.log("Conexion establecida exitosamente con mysql.");
    }).catch(err => {
        console.error("Conexion no estableccida:", err);
    });

    // createTable(tabllaEjemplo) //Si se requiere usar se invoca la variable createTable y dentro de su parentecis el modelo que necesitemos crear 
}


module.exports.init = init;
