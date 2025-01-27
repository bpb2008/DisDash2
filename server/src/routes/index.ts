import express from "express";
import tripRoutes from "./trips";
import userRoutes from "./users";


const router = express.Router(); 

router.use("/trips", tripRoutes);
router.use("/users", userRoutes);

export default router; 