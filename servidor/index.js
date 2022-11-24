const express = require('express');  // Importando pacote/módulo express
const exphbs = require('express-handlebars');  // Importando pacote/módulo Express-Handlebars
const app = express();      // Instânciando métodos do express na constante 

//Define o Handlebars como Template Engine da nossa aplicação
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


//Criando a rota principal da aplicação
/*
app.get('/', (req,res)=>{
    res.render('home', {layout:false});
})*/
const home = require('./rotas/home');

app.use(home);

//Criando a rota para sobre da pagina
app.get('/sobre', (req,res)=>{
    res.render('sobre', {layout:false});
});

//Criando a rota login da aplicação
/*
app.get('/login', (req,res)=>{
    res.render('login', {layout:false});
});
*/

const login = require('./rotas/login');
app.use(login);


//Criando a rota cadastros da aplicação
/* 
app.get('/cadastros', (req,res)=>{
    res.render('cadastros', {layout:false});
});
*/

const cadastros = require('./rotas/cadastro');
app.use(cadastros)


//Criando a rota contatos da aplicação
app.get('/contatos', (req,res)=>{
    res.render('contatos', {layout:false});
});

app.use(express.static('public'));

//Executando o servidor
app.listen(3000, () => {
    console.log("Servidor Executando em localhost:3000")
});

app.use(express.static('public'));