const { INTEGER } = require('sequelize');
const sequelize = require('./database');
const {DataTypes} = require('sequelize');

const Analise = sequelize.define('analise', {
    pendente: {type: DataTypes.STRING(45), allowNull: true}
})

