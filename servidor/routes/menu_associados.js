const express = require('express');  // Importando pacote/módulo express
const exphbs = require('express-handlebars');  // Importando pacote/módulo Express-Handlebars
const app = express();      // Instânciando métodos do express na constante 

const usuario = app.get('/clube/usuario', (req,res)=>{
    res.render('menu_usuario', {layout:false});
});

const cadastrarUsuario = app.post('/clube/usuario/dependentes', (req,res) => {
    console.log(req.body);
});


module.exports = {usuario, cadastrarUsuario};