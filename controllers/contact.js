'use strict'

const Contact = require('../models/contact')

function sendContact(req, resp) {
    console.log('POST /api/product/contact')
    console.log(req.body)


    let contact = new Contact()
    contact.email = req.body.email
    contact.name = req.body.name
    contact.lastname = req.body.lastname
    contact.phone = req.body.phone
    contact.gender = req.body.gender
    contact.city = req.body.city
    contact.message = req.body.message


    contact.save((err, contactStored) => {
        if (err) resp.status(500).send({ message: `Error al Guardar en la DB ${err}` })

        resp.status(200).send({ status: 'Ok',contact: contactStored })
    })
}

module.exports = {
    sendContact
}