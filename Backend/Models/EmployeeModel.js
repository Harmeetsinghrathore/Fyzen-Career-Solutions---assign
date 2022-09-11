const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

    image : {
        type : String,
        required : false,
    },
    
    f_name : {
        type : String,
        required : false,
    },

    l_name : {
        type : String,
        required : false,
    },

    employee_id : {
        type : String,
        required : false,
        maxlength : 5
    },

    email : {
        type : String,
        required : false,
    },

    contact : {
        type : String,
        required : false,
        maxlength : 10
    }
})

module.exports = new mongoose.model('employee', employeeSchema);