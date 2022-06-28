const { Sequelize } = require('sequelize'); //Esta linea va en todos los modelos que hagan 
const sequelize = require('../DataBase/configDb'); //Esta linea va en todos los modelos que hagan


const Usuarios = sequelize.define('usuarios', {
    idUsuarios: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },

    Nombre: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    Apellido: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    Telefono: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false
    },
    Correo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }



})