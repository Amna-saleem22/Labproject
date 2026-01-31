import Booking from "../models/Booking.js";
import Payment from "../models/Payment.js";

export const processPayment = async (req, res) => {
  try {
    const { bookingId, method, cardDetails } = req.body;

    // 1️⃣ Validate Booking
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }

    // 2️⃣ Calculate totalAmount on server side (security)
    const totalAmount = booking.tests.reduce((sum, t) => sum + t.price, 0);

    // 3️⃣ Handle Payment
    if (method === "online") {
      booking.paymentStatus = "paid";
      // Here you can integrate Stripe/PayPal with cardDetails
    } else if (method === "cash") {
      booking.paymentStatus = "pending"; // Cash on collection
    } else {
      return res.status(400).json({ success: false, message: "Invalid payment method" });
    }

    await booking.save();

    // 4️⃣ Create Payment record
    const payment = new Payment({
      bookingId,
      amount: totalAmount,
      method,
      status: method === "online" ? "paid" : "pending"
    });

    await payment.save();

    res.status(200).json({
      success: true,
      totalAmount,
      message: method === "online" ? "Payment Successful" : "Booking Confirmed"
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
