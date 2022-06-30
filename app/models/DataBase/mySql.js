const sequelize = require('./configDb');
const tabllaEjemplo = require('../Tablas/ejmploTabla'); //De esta manera llamamos al modelo creado
const createTable = require('../Functions/createTables'); //Este es el metodo que nos permite creear tablas desde el backend
const Interno = require('../Tablas/Interno');

init = function() {
    sequelize.authenticate().then(() => {
        console.log("Conexion establecida exitosamente con mysql.");
    }).catch(err => {
        console.error("Conexion no estableccida:", err);
    });

    // createTable(tabllaEjemplo) //Si se requiere usar se invoca la variable createTable y dentro de su parentecis el modelo que necesitemos crear 

}



//get de interno
getInternos = function(callback) {
    Interno.findAll({
        include: [
            { model: Estatus, attributes: ['estatus'] },
            { model: Usuarios, attributes: ['Nombre'] },
            { model: Area, attributes: ['Nombre'] },
            { model: Roll, attributes: ['Descripcion'] }

        ],
        attributes: ['idInterno'],
    }).then(interno => callback(interno));
};
//Post interno
postInternos = function(request, callback) {
    Interno.create({
        Direccion: request.Direccion,
        Foto: request.Foto,
        Contraseña: request.Contraseña,
        Fech_ingre: request.Fech_ingre,
        Edad: request.Edad,
        idEstatus: request.idEstatus,
        idUsuarios: request.idUsuarios,
        idArea: request.idArea,
        idRoll: request.idRoll
    }).then(callback(true));
}

module.exports.postInternos = postInternos;
module.exports.getInternos = getInternos;
module.exports.init = init;