const Sequelize = require('sequelize');
const db = require('./db');

const Produto = db.sequelize.define('produtos', {
    nome:{
        type: db.Sequelize.STRING
    },
    preco:{
        type: db.Sequelize.FLOAT
    },
    descricaoSimples:{
        type: db.Sequelize.STRING
    }
})

module.exports = Produto;
//Produto.sync({force: true})