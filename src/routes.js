const express = require('express')
const CadastroController = require('./controller/CadastroController')
const middlewareValidacao = require('./middleware/validar')
const routes = express.Router();

routes.post('/projects', CadastroController.store)
routes.get('/projects', CadastroController.index)
routes.delete('/projects/:id',middlewareValidacao.validar, CadastroController.delete)
routes.post('/projects/:id/tasks', CadastroController.update)

module.exports = routes;