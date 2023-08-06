const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema([
    {
        title : {
            type : String,
            unique : true,
            trim : true,
        },
        description : {
            type : String,
            trim : true,
            minlength : 10,
            maxlength : 100
        },
        listData : {
            type : String,
            trim : true
        }
    }

], {timestamps: true})

module.exports = mongoose.model('ToDo', ToDoSchema)