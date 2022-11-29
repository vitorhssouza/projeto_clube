const { INTEGER } = require('sequelize');
const sequelize = require('./database');
const {DataTypes} = require('sequelize');
const Associados = require('./Associados')

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
}, sequelize.sync());

const Dependentes = sequelize.define('dependentes', {
    id_dependentes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {type: DataTypes.STRING(100), allowNull: false},
    sobrenome: {type: DataTypes.STRING(100), allowNull: false},
    cpf: {type: DataTypes.STRING(45), allowNull: false}

}, {
    timestamps: false,
}, sequelize.sync());


Dependentes.hasMany(GrauParentesco, {
    foreignKey: 'id_graus_parentesco'
})

Associados.hasMany(Dependentes, {
    foreignKey: 'id_associados'
})

module.exports = {GrauParentesco, Dependentes}


