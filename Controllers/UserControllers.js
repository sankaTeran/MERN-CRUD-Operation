const User = require("../Models/UserModel");

//Data Display
const getAllUsers = async (req,res,next) => {
    let users;
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

//Data Isertion
const addUsers = async (req,res,next) => {
    const {name,gmail,age,address} =req.body;
    let user;
    try{
        user = new User({name,gmail,age,address});
        await user.save();
    }catch(error){
        console.log(err);
        
    }

    //Not Data Isertion
    if(!user){
        return res.status(404).json({message:"Unable to add Users"})
    }
    return res.status(200).json({user});
}

//Get By ID
const getById = async (req,res,next) => {

    const id =req.params.id;
    let user;
    try {
        user = await User.findById(id);
    } catch (err) {
        console.log(err);
        
    }
    //Not available users
    if(!user){
        return res.status(404).json({message:"Users not found."})
    }
    return res.status(200).json({user});
    
}

// Update User Details
const updateUser = async (req,res,next) => {
    const id =req.params.id;
    const {name,gmail,age,address} =req.body;

    let users;
    try {
        users = await User.findByIdAndUpdate(id,
            {
                name:name, gmail:gmail, age:age, address:address
            }
        );
        users = await users.save();
    } catch (err) {
        console.log(err);
        
    }
    if(!users){
        return res.status(404).json({message:"Unable to update user update details."})
    }
    return res.status(200).json({users});
    
    
}

// Delete User Details
const deleteUser = async (req,res,next) => {
    const id =req.params.id;
    const {name,gmail,age,address} =req.body;

    let user;
    try {
        user = await User.findByIdAndDelete(id)
    } catch (err) {
        console.log(err);
        
    }
    if(!user){
        return res.status(404).json({message:"Unable to delete user details."})
    }
    return res.status(200).json({user});
    
    
}
exports.getAllUsers=getAllUsers;
exports.addUsers=addUsers;
exports.getById=getById;
exports.updateUser=updateUser;
exports.deleteUser=deleteUser;