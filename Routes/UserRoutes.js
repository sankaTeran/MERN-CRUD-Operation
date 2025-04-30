const express =require("express");
const router = express.Router();
//Insert Model
const User = require("../Models/UserModel");
//Insert User Controller
const UserController = require("../Controllers/UserControllers")

//Set the Route Paths
router.get("/",UserController.getAllUsers);

//exports
module.exports = router;