module.exports = {
    port : process.env.port || 3000,
    db: process.env.MONGODB || 'mongodb://localhost:27017/products',
    SECRET_TOKEN: '123YJFStokens'
}
// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config()
//   }
  
//   const DB_URI = process.env.DB_URI
//   const PORT = process.env.PORT