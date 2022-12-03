const express = require('express');  // Importando pacote/módulo express
const exphbs = require('express-handlebars');  // Importando pacote/módulo Express-Handlebars
const app = express();      // Instânciando métodos do express na constante 

//Criando a rota principal da aplicação
const home = app.get('/', (req,res)=>{
    res.render('home', {layout:false});
})

module.exports = home
