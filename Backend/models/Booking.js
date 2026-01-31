import mongoose from 'mongoose';


const bookingSchema = new mongoose.Schema({

  // 👤 Patient Info
  patientName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String},
  gender:{ type: String, required: true },
  age: { type: String, required: true },
  address:{ type: String, required: true },

  // 🧪 Cart / Tests
  tests: [
    {
      testId: String,
      testName: String,
      price: Number
    }
  ],

  // 🏠 Collection Details
  collectionType: {
    type: String,
    enum: ["home", "lab"],
    required: true
  },
  preferredDate: String,
  preferredTime: String,

  // 💰 Payment
  totalAmount: Number,
  paymentStatus: {
    type: String,
    default: "pending"   // pending → paid
  },

  bookingStatus: {
    type: String,
    default: "created"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});
const Booking = mongoose.model('Booking', bookingSchema);
export default Booking; // MUST be export default