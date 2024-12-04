const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
         type: String,
         required: true
         },
    email: {
         type: String,
         required: true,
         unique: true
         },
    password: { 
        type: String, 
        required: true 
    },
    token:{
        type: String,
        default: null
    },
    role: { 
        type: String, 
        default: 'User', 
        enum: ['Admin', 'User'] 
    },
});


module.exports = mongoose.model('User', UserSchema);
