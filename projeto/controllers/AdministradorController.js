const Associados = require('../models/Associados')
const {Dependentes} = require('../models/Dependentes')
const {GrauParentesco} = require('../models/Dependentes')
const Administradores = require('../models/Administradores')
const Agendamento = require('../models/Agendamento')
const { AreasComuns } = require('../models/AreaComuns')
const enviarEmail = require('../helper/enviarEmail')
const { Op } = require('sequelize');

class AdministradorController{

    // Metodo que lista todos os associados
    static async associados(req, res){
        const id = req.params.id

        let search = '';
        if(req.query.search){
            search = req.query.search
        }

        //console.log(search)
        //console.log(typeof(id))

        const admin = {
            id: id
        };
              
        const associados = await Associados.findAll({
            raw: true,
            where: {
                nome: {[Op.like]: `%${search}%`}
            }
            // ,
            // order: [['id_associados', 'nome']]
        
        });

        // console.log(associados)
        // return
        
        associados.forEach((associado) => {
            associado.admin = admin.id
        })

        
        
        res.render('menu_administrador/menu', {associados, id})
    };


    // Metodo de exibir detalhes de associados
    static async detalhes(req, res){
        const id = req.params.id;
        const id_associado = req.params.idAssociados
                
        const administrador = await Administradores.findOne({raw: true, where: {id_administradores: id}})     
       
        const detalhe = await Associados.findOne({where: {id_associados: id_associado}})

        const dependentes = await Dependentes.findAll({
            raw: true,
            include: {
                model: GrauParentesco
            },
            where: {id_associados: id_associado}
        });

        res.render('menu_administrador/detalhes/detalhe', {
            detalhe: detalhe.get({plain: true}), 
            administrador,  
            dependentes})
       
    }   

    // Metodo de excluir associados
    static async excluir(req, res){
        const id = req.params.id;
        const idAssociado = req.params.idAssociado;

        const associado = await Associados.findOne({raw: true, where:{id_associados: idAssociado}})
        //const dependentes = await Dependentes.findAll({raw: true, where: {id_associados: idAssociado}})
        //const agendamentos = await Agendamento.findAll({raw: true, where: {id_associados: idAssociado}})

        // console.log(dependentes)
        // return
        //console.log(associado.email)

        enviarEmail(
            associado.email,
            'Você foi excluido da nossa base de dados.',
            '<h1> Você foi excluido da nossa base de dados.</h1> <br> <p> Você foi excluido da nossa base de dados.</p>',
            'Infelizmente você foi excluido da nossa base de dados! '  
            )

        await Agendamento.destroy({where: {id_associados: idAssociado}})

        await Dependentes.destroy({where: {id_associados: idAssociado}})
        
        await Associados.destroy({where: {id_associados: idAssociado}})
        
        // res.redirect(`/clube/admin/${id}`)

        req.flash('message', 'Email enviado com sucesso!')

        req.session.save(() =>{
            res.redirect(`/clube/admin/${id}`)
        });

    }

    // Metodo de ativar associados
    static async ativar(req, res){
        const id = req.params.id;
        const idAssociado = req.params.idAssociado;

        const associado = await Associados.findOne({raw: true, where:{id_associados: idAssociado}})
        //console.log(associado.email)

        enviarEmail(
            associado.email,
            'Sua solicitação foi aceita!',
            '<h1> Seja bem vindo ao nosso clube! </h1> <br><p>Você agora faz parte do clube RIO POMBA VALLEY! </p>',
            'Seja bem vindo ao nosso clube! '  
            )

        await Associados.update({situacao: true},{where: {id_associados: idAssociado}} )
        // res.redirect(`/clube/admin/${id}`)

        req.flash('message', 'Email enviado com sucesso!')

        req.session.save(() =>{
            res.redirect(`/clube/admin/${id}`)
        });
    };

    //Metodo de desativar associados
    static async desativa(req, res){
        const id = req.params.id;
        const idAssociado = req.params.idAssociado;

        const associado = await Associados.findOne({raw: true, where:{id_associados: idAssociado}})
        //console.log(associado.email)

        enviarEmail(
            associado.email,
            'Infelizmente seu registro foi desativado!',
            '<h1> Infelizmente seu registro foi desativado.</h1> <br><p>Você não faz mais parte do clube RIO POMBA VALLEY.</p>',
            'Infelizmente seu registro foi desativado, você não faz mais parte do clube aurora! '
            
            )
        
        await Associados.update({situacao: false},{where: {id_associados: idAssociado}})

        //req.flash('sucesso', 'Sucesso')

        req.flash('message', 'Email enviado com sucesso!')

        req.session.save(() =>{
            res.redirect(`/clube/admin/${id}`)
        });
        
        
    }


    // Metodo de lista agendamentos de associados
    static async agendamentos(req, res){
        const id = req.params.id

        let filtro = req.query.filtro

        let search = '';
        if(req.query.search){
            search = req.query.search
        }
        // console.log(filtro, search)
        
        if(filtro == 1){
            const teste = await Associados.findAll({
                raw: true,
                
                include: {
                    model: Agendamento,
                    include: {
                        model: AreasComuns
                    },required: true
                },
                required: true,
                where: {nome: {[Op.like]: `%${search}%`}},   
            });
            res.render('menu_administrador/agendamentos', {teste, id}) 
        }else if(filtro == 2){
            const teste = await Associados.findAll({
                raw: true,
                include: {
                    model: Agendamento,
                    include: {
                        model: AreasComuns,
                        where: {nome: {[Op.like]: `%${search}%`}},
                    },required: true
                },
                required: true,
                //where: {'agendamentos.areas_comun.nome': {[Op.like]: `%${search}%`}},   
            });
            res.render('menu_administrador/agendamentos', {teste, id}) 
        }else if(filtro == 3){
            const teste = await Associados.findAll({
                raw: true,
                include: {
                    model: Agendamento,
                    where: {data: {[Op.like]: `%${search}%`}},
                    include: {
                        model: AreasComuns
                    },required: true
                },
                required: true,
            });

            console.log(teste)
            res.render('menu_administrador/agendamentos', {teste, id}) 
        }else{
            const teste = await Associados.findAll({
                raw: true,
                include: {
                    model: Agendamento,
                    include: {
                        model: AreasComuns
                    },required: true
                },
                required: true
                
            });
            res.render('menu_administrador/agendamentos', {teste, id})
        }

        
    }



    // // Rota de pesquisa de usuario
    // static async pesquisa(res, req){
    //     //const id = req.params.id;
        
    //     let search = '';
    //     if(req.query.search){
    //          search = req.query.search
    //     };



    //     console.log(search)



    // }

}

module.exports = AdministradorController