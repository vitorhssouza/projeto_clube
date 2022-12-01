const express = require('express');  // Importando pacote/módulo express
const exphbs = require('express-handlebars');  // Importando pacote/módulo Express-Handlebars
const app = express();      // Instânciando métodos do express na constante 

const login = app.get('/login', (req,res)=>{
    res.render('login', {layout:false});
});

module.exports = login;

