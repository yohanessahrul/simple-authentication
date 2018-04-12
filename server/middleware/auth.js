const User = require('../models/m.user')

module.exports = {
    cekKetersediaanEmail: function(req, res, next) {
        User.findOne({
            email: req.body.email
        }, function(err, response) {
            console.log(response)
            if(response == undefined){
                console.log('bisa masukin data')
                next()
            } else {
                res.status(500).json({
                    message: 'Email sudah ada gan'
                })
            }
        })
    }
}