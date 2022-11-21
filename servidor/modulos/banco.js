const mysql = require('mysql');

class Conexao {
    constructor(host, porta, usuario, senha, base_dados) {
        this.host = host;
        this.porta = porta;
        this.usuario = usuario;
        this.senha = senha;
        this.base_dados = base_dados;
    }

    get conexao(){
        this.conn = mysql.createConnection({
            host: this.host,
            port: this.porta,
            user: this.usuario,
            password: this.senha,
            database: this.base_dados
        })
        return this.conn
    }

    get verificaConexao(){
        this.conexao.connect((error) => {
            if(error){
                console.log(error);
                return
                
            }
            console.log('Conectou ao banco db_comun')});
    } 
}     

const banco = new Conexao('localhost', 3306, 'root', 'Ci&nci4d&d4d0s2008', 'db_comum')

banco.verificaConexao

class Endereco{
    constructor(logadouro, numero, bairro, cidade, cep, estado, id_associados){
        this.logadouro = logadouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.cep = cep;
        this.estado = estado;
        this.id_associados = id_associados;
    }

    
}
