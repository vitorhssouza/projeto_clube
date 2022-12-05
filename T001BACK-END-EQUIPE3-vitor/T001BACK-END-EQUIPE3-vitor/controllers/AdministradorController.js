const Associados = require('../models/Associados')

class AdministradorController{

    // Metodo que lista todos os associados
    static async associados(req, res){
        const id = req.params.id
        const associados = await Associados.findAll({raw: true});
        //const junta = {associados, id}
        //res.render('menu_administrador/menu', {junta})
        res.render('menu_administrador/menu', {associados})
    };

    static async detalhes(req, res){
        const id = req.params.id;
        const id_associado = req.params.idAssociados
        console.log(id, id_associado)

        //const detalhe = await Associados.findOne({where: {id_associados: id_associado}})
        const detalhe = await Associados.findOne({where: {id_associados: id}})
        const junta = {detalhe, id};
        console.log(junta)
        //res.render('menu_administrador/detalhes/detalhe', {junta: junta.get({plain: true})})
        res.render('menu_administrador/detalhes/detalhe', {detalhe: detalhe.get({plain: true})})
    }

    // Metodo de excluir associados
    static async excluir(req, res){
        const id = req.params.id;
        await Associados.destroy({where: {id_associados: id}})
        res.redirect(`/clube/admin/${id}`)
    }

    // Metodo de ativar associados
    static async ativar(req, res){
        const id = req.params.id;

        await Associados.update({situacao: true},{where: {id_associados: id}} )
        res.redirect(`/clube/admin/${id}`)
    };

    //Metodo de desativar associados
    static async desativa(req, res){
        const id = req.params.id;

        await Associados.update({situacao: false},{where: {id_associados: id}})
        res.redirect(`/clube/admin/${id}`)
    }
}

module.exports = AdministradorController