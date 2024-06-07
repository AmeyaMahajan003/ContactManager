const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    fname : {
        type : String,
        required : [true,"Please add your first name"]
    },
    lname : {
        type : String,
        required : [true,"Please add your last name"]
    },
    email : {
        type : String,
        required : [true,"Please add your email"]
    },
    phone : {
        type : String,
        required : [true,"Please add your phone number"]
    },
    
},
{
    timestamps :true,
});

module.exports = mongoose.model("Contact", contactSchema);