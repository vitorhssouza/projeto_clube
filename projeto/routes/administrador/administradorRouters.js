const { Router } = require('express');
const express = require('express');
const AdministradorController = require('../../controllers/AdministradorController')
const router = express.Router();

// const auth = require('../helper/auth.js').auth


// rota principal da pagina admin
router.get('/clube/admin/:id', AdministradorController.associados);

// Rota de exibir detalhes de associados
//router.get('/clube/admin/associado/detalhes/:idAssociado', AdministradorController.detalhes)
router.get('/clube/admin/:id/associado/detalhes/:idAssociados', AdministradorController.detalhes)

// Rota de excluir associados
router.get('/clube/admin/:id/associado/:idAssociado/delete', AdministradorController.excluir)
//router.get('/clube/admin/associado/delete/:id', AdministradorController.excluir)

// Rota de Ativar status do associado
router.get('/clube/admin/:id/associado/:idAssociado/ativar', AdministradorController.ativar)
//router.get('/clube/admin/associado/situacao/ativar/:id', AdministradorController.ativar)

// Rota de desativar status do associado
router.get('/clube/admin/:id/associado/:idAssociado/desativa', AdministradorController.desativa)
//router.get('/clube/admin/associado/situacao/desativa/:id', AdministradorController.desativa)

// Rota de lista agendamentos de associados
router.get('/clube/admin/:id/agendamento', AdministradorController.agendamentos)

// Rota de pesquisa por nome de usuario
// router.get('/clube/admin/:id/pesquisa', AdministradorController.pesquisa);


module.exports = router;

