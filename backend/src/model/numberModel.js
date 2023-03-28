const mongoose = require("mongoose")


const numberSchema = new mongoose.Schema({
    number:{
        type:Number

    }
},{timestamps:true})

module.exports = mongoose.model("number",numberSchema)