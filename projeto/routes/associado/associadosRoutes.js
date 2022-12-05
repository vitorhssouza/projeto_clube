const { Router } = require('express');
const express = require('express');
const AssociadosController = require('../../controllers/AssociadosController');
const router = express.Router();

// Rota de cadastros de associado
router.post('/clube/cadastro/save', AssociadosController.cadastrarAssociados);

// rota principal de associados
router.get('/clube/associado/:id', AssociadosController.menuAssociado)

//Rota de atualização de dados de usuario
router.get('/clube/associado/edit', AssociadosController.edit)

// Rota de atualizar dados associado
router.post('/clube/associado/edit/save', AssociadosController.atualizarDados)


// Rota dependentes
router.get('/clube/associado/dependentes', AssociadosController.dependentes)

// Rota de cadastrar dependentes
router.post('/clube/associado/dependentes/save', AssociadosController.cadastrarDependentes)


// Rota de atualizar dados dependentes


// Rota de excluir dependentes


// rota de agendamento
router.get('/clube/associado/agendamento', AssociadosController.agendamento)

// Rota de Cadastrar agendamento


// Rota de lista agendamentos



// const AdministradorController = require('../../controllers/AdministradorController')

// router.get('/clube/admin', AdministradorController.associados);


module.exports = router
