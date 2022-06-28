const { Sequelize } = require('sequelize'); //Esta linea va en todos los modelos que hagan 
const sequelize = require('../DataBase/configDb'); //Esta linea va en todos los modelos que hagan


const Estatus = sequelize.define('estatus', {
    idEstatus: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },

    estatus: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    }

})