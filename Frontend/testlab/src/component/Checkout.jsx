import API from "../services/api";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleBooking = async () => {
    try {
      // 1. Create Booking
      const res = await API.post("/bookings/create", { tests: cart });
      const bookingId = res.data.bookingId;

      // 2. Confirm Payment
      await API.post("/payment/confirm", { bookingId });

      clearCart();
      alert("Booking & Payment Successful!");
      navigate("/profile"); // Redirect user after success
    } catch (error) {
      console.error("Booking failed", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="text-center p-5">
      <h3>Total Items: {cart.length}</h3>
      <button 
        className="btn btn-primary btn-lg px-5" 
        onClick={handleBooking}
        disabled={cart.length === 0}
      >
        Pay & Confirm
      </button>
    </div>
  );
};