const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minlength:6,
        maxlength: 50,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    lastName: {
        type: String,
        minlength:6,
        maxlength: 50,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, 
        trim: true, 
        match: [/^\S+@\S+\.\S+$/, 'Invalid email format'] 
    },
    password: {
        type: String,
        required: true
    }
});

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
