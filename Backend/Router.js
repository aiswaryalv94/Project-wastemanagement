const express = require('express')
router = express.Router()

const UserController = require('./Controller/UserController')

router.post('/userregistration',UserController.UserRegistration)
router.post('/userviewall',UserController.UserRegistration)
router.post('/userviewone',UserController.UserRegistration)
router.post('/userdelete/:id',UserController.UserRegistration)
router.post('/userupdate/:id',UserController.UserRegistration)

module.exports = router