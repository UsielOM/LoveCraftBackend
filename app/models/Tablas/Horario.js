const { Sequelize } = require('sequelize'); //Esta linea va en todos los modelos que hagan 
const sequelize = require('../DataBase/configDb'); //Esta linea va en todos los modelos que hagan


const Horario = sequelize.define('horario', {
    idHorario: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },

    idInterno: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },

    Fecha: {
        type: Sequelize.DataTypes.DATE
    },
    Hora_visita: {
        type: Sequelize.DataTypes.TIME

    },


}, {
    freezeTableName: true, //Esta linea va en todos los modelos que hagan para que respete el nombre
    timestamps: false, //Esta linea va en todos los modelos para que no les cree los campo de Creacion y actualizacion 

})


module.exports = Horario;