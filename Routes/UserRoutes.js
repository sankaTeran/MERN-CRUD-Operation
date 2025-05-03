const express =require("express");
const router = express.Router();
//Insert Model
const User = require("../Models/UserModel");
//Insert User Controller
const UserController = require("../Controllers/UserControllers")

//Set the Route Paths
router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);
router.get("/:id",UserController.getById);
router.put("/:id",UserController.updateUser);
router.delete("/:id",UserController.deleteUser);

//exports
module.exports = router;