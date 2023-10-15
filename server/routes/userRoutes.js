import express from "express";
import {
  createUser,
  bookVisit,
  getAllBookings,
  cancelBooking,
  toFav,
  getAllFavorites,
} from "../controllers/userCntrl.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

// Routes and middlewares
router.post("/register", jwtCheck, createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/removeBooking/:id", cancelBooking);
router.post("/toFav/:rid", toFav);
router.post("/allFav/", getAllFavorites);

export { router as userRoute };
