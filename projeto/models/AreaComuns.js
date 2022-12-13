const { INTEGER } = require('sequelize');
const sequelize = require('../db/conn');
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
 
    // id_areas_comuns: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {model: 'areas_comuns', key: 'id_areas_comuns'},
    //     onUpdate: 'CASCADE',
    //     onDelete: 'CASCADE'
    // } 
},{
    timestamps: false
} 
);

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
});


AreasComuns.hasMany(ItensAreasComuns, {
    foreignKey: 'id_areas_comuns'
})

// AreasComuns.hasMany(ItensAreasComuns, {
//     constraints: true,
//     foreignKey: 'id_areas_comuns', as: 'fk_itens_areas_comuns_1',
//     allowNull: false
// })

module.exports= {AreasComuns, ItensAreasComuns}
