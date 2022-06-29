const sequelize = require('./configDb');
const tabllaEjemplo = require('../Tablas/ejmploTabla'); //De esta manera llamamos al modelo creado
const createTable = require('../Functions/createTables'); //Este es el metodo que nos permite creear tablas desde el backend

init = function() {
    sequelize.authenticate().then(() => {
        console.log("Conexion establecida exitosamente con mysql.");
    }).catch(err => {
        console.error("Conexion no estableccida:", err);
    });

    // createTable(tabllaEjemplo) //Si se requiere usar se invoca la variable createTable y dentro de su parentecis el modelo que necesitemos crear 

}


module.exports.init = init;

const Roll = require('../Tablas/Roll');


//get de roll
getRoll = function(options, callback) {
    Roll.findOne({ where: { idRoll: options.idRoll } }).then(roll => callback(roll));
}
//Post Roll
postRoll = function(request, callback) {
    Roll.create({
        Descripcion: request.Descripcion

    }).then(callback(true));
};



module.exports.getRoll = getRoll;
module.exports.postRoll = postRoll;