const express = require('express')
const mongoose = require('mongoose')
// importando biblioteca para conectar diretório de models
const requireDir = require('require-dir')

const app = express()
app.use(express.json())

mongoose.connect(
    'mongodb://localhost:27017/nodeapitest', 
    { useNewUrlParser: true }
)

// inicializando os models na aplicação
requireDir('./src/models')

// incluimos o uso de todas as nossas rotas a partir da rota /api
app.use('/api', require('./src/routes'))

// habilitando qual porta ira rodar nosso servidor.
app.listen(3001)
