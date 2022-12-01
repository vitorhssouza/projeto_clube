const express = require('express');                 // Importando pacote/módulo express
const exphbs = require('express-handlebars');       // Importando pacote/módulo Express-Handlebars
const app = express();                              // Instânciando métodos do express na constante 
const home = require('./rotas/home');               // Importando a rota home
const login = require('./rotas/login');             // Importando a rota login
const cadastros = require('./rotas/cadastro');      // Importando a rota cadastros
const sobre = require('./rotas/sobre');             // Importando a rota sobre    
const contato = require('./rotas/contato')          // Importando a rota contato  
const conn = require('./banco_dados/database')      // Importando o arquivo banco_dados da pasta database
const Associados = require('./banco_dados/Associados')              // Importando a classe Associados
const Administradores = require('./banco_dados/Administradores')    // Importando a classe administradores
const Agendamento = require('./banco_dados/Agendamento')            // Importando a classe agendamento
const Analise = require('./banco_dados/Analise')                    // Importando a classe analise
const AreasComuns = require('./banco_dados/AreaComuns')             // Importando a classe areas comuns
const Dependentes = require('./banco_dados/Dependentes')            // Importando a classe dependentes



//Define o Handlebars como Template Engine da nossa aplicação
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//Configuração de formulario para receber os dados
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Utilizando a rota principal da aplicação
app.use(home);

// Utilizando a rota login da aplicação
app.use(login);

// Utilizando a rota cadastros da aplicação
app.use(cadastros.cadastros)

// Utilizando rota de cadastros de associados
app.use(cadastros.cadastrosSave)

// Utilizando a rota sobre da aplicação
app.use(sobre);

//Utilizando a rota contatos da aplicação
app.use(contato);

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




