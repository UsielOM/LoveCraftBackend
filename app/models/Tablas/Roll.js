const { Sequelize } = require('sequelize'); //Esta linea va en todos los modelos que hagan 
const sequelize = require('../DataBase/configDb'); //Esta linea va en todos los modelos que hagan


const Roll = sequelize.define('roll', {
    idRoll: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },

    Descripcion: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
    }

}, {
    freezeTableName: true, //Esta linea va en todos los modelos que hagan para que respete el nombre
    timestamps: false, //Esta linea va en todos los modelos para que no les cree los campo de Creacion y actualizacion 

});
module.exports = Roll;