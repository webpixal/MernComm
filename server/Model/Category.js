const mongoose = require("mongoose");

const  categorySchema = new mongoose.Schema({
    name: String,
    camission:String,
    icon:String,
    banner:String,
    mtitel:String,
    mdiscp:String
    
    
    
});

module.exports = mongoose.model("category", categorySchema);