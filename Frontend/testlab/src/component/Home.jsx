import React from "react";
import { Link } from "react-router-dom";
import  { useState } from "react";
import { 
  FaBolt, FaCalendarAlt,
  FaPhoneAlt,
  FaGift,
  FaChartLine,
  FaHeadset, 
  FaShieldAlt, 
  FaPaperPlane,
  FaCheck,
  FaSpinner,
  FaCheckCircle,
  FaExclamationCircleF
} from 'react-icons/fa';
export default function Home() {
     const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, processing, success, error
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Email validation
    if (!email) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    // Processing state
    setStatus("processing");
    setMessage("");

    setTimeout(() => {
      // Simulate success
      setStatus("success");
      setMessage("Thank you for subscribing! Check your email to confirm and receive your first exclusive offer.");
      setEmail("");
    }, 1500);
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

 
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="fw-bold mb-3">
                Accurate & Reliable{" "}
                <span className="text-primary">Laboratory Testing</span>
              </h1>
              <p className="text-secondary mb-4">
                Providing trusted diagnostic services with modern technology and
                expert professionals.
              </p>
              <Link to="/test" className="btn btn-primary me-2">
                View Tests
              </Link>
            
              <a href="#" className="btn btn-outline-primary">
                Check Report
              </a>
            </div>

            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <img
                src="1.avif"
                className="img-fluid"
                alt="Laboratory"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
     <section id="about" className="py-5 bg-light">
  <div className="container">
    <div className="row align-items-center">
      
      {/* Left: Image */}
      <div className="col-lg-6 mb-4 mb-lg-0 text-center">
        <img 
          src="3.avif" 
          alt="LabTech Laboratory" 
          className="img-fluid rounded shadow-sm animate__animated animate__fadeInLeft"
          style={{ maxHeight: "400px" }}
        />
      </div>

      {/* Right: Text */}
      <div className="col-lg-6">
        <h2 className="fw-bold mb-3">
          About <span className="text-primary">LabTech</span>
        </h2>
        <p className="text-secondary mb-4 fs-5">
          LabTech Diagnostics is a trusted medical laboratory providing accurate,
          fast, and reliable diagnostic testing services using modern equipment
          and highly qualified professionals. We combine technology and expertise
          to ensure the best healthcare experience for our patients.
        </p>
        <ul className="list-unstyled text-secondary mb-4">
          <li className="mb-2">✔ Modern and Certified Laboratory Equipment</li>
          <li className="mb-2">✔ Experienced and Qualified Staff</li>
          <li className="mb-2">✔ Quick and Accurate Test Results</li>
        </ul>
         <Link to="/about" className="btn btn-primary me-2">
                About Us
              </Link>
      </div>

    </div>
  </div>
</section>


<section className="py-5 bg-light">
 

        {/* Header */}
      <div className="container py-4" style={{ background: 'linear-gradient(135deg, #1a1e23 0%, #2d3439 100%)', borderRadius: '16px' }}>
  
  {/* Header */}
  <div className="text-center mb-4">
    <div className="position-relative d-inline-block">
      <h2 className="fw-bold mb-2">
        <span className="text-light">Premium</span>
        <span className="text-primary"> Collection</span>
      </h2>
      <div className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" 
           style={{ height: '3px', width: '80px', borderRadius: '2px' }}></div>
    </div>
    <p className="text-light mb-0" style={{ opacity: 0.9, fontSize: '0.95rem' }}>
      Experience excellence in diagnostic services with our curated premium collection
    </p>
  </div>

  {/* Features - Horizontal Layout */}
  <div className="row g-3 align-items-stretch">
    
    {/* Feature 1: 24/7 Support */}
    <div className="col-md-4">
      <div className="card border-0 h-100 hover-feature" 
           style={{
             background: 'linear-gradient(135deg, rgba(45, 52, 57, 0.9) 0%, rgba(33, 37, 41, 0.95) 100%)',
             borderRadius: '12px',
             border: '1px solid rgba(13, 110, 253, 0.15)',
             transition: 'all 0.3s ease'
           }}>
        <div className="card-body p-3 text-center d-flex flex-column">
          <div className="mb-2">
            <div className="bg-primary bg-opacity-20 p-2 rounded-circle d-inline-flex align-items-center justify-content-center"
                 style={{ width: '50px', height: '50px' }}>
              <FaHeadset size={24} className="text-primary" />
            </div>
          </div>
          
          <div className="mb-2">
            <span className="badge bg-primary bg-opacity-20 text-primary px-2 py-1 rounded-pill mb-1" 
                  style={{ fontSize: '0.7rem' }}>
              24/7
            </span>
            <h6 className="text-light fw-bold mb-1" style={{ fontSize: '0.95rem' }}>Round-the-Clock Support</h6>
            <p className="text-light mb-2" style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: '1.4' }}>
              Dedicated support team available anytime
            </p>
          </div>

          <div className="mt-auto">
            <div className="d-flex flex-column gap-1 mb-2" style={{ fontSize: '0.75rem' }}>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-1" size={12} />
                <small className="text-light">Instant chat</small>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-1" size={12} />
                <small className="text-light">Emergency hotline</small>
              </div>
            </div>
            
            <div className="border-top border-secondary pt-2">
              <small className="text-secondary d-block" style={{ fontSize: '0.7rem' }}>Response time</small>
              <div className="text-primary fw-bold" style={{ fontSize: '0.9rem' }}>Under 2 min</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Feature 2: Fastest Turnaround */}
    <div className="col-md-4">
      <div className="card border-0 h-100 hover-feature" 
           style={{
             background: 'linear-gradient(135deg, rgba(45, 52, 57, 0.9) 0%, rgba(33, 37, 41, 0.95) 100%)',
             borderRadius: '12px',
             border: '1px solid rgba(13, 110, 253, 0.15)',
             transition: 'all 0.3s ease'
           }}>
        <div className="card-body p-3 text-center d-flex flex-column">
          <div className="mb-2">
            <div className="bg-primary bg-opacity-20 p-2 rounded-circle d-inline-flex align-items-center justify-content-center"
                 style={{ width: '50px', height: '50px' }}>
              <FaBolt size={24} className="text-primary" />
            </div>
          </div>
          
          <div className="mb-2">
            <span className="badge bg-primary bg-opacity-20 text-primary px-2 py-1 rounded-pill mb-1" 
                  style={{ fontSize: '0.7rem' }}>
              Express
            </span>
            <h6 className="text-light fw-bold mb-1" style={{ fontSize: '0.95rem' }}>Rapid Results</h6>
            <p className="text-light mb-2" style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: '1.4' }}>
              Fastest turnaround in the industry
            </p>
          </div>

          <div className="mt-auto">
            <div className="d-flex flex-column gap-1 mb-2" style={{ fontSize: '0.75rem' }}>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-1" size={12} />
                <small className="text-light">Same-day reports</small>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-1" size={12} />
                <small className="text-light">Digital delivery</small>
              </div>
            </div>
            
            <div className="border-top border-secondary pt-2">
              <small className="text-secondary d-block" style={{ fontSize: '0.7rem' }}>Turnaround</small>
              <div className="text-primary fw-bold" style={{ fontSize: '0.9rem' }}>4-6 Hours</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Feature 3: Reliability */}
    <div className="col-md-4">
      <div className="card border-0 h-100 hover-feature" 
           style={{
             background: 'linear-gradient(135deg, rgba(45, 52, 57, 0.9) 0%, rgba(33, 37, 41, 0.95) 100%)',
             borderRadius: '12px',
             border: '1px solid rgba(13, 110, 253, 0.15)',
             transition: 'all 0.3s ease'
           }}>
        <div className="card-body p-3 text-center d-flex flex-column">
          <div className="mb-2">
            <div className="bg-primary bg-opacity-20 p-2 rounded-circle d-inline-flex align-items-center justify-content-center"
                 style={{ width: '50px', height: '50px' }}>
              <FaShieldAlt size={24} className="text-primary" />
            </div>
          </div>
          
          <div className="mb-2">
            <span className="badge bg-primary bg-opacity-20 text-primary px-2 py-1 rounded-pill mb-1" 
                  style={{ fontSize: '0.7rem' }}>
              Certified
            </span>
            <h6 className="text-light fw-bold mb-1" style={{ fontSize: '0.95rem' }}>Uncompromised Quality</h6>
            <p className="text-light mb-2" style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: '1.4' }}>
              Certified precision and accuracy
            </p>
          </div>

          <div className="mt-auto">
            <div className="d-flex flex-column gap-1 mb-2" style={{ fontSize: '0.75rem' }}>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-1" size={12} />
                <small className="text-light">ISO certified</small>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-1" size={12} />
                <small className="text-light">Triple-checked</small>
              </div>
            </div>
            
            <div className="border-top border-secondary pt-2">
              <small className="text-secondary d-block" style={{ fontSize: '0.7rem' }}>Accuracy rate</small>
              <div className="text-primary fw-bold" style={{ fontSize: '0.9rem' }}>99.8%</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  {/* Stats Banner - Compact */}
  <div className="row mt-3">
    <div className="col-12">
      <div className="bg-dark bg-opacity-40 rounded-2 p-2">
        <div className="row g-1 text-center">
          <div className="col-3">
            <div className="text-primary fw-bold" style={{ fontSize: '1.1rem' }}>18+</div>
            <small className="text-light" style={{ fontSize: '0.7rem' }}>Years</small>
          </div>
          <div className="col-3">
            <div className="text-primary fw-bold" style={{ fontSize: '1.1rem' }}>50K+</div>
            <small className="text-light" style={{ fontSize: '0.7rem' }}>Patients</small>
          </div>
          <div className="col-3">
            <div className="text-primary fw-bold" style={{ fontSize: '1.1rem' }}>500+</div>
            <small className="text-light" style={{ fontSize: '0.7rem' }}>Tests</small>
          </div>
          <div className="col-3">
            <div className="text-primary fw-bold" style={{ fontSize: '1.1rem' }}>100+</div>
            <small className="text-light" style={{ fontSize: '0.7rem' }}>Experts</small>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* CTA Buttons - Compact */}
  <div className="text-center mt-3">
    <div className="d-flex flex-wrap justify-content-center gap-2">
      <button className="btn btn-primary btn-sm px-3 py-1 fw-semibold" style={{ fontSize: '0.85rem' }}>
        <FaCalendarAlt className="me-1" size={12} /> Book Now
      </button>
      <button className="btn btn-outline-light btn-sm px-3 py-1 fw-semibold" style={{ fontSize: '0.85rem' }}>
        <FaPhoneAlt className="me-1" size={12} /> Call Us
      </button>
    </div>
  </div>

  {/* Custom Styles */}
  <style>{`
    .hover-feature {
      transition: all 0.3s ease !important;
      height: 100%;
    }
    
    .hover-feature:hover {
      transform: translateY(-3px) !important;
      box-shadow: 0 8px 20px rgba(13, 110, 253, 0.12) !important;
      border-color: rgba(13, 110, 253, 0.25) !important;
    }
    
    .card-body {
      min-height: 240px;
      display: flex;
      flex-direction: column;
    }
    
    .badge {
      animation: subtlePulse 3s infinite;
    }
    
    @keyframes subtlePulse {
      0%, 100% {
        box-shadow: 0 0 0 0 rgba(13, 110, 253, 0.1);
      }
      50% {
        box-shadow: 0 0 0 3px rgba(13, 110, 253, 0);
      }
    }
    
    .btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(13, 110, 253, 0.2);
    }
  `}</style>
</div>

</section>
<section id="services" className="py-5 bg-light">
  <div className="container">
    {/* Header Section */}
    <div className="text-center mb-5">
      <div className="d-inline-block position-relative mb-3">
        <span className="display-6 fw-bold">
          Our <span className="text-primary">Diagnostic</span> Services
        </span>
        <div className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" 
             style={{ height: "4px", width: "80px", borderRadius: "2px" }}></div>
      </div>
      <p className="text-secondary fs-5 col-lg-8 mx-auto">
        Comprehensive diagnostic solutions powered by cutting-edge technology and expert analysis 
        for accurate, reliable results you can trust.
      </p>
    </div>

    {/* Services Grid */}
    <div className="row g-4">

      {/* Service Card 1: Blood Testing */}
      <div className="col-lg-4 col-md-6">
        <div className="card border-0 shadow-lg h-100 service-card" 
             style={{ borderRadius: "15px", overflow: "hidden", transition: "all 0.4s ease" }}>
          <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
            <img
              src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Blood Testing"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                 style={{ background: "linear-gradient(to bottom, rgba(13, 110, 253, 0.1), rgba(13, 110, 253, 0.3))" }}>
              <div className="bg-white rounded-circle p-3 shadow">
                <i className="fas fa-tint text-primary fs-3"></i>
              </div>
            </div>
          </div>
          <div className="card-body p-4">
            <h4 className="fw-bold mb-3">
              <span className="text-primary">Blood</span> Testing
            </h4>
            <p className="text-secondary mb-4">
              Comprehensive blood analysis for early detection and monitoring of health conditions 
              with precise results.
            </p>
            
            <h6 className="fw-semibold mb-3 text-dark">
              <i className="fas fa-list-check text-primary me-2"></i>Key Tests Include:
            </h6>
            <div className="row g-2 mb-4">
              <div className="col-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Complete Blood Count</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Blood Sugar Tests</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Lipid Profile</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Hemoglobin A1C</span>
                </div>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                <i className="fas fa-clock me-1"></i> 4-6 Hours Results
              </span>
              <button className="btn btn-outline-primary btn-sm px-3">
                Learn More <i className="fas fa-arrow-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Card 2: Urine & Organ Tests */}
      <div className="col-lg-4 col-md-6">
        <div className="card border-0 shadow-lg h-100 service-card" 
             style={{ borderRadius: "15px", overflow: "hidden", transition: "all 0.4s ease" }}>
          <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
            <img
              src="https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Urine Testing"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                 style={{ background: "linear-gradient(to bottom, rgba(13, 110, 253, 0.1), rgba(13, 110, 253, 0.3))" }}>
              <div className="bg-white rounded-circle p-3 shadow">
                <i className="fas fa-flask text-primary fs-3"></i>
              </div>
            </div>
          </div>
          <div className="card-body p-4">
            <h4 className="fw-bold mb-3">
              Organ <span className="text-primary">Function</span> Tests
            </h4>
            <p className="text-secondary mb-4">
              Comprehensive assessment of vital organ functions to monitor health and detect 
              potential issues early.
            </p>
            
            <h6 className="fw-semibold mb-3 text-dark">
              <i className="fas fa-list-check text-primary me-2"></i>Key Tests Include:
            </h6>
            <div className="row g-2 mb-4">
              <div className="col-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Urine Routine</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Liver Function</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Kidney Function</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Cardiac Markers</span>
                </div>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                <i className="fas fa-clock me-1"></i> 6-8 Hours Results
              </span>
              <button className="btn btn-outline-primary btn-sm px-3">
                Learn More <i className="fas fa-arrow-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Card 3: Special Tests */}
      <div className="col-lg-4 col-md-6">
        <div className="card border-0 shadow-lg h-100 service-card" 
             style={{ borderRadius: "15px", overflow: "hidden", transition: "all 0.4s ease" }}>
          <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Specialized Testing"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                 style={{ background: "linear-gradient(to bottom, rgba(13, 110, 253, 0.1), rgba(13, 110, 253, 0.3))" }}>
              <div className="bg-white rounded-circle p-3 shadow">
                <i className="fas fa-stethoscope text-primary fs-3"></i>
              </div>
            </div>
          </div>
          <div className="card-body p-4">
            <h4 className="fw-bold mb-3">
              <span className="text-primary">Specialized</span> Diagnostics
            </h4>
            <p className="text-secondary mb-4">
              Advanced testing for specific conditions including hormonal imbalances, 
              infectious diseases, and nutritional deficiencies.
            </p>
            
            <h6 className="fw-semibold mb-3 text-dark">
              <i className="fas fa-list-check text-primary me-2"></i>Key Tests Include:
            </h6>
            <div className="row g-2 mb-4">
              <div className="col-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Thyroid Profile</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">COVID-19 PCR</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Vitamin D Test</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Allergy Screening</span>
                </div>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                <i className="fas fa-clock me-1"></i> 12-24 Hours Results
              </span>
              <button className="btn btn-outline-primary btn-sm px-3">
                Learn More <i className="fas fa-arrow-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Service Cards */}
      {/* Service Card 4: Imaging Services */}
      <div className="col-lg-4 col-md-6">
        <div className="card border-0 shadow-lg h-100 service-card" 
             style={{ borderRadius: "15px", overflow: "hidden", transition: "all 0.4s ease" }}>
          <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
            <img
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Medical Imaging"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                 style={{ background: "linear-gradient(to bottom, rgba(13, 110, 253, 0.1), rgba(13, 110, 253, 0.3))" }}>
              <div className="bg-white rounded-circle p-3 shadow">
                <i className="fas fa-x-ray text-primary fs-3"></i>
              </div>
            </div>
          </div>
          <div className="card-body p-4">
            <h4 className="fw-bold mb-3">
              Medical <span className="text-primary">Imaging</span>
            </h4>
            <p className="text-secondary mb-4">
              State-of-the-art imaging services including X-ray, Ultrasound, and ECG 
              for comprehensive diagnostic visualization.
            </p>
            
            <h6 className="fw-semibold mb-3 text-dark">
              <i className="fas fa-list-check text-primary me-2"></i>Services Include:
            </h6>
            <div className="row g-2 mb-4">
              <div className="col-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Digital X-Ray</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">ECG</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Ultrasound</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Echo</span>
                </div>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                <i className="fas fa-clock me-1"></i> Same Day Report
              </span>
              <button className="btn btn-outline-primary btn-sm px-3">
                Learn More <i className="fas fa-arrow-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Card 5: Preventive Health */}
      <div className="col-lg-4 col-md-6">
        <div className="card border-0 shadow-lg h-100 service-card" 
             style={{ borderRadius: "15px", overflow: "hidden", transition: "all 0.4s ease" }}>
          <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Preventive Health"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                 style={{ background: "linear-gradient(to bottom, rgba(13, 110, 253, 0.1), rgba(13, 110, 253, 0.3))" }}>
              <div className="bg-white rounded-circle p-3 shadow">
                <i className="fas fa-heartbeat text-primary fs-3"></i>
              </div>
            </div>
          </div>
          <div className="card-body p-4">
            <h4 className="fw-bold mb-3">
              <span className="text-primary">Preventive</span> Health
            </h4>
            <p className="text-secondary mb-4">
              Comprehensive health checkup packages designed for early detection and 
              preventive healthcare across all age groups.
            </p>
            
            <h6 className="fw-semibold mb-3 text-dark">
              <i className="fas fa-list-check text-primary me-2"></i>Packages Include:
            </h6>
            <div className="row g-2 mb-4">
              <div className="col-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Executive Checkup</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Senior Citizen</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Women's Health</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Corporate Packages</span>
                </div>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                <i className="fas fa-calendar me-1"></i> Book Appointment
              </span>
              <button className="btn btn-outline-primary btn-sm px-3">
                Learn More <i className="fas fa-arrow-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Card 6: Home Collection */}
      <div className="col-lg-4 col-md-6">
        <div className="card border-0 shadow-lg h-100 service-card" 
             style={{ borderRadius: "15px", overflow: "hidden", transition: "all 0.4s ease" }}>
          <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
            <img
              src="https://images.unsplash.com/photo-1584467735871-8db9ac8d0916?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Home Collection"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                 style={{ background: "linear-gradient(to bottom, rgba(13, 110, 253, 0.1), rgba(13, 110, 253, 0.3))" }}>
              <div className="bg-white rounded-circle p-3 shadow">
                <i className="fas fa-home text-primary fs-3"></i>
              </div>
            </div>
          </div>
          <div className="card-body p-4">
            <h4 className="fw-bold mb-3">
              <span className="text-primary">Home</span> Collection
            </h4>
            <p className="text-secondary mb-4">
              Convenient at-home sample collection by trained professionals with 
              proper safety protocols and timely processing.
            </p>
            
            <h6 className="fw-semibold mb-3 text-dark">
              <i className="fas fa-list-check text-primary me-2"></i>Features:
            </h6>
            <div className="row g-2 mb-4">
              <div className="col-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Free Home Visit</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Trained Phlebotomists</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Safe Handling</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-check-circle text-success me-2 fs-6"></i>
                  <span className="text-dark small">Digital Reports</span>
                </div>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                <i className="fas fa-phone me-1"></i> Call for Booking
              </span>
              <button className="btn btn-outline-primary btn-sm px-3">
                Schedule Now <i className="fas fa-arrow-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* CTA Section */}
    <div className="row mt-5 pt-4">
      <div className="col-12 text-center">
        <div className="bg-primary bg-opacity-10 rounded-3 p-5 border border-primary border-opacity-25">
          <h3 className="fw-bold mb-3">Need a Custom Test Package?</h3>
          <p className="text-secondary fs-5 mb-4">
            Contact our experts to create a personalized diagnostic package tailored to your specific health needs.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <button className="btn btn-primary px-4 py-2 fw-semibold">
              <i className="fas fa-phone-alt me-2"></i> Call Now: +91 98765 43210
            </button>
            <button className="btn btn-outline-primary px-4 py-2 fw-semibold">
              <Link to="/test" className="text-decoration-none text-dark">Book Online</Link>
              <i className="fas fa-calendar-check me-2"></i> 
            </button>
            <button className="btn btn-outline-dark px-4 py-2 fw-semibold">
              <i className="fas fa-download me-2"></i> Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>

  {/* Custom Styles */}
  <style>{`
    .service-card {
      transition: all 0.4s ease !important;
    }
    
    .service-card:hover {
      transform: translateY(-10px) !important;
      box-shadow: 0 20px 40px rgba(13, 110, 253, 0.15) !important;
    }
    
    .service-card:hover img {
      transform: scale(1.1) !important;
    }
    
    .badge {
      transition: all 0.3s ease;
    }
    
    .service-card:hover .badge {
      background-color: rgba(13, 110, 253, 0.2) !important;
    }
    
    .btn-outline-primary:hover {
      background-color: #0d6efd;
      color: white;
    }
  `}</style>
</section>
      {/* TESTS */}
      {/* <section id="tests" className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-semibold">
              Our <span className="text-primary">Lab Tests</span>
            </h2>
            <p className="text-secondary">
              We offer a wide range of diagnostic tests with accurate results.
            </p>
          </div>

          <div className="row g-3">
            <div className="col-md-4">
              <ul className="list-group shadow-sm">
                <li className="list-group-item">
                  Complete Blood Count (CBC)
                </li>
                <li className="list-group-item">Blood Sugar Test</li>
                <li className="list-group-item">Lipid Profile</li>
              </ul>
            </div>

            <div className="col-md-4">
              <ul className="list-group shadow-sm">
                <li className="list-group-item">Urine Routine Test</li>
                <li className="list-group-item">
                  Liver Function Test (LFT)
                </li>
                <li className="list-group-item">
                  Kidney Function Test (KFT)
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <ul className="list-group shadow-sm">
                <li className="list-group-item">Thyroid Profile</li>
                <li className="list-group-item">COVID-19 Test</li>
                <li className="list-group-item">Vitamin D Test</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <section id="faqs" className="py-5 bg-light">
  <div className="container">
    <div className="text-center mb-4">
      <h2 className="fw-semibold">
        Frequently Asked <span className="text-primary">Questions</span>
      </h2>
    </div>

    <div className="accordion mx-auto" id="faqAccordion" style={{ maxWidth: "800px" }}>
      
      {/* Question 1 */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq1"
            aria-expanded="false"
            aria-controls="faq1"
          >
            How can I book a lab test?
          </button>
        </h2>
        <div id="faq1" className="accordion-collapse collapse">
          <div className="accordion-body text-secondary">
            You can book a test online or visit our laboratory.
          </div>
        </div>
      </div>

      {/* Question 2 */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq2"
            aria-expanded="false"
            aria-controls="faq2"
          >
            How long does it take to get test reports?
          </button>
        </h2>
        <div id="faq2" className="accordion-collapse collapse">
          <div className="accordion-body text-secondary">
            Most test reports are available within 24 hours. Some tests may take longer.
          </div>
        </div>
      </div>

      {/* Question 3 */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq3"
            aria-expanded="false"
            aria-controls="faq3"
          >
            Do you provide home sample collection?
          </button>
        </h2>
        <div id="faq3" className="accordion-collapse collapse">
          <div className="accordion-body text-secondary">
            Yes, we offer home sample collection services for your convenience.
          </div>
        </div>
      </div>

      {/* Question 4 */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq4"
            aria-expanded="false"
            aria-controls="faq4"
          >
            Are your lab tests certified and reliable?
          </button>
        </h2>
        <div id="faq4" className="accordion-collapse collapse">
          <div className="accordion-body text-secondary">
            Yes, our lab is certified and uses modern equipment to ensure accurate results.
          </div>
        </div>
      </div>

      {/* Question 5 */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq5"
            aria-expanded="false"
            aria-controls="faq5"
          >
            Can I get a copy of my report online?
          </button>
        </h2>
        <div id="faq5" className="accordion-collapse collapse">
          <div className="accordion-body text-secondary">
            Yes, after your test is complete, you can download your report online from our portal.
          </div>
        </div>
      </div>

    </div>
  </div>
 </section>


{/*

<section className="py-5 text-center">
  <div className="mx-auto p-4 rounded-4 shadow" style={{ maxWidth: "600px", backgroundColor: "#2d3439", border: "1px solid #343a40" }}>
    
    <h2 className="text-light fw-semibold mb-2">Sign Up For Exclusive Offers</h2>
    <p className="text-secondary mb-4 fs-6">
      Get notified about all our limited discount offers on tests or services. Never miss a deal!
    </p>

    <form onSubmit={handleSubscribe} className="d-flex flex-column gap-2">
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="Enter your email..."
        style={{
          backgroundColor: "#212529",
          border: "2px solid #343a40",
          color: "#f8f9fa",
          padding: "12px 15px",
          borderRadius: "8px",
          fontSize: "16px",
        }}
      />

      <button
        type="submit"
        className="btn btn-primary fw-semibold mt-2 d-flex justify-content-center align-items-center gap-2"
        style={{ padding: "12px 25px", fontSize: "16px", borderRadius: "8px" }}
        disabled={status === "processing" || status === "success"}
      >
        {status === "processing" ? <FaSpinner className="fa-spin" /> : status === "success" ? <FaCheckCircle /> : <FaPaperPlane />}
        {status === "idle" ? "SUBSCRIBE" : status === "processing" ? "PROCESSING..." : "SUBSCRIBED!"}
      </button>

      {status === "error" && <p className="text-danger mt-2 mb-0">{message}</p>}
      {status === "success" && <p className="text-success mt-2 mb-0">{message}</p>}

      <p className="text-secondary mt-3 mb-0" style={{ fontSize: "13px" }}>
        We respect your privacy. Your email will only be used for offers. Unsubscribe anytime.
      </p>
    </form>
  </div>
</section> */}
 <section className="py-4" style={{ background: 'linear-gradient(135deg, #1a1e23 0%, #2d3439 100%)' }}>
  <div className="container-fluid px-0">
    <div className="row g-0 align-items-center">
      
      {/* Left Side - Benefits */}
      <div className="col-lg-5 bg-dark bg-opacity-50 py-4">
        <div className="px-4 px-lg-5">
          <div className="d-flex align-items-center mb-3">
            <div className="bg-primary bg-opacity-20 p-2 rounded-3 me-3">
              <FaGift className="text-primary" size={24} />
            </div>
            <h3 className="text-light fw-bold mb-0 h4">Exclusive Offers</h3>
          </div>
          
          <div className="row g-2 mb-3">
            <div className="col-6">
              <div className="d-flex align-items-center mb-2">
                <FaCheckCircle className="text-success me-2" size={14} />
                <small className="text-light">Seasonal Discounts</small>
              </div>
              <div className="d-flex align-items-center mb-2">
                <FaCheckCircle className="text-success me-2" size={14} />
                <small className="text-light">Health Packages</small>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex align-items-center mb-2">
                <FaCheckCircle className="text-success me-2" size={14} />
                <small className="text-light">Priority Booking</small>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-2" size={14} />
                <small className="text-light">Free Consultations</small>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <FaShieldAlt className="text-primary me-2" size={14} />
            <small className="text-secondary">100% Secure & Private</small>
          </div>
        </div>
      </div>

      {/* Middle - Main Content & Form */}
      <div className="col-lg-7 py-4 px-4 px-lg-5">
        <div className="row align-items-center g-3">
          
          {/* Text Content */}
          <div className="col-md-7">
            <div className="d-flex align-items-center mb-2">
              <span className="badge bg-primary bg-opacity-20 text-primary px-3 py-1 rounded-pill me-3">
                <FaChartLine className="me-1" size={12} /> Limited Time
              </span>
              <small className="text-light opacity-75">5,000+ Subscribers</small>
            </div>
            
            <h4 className="text-light fw-bold mb-2">
              Get <span className="text-primary">15% OFF</span> Your First Test
            </h4>
            
            <p className="text-light mb-3 small">
              Subscribe to LabTech for exclusive offers, health insights, and priority access to services.
            </p>

            <div className="d-flex gap-3 mb-3">
              <div className="text-center">
                <div className="text-primary fw-bold fs-5">98%</div>
                <small className="text-secondary">Satisfaction</small>
              </div>
              <div className="text-center">
                <div className="text-primary fw-bold fs-5">24/7</div>
                <small className="text-secondary">Support</small>
              </div>
              <div className="text-center">
                <div className="text-primary fw-bold fs-5">50+</div>
                <small className="text-secondary">Hospital Partners</small>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-md-5">
            <form onSubmit={handleSubscribe} className="d-flex flex-column gap-2">
              <div className="input-group" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control border-0"
                  placeholder="Your email..."
                  style={{
                    backgroundColor: '#1a1e23',
                    color: '#f8f9fa',
                    padding: '12px 15px',
                    fontSize: '14px',
                    minWidth: '200px'
                  }}
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary border-0 px-3"
                  style={{
                    backgroundColor: '#0d6efd',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap'
                  }}
                  disabled={status === "processing" || status === "success"}
                >
                  {status === "processing" ? (
                    <FaSpinner className="fa-spin" size={14} />
                  ) : status === "success" ? (
                    <FaCheckCircle size={14} />
                  ) : (
                    <>
                      <FaPaperPlane className="me-1" size={12} /> Join
                    </>
                  )}
                </button>
              </div>

              {status === "error" && (
                <small className="text-danger d-block">
                  <FaCheckCircle className="me-1" size={12} /> {message}
                </small>
              )}
              
              {status === "success" && (
                <small className="text-success d-block">
                  <FaCheckCircle className="me-1" size={12} /> {message}
                </small>
              )}

              <small className="text-secondary d-flex align-items-center mt-2">
                <FaShieldAlt className="me-1" size={12} />
                No spam · Unsubscribe anytime
              </small>
            </form>
          </div>

        </div>
      </div>

    </div>

    {/* Trust Badges - Horizontal */}
    <div className="row g-0 border-top border-secondary">
      <div className="col-12">
        <div className="d-flex justify-content-center align-items-center gap-4 py-3">
          <div className="d-flex align-items-center gap-2">
            <div className="text-primary fw-bold">✓</div>
            <small className="text-secondary">ISO Certified</small>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="text-primary fw-bold">🔒</div>
            <small className="text-secondary">GDPR Compliant</small>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="text-primary fw-bold">⭐</div>
            <small className="text-secondary">4.9/5 Rating</small>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="text-primary fw-bold">🏥</div>
            <small className="text-secondary">Hospital Partners</small>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Custom Styles */}
  <style>{`
    @media (max-width: 768px) {
      .col-lg-5, .col-lg-7 {
        width: 100%;
        border-right: none !important;
      }
      
      .row.g-0 > div {
        border-bottom: 1px solid rgba(108, 117, 125, 0.3);
      }
      
      .row.g-0 > div:last-child {
        border-bottom: none;
      }
    }
    
    .input-group .form-control:focus {
      box-shadow: none;
      background-color: #1a1e23;
    }
    
    .btn-primary:hover:not(:disabled) {
      background-color: #0b5ed7 !important;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
    }
    
    .btn-primary:disabled {
      background-color: #198754 !important;
    }
    
    .badge {
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(13, 110, 253, 0.4);
      }
      70% {
        box-shadow: 0 0 0 5px rgba(13, 110, 253, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(13, 110, 253, 0);
      }
    }
    
    .col-lg-5 {
      border-right: 1px solid rgba(108, 117, 125, 0.3);
    }
  `}</style>
</section>
    </>
  );
}
