const mongoose = require('mongoose')

const FileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    downloadContent: {
        type: Number,
        default: 0,
        required: true
    }
})

const File = mongoose.model('file', FileSchema);


module.exports = File