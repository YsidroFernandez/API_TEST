'use strict'
const Product = require('../models/product')

function getProduct(req, resp) {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) return resp.status(500).send({ message: `Error al realizar la petición ${err}` })
        if (!product) return resp.status(404).send({ message: `El poducto no existe` })

        resp.status(200).send({ product })
    })
}

function getProducts(req, resp) {
    Product.find({}, (err, products) => {
        if (err) return resp.status(500).send({ message: `Error al realizar la petición ${err}` })
        if (!products) return resp.status(404).send({ message: 'Poductos no existen' })

        resp.status(200).send({ products })
    })
}

function saveProduct(req, resp) {
    console.log('POST /api/product')
    console.log(req.body)

    let product = new Product()
    product.name = req.body.name
    product.price = req.body.price
    product.picture = req.body.picture
    product.category = req.body.category
    product.description = req.body.description


    product.save((err, productStored) => {
        if (err) resp.status(500).send({ message: `Error al Guardar en la DB ${err}` })

        resp.status(200).send({ product: productStored })
    })
}

function updateProduct(req, resp) {
    let productId = req.params.productId
    let update = req.body

    Product.findByIdAndUpdate(productId, update, (err, productUpdate) => {
        if (err) return resp.status(500).send({ message: `Error al realizar la petición Update ${err}` })

        resp.status(200).send({ product: productUpdate })
    })
}

function deleteProduct(req, resp) {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) return resp.status(500).send({ message: `Error al realizar la petición ${err}` })
        product.remove(err => {
            if (err) return resp.status(500).send({ message: `Error al realizar la eliminación  ${err}` })
            resp.status(200).send({ message: `El producto ha sido eliminado` })
        })

    })
}

 module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}