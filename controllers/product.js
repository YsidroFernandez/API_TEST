'use strict'

const Product = require('../models/product')

function getProducts(req, resp) {
    Product.find({}, (err, products) => {
        if (err) return resp.status(500).send({ message: `Error al realizar la petición ${err}` })
        if (!products) return resp.status(404).send({ message: 'Poductos no existen' })

        resp.status(200).send({ status: 'Ok' ,products })
    })
}

function saveProduct(req, resp) {
    console.log('POST /api/product')
    console.log(req.body)


    let product = new Product()
    product.type = req.body.type
    product.models = req.body.models


    product.save((err, productStored) => {
        if (err) resp.status(500).send({ message: `Error al Guardar en la DB ${err}` })

        resp.status(200).send({status: 'Ok', product: productStored })
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
    getProducts,
    saveProduct,
    deleteProduct
}