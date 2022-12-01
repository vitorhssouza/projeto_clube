const { INTEGER } = require('sequelize');
const sequelize = require('./database');
const {DataTypes} = require('sequelize');

const ItensAreasComuns = sequelize.define('itens_areas_comuns', {
    id_itens_areas_comuns: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {type: DataTypes.STRING(50), allowNull: false},
    quantidade: {type: DataTypes.INTEGER, allowNull: false},

    id_areas_comuns: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model: 'areas_comuns', key: 'id_areas_comuns'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
},{
    timestamps: false
}, sequelize.sync());

const AreasComuns = sequelize.define('areas_comuns', {
    id_areas_comuns: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {type: DataTypes.STRING(50), allowNull: false}
}, {
    timestamps: false
}, sequelize.sync());


ItensAreasComuns.belongsTo(AreasComuns, {
    foreignKey: 'id_areas_comuns' 
});

AreasComuns.hasMany(ItensAreasComuns, {
    foreignKey: 'id_itens_areas_comuns'
});