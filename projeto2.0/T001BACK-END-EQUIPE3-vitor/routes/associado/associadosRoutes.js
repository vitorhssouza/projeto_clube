const { Router } = require('express');
const express = require('express');
const AssociadosController = require('../../controllers/AssociadosController');
const router = express.Router();

// Rota de cadastros de associado
router.post('/clube/cadastro/save', AssociadosController.cadastrarAssociados);

// rota principal de associados
router.get('/clube/associado/:id', AssociadosController.menuAssociado)

//Rota de atualização de dados de usuario
router.get('/clube/associado/:id/edit', AssociadosController.edit)

// Rota de atualizar dados associado
router.post('/clube/associado/:id/edit/save', AssociadosController.atualizarDados)


// Rota dependentes
router.get('/clube/associado/:id/dependentes', AssociadosController.dependentes)

// Rota de visualizar dependentes
router.get('/clube/associado/:id/dependentes/view', AssociadosController.visualizarDependentes)


// Rota de cadastrar dependentes
router.post('/clube/associado/:id/dependentes/save', AssociadosController.cadastrarDependentes)


// Rota de atualizar dados dependentes


// Rota de excluir dependentes


// rota de agendamento
router.get('/clube/associado/:id/agendamento', AssociadosController.agendamento)

// Rota de Cadastrar agendamento
router.post('/clube/associado/:id/agendamento/save', AssociadosController.cadastrarAgendamento)


// Rota de lista agendamentos
router.get('/clube/associados/:id/agendamento/view', AssociadosController.listarAgendamentos)






module.exports = router
