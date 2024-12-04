const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.getUserDetails = async (req,res) => {
    try{

        //get the token 
         const token = req.headers['authorization']?.split(' ')[1];

        //if token is not available
         if (!token) return res.status(401).json({ message: 'Access Denied' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Extract user ID from the decoded token
        const userId = decoded.id;
    
        // Query the database for user information
        const user = await User.findById(userId).select('-password'); // Exclude sensitive fields like password
    
        if (!user) {
          throw new Error('User not found');
        }
    
        // Return user information
        return res.status(200).json({user});
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        //get all users who are registered
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


