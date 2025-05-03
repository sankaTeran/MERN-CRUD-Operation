
// 0npGZekH5lOPHpp0
const express =require("express");
const mongoose =require("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use("/users",router);
mongoose.connect("mongodb+srv://Admin:0npGZekH5lOPHpp0@merndb.vvzwi2u.mongodb.net/")
.then(()=>console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log((err)));
