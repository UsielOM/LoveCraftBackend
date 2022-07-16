const { Sequelize } = require('sequelize'); //Esta linea va en todos los modelos que hagan 
const sequelize = require('../DataBase/configDb'); //Esta linea va en todos los modelos que hagan


const Interno = sequelize.define('interno', {
    idInterno: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,

        autoIncrement: true


    },

    Foto: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Contraseña: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
    },
    Fech_ingre: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    Edad: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    idEstatus: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    idUsuarios: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    idArea: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    idRoll: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    idHorario: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true, //Esta linea va en todos los modelos que hagan para que respete el nombre
    timestamps: false, //Esta linea va en todos los modelos para que no les cree los campo de Creacion y actualizacion 


});

module.exports = Interno;