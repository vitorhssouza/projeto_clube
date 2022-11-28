const express = require('express');         // Importando pacote/módulo express
const { create } = require('express-handlebars');
const { Sequelize } = require('sequelize'); // const exphbs = require('express-handlebars');  
const sequelize = require('../banco_dados/database'); 
const Associados = require('../banco_dados/clube');
const app = express();      // Instânciando métodos do express na constante 



const cadastros = app.get('/cadastros',(req,res)=>{
    res.render('cadastros', {layout:false});
    console.log(Associados.findAll({raw: true}))
    
});

module.exports = cadastros;

const save = (app.post('/clube/cadastros/save', async (req, res) => {

    const nome = req.body.firstname;
    const sobrenome = req.body.lastname;
    const setor = req.body.setor;
    const contato = req.body.contato;
    const dataNascimento = req.body.dataNascimento;
    const logadouro = req.body.logadouro;
    const numero = req.body.numero;
    const bairro = req.body.bairro;
    const cidade = req.body.cidade;
    const cep = req.body.cep;
    const estado = req.body.estado;
    const email = req.body.email;
    const senha = req.body.password;

      
}));

sequelize.createSchema