const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
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
    minlength: 6,
    maxlength:20,
    required: true,
  },
})
const User = Mongoose.model("user", UserSchema)
module.exports = User