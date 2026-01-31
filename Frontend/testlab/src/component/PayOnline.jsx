import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function PaymentPage() {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [showCardForm, setShowCardForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [card, setCard] = useState({ number: "", expiry: "", cvv: "" });

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axiosInstance.get(`/booking/${bookingId}`);
        setBooking(res.data.booking);
      } catch (err) {
        setStatus("Could not load booking data ❌");
      }
    };
    fetchBooking();
  }, [bookingId]);

const handlePayment = async (method) => {
  setLoading(true);

  try {
    const res = await axiosInstance.post("/payment/process", {
      bookingId,
      method,
      cardDetails: method === "online" ? card : null
    });

    if (res.data.success) {
      setStatus("Payment successful ✅");

      setTimeout(() => {
        if (method === "online") {
          // ✅ ONLINE PAYMENT → TEST PAGE
          navigate("/test");   // 🔁 apna exact test route yahan rakho
        } else {
          // ✅ CASH PAYMENT → CONFIRMATION PAGE
          navigate(`/confirmation/${bookingId}`);
        }
      }, 1200);

    } else {
      setStatus("Payment failed ❌");
    }

  } catch (err) {
    setStatus("Transaction failed ❌");
  }

  setLoading(false);
};


  if (!booking) return <div className="text-center mt-5">Loading booking...</div>;

  return (
    <div className="container my-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px", borderRadius: "12px" }}>
        <h4 className="fw-semibold text-center mb-3">Complete Your Booking</h4>
        <p className="text-center text-muted">
          Total Amount: <strong>${booking.totalAmount}</strong>
        </p>

        {!showCardForm ? (
          <div className="d-flex flex-column gap-3 mt-4">
            <button className="btn btn-primary py-2" onClick={() => setShowCardForm(true)}>
              Pay Online
            </button>
            <button className="btn btn-outline-secondary py-2" onClick={() => handlePayment("cash")} disabled={loading}>
              Cash on Collection
            </button>
          </div>
        ) : (
          <form className="mt-4" onSubmit={(e) => { e.preventDefault(); handlePayment("online"); }}>
            <h6 className="mb-3">Card Details</h6>
            <input type="text" className="form-control mb-2" placeholder="Card Number" required
              value={card.number} onChange={(e) => setCard({ ...card, number: e.target.value })} />
            <div className="d-flex gap-2">
              <input type="text" className="form-control mb-3" placeholder="MM/YY" required
                value={card.expiry} onChange={(e) => setCard({ ...card, expiry: e.target.value })} />
              <input type="text" className="form-control mb-3" placeholder="CVV" required
                value={card.cvv} onChange={(e) => setCard({ ...card, cvv: e.target.value })} />
            </div>
            <button className="btn btn-success w-100" type="submit" disabled={loading}>
              {loading ? "Processing..." : `Pay $${booking.totalAmount}`}
            </button>
            <button className="btn btn-link w-100 mt-2 text-muted" type="button" onClick={() => setShowCardForm(false)}>
              Go Back
            </button>
          </form>
        )}

        {status && <div className={`alert mt-3 text-center ${status.includes("Success") ? "alert-success" : "alert-danger"}`}>{status}</div>}
      </div>
    </div>
  );
}
