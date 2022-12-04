const Associados = require('../models/Associados')

class HomeController{
    static home(req, res){
        res.render('home/home', {layout:false})
    }

    static quemSomos(req, res){
        res.render('home/sobre', {layout:false})
    }

    static contato(req, res){
        res.render('home/contatos', {layout:false})
    }

    static login(req, res){
        res.render('login/login', {layout:false})
    }

    static async verificarlogin(req, res){
        const email = req.body.email;
        const senha = req.body.senha;
        console.log(req.body)

        const verificar = await Associados.findOne({
            attributes: ['id_associados', 'email', 'senha'],
            where:{
                email,
                senha
            }
        });

        if (verificar === null){
            console.log('Error')
            res.redirect('/clube/login')
            
            
        }else{
            console.log('Certo')
            res.redirect(`/clube/associado/${verificar.id_associados}`)
        }


        
        // if(usuario == 'vitor' && senha == 123){
        //     res.redirect('/clube/associado'); 
        //     console.log(usuario, senha)
        // }else if(usuario == 'admin' && senha == 123){
        //     res.redirect('/clube/admin');
        //     console.log(req.body)
        // }else{
        //     console.log('Senha ou usuario incorretor');
        // }
    }

    static cadastro(req, res){
        res.render('cadastros/cadastros', {layout:false})
    }

};


module.exports = HomeController;