const sequelize = require('./configDb');
const tabllaEjemplo = require('../Tablas/ejmploTabla'); //De esta manera llamamos al modelo creado
const createTable = require('../Functions/createTables'); //Este es el metodo que nos permite creear tablas desde el backend
const Interno = require('../Tablas/Interno');
const foreigKey = require('./relaciones');

init = function() {
    sequelize.authenticate().then(() => {
        console.log("Conexion establecida exitosamente con mysql.");
        foreigKey();
    }).catch(err => {
        console.error("Conexion no estableccida:", err);
    });

    // createTable(tabllaEjemplo) //Si se requiere usar se invoca la variable createTable y dentro de su parentecis el modelo que necesitemos crear 

}


getInternos = function(callback) {
    Interno.findAll().then(registros => callback(registros));
}

module.exports.init = init;
module.exports.getInternos = getInternos;