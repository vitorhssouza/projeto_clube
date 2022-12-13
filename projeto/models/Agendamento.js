const { INTEGER } = require('sequelize');
const sequelize = require('../db/conn');
const {Model, DataTypes} = require('sequelize');
const Associados = require('./Associados');
const { AreasComuns } = require('./AreaComuns');

const Agendamento = sequelize.define('agendamento', {
    id_agendamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    // id_associados: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     references: {model: 'associados', key: 'id_associados'},
    //     allowNull: false
    // },
    // id_areas_comuns: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     references: {model: 'areas_comuns', key: 'id_areas_comuns'},
    //     allowNull: false,
        
    // },
    data: {type: DataTypes.DATEONLY, allowNull: false}
}, {
    timestamps: false,
});


// Associados.belongsToMany(AreasComuns, {
//     through: {
//         model: Agendamento
//     },
//     foreignKey: 'id_associados',
//     constraint: true,
//     allowNull: false
  
// });


Associados.hasMany(Agendamento, {
    foreignKey: 'id_associados',
    constraints: true
})

AreasComuns.hasMany(Agendamento, {
    foreignKey: 'id_areas_comuns',
    constraints: true
})



// AreasComuns.belongsToMany(Associados, {
//     through: {
//         model: Agendamento
//     },
//     foreignKey: 'id_areas_comuns',
//     constraint: true,
//     allowNull: false
    
// });

Associados.hasMany(Agendamento, {foreignKey: 'id_associados'})
Agendamento.belongsTo(Associados, {foreignKey: 'id_associados'})

AreasComuns.hasMany(Agendamento, {foreignKey: 'id_areas_comuns'})
Agendamento.belongsTo(AreasComuns, {foreignKey: 'id_areas_comuns'})





// Agendamento.belongsToMany(models.Associados,{
//     foreignKey: 'id_associados', as: 'associados',
// });

// Agendamento.belongsToMany(AreasComuns,{
//     foreignKey: 'id_areas_comuns', as: 'areascomuns'
// });

// Associados.hasMany(Agendamento, {
//     as: 'id_agendamento'
// });

// AreasComuns.hasMany(Agendamento,{
//     as: 'id_areas_comuns'
// });






module.exports = Agendamento