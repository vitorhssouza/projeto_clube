const Associados = require('../models/Associados')
const Admintrador = require('../models/Administradores')

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
            const admin = await Admintrador.findOne({
                attributes: ['id_administradores', 'email', 'senha'],
                where: {
                    email, 
                    senha
                }
            })
            if (admin === null){
                console.log('Email ou senha incorreta')
                res.redirect('/clube/login')
            }else{
                console.log('certo')
                res.redirect(`/clube/admin/${admin.id_administradores}`)
            }            
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
    };


    static cadastro(req, res){
        res.render('cadastros/cadastros', {layout:false})
    }

};


module.exports = HomeController;