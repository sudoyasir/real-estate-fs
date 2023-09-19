import express from "express"
import createUser from "../controllers/userCntrl.js"

const router = express.Router();

// Routes and middlewares
router.post("/register", (createUser));

export {router as userRoute} 
