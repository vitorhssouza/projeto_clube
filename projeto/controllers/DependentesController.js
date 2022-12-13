const {Dependentes, GrauParentesco} = require('../models/Dependentes')


class DependentesController{

    // metodo visualizar pagina de edição de dependentes
    static async editar(req, res){
        const id = req.params.id
        const idDependentes = req.params.idDependentes;
        console.log(id, idDependentes)

        const dependente = await Dependentes.findOne({raw: true, where: {id_dependentes: idDependentes}}) 

        res.render('menu_associados/dependentes/atualizar', {dependente, id, idDependentes})
    }

    // metodo para salvar edição de dependentes
    static async editSave(req, res){
        const id = req.params.id;
        const idDependentes = req.params.idDependentes;
        const nome = req.body.nome;
        const sobrenome = req.body.sobrenome;
        const cpf = req.body.cpf;
        const parentesco = req.body.parentesco

        const id_graus = await Dependentes.findOne({raw: true, where: {id_dependentes: idDependentes}})
        //console.log(id_graus.id_graus_parentesco)

        await GrauParentesco.update({descricao: parentesco}, {where: {id_graus_parentesco: id_graus.id_graus_parentesco}})

        //console.log(id, idDependentes)
        //const dependente = await Dependentes.update({nome, sobrenome, cpf}, {where: {id_dependentes: idDependentes}})
        //const grausparentesco = await GrauParentesco.update({descricao: parentesco}, {where: {}})
        await Dependentes.update({
            nome, 
            sobrenome, 
            cpf, 
            id_associados: id, 
            id_graus_parentesco: id_graus.id_graus_parentesco },
            {
                where: {id_dependentes: idDependentes}
            })
        
        console.log('Registro atualizado')
        res.redirect(`/clube/associado/${id}/dependentes/view`)
    }



    // Excluir dependentes
    static async excluir(req, res){
        const id = req.params.id
        const idDependentes = req.params.idDependentes;

        const dependente = await Dependentes.destroy({where: {id_dependentes: idDependentes}})
        console.log('excluido dependentes')
        
        res.redirect(`/clube/associado/${id}`)

    }
}


module.exports = DependentesController;