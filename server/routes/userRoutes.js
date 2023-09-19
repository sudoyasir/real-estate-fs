const express = require("express");
const createUser = require("../controllers/userCntrl.js");
const asyncHandler = require("express-async-handler");

const userRouter = express.Router();

// Routes and middlewares
userRouter.post("/register", asyncHandler(createUser));

module.exports = userRouter;
