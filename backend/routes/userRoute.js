
const express=require('express');
const {signup, signin,logout}=require("../controllers/authController")

const jwtAuth=require("../middlewares/authmiddleware")

const userRouter=express.Router();
userRouter.post('/signup',signup)


userRouter.post('/signin',signin)

module.exports=userRouter
console.log("sample route file");
