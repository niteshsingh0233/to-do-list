const mongoose = require(`mongoose`)

db = async function  (req,res) {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('db connected')
    } catch (error) {
        console.log(error)
    }
} 

module.exports = db