const { INTEGER } = require('sequelize');
const sequelize = require('./database');
const {DataTypes} = require('sequelize');

const Analise = sequelize.define('analise', {
    id_analise: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_administradores: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {model: 'administradores', key: 'id_administradores'},
        allowNull: false
    },
    id_associados: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {model: 'associados', key: 'id_associados'},
        allowNull: false
    },
    pendente: {type: DataTypes.STRING(45), allowNull: true}
}, {
    timestamps: false,
});

module.exports = Analise