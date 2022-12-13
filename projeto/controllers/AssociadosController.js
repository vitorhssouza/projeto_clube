const Associados = require('../models/Associados');
const {Dependentes} = require('../models/Dependentes');
const Agendamento = require('../models/Agendamento');
const {GrauParentesco}= require('../models/Dependentes');
const {AreasComuns} = require('../models/AreaComuns');
const {ItensAreasComuns} = require('../models/AreaComuns');
const bcrypt = require('bcryptjs');
const enviarEmail = require('../helper/enviarEmail')

class AssociadosController{

    // Menu Associados
    static async menuAssociado(req, res){
        const id = req.params.id;
        console.log(id)
        const associados = await Associados.findOne({raw: true, where: {id_associados: id}})

        const agendamento = await Agendamento.findAll({
            raw: true, 
            include: AreasComuns,
            where: {id_associados: id}
        });       
        res.render('menu_associados/menu', {associados, agendamento});
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
        const confirmaSenha = req.body.confirmPassword;

        const userExist = await Associados.findOne({where: {email: email}})

        if(senha != confirmaSenha){
            console.log('Senhas incorretas!')

            req.flash('message', 'Error!');
            req.flash('error', 'Senhas incorretas')
            req.session.save(() =>{
                res.redirect(`/clube/cadastro`)
            });

        }else if(userExist){

            console.log('Esse usuário já existe')
            req.flash('message', 'Error!');
            req.flash('error', 'Esse associado já existe no sistema')
            req.session.save(() =>{
                res.redirect('/clube/cadastro')
            });
            
        }else{

            const salt = bcrypt.genSaltSync(10);
            const senhaCriptografada = bcrypt.hashSync(senha, salt);
            console.log(senhaCriptografada)

            try {
                await Associados.create({nome, sobrenome, cpf, setor, contato, data_nascimento, logadouro, numero,
                    bairro, cidade, cep, estado, email, senha: senhaCriptografada, situacao: false});
                res.redirect('/')

                enviarEmail(
                    email,
                    'Cadastro realizado com sucesso!',
                    '<h1> Seu cadastro foi realizado com sucesso! </h1> <br> <p> Seu cadastro foi realizado com sucesso e seu status está em análise. Aguarde!</p>',
                    'Seu cadastro foi realizado com sucesso e seu status está em análise. Aguarde! '   
                )
                console.log('Cadastrados')
            } catch (error) {
                console.log(error)          
            } 
        }
    }

    // metodo que abre editar associado
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
        const confirmaSenha = req.body.confirmPassword;

        if(senha != confirmaSenha){
            console.log('Senhas incorretas!')
        }else{

            const salt = bcrypt.genSaltSync(10);
            const senhaCriptografada = bcrypt.hashSync(senha, salt);
            console.log(senhaCriptografada)
            

            try {
                await Associados.update({nome, sobrenome, cpf, setor, contato, data_nascimento, logadouro, numero,
                    bairro, cidade, cep, estado, email, senha: senhaCriptografada}, 
                    {where: {id_associados: id}});

                res.redirect(`/clube/associado/${id}`)
                console.log('atualizado')
            } catch (error) {
                console.log(error)          
            } 
        }

        // await Associados.update({nome, sobrenome, cpf, setor, contato, data_nascimento, logadouro, numero,
        //     bairro, cidade, cep, estado, email, senha, situacao: 1}, {where:{id_associados: id}});

        // res.redirect(`/clube/associado/${id}`)
        // console.log('atualizado')
    
    };
    
    
    // Dependentes
    static async dependentes(req, res){
        const id = req.params.id
        const associados = await Associados.findOne({raw: true, where: {id_associados: id}})
        const grauParentesco = await GrauParentesco.findAll({raw: true})

        res.render('menu_associados/dependentes/cadastrar', {associados, grauParentesco})
    }
    

    // Cadastrar dependentes    
    static async cadastrarDependentes(req, res){
        const id_associados = req.params.id;
        const nome = req.body.nome;
        const sobrenome = req.body.sobrenome;
        const cpf = req.body.cpf;

        //Feito pelo maycon
        let idGrauParentesco = req.body.parentesco;
        // console.log(grauParentesco)
        // await GrauParentesco.create({
        //     descricao: grauParentesco
        // })
        // const id = await GrauParentesco.findOne({raw: true, where: {descricao: grauParentesco}});
        await Dependentes.create({
            nome,
            sobrenome,
            cpf,
            id_associados,
            id_graus_parentesco: idGrauParentesco
        });
        res.redirect(`/clube/associado/${id_associados}`);

    };

    // Rota de visualizar dependentes
    static async visualizarDependentes(req, res) {
        const id = req.params.id;
        
        const associado = {
            id:id
        }
        console.log(associado.id)

        const dependentes = await Dependentes.findAll({raw: true, where: {id_associados: id}});
        
        dependentes.forEach((dependente) => {
            dependente.associado = associado.id;
        })

        console.log(dependentes);
        res.render('menu_associados/dependentes/visualizar', {dependentes, id});

    }
  

    // Rota de agendamento
    static async agendamento(req, res){
        const id = req.params.id;

        const area_comum  = await AreasComuns.findAll({raw: true})

        // const area_comum = await AreasComuns.findAll({
        //     raw: true,
        //     include: {
        //         model: ItensAreasComuns,
        //         attributes: ['nome', 'quantidade'],
                
        //     }
                      
        // })

        res.render('menu_associados/agendamento', {id, area_comum});
    }

    // Realizar agendamento
    static async cadastrarAgendamento(req, res){
        const id = req.params.id;
        let idAreasComuns = req.body.areasComuns;
        const data = req.body.data;

        const area_comum = await AreasComuns.findOne({raw: true, where:{id_areas_comuns: idAreasComuns}})
        //console.log(area_comum.id_areas_comuns); 
        
        const agendamento = await Agendamento.findOne({
            raw: true,
            where: {
                data: data,
                id_areas_comuns: idAreasComuns
            }})

        
        // console.log(agendamento != null)
        // return

        let dataAtual = new Date();
        let dataAgendamento = new Date(data)

        

        if(dataAgendamento < dataAtual){
            console.log('Você não pode cadatrar datas anteriores')
            
            req.flash('message', 'Postagem criada!');
            req.flash('error', 'Você não pode agendar com datas anteriores')
            req.session.save(() =>{
                res.redirect(`/clube/associado/${id}/agendamento`)
            });

        }else if(agendamento != null){
            console.log('Area em comum já está reservado')

            req.flash('message', 'Postagem criada!');
            req.flash('agendado', 'Essa área de lazer já está agendada')
            req.session.save(() =>{
                res.redirect(`/clube/associado/${id}/agendamento`)
            });
        }else{
            await Agendamento.create({
                id_associados: id,
                id_areas_comuns: area_comum.id_areas_comuns,
                data
            })

            req.flash('message', 'postagem');
            req.flash('sucesso', 'Agendamento Realizado com sucesso!')
            req.session.save(() =>{
                res.redirect(`/clube/associado/${id}/agendamento`)
            });
            // console.log('Agendamento realizado com sucesso')
            // res.redirect(`/clube/associado/${id}`);
        }
    };


    // listagem de agendamento
    static async excluirAgendamento(req, res){
        const id = req.params.id;
        const idAgendamento = req.params.idAgendamento

        const agendamento = await Agendamento.findOne({raw: true, where: {id_agendamento: idAgendamento}})
        
        let dataAtual = new Date();
        let dataCadastrada = new Date(agendamento.data)

        // req.flash('message')
        
        if(dataAtual > dataCadastrada){
            console.log('Você não consegue excluir esse agendamento')

            // req.flash('atencao', 'Obs, não conseguimos excluir seu agendamento')

            // res.redirect(`/clube/associado/${id}`)
            req.flash('message', 'postagem');
            req.flash('error', 'Você não consegue excluir esse agendamento!')
            req.session.save(() =>{
                res.redirect(`/clube/associado/${id}`)
            });

        }else{
            try {
                await Agendamento.destroy({where: {id_agendamento: idAgendamento}})
                console.log('Agendamento excluído')

                req.flash('message', 'postagem');
                req.flash('sucesso', 'Agendamento excluído!')
                req.session.save(() =>{
                    res.redirect(`/clube/associado/${id}`)
                });

                // req.flash('excluir', 'sucesso')

                //res.redirect(`/clube/associado/${id}`)   
            } catch (error) {
                console.log(error)
                
            }
        }
             

    };

}



module.exports = AssociadosController