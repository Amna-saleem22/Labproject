// routes/contactRoutes.js
import express from 'express';
import { createContact } from '../controllers/contactController.js'; // .js extension

const router = express.Router();

router.post("/", createContact); // Changed from "/contact" to "/"

export default router; // ES6 export