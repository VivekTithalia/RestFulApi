const mongoose=require("mongoose");
const studentschema=new mongoose.Schema({
   name:String,
   age:Number,
   city:String
});


const studentmodel=new mongoose.model("apis",studentschema);


module.exports=studentmodel;