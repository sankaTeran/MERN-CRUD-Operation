const User = require("../Models/UserModel");

const getAllUsers = async (req,res,next) => {
    let Users;
    //Get all users
    try {
        users = await User.find();
    } catch (error) {
        console.log(err);
        
    }
    //Not found
    if(!users){
        return res.status(404).json({message:"Users are not found,"})
    }

    //Display all users
    return res.status(200).json({users});
};

exports.getAllUsers=getAllUsers;