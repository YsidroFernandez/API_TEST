'use strict'

const path = require('path')
const express =  require('express')
const body_parser = require('body-parser')
const api = require('./routes/index')

const app = express()

app.use(body_parser.urlencoded({extended : false}))
app.use(body_parser.json())
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', api)



module.exports = app