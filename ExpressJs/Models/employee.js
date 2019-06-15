const mongoose = require('mongoose')

var Employee = mongoose.model('Employee', {
    name : {type : String},
    email: {type: String},
    mobile: {type: Number}
},'employees');

module.exports = Employee