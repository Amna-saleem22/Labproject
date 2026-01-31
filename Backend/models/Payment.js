import mongoose from "mongoose";   // ✅ THIS LINE WAS MISSING

const paymentSchema = new mongoose.Schema({
  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  method: {
    type: String, // online | cash
    required: true
  },
  status: {
    type: String,
    default: "paid"
  },
  transactionId: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
