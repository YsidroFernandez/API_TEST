'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.DB_URI,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
    }
    , (err, resp) => {
        if (err) {
            console.log(`fallo al conectar a la BD ${err}`)
        }

        console.log("conexión establecida")
        app.listen(config.PORT, () => {
            console.log(`API CORRIENDO en http://localhost:${config.PORT}`)
        })
    })
