//Este es un ejemplo de como recrear las tablas creadas en la BD 

const { Sequelize } = require('sequelize'); //Esta linea va en todos los modelos que hagan 
const sequelize = require('../DataBase/configDb'); //Esta linea va en todos los modelos que hagan


const Horario = sequelize.define('horario', {
    idHorario: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true, //Si quieren que sea llave primaria o la identifique como una
        autoIncrement: true
    },
    idInterno: {
        type: Sequelize.DataTypes.INTEGER
    },
    Fecha: {
        type: Sequelize.DataTypes.DATE
    },
    Hora_inicial: {
        type: Sequelize.DataTypes.DATE
    },
    Hora_final: {
        type: Sequelize.DataTypes.DATE
    }

}, {
    freezeTableName: true, //Esta linea va en todos los modelos que hagan para que respete el nombre
    timestamps: false, //Esta linea va en todos los modelos para que no les cree los campo de Creacion y actualizacion 

})


module.exports = Horario; //Debemos importar nuestro modelo para poder usarlo en otros archivos 

//De esta manera  puden crear un modelo en base a las tablas que esten en la BD