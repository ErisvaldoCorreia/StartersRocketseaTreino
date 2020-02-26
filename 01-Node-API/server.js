const express = require('express')
// import cors para permissão de acesso externo a api
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

// importando biblioteca para conectar diretório de models
const requireDir = require('require-dir')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(
    process.env.DATABASE_CONNECTION_STRING, 
    { useNewUrlParser: true }
)

// inicializando os models na aplicação
requireDir('./src/models')

// incluimos o uso de todas as nossas rotas a partir da rota /api
app.use('/api', require('./src/routes'))

// habilitando qual porta ira rodar nosso servidor.
app.listen(3333)
console.log('funcionando perfeitamente')
