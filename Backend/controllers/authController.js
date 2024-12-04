const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');


//for registration/signup
exports.register = async (req, res) => {
    try {
        //fetch data 
        const { name, email, password, role } = req.body;

        //if data not found
        if(!name ||!email ||!password ||!role){
            return res.status(400).json({ message: 'Please provide all fields' });
        }

        //check email is already registered or not 
        const existingUser = await User.findOne({ email: email});
        if(existingUser){
            return res.status(400).json({ message: 'Email is already registered' });
        }

        //if email is not already registered hashed the password
        const hashedPassword = await bcrypt.hash(password,10);

        //create an object & save in database
        const user = new User({ name, email, password:hashedPassword, role });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


//for login
exports.login = async (req, res) => {
    try {
        //fetch data
        const { email, password } = req.body;

        //if data not found
        if(!email ||!password){
            return res.status(400).json({ message: 'Please provide email and password' });
        }


        //check user is exist or not
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Email is not registered' });

        //if user exists compare the passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

        //create token if all good
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        res.status(200).json({message:"User login successfully", token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


