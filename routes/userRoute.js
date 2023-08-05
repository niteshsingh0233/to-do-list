const express = require('express')
const { RegisterUser } = require('../controllers/userController')

const router = express.Router()

router.post('/register-user', RegisterUser)

module.exports = router