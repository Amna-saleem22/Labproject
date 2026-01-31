// import { useParams, useNavigate } from "react-router-dom";
// import axiosInstance from "../api/axiosInstance";
// import { useState } from "react";

// export default function PaymentPage() {
//   const { bookingId } = useParams();
//   const navigate = useNavigate(); // <-- navigation hook
//   const [status, setStatus] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Function to handle payment selection
//  const handlePayment = async (method) => {
//   setLoading(true);
//   try {
//     // Correct backend API
//     await axiosInstance.post("/api/payment", { bookingId, method });

//     setStatus("Payment initiated! Redirecting...");

//     // Navigate to correct frontend route
//     setTimeout(() => {
//       if (method === "online") {
//         navigate(`/online-payment/${bookingId}`);
//       } else if (method === "cash") {
//         navigate(`/cash-payment/${bookingId}`);
//       }
//     }, 1000);
//   } catch (error) {
//     setStatus("Payment failed. ❌ Try again.");
//   }
//   setLoading(false);
// };


//   return (
//     <div className="d-flex flex-column min-vh-100">
//       {/* Payment Card */}
//       <div className="container my-5">
//         <div
//           className="card shadow p-4 mx-auto"
//           style={{ maxWidth: "500px", borderRadius: "12px" }}
//         >
//           <h4 className="fw-semibold text-center mb-3">Complete Payment</h4>
//           <p className="text-center mb-3">
//             Booking ID: <span className="fw-medium">{bookingId}</span>
//           </p>

//           <div className="d-flex flex-column gap-3">
//             <button
//               className="btn btn-primary"
//               onClick={() => handlePayment("online")}
//               disabled={loading}
//             >
//               {loading ? "Processing..." : "Pay Online"}
//             </button>

//             <button
//               className="btn btn-outline-secondary"
//               onClick={() => handlePayment("cash")}
//               disabled={loading}
//             >
//               {loading ? "Processing..." : "Cash on Collection"}
//             </button>
//           </div>

//           {status && (
//             <div
//               className={`alert mt-3 ${
//                 status.includes("initiated") ? "alert-success" : "alert-danger"
//               } text-center py-2`}
//             >
//               {status}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useParams, useNavigate } from "react-router-dom";

export default function Payment() {
  const { bookingId } = useParams();
  const navigate = useNavigate();

  // Redirect function
  const handlePayment = (method) => {
    if (method === "online") {
      navigate(`/online-payment/${bookingId}`);
    } else if (method === "cash") {
      navigate(`/cash-payment/${bookingId}`);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-5">
        <div
          className="card shadow p-4 mx-auto"
          style={{ maxWidth: "500px", borderRadius: "12px" }}
        >
          <h4 className="fw-semibold text-center mb-3">Complete Payment</h4>
          <p className="text-center mb-3">
            Booking ID: <span className="fw-medium">{bookingId}</span>
          </p>

          <div className="d-flex flex-column gap-3">
            <button
              className="btn btn-primary"
              onClick={() => handlePayment("online")}
            >
              Pay Online
            </button>

            {/* <button
              className="btn btn-outline-secondary"
              onClick={() => handlePayment("cash")}
            >
              Cash on Collection
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
