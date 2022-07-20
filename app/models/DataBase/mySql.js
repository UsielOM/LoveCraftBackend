const sequelize = require('./configDb');

const tabllaEjemplo = require('../Tablas/ejmploTabla'); //De esta manera llamamos al modelo creado
const createTable = require('../Functions/createTables'); //Este es el metodo que nos permite creear tablas desde el backend
const Interno = require('../Tablas/Interno');
const Roll = require('../Tablas/Roll');
const Area = require('../Tablas/Area');
const Usuarios = require('../Tablas/Usuarios');
const foreigKey = require('./relaciones');
const Estatus = require('../Tablas/Estatus');
const Horario = require('../Tablas/Horario');
const bcrypt = require('bcryptjs');

init = function() {
    sequelize.authenticate().then(() => {
        console.log("Conexion establecida exitosamente con mysql.");

    }).catch(err => {
        console.error("Conexion no estableccida:", err);
    });
    foreigKey();
    // createTable(Interno);
    // createTable(tabllaEjemplo) //Si se requiere usar se invoca la variable createTable y dentro de su parentecis el modelo que necesitemos crear 
}





//Metodos Get
getRoll = function(options, callback) {
    Roll.findOne({ where: { idRoll: options.idRoll } }).then(roll => callback(roll));
};


getRolls = function(callback) {
    Roll.findAll().then(rolls => callback(rolls));
}
getMaximoUsers = function(callback) {

    Usuarios.findAll({
        attributes: [
            [sequelize.fn('MAX', sequelize.col('idUsuarios')), 'idUsuarios']
        ],
        raw: true
    }).then(result => callback(result));


};


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
getAreas = function(callback) {
    Area.findAll().then(area => callback(area));
}
getArea = function(idArea, callback) {
    Area.findOne({ where: { idArea: idArea } }).then(area => callback(area));
}

getEstatus = function(callback) {
        Estatus.findAll().then(estatu => callback(estatu));
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
        Correo: request.Correo,
        Direccion: request.Direccion
    }).then(callback(true));

};

postInternos = function(request, callback) {
    const salt = bcrypt.genSaltSync();
    pw2 = bcrypt.hashSync(request.Contraseña, salt);

    Interno.create({
        Foto: request.Foto,
        Contraseña: pw2,
        Fech_ingre: request.Fech_ingre,
        Edad: request.Edad,
        idEstatus: request.idEstatus,
        idUsuarios: request.idUsuarios,
        idArea: request.idArea,
        idRoll: request.idRoll,
        idHorario: request.idHorario
    }).then(callback(true));
}
postHorario = function(request, callback) {
    Horario.create({
        Fecha: request.Fecha,
        Hora_inicial: request.Hora_inicial,
        Hora_final: request.Hora_final
    }).then(callback(true));
}

postEmpleado = function(request, callback) {
        const salt = bcrypt.genSaltSync();
        pw2 = bcrypt.hashSync(request.Contraseña, salt);
        Usuarios.create({
            Nombre: request.Nombre,
            Apellido: request.Apellido,
            Telefono: request.Telefono,
            Correo: request.Correo,
            Direccion: request.Direccion
        })
        Interno.create({
            Foto: request.Foto,
            Contraseña: pw2,
            Fech_ingre: request.Fech_ingre,
            Edad: request.Edad,
            idEstatus: request.idEstatus,
            idUsuarios: request.idUsuarios,
            idArea: request.idArea,
            idRoll: request.idRoll

        }).then(callback(true));
    }
    //Metodos PUT

putArea = function(req, callback) {
    Area.findOne({ where: { idArea: req.idArea } }).then(function(area) {
        area.update({
            Nombre: req.Nombre
        });
        callback(area);
    });
}
putRoll = function(request, callback) {
        Roll.findOne({ where: { idRoll: request.idRoll } }).then(function(roll) {
            roll.update({
                Descripcion: request.Descripcion
            });
            callback(roll);
        })
    }
    //Metods Delete
deleteArea = function(idArea, callback) {
    Area.findOne({ where: { idArea: idArea } }).then(function(article) {
        if (article != null) {
            article.destroy().then(result => callback(result));
        } else {
            callback(null);
        }
    });
};

deleteRoll = function(idRoll, callback) {
    Roll.findOne({ where: { idRoll: idRoll } }).then(function(article) {
        if (article != null) {
            article.destroy().then(result => callback(result));
        } else {
            callback(null)
        }
    });
}

module.exports.init = init;
module.exports.postRoll = postRoll;
module.exports.postArea = postArea;
module.exports.postUsuarios = postUsuarios;
module.exports.postInternos = postInternos;
module.exports.getInternos = getInternos;
module.exports.getAreas = getAreas;
module.exports.getRoll = getRoll;
module.exports.getMaximoUsers = getMaximoUsers;
module.exports.postHorario = postHorario;
module.exports.postEmpleado = postEmpleado
module.exports.getRolls = getRolls;
module.exports.getEstatus = getEstatus;
module.exports.getArea = getArea;

//put
module.exports.putArea = putArea;
module.exports.putRoll = putRoll;

//Delete
module.exports.deleteArea = deleteArea;
module.exports.deleteRoll = deleteRoll