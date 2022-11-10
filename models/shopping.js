const mongoose = require("mongoose") 
const shoppingSchema = mongoose.Schema({ 
 shopping_type: String, 
 size: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("shopping", 
shoppingSchema) 