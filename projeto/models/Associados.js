const { INTEGER } = require('sequelize');
const sequelize = require('../db/conn');
const {DataTypes} = require('sequelize');

const Associados = sequelize.define('associados', {
    id_associados: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {type: DataTypes.STRING(100), allowNull: false},
    sobrenome: {type: DataTypes.STRING(100), allowNull: false},
    cpf: {type: DataTypes.STRING(16), allowNull: false},
    setor: {type: DataTypes.STRING(100), allowNull: false},
    contato: {type: DataTypes.STRING(45), allowNull: false},
    data_nascimento: {type: DataTypes.DATEONLY, allowNull: false},
    logadouro: {type: DataTypes.STRING(200), allowNull: false},
    numero: {type: DataTypes.STRING(45), allowNull: false},
    bairro: {type: DataTypes.STRING(100), allowNull: false},
    cidade: {type: DataTypes.STRING(45), allowNull: false},
    cep: {type: DataTypes.STRING(45), allowNull: false},
    estado: {type: DataTypes.CHAR(2), allowNull: false},
    email: {type: DataTypes.STRING(70), allowNull: false},
    senha: {type: DataTypes.STRING(500), allowNull: false},
    situacao: {type: DataTypes.BOOLEAN, allowNull: true},
       
},{
    timestamps: false,
});

module.exports = Associados

