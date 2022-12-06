const express = require('express');                 // Importando pacote/módulo express
const exphbs = require('express-handlebars');       // Importando pacote/módulo Express-Handlebars
const app = express();                              // Instânciando métodos do express na constante 
const conn = require('./db/conn')               // Importando o arquivo banco_dados da pasta database

//Define o Handlebars como Template Engine da nossa aplicação
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//Configuração de formulario para receber os dados
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Importando rota menu
const menu = require('./routes/menu/homeRoutes');

app.use(menu);

// Importando a rota Associado
const associado = require('./routes/associado/associadosRoutes');

app.use(associado);

// Importando a rota administrador
const administrador = require('./routes/administrador/administradorRouters')
app.use(administrador);


// Metodo para reconhecer arquivo css
app.use(express.static('public'));

//Verificando conexão com o base de dados e executando o servidor
conn.sync().then(() => {
    app.listen(3000, () => {
        console.log("Servidor Executando em localhost:3000");
    });
}).catch((error) => {
    console.log(error);
});
