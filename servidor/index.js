const express = require('express');                 // Importando pacote/módulo express
const exphbs = require('express-handlebars');       // Importando pacote/módulo Express-Handlebars
const app = express();                              // Instânciando métodos do express na constante 
const home = require('./routes/home');               // Importando a rota home
const login = require('./routes/login');             // Importando a rota login
const cadastros = require('./routes/cadastro');      // Importando a rota cadastros
const sobre = require('./routes/sobre');             // Importando a rota sobre    
const contato = require('./routes/contato')          // Importando a rota contato  
const usuario = require('./routes/menu_associados')
const conn = require('./db/database')      // Importando o arquivo banco_dados da pasta database
const Associados = require('./db/Associados')              // Importando a classe Associados
const Administradores = require('./db/Administradores')    // Importando a classe administradores
const Agendamento = require('./db/Agendamento')            // Importando a classe agendamento
const Analise = require('./db/Analise')                    // Importando a classe analise
const AreasComuns = require('./db/AreaComuns')             // Importando a classe areas comuns
const Dependentes = require('./db/Dependentes')            // Importando a classe dependentes


//Define o Handlebars como Template Engine da nossa aplicação
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//Configuração de formulario para receber os dados
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Utilizando a rota principal da aplicação
app.use(home);


// Utilizando a rota login da aplicação
app.use(login.login);

// utilizando a rota para post de login 
app.use(login.verificar)



// Utilizando a rota cadastros da aplicação
app.use(cadastros.cadastros)

// Utilizando rota de cadastros de associados
app.use(cadastros.cadastrosSave)



// Utilizando a rota sobre da aplicação
app.use(sobre);


//Utilizando a rota contatos da aplicação
app.use(contato);


//Utilizando rota de usuario
app.use(usuario.usuario)


// Metodo para reconhecer arquivo css
app.use(express.static('public'));

//Verificando conexão com o base de dados e executando o servidor
conn.sync().then(() => {
    app.listen(3000, () => {
        console.log("Servidor Executando em localhost:3000")
    });
}).catch((error) => {
    console.log(error)
})




