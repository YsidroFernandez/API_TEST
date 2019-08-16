'use strict'

const User = require('../models/user')
const Service = require('../service')

function singUp(req, resp) {
    const user = new User({
        email : req.body.email,
        displayName : req.body.displayName,
        password : req.body.password
    })

    user.save((err) => {
        if (err) resp.status(500).send({ message: `Error al crear el user ${err}` })

        return resp.status(200).send({ token: Service.createToken(user) })
    })
}

function singIn(req, resp) {
    User.find({ email: req.body.email }, (err, user) => {
        if (err) return resp.status(500).send({ message: err })
        if (!user) return resp.status(404).send({ message: 'No existe el usuario!' })

        req.user
        resp.status(200).send({
            message: 'Te has logueado correctamente',
            token: Service.createToken(user)
            })
    })
}
module.exports = {
    singUp,
    singIn
}