const { INTEGER } = require('sequelize');
const sequelize = require('../db/conn');
const {DataTypes} = require('sequelize');
const Administradores = require('./Administradores');
const Associados = require('./Associados');


const Analise = sequelize.define('analise', {
    id_analise: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    // id_administradores: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     references: {model: 'administradores', key: 'id_administradores'},
    //     allowNull: false
    // },
    // id_associados: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     references: {model: 'associados', key: 'id_associados'},
    //     allowNull: false
    // },
    pendente: {type: DataTypes.STRING(45), allowNull: true}
}, {
    timestamps: false,
});

// Administradores.belongsToMany(Associados, {
//     through:{
//         model: Analise
//     },
//     foreignKey: 'id_administradores',
//     constraints: true,
//     allowNull: false
// })

Administradores.hasMany(Analise, {
    foreignKey: 'id_administradores'
});

Associados.hasMany(Analise, {
    foreignKey: 'id_associados'
});


// Associados.belongsToMany(Administradores,{
//     through: {
//         model: Analise
//     },
//     foreignKey: 'id_associados',
//     constraints: true,
//     allowNull: false
// })

Administradores.hasMany(Analise, {foreignKey: 'id_administradores'});
Analise.belongsTo(Administradores, {foreignKey: 'id_administradores'});

Associados.hasMany(Analise, {foreignKey: 'id_associados'});
Analise.belongsTo(Associados, {foreignKey: 'id_associados'});


module.exports = Analise