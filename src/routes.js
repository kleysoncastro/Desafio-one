const express = require('express')
const CadastroController = require('./controller/CadastroController')

const routes = express.Router();

routes.post('projects', CadastroController.store)

module.exports = routes;