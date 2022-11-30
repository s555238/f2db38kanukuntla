const mongoose = require("mongoose") 
const shoppingSchema = mongoose.Schema({ 
 shopping_type: {
    type:String,
    required:true
 }, 
 size: {
    type:String,
    required:true
 }, 
 cost: {
    type:Number,
    min:5,
    max:200
 }
}) 
 
module.exports = mongoose.model("shopping", 
shoppingSchema) 