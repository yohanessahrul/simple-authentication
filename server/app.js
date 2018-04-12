const express = require('express')
const PORT = 3000
const api = require('./routes/index')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lcmid');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('were connected!')
});


const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api', api)


app.listen(PORT, () => {
    console.log('App listening to port ',PORT)
})
