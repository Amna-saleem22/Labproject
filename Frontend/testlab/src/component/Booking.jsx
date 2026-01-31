import React, { useState } from "react";
import { FaSpinner, FaCheckCircle, FaClipboardCheck } from "react-icons/fa";
import { sendBookingMessage } from "../api/BookingApi";
import { useNavigate } from "react-router-dom";
import { testData } from "../Data/testData";
export default function BookingForm({ cart, closeForm }) {

  // 1️⃣ States
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [collectionType, setCollectionType] = useState("home");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
const navigate = useNavigate();
  // 2️⃣ Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!patientName || !phone || !preferredDate || !preferredTime) {
      setStatus("error");
      setFeedback("Please fill all required fields.");
      return;
    }

    if (!cart || cart.length === 0) {
      setStatus("error");
      setFeedback("Please select at least one test before booking.");
      return;
    }

    setStatus("processing");

    // 3️⃣ Prepare booking data safely
    const bookingData = {
      patientName,
      phone,
      email,
      gender,
      age,
      address,
      collectionType,
      preferredDate,
      preferredTime,

      tests: cart?.map(test => ({
        testId: test._id,
        testName: test.name,
        price: test.discountedPrice
      })) || [],

      totalAmount: cart?.reduce(
        (sum, test) => sum + test.discountedPrice,
        0
      ) || 0
    };

   const data = await sendBookingMessage(bookingData);

// After successful booking
if (data.success) {
  setStatus("success");
  setFeedback("Booking successful. Please proceed to payment.");

  // Redirect to payment page with bookingId
  setTimeout(() => {
    navigate(`/payment/${data.bookingId}`);
  }, 1000);
}
else {
  setStatus("error");
  setFeedback(data.message || "Booking failed.");
}
  };


  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1050
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "100%",
          maxWidth: "520px",
          borderRadius: "12px"
        }}
      >
        <h4 className="fw-semibold text-center mb-3">
          Confirm Test Booking
        </h4>

        <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">

          <input className="form-control"
            placeholder="Patient Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />

          <input className="form-control"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input className="form-control"
            placeholder="Email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="row">
            <div className="col">
              <input className="form-control"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="col">
              <select className="form-control"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          <textarea className="form-control"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <select className="form-control"
            value={collectionType}
            onChange={(e) => setCollectionType(e.target.value)}
          >
            <option value="home">Home Collection</option>
            <option value="lab">Lab Visit</option>
          </select>

          <div className="row">
            <div className="col">
              <input type="date" className="form-control"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
              />
            </div>
            <div className="col">
              <input type="time" className="form-control"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-2"
            disabled={status === "processing"}
          >
            {status === "processing" ? "Booking..." : "Confirm Booking"}
          </button>

          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={closeForm}
          >
            Cancel
          </button>

          {status === "error" && (
            <div className="alert alert-danger py-2">{feedback}</div>
          )}
          {status === "success" && (
            <div className="alert alert-success py-2">{feedback}</div>
          )}

        </form>
      </div>
    </div>
  );
}
