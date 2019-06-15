const mongoose = require('mongoose')

if (mongoose.connect('mongodb://localhost:27017/empDb', { useNewUrlParser: true }))
    console.log('Connected to MongoDb')

module.exports = mongoose