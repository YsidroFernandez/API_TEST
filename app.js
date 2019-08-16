'use strict'

const path = require('path')
const express =  require('express')
const body_parser = require('body-parser')
const api = require('./routes/index')

const app = express()

app.use(body_parser.urlencoded({extended : false}))
app.use(body_parser.json())


app.use('/api', api)



module.exports = app