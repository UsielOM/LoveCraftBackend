const Area = require('../Tablas/Area');
const Estatus = require('../Tablas/Estatus');
const Interno = require('../Tablas/Interno');
const Roll = require('../Tablas/Roll.js');
const Usuarios = require('../Tablas/Usuarios.js');
const Horario = require('../Tablas/Horario');
const Citas = require('../Tablas/Citas');

module.exports = function() {
    Estatus.hasMany(Interno, { foreignKey: 'idEstatus' });
    Interno.belongsTo(Estatus, { foreignKey: 'idEstatus' });

    Usuarios.hasMany(Interno, { foreignKey: 'idUsuarios' });
    Interno.belongsTo(Usuarios, { foreignKey: 'idUsuarios' });

    Area.hasMany(Interno, { foreignKey: 'idArea' });
    Interno.belongsTo(Area, { foreignKey: 'idArea' });
    Roll.hasMany(Interno, { foreignKey: 'idRoll' });
    Interno.belongsTo(Roll, { foreignKey: 'idRoll' });

    //TABLA HORARIO
    Interno.hasMany(Horario, { foreignKey: 'idInterno' });
    Horario.belongsTo(Interno, { foreignKey: 'idInterno' });

    //TABLA CITAS
    Usuarios.hasMany(Citas, { foreignKey: 'idUsuarios' });
    Citas.belongsTo(Usuarios, { foreignKey: 'idUsuarios' });

    Interno.hasMany(Citas, { foreignKey: 'idInterno' });
    Citas.belongsTo(Interno, { foreignKey: 'idInterno' });

    Horario.hasMany(Citas, { foreignKey: 'idHorario' });
    Citas.belongsTo(Horario, { foreignKey: 'idHorario' });



}