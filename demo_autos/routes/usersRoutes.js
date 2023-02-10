const express = require('express')
const router = express.Router()
const { registrarUser } = require('../controllers/userController')

router.post('/', registrarUser)



module.exports = router