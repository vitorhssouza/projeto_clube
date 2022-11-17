const express = require('express');  // Importando pacote/módulo express
const exphbs = require('express-handlebars');  // Importando pacote/módulo Express-Handlebars
const app = express();      // Instânciando métodos do express na constante 

//Define o Handlebars como Template Engine da nossa aplicação
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//Criando a rota principal da aplicação
app.get('/', (req,res)=>{
    res.render('home', {layout:false});
})


//Executando o servidor
app.listen(3000, () => {
    console.log("Servidor Executando em localhost:3000")
});