const mongoose = require('mongoose')
const MONGO_URL = 'mongodb+srv://cythakuria:maisgreat@cluster0.tyzy6lo.mongodb.net/file-sharing?retryWrites=true&w=majority'

const DBConnection = async ()=> {
    try{
        await mongoose.connect(MONGO_URL);
        console.log("MongoDb is Up and Running")
    }catch(error){
        console.log('Received error while connecting', error.message)
    }
}

module.exports = DBConnection