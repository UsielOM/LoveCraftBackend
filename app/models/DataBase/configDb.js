const Sequelize = require('sequelize');
const sequelize = new Sequelize("bdlovecraft", "root", "sasa", {
    host: "localhost",
    dialect: "mysql",
    port: 3307
}); //Esta info va a depender de la informacion de ustedes como ya se explico 
module.exports = sequelize;