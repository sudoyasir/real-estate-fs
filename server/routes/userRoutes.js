import express from "express"
<<<<<<< HEAD
import {createUser, bookVisit, getAllBookings, cancelBooking, toFav, getAllFavorites} from "../controllers/userCntrl.js"
=======
import {createUser, bookVisit, getAllBookings, cancelBooking} from "../controllers/userCntrl.js"
>>>>>>> parent of f897191 (created "add a residency to favourite" route)

const router = express.Router();

// Routes and middlewares
router.post("/register", (createUser));
router.post("/bookVisit/:id", bookVisit)
router.post("/allBookings", getAllBookings)
router.post("/removeBooking/:id", cancelBooking)
<<<<<<< HEAD
router.post("/toFav/:rid", toFav)
router.post("/allFav/", getAllFavorites)
=======
>>>>>>> parent of f897191 (created "add a residency to favourite" route)

export {router as userRoute} 
