'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema   

const ContactSchema = Schema(
  {
    email: { type: String, unique: true, lowercase:true},
    name: String,
    lastname: String,
    phone: String,
    gender: String,
    city: String,
    message: String
    
  }
)

module.exports = mongoose.model('Contact', ContactSchema)