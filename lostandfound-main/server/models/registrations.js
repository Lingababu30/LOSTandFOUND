const mongoose = require("mongoose")

const RegistrationSchema = new mongoose.Schema({
    name: String,
    place:String,
    description:String,
    date: String,
    yourname: String,
    contact: String,
    message: String,
})

const Registration = mongoose.model("LostItems",RegistrationSchema)
module.exports = Registration
