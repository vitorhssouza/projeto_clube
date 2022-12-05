const { Router } = require('express');
const express = require('express');
const AdministradorController = require('../../controllers/AdministradorController')
const router = express.Router();

// rota principal da pagina admin
router.get('/clube/admin/:id', AdministradorController.associados);

// Rota de exibir detalhes de associados
router.get('/clube/admin/associado/detalhes/:id', AdministradorController.detalhes)
//router.get('/clube/admin/:id/associado/detalhes/:idAssociados', AdministradorController.detalhes)

// Rota de excluir associados
router.get('/clube/admin/associado/delete/:id', AdministradorController.excluir)

// Rota de Ativar status do associado
router.get('/clube/admin/associado/situacao/ativar/:id', AdministradorController.ativar)

// Rota de desativar status do associado
router.get('/clube/admin/associado/situacao/desativa/:id', AdministradorController.desativa)
module.exports = router;

