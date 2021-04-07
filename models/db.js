const Sequelize = require('sequelize');

//conexão com o mysql2
const sequelize = new Sequelize('testeView', 'root', 'Keylane@1', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}