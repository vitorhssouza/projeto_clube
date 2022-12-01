var mysql  = require('mysql2');

const {Sequelize} = require('sequelize');
const senha = require('../arquivos_ocultos/senha_db');

const sequelize = new Sequelize('novo_clube', 'root', senha, {host: 'localhost', dialect: 'mysql'});

try {
    sequelize.authenticate();
    console.log('Banco de Dados Conectado com Sucesso');
} catch (error) {
    console.log('Error ao conectar com o DB' + error)
}

module.exports = sequelize;



