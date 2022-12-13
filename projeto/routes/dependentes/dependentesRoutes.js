const { Router } = require('express');
const express = require('express');
const DependentesController = require('../../controllers/DependentesController');
const router = express.Router();

// Rota de editar dependentes 
router.get('/clube/associado/:id/dependente/edit/:idDependentes', DependentesController.editar)

//Rota de salvar edição dependentes
router.post('/clube/associado/:id/dependente/edit/:idDependentes/save', DependentesController.editSave)

// Rota de Excluir
router.get('/clube/associado/:id/dependente/excluir/:idDependentes', DependentesController.excluir)



module.exports = router;