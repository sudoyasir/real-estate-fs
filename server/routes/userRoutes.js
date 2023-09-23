import express from "express"
import {createUser, bookVisit, getAllBookings, cancelBooking} from "../controllers/userCntrl.js"

const router = express.Router();

// Routes and middlewares
router.post("/register", (createUser));
router.post("/bookVisit/:id", bookVisit)
router.post("/allBookings", getAllBookings)
router.post("/removeBooking/:id", cancelBooking)

export {router as userRoute} 
