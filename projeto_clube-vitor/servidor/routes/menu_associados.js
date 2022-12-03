const express = require('express');  // Importando pacote/módulo express
const exphbs = require('express-handlebars');  // Importando pacote/módulo Express-Handlebars
const { Dependentes } = require('../db/Dependentes');
const app = express();      // Instânciando métodos do express na constante 

const usuario = app.get('/clube/usuario', (req,res)=>{
    res.render('menu_usuario', {layout:false});
});

const cadastrarDependentes = app.get('/clube/usuario/dependentes', (req,res) => {
    res.render('dependentes', {layout:false});
});

const userAgendamentos = app.get('/clube/usuario/agendamento', (req,res) => {
    res.render('reserva_user', {layout:false});
});


const cadastroDependentes = app.post('/clube/usuario/dependentes/save', async (req, res) => {

    let nome = req.body.nome;
    const sobrenome = req.body.lastname;
    const cpf = req.body.cpf;
    
    await Dependentes.create({nome, sobrenome, cpf});
    
    res.redirect('/')
    console.log('Cadastrados')
    
});

module.exports = {usuario, cadastrarDependentes, cadastroDependentes,userAgendamentos};

