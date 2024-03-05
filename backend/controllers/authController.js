const userModel = require("../models/userModelLogin");
const userModel1= require("../models/userModelSignup");
const emailValidator = require("email-validator");
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    console.log(firstName, lastName, email, password);
    try {
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        const validEmail = emailValidator.validate(email);
        if (!validEmail) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid email address 📩"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userInfo = new userModel1({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        const result = await userInfo.save();
        return res.status(200).json({
            success: true,
            data: result
        });
    } catch (e) {
        if (e.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Account already exists"
            });
        }
        return res.status(400).json({
            success: false,
            message: e.message
        });
    }
};

const signin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required"
        });
    }

    try {
        const user = await userModel.findOne({ email }).select("+password");
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        const token = user.jwtToken();
        user.password = undefined;

        const cookieOption = {
            maxAge: 24 * 60 * 60 * 1000, // 24hr
            httpOnly: true // Not able to modify the cookie in the client side
        };

        res.cookie("token", token, cookieOption);
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message
        });
    }
};

module.exports = {
    signup,
    signin
};
