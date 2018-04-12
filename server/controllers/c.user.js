const User = require('../models/m.user')
const jwt = require('jsonwebtoken');

module.exports = {
    register: function(req, res) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if( re.test(String(req.body.email).toLowerCase()) === false ){
            res.status(500).json({
                message: 'Bukan format email yang benar !!!'
            })
        } else {
            if(req.body.password.length < 8) {
                res.status(500).json({
                    message: 'Panjang password minimal 8 digit'
                })
            } else {
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
        }
    },
    login: function (req, res) {
        // res.send('Masuk ke controller Login')
        User.findOne({
            email: req.body.email
        }, function(err, response) {
            if(err) {
                req.status(500).json({
                    message: 'Internal server error gan'
                })
            }
            let token =  jwt.sign({
                email: req.body.email,
                password: req.body.password
            }, 'secretkeeeyssss');
            res.status(200).json({
                message: 'Anda berhasil masuk',
                email: req.body.email,
                token: token
            })            
        })
        
    }
}