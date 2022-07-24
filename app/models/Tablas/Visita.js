//Este es un ejemplo de como recrear las tablas creadas en la BD 

const { Sequelize } = require('sequelize'); //Esta linea va en todos los modelos que hagan 
const sequelize = require('../DataBase/configDb'); //Esta linea va en todos los modelos que hagan


const Visita = sequelize.define('visita', {
    idVisita: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true, //Si quieren que sea llave primaria o la identifique como una
        autoIncrement: true
    },
    Identificacion: {
        type: Sequelize.DataTypes.STRING
    },
    idUsuario: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }

}, {
    freezeTableName: true, //Esta linea va en todos los modelos que hagan para que respete el nombre
    timestamps: false, //Esta linea va en todos los modelos para que no les cree los campo de Creacion y actualizacion 

})


module.exports = Visita; //Debemos importar nuestro modelo para poder usarlo en otros archivos 

//De esta manera  puden crear un modelo en base a las tablas que esten en la BD