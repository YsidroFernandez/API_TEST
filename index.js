'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(
    config.DB_URI,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
    }
    , (err, resp) => {
        if (err) {
            console.log(`failed to connect to the db ${err}`)
        }

        console.log("connection established")
        app.listen(config.PORT, () => {
            console.log(`API listen in ${config.DB_URI}:${config.PORT}`)
        })
    })
