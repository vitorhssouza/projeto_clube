const express = require('express');  // Importando pacote/módulo express
// const exphbs = require('express-handlebars');  // Importando pacote/módulo Express-Handlebars
const app = express();      // Instânciando métodos do express na constante 


const cadastros = app.get('/cadastros', (req,res)=>{
    res.render('cadastros', {layout:false});
});

module.exports = cadastros;

const save = (app.post('cadastros/save', async (req, res) => {
    const nome = req.body.firstname;
    const sobrenome = req.body.lastname;
    const setor = req.body.setor;
    const numero = req.body.number;
    const senha = req.body.password;
    

    


}))
