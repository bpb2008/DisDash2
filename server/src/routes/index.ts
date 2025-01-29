import express from "express";
import tripRoutes from "./trips";
import userRoutes from "./users";
import flightRoutes from "./flights";
import hotelRoutes from "./hotels";
import rentalCarRoutes from "./rentalCars";
import diningRoutes from "./reservations";
import excursionRoutes from "./excursions";


const router = express.Router(); 

router.use("/trips", tripRoutes);
router.use("/users", userRoutes);
router.use("/flights", flightRoutes);
router.use("/hotels", hotelRoutes);
router.use("/rentalCars", rentalCarRoutes);
router.use("/dining", diningRoutes);
router.use("/excursions", excursionRoutes);

export default router; 