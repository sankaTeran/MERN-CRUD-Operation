
// 0npGZekH5lOPHpp0
const express =require("express");
const mongoose =require("mongoose");

const app = express();

// Middleware
app.use("/",(req,res,next)=>{
    res.send("It is Working.")
}) 
mongoose.connect("mongodb+srv://Admin:0npGZekH5lOPHpp0@merndb.vvzwi2u.mongodb.net/")
.then(()=>console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log((err)));
