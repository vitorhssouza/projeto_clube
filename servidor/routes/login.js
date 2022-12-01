const express = require('express');  // Importando pacote/módulo express
const exphbs = require('express-handlebars');  // Importando pacote/módulo Express-Handlebars
const app = express();      // Instânciando métodos do express na constante 

const login = app.get('/login', (req,res)=>{
    res.render('login', {layout:false});
});

const verificar = app.post('/login/verificar', (req, res)=> {
    const usuario = req.body.nome;
    const senha = req.body.senha;
    console.log(req.body)
    
    if(usuario == 'vitor' && senha == 123){
        res.render('menu_usuario', {layout:false}); 
        console.log(usuario, senha)
    }else if(usuario == 'admin' && senha == 123){
        res.render('menu_admin', {layout:false})
        console.log(req.body)
    }else{
        console.log('Senha ou usuario incorretor');
    }
});

module.exports = {login, verificar};

