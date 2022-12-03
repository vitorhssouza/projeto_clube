const express = require('express');  // Importando pacote/módulo express
const exphbs = require('express-handlebars');  // Importando pacote/módulo Express-Handlebars
const app = express();      // Instânciando métodos do express na constante 

const admin = app.get('/clube/admin', (req,res)=>{
    res.render('menu_admin', {layout:false});
});


module.exports = admin