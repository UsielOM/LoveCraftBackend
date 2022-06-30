const { Sequelize } = require('sequelize'); //Esta linea va en todos los modelos que hagan 
const sequelize = require('../DataBase/configDb'); //Esta linea va en todos los modelos que hagan


const Area = sequelize.define('area', {
    idArea: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },

    Nombre: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
    },
    getArea = function(callback) {
        Area.findAll().then(area => callback(area));
    },
    postArea = function(request, callback) {
        Area.create({
            Nombre: request.Nombre
        }).then(callback(true));
    };
}, {
    freezeTableName: true, //Esta linea va en todos los modelos que hagan para que respete el nombre
    timestamps: false, //Esta linea va en todos los modelos para que no les cree los campo de Creacion y actualizacion 

})

module.exports = Area;
module.exports.postArea = postArea;
module.exports.getArea = getArea;