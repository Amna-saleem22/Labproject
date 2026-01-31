import React, { useState } from "react";
import { FaPaperPlane, FaCheckCircle, FaSpinner } from "react-icons/fa";
// Ensure this path is correct based on your folder structure
import { sendContactMessage } from "../api/contactApi"; 

export default function Contact() {
  // 1. Initialize all state variables
  const [namelast, setNamelast] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  
  // Status can be: 'idle', 'processing', 'success', or 'error'
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 2. Validation
    if (!namelast || !email || !number || !message) {
      setStatus("error");
      setFeedback("Please fill all the fields.");
      return;
    }

    setStatus("processing");

    try {
      // 3. Connect to Backend
      const data = await sendContactMessage({
        namelast,
        email,
        number,
        message
      });

      if (data.success) {
        setStatus("success");
        setFeedback("Your message has been sent successfully!");

        // 4. Clear form fields after success
        setNamelast("");
        setEmail("");
        setNumber("");
        setMessage("");
        
        // Reset status to idle after 3 seconds so user can send another message
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setFeedback(data.message || "Failed to send message.");
      }

    } catch (error) {
      setStatus("error");
      // Checks if backend sent a specific error message, otherwise uses default
      const errorMsg = error.response?.data?.message || "Server error. Please try again.";
      setFeedback(errorMsg);
    }
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-semibold">
            Contact <span className="text-primary">LabTech</span>
          </h2>
          <p className="text-secondary fs-6">
            Have questions or need assistance? Send us a message and our team will get back to you promptly.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="card shadow-sm p-4" style={{ borderRadius: "12px" }}>
              <h5 className="fw-semibold mb-4 text-center">Send a Message</h5>
              <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">

                <input
                  type="text"
                  placeholder="Your Name"
                  value={namelast}
                  onChange={(e) => setNamelast(e.target.value)}
                  className="form-control border-0 bg-light p-3 rounded"
                  style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,0.05)" }}
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control border-0 bg-light p-3 rounded"
                  style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,0.05)" }}
                />

                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="form-control border-0 bg-light p-3 rounded"
                  style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,0.05)" }}
                />

                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  className="form-control border-0 bg-light p-3 rounded"
                  style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,0.05)" }}
                />

                <button
                  type="submit"
                  className="btn btn-primary fw-semibold mt-2 d-flex justify-content-center align-items-center gap-2"
                  disabled={status === "processing"}
                >
                  {status === "processing" ? (
                    <> <FaSpinner className="spinner-border spinner-border-sm" /> SENDING... </>
                  ) : status === "success" ? (
                    <> <FaCheckCircle /> SENT! </>
                  ) : (
                    <> <FaPaperPlane /> SEND MESSAGE </>
                  )}
                </button>

                {/* Feedback Messages */}
                {status === "error" && <div className="alert alert-danger mt-2 py-2">{feedback}</div>}
                {status === "success" && <div className="alert alert-success mt-2 py-2">{feedback}</div>}
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="col-lg-6">
            <div className="card shadow-sm p-0" style={{ borderRadius: "12px", overflow: "hidden", minHeight: "400px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531615!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1a32f99dced!2sMelbourne!5e0!3m2!1sen!2sau!4v1617846931456!5m2!1sen!2sau"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Lab Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}