const router = require('express').Router()
const controllerUser = require('../controllers/c.user')

router.get('/register', controllerUser.register)
router.get('/login', controllerUser.login)

module.exports = router