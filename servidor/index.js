const express = require('express');                 // Importando pacote/módulo express
const exphbs = require('express-handlebars');       // Importando pacote/módulo Express-Handlebars
const app = express();                              // Instânciando métodos do express na constante 
const home = require('./rotas/home');               // Importando a rota home
const login = require('./rotas/login');             // Importando a rota login
const cadastros = require('./rotas/cadastro');      // Importando a rota cadastros

//Define o Handlebars como Template Engine da nossa aplicação
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');



// Utilizando a rota principal da aplicação
app.use(home);

// Utilizando a rota login da aplicação
app.use(login);

// Utilizando a rota cadastros da aplicação
app.use(cadastros)


//Criando a rota para sobre da pagina
app.get('/sobre', (req,res)=>{
    res.render('sobre', {layout:false});
});

//Criando a rota contatos da aplicação
app.get('/contatos', (req,res)=>{
    res.render('contatos', {layout:false});
});

app.use(express.static('public'));

//Executando o servidor
app.listen(3000, () => {
    console.log("Servidor Executando em localhost:3000")
});

