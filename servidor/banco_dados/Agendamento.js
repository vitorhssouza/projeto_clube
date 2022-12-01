const { INTEGER } = require('sequelize');
const sequelize = require('./database');
const {DataTypes} = require('sequelize');

const Agendamento = sequelize.define('agendamento', {
    id_agendamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_associados: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {model: 'associados', key: 'id_associados'},
        allowNull: false
    },
    id_areas_comuns: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {model: 'areas_comuns', key: 'id_areas_comuns'},
        allowNull: false
    },
    data: {type: DataTypes.DATE, allowNull: false}
}, {
    timestamps: false,
}, sequelize.sync());