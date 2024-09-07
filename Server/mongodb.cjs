const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/college")
//creating Schema
const StdSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})
//collection name in String then Schema
const StdModel=new mongoose.model("student",StdSchema)
module.exports = StdModel;
