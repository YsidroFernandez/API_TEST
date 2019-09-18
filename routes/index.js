'use strict'
const express = require('express')
const productCtrl = require('../controllers/product')
const contactCtrl = require('../controllers/contact')
const api = express.Router()



api.get('/product', productCtrl.getProducts)
api.post('/product', productCtrl.saveProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)
api.post('/product/contact', contactCtrl.sendContact)

module.exports = api