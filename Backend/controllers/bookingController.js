import Booking from '../models/Booking.js';

// Create Booking
export const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    // Calculate totalAmount from tests (server-side)
    const totalAmount = booking.tests.reduce((sum, t) => sum + t.price, 0);

    res.status(201).json({
      success: true,
      bookingId: booking._id,
      totalAmount,
      tests: booking.tests,
      message: "Booking created successfully. Proceed to payment."
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Booking failed" });
  }
};

// Get single booking
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    res.status(200).json({ success: true, booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
