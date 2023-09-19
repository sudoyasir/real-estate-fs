const express = require("express");
const createUser = require("../controllers/userCntrl");

const userRouter = express.Router();

userRouter.post("/register", createUser);

module.exports = userRouter; 
