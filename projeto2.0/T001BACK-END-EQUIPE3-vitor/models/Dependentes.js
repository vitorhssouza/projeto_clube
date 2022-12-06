const { INTEGER } = require('sequelize');
const sequelize = require('../db/conn');
const {DataTypes} = require('sequelize');


const Dependentes = sequelize.define('dependentes', {
    id_dependentes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {type: DataTypes.STRING(100), allowNull: false},
    sobrenome: {type: DataTypes.STRING(100), allowNull: false},
    cpf: {type: DataTypes.STRING(45), allowNull: false},
        
    id_associados: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model: 'associados', key: 'id_associados'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },

    id_graus_parentesco: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model: 'graus_parentescos', key: 'id_graus_parentesco'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'}

}, {
    timestamps: false,
}, sequelize.sync());


const GrauParentesco = sequelize.define('graus_parentesco', {
    id_graus_parentesco: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    descricao: {type: DataTypes.STRING(45), allowNull: false},
}, {
    timestamps: false,
});

 

module.exports = {GrauParentesco, Dependentes}
