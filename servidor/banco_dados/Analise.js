/* const { INTEGER } = require('sequelize');
const sequelize = require('./database');
const {DataTypes} = require('sequelize');

const Analise = sequelize.define('analise', {
    pendentes: {type: DataTypes.STRING(45), allowNull: false}
}{
    timestamps: false,
}, sequelize.sync());

module.exports = Analise; */