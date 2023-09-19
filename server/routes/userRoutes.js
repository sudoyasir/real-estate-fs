import express from "express"
import {createUser, bookVisit} from "../controllers/userCntrl.js"

const router = express.Router();

// Routes and middlewares
router.post("/register", (createUser));
router.post("/bookVisit/:id", bookVisit)

export {router as userRoute} 
