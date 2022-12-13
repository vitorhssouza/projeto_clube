const Associados = require('../models/Associados')
const Admintrador = require('../models/Administradores')
const bcrypt = require('bcryptjs');

class HomeController{
    static home(req, res){
        res.render('home/home', {layout:false})
    }

    // Rota de logaut
    // static logout(req, res){
    //     // Para sair da autenticação 
    //     if(req.session.userId){
    //         req.session.destroy()
    //         res.redirect('/')  
    //     }
    // }

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
            raw: true,
            attributes: ['id_associados', 'email', 'senha'],
            where:{
                email        
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
                req.flash('message', 'Postagem criada!');
                req.flash('error', 'Email ou senha incorreta')
                req.session.save(() =>{
                    res.redirect(`/clube/login`)
                });

                //res.redirect('/clube/login')
            }else{
                    // Teste de autenticação
                    // req.session.userId = verificar.id_administradores
                    // req.session.save(() => {
                    //     console.log('certo')
                    //     res.redirect(`/clube/admin/${admin.id_administradores}`)
                    // })
                    console.log('certo')
                        res.redirect(`/clube/admin/${admin.id_administradores}`)

            }}else{
                const senhaCript = bcrypt.compareSync(senha, verificar.senha)
                if(senhaCript){

                    // Teste de autenticação
                    // req.session.userId = verificar.id_administradores
                    // req.session.save(() => {
                    //     console.log('certo')
                    //     res.redirect(`/clube/admin/${verificar.id_associados}`)
                    // })

                    console.log('Certo')
                    res.redirect(`/clube/associado/${verificar.id_associados}`)
                }else{
                    console.log('Email ou senha incorreto')
                    req.flash('message', 'Postagem criada!');
                    req.flash('error', 'Email ou senha incorreta')
                    req.session.save(() =>{
                        res.redirect(`/clube/login`)
                    });
                }
        }
    };


    static cadastro(req, res){
        res.render('cadastros/cadastros', {layout:false})
    }

};


module.exports = HomeController;