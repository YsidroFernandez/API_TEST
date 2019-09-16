'use strict'
const express = require('express')
const productCtrl = require('../controllers/product')
const api = express.Router()



api.get('/product', productCtrl.getProducts)
api.post('/product', productCtrl.saveProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)

module.exports = api