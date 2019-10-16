const express = require('express')
const CadastroController = require('./controller/CadastroController')
const middlewareValidacao = require('./middleware/validar')
const routes = express.Router();

routes.post('/projects',middlewareValidacao.log, CadastroController.store)
routes.get('/projects',middlewareValidacao.log, CadastroController.index)
routes.delete('/projects/:id',middlewareValidacao.validar,middlewareValidacao.log, CadastroController.delete)
routes.post('/projects/:id/tasks',middlewareValidacao.validar,middlewareValidacao.log, CadastroController.update)

module.exports = routes;