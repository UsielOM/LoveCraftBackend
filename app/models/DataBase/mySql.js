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
const Visita = require('../Tablas/Visita');
const Citas = require('../Tablas/Citas');


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

getHorarioFechaIsac = function(idInterno, Fecha, callback) {
    Horario.findAll({ where: { Fecha: Fecha, idInterno: idInterno } }).then(hora => callback(hora));
}

getRoll = function(options, callback) {
    Roll.findOne({ where: { idRoll: options.idRoll } }).then(roll => callback(roll));
};
getInternoID = function(idUsuarios, callback) {
    Interno.findOne({ where: { idUsuarios: idUsuarios } }).then(interno => callback(interno))
}


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
            { model: Usuarios, attributes: ['idUsuarios', 'Nombre'] },
            { model: Area, attributes: ['Nombre'] },
            { model: Roll, attributes: ['Descripcion'] }

        ],
        attributes: ['idInterno'],
    }).then(interno => callback(interno));
};
//revisar
getInternoUsuarioArea = function(idArea, callback) {
    Interno.findAll({
        where: { idArea: idArea },
        include: [
            { model: Usuarios, attributes: ['idUsuarios', 'Nombre'] },

        ],
        attributes: ['idInterno'],
    }).then(interno => callback(interno));
}

//getInternoUsuarioArea

getUserCorreo = function(Correo, callback) {
    Usuarios.findOne({ where: { Correo: Correo } }).then(user => callback(user));
}


getInternoUser = function(idUsuarios, callback) {

    Interno.findOne({
        where: { idUsuarios: idUsuarios },
        include: [
            { model: Estatus, attributes: ['idEstatus', 'estatus'] },
            { model: Usuarios, attributes: ['Nombre', 'Apellido', 'Telefono', 'Correo', 'Direccion'] },
            { model: Area, attributes: ['idArea', 'Nombre'] },
            { model: Roll, attributes: ['idRoll', 'Descripcion'] },

        ],
        attributes: ['idInterno', 'Edad', 'idRoll', 'idArea', 'idEstatus', 'idUsuarios']
    }).then(inte => callback(inte));
}

getCitas = function(idInterno, callback) {
    Citas.findAll({
        where: { idInterno: idInterno },
        include: [
            { model: Usuarios, attributes: ['idUsuarios', 'Nombre'] },

            { model: Interno, attributes: ['idInterno'] },
            { model: Horario, attributes: ['idHorario', 'Fecha', 'Hora_visita'] }


        ],
        attributes: ['Razon', 'Descripcion', 'Estatus', 'idHorario']
    }).then(citas => callback(citas));
}

getTableCitas = function(callback) {
    Citas.findAll().then(cita => callback(cita));
}
getHorarios = function(callback) {
    Horario.findAll().then(horario => callback(horario));
}

getAreas = function(callback) {
    Area.findAll().then(area => callback(area));
}
getArea = function(idArea, callback) {
    Area.findOne({ where: { idArea: idArea } }).then(area => callback(area));
}

getEstatus = function(callback) {
    Estatus.findAll().then(estatu => callback(estatu));
}

getHorario = function(request, callback) {
    Horario.findAll({
        where: { idInterno: request.idInterno, Fecha: request.Fecha },
        attributes: ['Hora_visita']
    }).then(citas => callback(citas));
}

getHorarioIDEmpleadoIsac = function(idInterno, callback) {
        Horario.findAll({ where: { idInterno: idInterno } }).then(horario => callback(horario));
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
    // postHorario = function(request, callback) {
    //     Horario.create({
    //         Fecha: request.Fecha,
    //         Hora_inicial: request.Hora_inicial,
    //         Hora_final: request.Hora_final
    //     }).then(callback(true));
    // }

postHorarioIsac = function(request, callback) {
    Horario.create({
        idInterno: request.idInterno,
        Fecha: request.Fecha,
        Hora_visita: request.Hora_visita
    }).then(callback(true));
}

postEmpleado = function(request, callback) {
    const salt = bcrypt.genSaltSync();
    pw2 = bcrypt.hashSync(request.Contrasena, salt);
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
postCita = function(request, callback) {
    Usuarios.create({
        Nombre: request.Nombre,
        Apellido: request.Apellido,
        Telefono: request.Telefono,
        Correo: request.Correo,
        Direccion: request.Direccion
    })
    Citas.create({
        Razon: request.Razon,
        Descripcion: request.Descripcion,
        Estatus: request.Estatus,
        Documento: request.Documento,
        idInterno: request.idInterno,
        idHorario: request.idHorario,
        idUsuarios: request.idUsuarios
    }).then(callback(true));
}

postHorarioOmar = function(request, callback) {
    Horario.findAll({
        where: { idInterno: request.idInterno, Fecha: request.Fecha },
        attributes: ['Hora_visita', 'idHorario', 'Fecha']
    }).then(citas => callback(citas));
}

//Metodos PUT
putHorario = function(req, callback) {
    Horario.findOne({ where: { idHorario: req.idHorario } }).then(function(hora) {
        hora.update({
            Fecha: req.Fecha,
            Hora_visita: req.Hora_visita
        });
        callback(hora)
    })
}
putArea = function(req, callback) {
    Area.findOne({ where: { idArea: req.idArea } }).then(function(area) {
        area.update({
            Nombre: req.Nombre
        });
        callback(area);
    });
}
putEmpleado = function(request, callback) {
    Interno.findOne({ where: { idUsuarios: request.idUsuarios } }).then(function(inter) {
        inter.update({
            Edad: request.Edad,
            idEstatus: request.idEstatus,
            idArea: request.idArea,
            idRoll: request.idRoll
        });
        callback(inter)
    });

}

putUsuario = function(request, callback) {
    Usuarios.findOne({ where: { idUsuarios: request.idUsuarios } }).then(function(usario) {
        usario.update({
            Correo: request.usuario.Correo,
            Direccion: request.usuario.Direccion,
            Telefono: request.usuario.Telefono,
            Nombre: request.usuario.Nombre,
            Apellido: request.usuario.Apellido
        });
        callback(usario)
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

deleteUsuario = function(idUsuarios, callback) {
    Usuarios.findOne({ where: { idUsuarios: idUsuarios } }).then(function(user) {
        if (user != null) {
            user.destroy().then(result => callback(result))
        } else {
            callback(null);
        }
    })
}

deleteInterno = function(idUsuarios, callback) {
    Interno.findOne({ where: { idUsuarios: idUsuarios } }).then(function(interno) {
        if (interno != null) {
            interno.destroy().then(result => callback(result))
        } else {
            callback(null)
        }
    })
}

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
module.exports.getInternoUser = getInternoUser;
module.exports.getInternos = getInternos;
module.exports.getAreas = getAreas;
module.exports.getRoll = getRoll;
module.exports.getMaximoUsers = getMaximoUsers;

module.exports.postEmpleado = postEmpleado
module.exports.getRolls = getRolls;
module.exports.getEstatus = getEstatus;
module.exports.getArea = getArea;
module.exports.getHorario = getHorario;
//put
module.exports.putArea = putArea;
module.exports.putRoll = putRoll;
module.exports.putEmpleado = putEmpleado;
module.exports.putUsuario = putUsuario;
module.exports.putHorario = putHorario;

//Delete
module.exports.deleteArea = deleteArea;
module.exports.deleteRoll = deleteRoll;
module.exports.deleteUsuario = deleteUsuario;
module.exports.deleteInterno = deleteInterno;

//get
module.exports.getInternoUsuarioArea = getInternoUsuarioArea;
module.exports.getHorarioIDEmpleadoIsac = getHorarioIDEmpleadoIsac;

module.exports.getCitas = getCitas;
module.exports.getTableCitas = getTableCitas;
module.exports.getHorario = getHorario;
module.exports.getHorarios = getHorarios;
module.exports.getUserCorreo = getUserCorreo;
module.exports.getInternoID = getInternoID;
module.exports.getHorarioFechaIsac = getHorarioFechaIsac;

//post
module.exports.postHorarioIsac = postHorarioIsac;
module.exports.postCita = postCita;
module.exports.postHorarioOmar = postHorarioOmar;