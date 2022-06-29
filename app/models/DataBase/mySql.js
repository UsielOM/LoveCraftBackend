const sequelize = require('./configDb');
const tabllaEjemplo = require('../Tablas/ejmploTabla'); //De esta manera llamamos al modelo creado
const createTable = require('../Functions/createTables'); //Este es el metodo que nos permite creear tablas desde el backend
const Interno = require('../Tablas/Interno');
const Roll = require('../Tablas/Roll');
const Area = require('../Tablas/Area');
const Usuarios = require('../Tablas/Usuarios');
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

//Metodos Post

postArea = function(request, callback) {
    Area.create({
        Nombre: request.Nombre
    }).then(callback(true));
};

postRoll = function(request, callback) {
    Roll.create({
        Descripcion: request.Descripcion
    }).then(callback(true));
};
postUsuarios = function(request, callback) {
    Usuarios.create({
        Nombre: request.Nombre,
        Apellido: request.Apellido,
        Telefono: request.Telefono,
        Correo: request.Correo
    }).then(callback(true));

};

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



module.exports.init = init;
module.exports.getInternos = getInternos;
module.exports.postRoll = postRoll;
module.exports.postArea = postArea;
module.exports.postUsuarios = postUsuarios;
module.exports.postInternos = postInternos;