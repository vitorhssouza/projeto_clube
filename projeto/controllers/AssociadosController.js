const Associados = require('../models/Associados')
const Dependentes = require('../models/Dependentes')
const Agendamento = require('../models/Agendamento')

class AssociadosController{

    // Associados
    static menuAssociado(req, res){
        res.render('menu_associados/menu')
    }

    // Cadastrar associados
    static async cadastrarAssociados(req, res){
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

        await Associados.create({nome, sobrenome, cpf, setor, contato, data_nascimento, logadouro, numero,
            bairro, cidade, cep, estado, email, senha, situacao: 'Pendente'});

        res.redirect('/')
        console.log('Cadastrados')
    }

    static edit(req, res){
        res.render('menu_associados/atualizar_dados')
    }

    // Atualizar dados associados
    static async atualizarDados(req, res){
        
        if(this.cadastrarAssociados.situacao == "Ativo"){
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

            await Associados.create({nome, sobrenome, cpf, setor, contato, data_nascimento, logadouro, numero,
                bairro, cidade, cep, estado, email, senha, situacao: 'Ativo'});

            res.redirect('/clube/associado')
            console.log('atualizado')
        }
    };
    
    // Dependentes
    static dependentes(req, res){
        res.render('menu_associados/dependentes/cadastrar')
    }
    

    // Cadastrar dependentes    
    static async cadastrarDependentes(req, res){
        const id_associado = 0;
        const nome = req.body.nome;
        const sobrenome = req.body.sobrenome;
        const cpf = req.body.cpf

        await Dependentes.create({})
        res.redirect('/clube/associado')
        console.log('Cadastrado dependentes')
    };

    // Rota de agendamento
    static agendamento(req, res){
        res.render('menu_associados/agendamento')
    }

    // Realizar agendamento
    static async cadastrarAgendamento(req, res){

    };

    // listagem de agendamento
    static async listarAgendamentos(req, res){

    };



    

 



}


module.exports = AssociadosController