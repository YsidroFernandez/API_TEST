'use strict'
const express = require('express')
const productCtrl = require('../controllers/product')
const api = express.Router()
const auth = require('../middelwares/auth')
const userCtrl = require('../controllers/user')


api.get('/product', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', auth, productCtrl.saveProduct)
api.put('/product/:productId' , auth, productCtrl.updateProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)
api.post('/singup', userCtrl.singUp)
api.post('singin', userCtrl.singIn)
api.get('/private', auth, (req,resp) => {
    resp.status(200).send({ message: 'Tienes acceso.!'})
})

module.exports = api