const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

const userRouter = require('./routes/userRoute')
app.use('/api/v1', userRouter)

module.exports = app