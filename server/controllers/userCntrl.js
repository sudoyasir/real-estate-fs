const asyncHandler = require("express-async-handler");
const prisma = require("../config/prismaConfig.js");

const createUser = asyncHandler(async (req, res) => {
  console.log("creating a user");

  let { email } = req.body;

  console.log(email);
});

module.exports = { createUser };
