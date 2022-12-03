const express = require('express');  // Importando pacote/módulo express
const exphbs = require('express-handlebars');  // Importando pacote/módulo Express-Handlebars
const app = express();      // Instânciando métodos do express na constante 

const sobre = app.get('/sobre', (req,res)=>{
    res.render('sobre', {layout:false});
});

module.exports = sobre;
