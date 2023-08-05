const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true
    }

}, {timestamps : true})

module.exports = mongoose.model('User', UserSchema)