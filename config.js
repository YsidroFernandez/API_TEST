module.exports = {
    port : process.env.port || 3000,
    db: process.env.MONGODB || 'mongodb://localhost:27017/products',
    SECRET_TOKEN: '123YJFStokens'
}