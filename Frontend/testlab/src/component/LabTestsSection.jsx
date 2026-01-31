import React, { useState } from "react";
import { FaArrowRight, FaCheckCircle, FaFlask, FaClock, FaShieldAlt, FaBookMedical, FaExchangeAlt } from "react-icons/fa";
import { useCart } from "../context/cartContext";

const LabTestsSection = ({ testData = [] }) => { // default empty array
  const [selectedTest, setSelectedTest] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [exchangeRate] = useState(0.0036);

  const { cart, addToCart } = useCart();

  const convertToINR = (pkrAmount) => (pkrAmount * exchangeRate).toFixed(0);

  const categories = ["All", "Hematology", "Diabetes", "Cardiac", "Hepatology", "Endocrinology", "Nutrition", "General", "Infectious Disease", "Nephrology", "Pancreatic", "Oncology", "Toxicology"];

  const filteredTests = activeCategory === "All"
    ? testData
    : testData.filter(test => test.category === activeCategory);

  const isBooked = (testId) => cart.some(item => item._id === testId);

  return (
    <section id="tests" className="py-5 bg-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6 mb-3">
            Our <span className="text-primary">Advanced Lab Tests</span>
          </h2>
          <p className="text-secondary fs-5">
            Accurate diagnostics with fastest turnaround time. Book tests online with home sample collection.
            <br />
            <small className="text-muted">
              <FaExchangeAlt className="me-1" />
              All prices in PKR. 1 PKR ≈ {exchangeRate} USD.
            </small>
          </p>
        </div>

        {/* Categories */}
        <div className="mb-5 d-flex flex-wrap justify-content-center gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              className={`btn ${activeCategory === cat ? "btn-primary" : "btn-outline-primary"} rounded-pill px-4 shadow-sm`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Test Cards */}
        <div className="row g-4">
          {filteredTests.map(test => (
            <div key={test._id} className="col-lg-4 col-md-6">
              <div className={`card h-100 border-0 shadow-lg ${test.popular ? "border-primary border-2" : ""}`}>
                {test.popular && (
                  <div className="position-absolute top-0 start-50 translate-middle" style={{ zIndex: 1 }}>
                    <span className="badge bg-primary rounded-pill px-3 py-2">
                      <FaFlask className="me-1" /> Most Popular
                    </span>
                  </div>
                )}

                <div className="card-body p-4">
                  <span className="badge bg-light text-dark border">{test.category}</span>
                  <h4 className="card-title fw-bold my-3">{test.name}</h4>
                  <p className="text-secondary mb-4 small">{test.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    {test.features?.map((feature, idx) => (
                      <div key={idx} className="d-flex align-items-center mb-2">
                        <FaCheckCircle className="text-success me-2" size={14} />
                        <small className="text-muted">{feature}</small>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="mb-4 d-flex align-items-center justify-content-between">
                    <div>
                      <span className="text-decoration-line-through text-secondary me-2 small">₨{test.price}</span>
                      <span className="h4 fw-bold text-dark mb-0">₨{test.discountedPrice}</span>
                      <small className="d-block text-muted" style={{ fontSize: "0.75rem" }}>≈ Rs{convertToINR(test.discountedPrice)}</small>
                    </div>
                    <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25">
                      Save ₨{test.price - test.discountedPrice}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="d-grid gap-2">
                    <button
                      className={`btn ${isBooked(test._id) ? "btn-success" : "btn-primary"} btn-lg rounded-pill transition-all`}
                      onClick={() => addToCart(test)}
                      disabled={isBooked(test._id)}
                    >
                      <FaBookMedical className="me-2" />
                      {isBooked(test._id) ? "Booked Successfully" : "Book Now"}
                    </button>
                    <button className="btn btn-link btn-sm text-primary" onClick={() => setSelectedTest(test)}>
                      View Full Details <FaArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTest && (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content border-0 shadow">
              <div className="modal-header bg-light">
                <h5 className="modal-title fw-bold">{selectedTest.name}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedTest(null)}></button>
              </div>
              <div className="modal-body p-4">
                <h6 className="text-primary fw-bold mb-3">Test Overview</h6>
                <p className="text-secondary">{selectedTest.description}</p>
                <h6 className="text-primary fw-bold mt-4 mb-3">Included Parameters</h6>
                <ul className="list-unstyled">
                  {selectedTest.features?.map((f, idx) => (
                    <li key={idx} className="mb-2 d-flex align-items-start">
                      <FaCheckCircle className="text-success me-2 mt-1" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LabTestsSection;
