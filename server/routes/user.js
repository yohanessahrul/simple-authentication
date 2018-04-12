const router = require('express').Router()
const controllerUser = require('../controllers/c.user')
const auth = require('../middleware/auth')

// router.get('/register', controllerUser.register)
router.post('/register', auth.cekKetersediaanEmail , controllerUser.register)
router.post('/login', controllerUser.login)

module.exports = router