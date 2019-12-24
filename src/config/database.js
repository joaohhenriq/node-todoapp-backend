const mongoose = require('mongoose')
mongoose.Promise = global.Promise // to avoid deprecated message

module.exports = mongoose.connect('mongodb://localhost/todo')