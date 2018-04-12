const User = require('../models/m.user')

module.exports = {
    cekUser: function(req, res, next) {
        User.findOne({
            email: req.body.email
        }, function(err, response) {
            console.log(response)
            if(response == undefined){
                res.status(500).json({
                    message: 'Bisa masukkin data'
                })
                next()
            } else {
                res.status(200).json({
                    message: 'Email sudah ada gan'
                })
            }
        })
    }
}