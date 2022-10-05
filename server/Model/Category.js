const mongoose = require("mongoose");

const  categorySchema = new mongoose.Schema({
    name: String,
    camission:String,
    icon:Array,
    banner:Array,
    mtitel:String,
    mdiscp:String
    
    
    
});

module.exports = mongoose.model("category", categorySchema);