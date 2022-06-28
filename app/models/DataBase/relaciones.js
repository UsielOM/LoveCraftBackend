const Area = require('../Tablas/Area');
const Estatus = require('../Tablas/Estatus');
const Interno = require('../Tablas/Interno');
const Roll = require('../Tablas/Roll.js');
const Usuarios = require('../Tablas/Usuarios.js');
module.exports = function() {
    Estatus.hasMany(Interno, { foreignKey: { name: 'idEstatus' } });
    // Interno.belongsTo(Estatus);
    Usuarios.hasMany(Interno, { foreignKey: 'idUsuarios' });
    // Interno.belongsTo(Usuarios);
    Area.hasMany(Interno, { foreignKey: 'idArea' });
    // Interno.belongsTo(Area);
    Roll.hasMany(Interno, { foreignKey: 'idRoll' });
    // Interno.belongsTo(Roll);
}