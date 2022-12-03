const express = require('express');         // Importando pacote/módulo express
const Associados = require('../db/Associados');
const app = express();      // Instânciando métodos do express na constante 



const cadastros = app.get('/cadastros',(req,res)=>{
    res.render('cadastros', {layout:false});
    //console.log(Associados.findAll({raw: true}))
    
});

const cadastrosSave = app.post('/cadastros/save', async (req, res) => {

    let nome = req.body.nome;
    const sobrenome = req.body.lastname;
    const cpf = req.body.cpf;
    const setor = req.body.setor;
    const contato = req.body.number;
    const data_nascimento = req.body.dataNascimento;
    const logadouro = req.body.logad;
    const numero = req.body.num;
    const bairro = req.body.bairro;
    const cidade = req.body.cidade;
    const cep = req.body.cep;
    const estado = req.body.estado;
    const email = req.body.email;
    const senha = req.body.password;

    //console.log(data_nascimento)
    
    await Associados.create({nome, sobrenome, cpf, setor, contato, data_nascimento, logadouro, numero,
                            bairro, cidade, cep, estado, email, senha, situacao: 'Pendente'});
    
    res.redirect('/')
    console.log('Cadastrados')
    
});



module.exports = {cadastros, cadastrosSave};
