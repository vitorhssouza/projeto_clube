const sequelize = require('./database');

const Associados = sequelize.define('associados', sequelize.sync());



module.exports = Associados;