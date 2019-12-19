// importando o express (framework) para facilitar nosso servidor.
const express = require('express')

// importando o mongoose para comunicar com o banco de dados (mongodb)
const mongoose = require('mongoose')

// importando biblioteca para conectar diretório de models
const requireDir = require('require-dir')

// ativando uma variavel app com as funcionalidades do express.
const app = express()

// iniciando a conexão com o banco de dados por meio de string connection
mongoose.connect(
    'mongodb://localhost:27017/nodeapitest', 
    { useNewUrlParser: true }
)
// inicializando os models na aplicação
requireDir('./src/models')

const Product = mongoose.model('Product')

/* usamos o método get para receber a rota de navegação do usuário.
o req nos permite enviar uma requisição para o servidor. 
o res nos devolve uma resposta do servirdor ao usuário. */ 
app.get('/', (req, res) => {
    Product.create({
        title: 'Produto 1',
        description: 'Um produto fake injetado pelo code para testes',
        url: 'algumacoisa.com'
    })

    return res.send('Nossa primeira rota em Express!')
})

// habilitando qual porta ira rodar nosso servidor.
app.listen(3001)
