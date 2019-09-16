'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema   

const ProductSchema = Schema(
  {
    name : String,
    description : String,
    stack : { 
    	type : Array,
    	default: []
    }
  }
)

module.exports = mongoose.model('Product', ProductSchema)