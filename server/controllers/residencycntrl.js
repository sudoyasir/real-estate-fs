import express from "express";
import expressAsyncHandler from "express-async-handler";
import prisma from "../config/prismaConfig.js";

// Function to create residencies
const createResidency = expressAsyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilities,
    image,
    userEmail,
  } = req.body.data;

  console.log(req.body.data);

  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
        owner: { connect: { email: userEmail } },
      },
    });

    res.send({
      message: "Residency Created Successfully!"
    });
  } catch (err) {
    if (err.code === "P2002") {
      throw new Error("A residency with this address already exists");
    }
    throw new Error(err.message);
  }
});

// Function to get all the residencies
const getAllResidencies = expressAsyncHandler(async (req, res) => {
  const residencies = await prisma.residency.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
  res.send(residencies);
});

export {createResidency, getAllResidencies}