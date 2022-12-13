const { Router } = require('express');
const express = require('express');
const HomeController = require('../../controllers/HomeController')
const router = express.Router();


// Rotas responsável por exibir todas as tarefas
router.get('/', HomeController.home);

// Rota para destruir a sessão
// router.get('/logout', HomeController.logout);

// Rota de quem somos 
router.get('/clube/sobre', HomeController.quemSomos);

// Rota de Contatos
router.get('/clube/contato', HomeController.contato);

// Rota de login
router.get('/clube/login', HomeController.login);

// Rota de verificação de login
router.post('/clube/login/verificar', HomeController.verificarlogin)


// Rota de cadastro
router.get('/clube/cadastro', HomeController.cadastro);


module.exports = router