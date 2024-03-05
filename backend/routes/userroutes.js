<<<<<<< HEAD
const express=require('express');
const {signup, signin}=require("../controller/userController")

const userRouter=express.Router();
userRouter.post('/signup',signup)


userRouter.post('/signin',signin)


module.exports=userRouter;
=======
console.log("sample route file");
>>>>>>> 54b987ead8104f65124af4befa4bec97aeed1998
