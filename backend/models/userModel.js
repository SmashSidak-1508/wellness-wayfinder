const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minlength:2,
        maxlength: 50,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    lastName: {
        type: String,
        minlength:2,
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
userSchema.methods.jwtToken = function () {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
    return token;
};

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
