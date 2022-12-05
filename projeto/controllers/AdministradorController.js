const Associados = require('../models/Associados')

class AdministradorController{

    // Metodo que lista todos os associados
    static async associados(req, res){
        const associados = await Associados.findAll({raw: true});
        res.render('menu_administrador/menu', {associados})
    };

    static async detalhes(req, res){
        const id = req.params.id;
        console.log(id)

        const detalhe = await Associados.findOne({where: {id_associados: id}})
        res.render('menu_administrador/detalhes/detalhe', {detalhe: detalhe.get({plain: true})})
    }

    static async excluir(req, res){
        const id = req.params.id;
        
        await Associados.destroy({where: {id_associados: id}})
        res.redirect('/clube/admin')
    }

    static async ativar(req, res){
        const id = req.params.id;

        await Associados.update({situacao: 'Ativo'},{where: {id_associados: id}} )
        res.redirect('/clube/admin')
    };

    static async desativa(req, res){
        const id = req.params.id;

        await Associados.update({situacao: 'Desativado'},{where: {id_associados: id}})
        res.redirect('/clube/admin')
    }
}

module.exports = AdministradorController