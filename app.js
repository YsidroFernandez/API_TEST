'use strict'

const path = require('path')
const express =  require('express')
const body_parser = require('body-parser')
var exphbs  = require('express-handlebars');
const api = require('./routes/index')

const app = express()


app.use(body_parser.urlencoded({extended : false}))
app.use(body_parser.json())

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});

app.use('/api', api)



module.exports = app