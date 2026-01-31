import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';
import dotenv from 'dotenv';
 import bookingRoutes from './routes/bookingRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
dotenv.config();
const app = express();

// 1. General Middleware
app.use(cors());
app.use(express.json());

// 2. Routes (Move this ABOVE the error handler)
app.use('/api/contact', contactRoutes);

app.use("/api/booking", bookingRoutes);
app.use("/api/payment", paymentRoutes);
// 3. MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// 4. Error Handling Middleware (Must be AFTER routes)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});