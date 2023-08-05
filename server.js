const app = require('./app')
const db = require('./db/db')

const dotenv = require('dotenv')

process.env.NODE_ENV = 'dev'

dotenv.config({path: `./${process.env.NODE_ENV || 'dev'}.env`})

PORT = process.env.PORT || 6969

db()

app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`Server running at port ${PORT}`)
})