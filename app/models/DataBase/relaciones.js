const Area = require('../Tablas/Area');
const Estatus = require('../Tablas/Estatus');
const Interno = require('../Tablas/Interno');
const Roll = require('../Tablas/Roll.js');
const Usuarios = require('../Tablas/Usuarios.js');
module.exports = function() {
    Estatus.hasMany(Interno, { foreignKey: 'idEstatus' });
    Interno.belongsTo(Estatus, { foreignKey: 'idEstatus' });
    
    Usuarios.hasMany(Interno, { foreignKey: 'idUsuarios' });
    Interno.belongsTo(Usuarios, { foreignKey: 'idUsuarios' });

    Area.hasMany(Interno, { foreignKey: 'idArea' });
    Interno.belongsTo(Area, { foreignKey: 'idArea' });
    Roll.hasMany(Interno, { foreignKey: 'idRoll' });
    Interno.belongsTo(Roll, { foreignKey: 'idRoll' });
}