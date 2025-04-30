const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,//DataType
        required:true,//Vallidate
    },
    gmail:{
        type:String,//DataType
        required:true,//Vallidate
    },
    age:{
        type:Number,//DataType
        required:true,//Validate
    },
    address:{
        type:String,//DataType
        required:true,//Validate
    }
});

module.exports=mongoose.model(
    "UserModel",//FileName
    userSchema//FunctionName
)