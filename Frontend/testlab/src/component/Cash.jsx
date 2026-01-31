import { useParams } from "react-router-dom";

export default function CashPaymentPage() {
  const { bookingId } = useParams();

  return (
    <div className="container my-5 text-center">
      <h3>Cash on Collection</h3>
      <p>Booking ID: {bookingId}</p>
      <p>Please pay in cash when the lab technician collects your sample.</p>
    </div>
  );
}
