const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')

// definição das rotas da api
routes.get('/products', ProductController.listar)
routes.get('/products/:id', ProductController.details)
routes.post('/products', ProductController.incluir)
routes.put('/products/:id', ProductController.alterar)
routes.delete('/products/:id', ProductController.deletar)

module.exports = routes;
