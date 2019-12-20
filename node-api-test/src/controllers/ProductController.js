const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {
    async listar(req, res) {
        const products = await Product.find()
        return res.json(products)
    },

    async details(req, res) {
        const product = await Product.findById(req.params.id)
        return res.json(product)
    },

    async incluir(req, res) {
        const product = await Product.create(req.body)
        return res.json(product)
    },

    async alterar(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
        return res.json(product)
    },

    async deletar(req, res) {
        await Product.findByIdAndRemove(req.params.id)
        return res.send('Item Removido com sucesso')
    },
}
