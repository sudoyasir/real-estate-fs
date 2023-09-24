import asyncHandler from "express-async-handler";
import prisma from "../config/prismaConfig.js";
import expressAsyncHandler from "express-async-handler";

const createUser = asyncHandler(async (req, res) => {
  console.log("creating a user");

  //function to create user
  let { email } = req.body;
  const userExists = await prisma.user.findUnique({ where: { email: email } });
  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      message: "User registered successfully",
      user: user,
    });
    console.log(`${email} is registered successfully`);
  } else {
    res.status(201).json({
      message: "User already registered",
    });
    console.log(`${email} is already registed in DataBase`);
  }
});

//function to book a visit
const bookVisit = expressAsyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res
        .status(400)
        .json({ message: "This residency is already booked by you" });
      console.log(`Visit by ${email} is already booked`);
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: {
            push: { id, date },
          },
        },
      });
      res.send("Your visit has been booked successfully");
      console.log(`Visit for ${email} has been booked`);
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

//function to get all the bookings of a user
const getAllBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const bookings = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    res.status(200).send(bookings);
    console.log(`Booking(s) of ${email} is sent.`);
  } catch (err) {
    throw new Error(err.message);
  }
});

//function to cancel booking
const cancelBooking = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: { bookedVisits: true },
    });

    const index = user.bookedVisits.findIndex((visit) => visit.id === id);

    if (index === -1) {
      res.status(404).json({ message: `Booking not found for ${email}` });
    } else {
      user.bookedVisits.splice(index, 1);
      await prisma.user.update({
        where: { email },
        data: {
          bookedVisits: user.bookedVisits,
        },
      });

      res.send("Booking cancelled successfully");
      console.log(`Booking for ${email} has been cancelled`);
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

//function to add a residency in favourites of a user
const toFav = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { rid } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user.favResidenciesiD.includes(rid)) {
      const updateUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesiD: {
            set: user.favResidenciesiD.filter((id) => id !== rid),
          },
        },
      });

      res.send({ message: "Removed from favourites", user: updateUser });
    } else {
      const updateUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesiD: {
            push: rid,
          },
        },
      });
      res.send({ message: "updated favourites", user: updateUser });
    }
  } catch (err) {
    throw new Error(err.message);
  }
});
export { createUser, bookVisit, getAllBookings, cancelBooking, toFav };
