const express = require('express');  // Importando pacote/módulo express
const exphbs = require('express-handlebars');  // Importando pacote/módulo Express-Handlebars
const app = express();      // Instânciando métodos do express na constante 

const contato = app.get('/contatos', (req,res)=>{
    res.render('contatos', {layout:false});
});

module.exports = contato;
