const Associados = require('../models/Associados');
const {Dependentes} = require('../models/Dependentes');
const Agendamento = require('../models/Agendamento');
const {GrauParentesco}= require('../models/Dependentes');
const {AreasComuns} = require('../models/AreaComuns');
const {ItensAreasComuns} = require('../models/AreaComuns');

class AssociadosController{

    // Menu Associados
    static async menuAssociado(req, res){
        const id = req.params.id;
        console.log(id)
        const associados = await Associados.findOne({raw: true, where: {id_associados: id}})
        // console.log(associados)
        
        
         res.render('menu_associados/menu', {associados});
    };
    
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
            bairro, cidade, cep, estado, email, senha, situacao: false});

        res.redirect('/')
        console.log('Cadastrados')
    }

    static async edit(req, res){
        const id = req.params.id;
        const associados = await Associados.findOne({raw: true, where:{id_associados: id}})
        res.render('menu_associados/atualizar_dados', {id, associados})
    }

    // Atualizar dados associados
    static async atualizarDados(req, res){
        const id = req.params.id;
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

        await Associados.update({nome, sobrenome, cpf, setor, contato, data_nascimento, logadouro, numero,
            bairro, cidade, cep, estado, email, senha, situacao: 1}, {where:{id_associados: id}});

        res.redirect(`/clube/associado/${id}`)
        console.log('atualizado')
    
    };
    
    
    // Dependentes
    static async dependentes(req, res){
        const id = req.params.id
        const associados = await Associados.findOne({raw: true, where: {id_associados: id}})
        res.render('menu_associados/dependentes/cadastrar', {associados})
    }
    

    // Cadastrar dependentes    
    static async cadastrarDependentes(req, res){
        const id_associados = req.params.id;
        const nome = req.body.nome;
        const sobrenome = req.body.sobrenome;
        const cpf = req.body.cpf;

        //Feito pelo maycon
        let grauParentesco = req.body.parentesco;
        console.log(grauParentesco)
        await GrauParentesco.create({
            descricao: grauParentesco
        })
        const id = await GrauParentesco.findOne({raw: true, where: {descricao: grauParentesco}});
        await Dependentes.create({
            nome,
            sobrenome,
            cpf,
            id_associados,
            id_graus_parentesco: id.id_graus_parentesco
        });
        res.redirect(`/clube/associado/${id_associados}`);

    };

    // Rota de visualizar dependentes
    static async visualizarDependentes(req, res) {
        const id = req.params.id;
        
        const associado = {
            id:id
        }
        const dependentes = await Dependentes.findAll({raw: true, where: {id_associados: id}});
        
        dependentes.forEach((dependente) => {
            dependente.associado = associado.id;
        })

        
        //console.log(dependentes);
        res.render('menu_associados/dependentes/visualizar', {dependentes, associado});

    }
    

    // Rota de agendamento
    static agendamento(req, res){
        const id = req.params.id;
        res.render('menu_associados/agendamento', {id});
    }

    // Realizar agendamento
    static async cadastrarAgendamento(req, res){
        const id = req.params.id;
        let areasComuns = req.body.areasComuns;
        const data = req.body.data;

        //console.log(id, areasComuns, data)

        const area_comum = await AreasComuns.findOne({raw: true, where:{nome: areasComuns}})
        //console.log(area_comum.id_areas_comuns);
        const itens_comuns = await ItensAreasComuns.findAll(
            {
                raw: true, 
                where:{
                    id_areas_comuns: area_comum.id_areas_comuns
                    }
            })
        //res.render('menu_associados/agendamento', {itens_comuns})
        //console.log(itens_comuns)
        await Agendamento.create({
            id_associados: id,
            id_areas_comuns: area_comum.id_areas_comuns,
            data
        })
        console.log('Agendamento realizado com sucesso')
        // res.render('/')
        res.redirect(`clube/associado/${id}`);
    };


    // listagem de agendamento
    static async listarAgendamentos(req, res){

    };

}


module.exports = AssociadosController