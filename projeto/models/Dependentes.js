const { INTEGER } = require('sequelize');
const sequelize = require('../db/conn');
const {DataTypes} = require('sequelize');
const Associados = require('../models/Associados')


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
    cpf: {type: DataTypes.STRING(45), allowNull: false},
        
    // id_associados: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     foreignKey: 'id_associados',
    //     references: {model: 'associados', key: 'id_associados'},
    //     onUpdate: 'CASCADE',
    //     onDelete: 'CASCADE'
    // },

    // id_graus_parentesco: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     foreignKey: 'id_graus_parentesco',
    //     references: {model: 'graus_parentescos', key: 'id_graus_parentesco'},
    //     onUpdate: 'CASCADE',
    //     onDelete: 'CASCADE'}

}, {
    timestamps: false,
}, sequelize.sync());




// Associados.belongsToMany(GrauParentesco, {
//     through: {
//         model: Dependentes
//     },
//     foreignKey: 'id_associados'
    
//     //constraints: true
//     // allowNull: false
// });


Associados.hasMany(Dependentes, {
    foreignKey: 'id_associados',
    allowNull: false
})

GrauParentesco.hasMany(Dependentes, {
    foreignKey: 'id_graus_parentesco',
    allowNull: false
})


// GrauParentesco.belongsToMany(Associados, {
//     through: {
//         model: Dependentes,
//     },
//     foreignKey: 'id_graus_parentesco'

//     //constraints: true
//     // allowNull: false
// })

Associados.hasMany(Dependentes, {foreignKey: 'id_graus_parentesco'})
Dependentes.belongsTo(Associados, {foreignKey: 'id_graus_parentesco'})

GrauParentesco.hasMany(Dependentes, {foreignKey: 'id_graus_parentesco'})
Dependentes.belongsTo(GrauParentesco, {foreignKey: 'id_graus_parentesco'})




module.exports = {GrauParentesco, Dependentes}
