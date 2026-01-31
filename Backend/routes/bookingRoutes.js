import { createBooking, getBookingById } from "../controllers/bookingController.js";
import express from "express";
const router = express.Router();

router.get("/:id", getBookingById);
router.post("/", createBooking);

export default router;
