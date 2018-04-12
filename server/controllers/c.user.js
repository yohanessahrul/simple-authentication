const User = require('../models/m.user')

module.exports = {
    register: function(req, res) {
        // console.log('masuk ke register')
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if( re.test(String(req.body.email).toLowerCase()) === false ){
            res.status(500).json({
                message: 'Bukan format email yang benar !!!'
            })
        } else {
            // res.send('Masuk ke controller register')
            var data = new User({
                email: req.body.email,
                password: req.body.password
            });
            data.save(function (err, response) {
                if (!err) {
                    res.status(200).json({
                        message: 'Berhasil menambahkan user baru',
                        response: response
                    })
                } else {
                    res.status(500).json({
                        message: 'Internal server error Guys!'
                    })
                }
            })
        }
    },
    login: function (req, res) {
        res.send('Masuk ke controller Login')
    }
}