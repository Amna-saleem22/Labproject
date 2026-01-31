// import { Link } from 'react-router-dom';


// export default function Footer() {
//     return (

//         <>
// <footer class="bg-dark text-light pt-5 mt-5">

//   <div class="container">
//     <div class="row g-4">

    
//       <div class="col-lg-3 col-md-6">
//         <h4 class="fw-semibold">
//           Lab<span class="text-primary">Tech</span>
//         </h4>
//         <p class="text-secondary small mt-3">
//           Trusted diagnostic laboratory providing accurate and reliable medical
//           testing services using modern technology.
//         </p>
//       </div>

    
//       <div class="col-lg-3 col-md-6">
//         <h5 class="mb-3">Quick Links</h5>
//         <ul class="list-unstyled">
//           <li class="mb-2"><a href="#" class="text-secondary text-decoration-none">Home</a></li>
//           <li class="mb-2"><a href="#" class="text-secondary text-decoration-none">About Us</a></li>
//           <li class="mb-2"><a href="#" class="text-secondary text-decoration-none">Services</a></li>
//           <li class="mb-2"><a href="#" class="text-secondary text-decoration-none">Lab Tests</a></li>
//           <li><a href="#" class="text-secondary text-decoration-none">Contact</a></li>
//         </ul>
//       </div>

    
//       <div class="col-lg-3 col-md-6">
//         <h5 class="mb-3">Our Services</h5>
//         <ul class="list-unstyled text-secondary small">
//           <li class="mb-2">Blood Testing</li>
//           <li class="mb-2">Urine Analysis</li>
//           <li class="mb-2">Covid-19 Test</li>
//           <li class="mb-2">Biochemistry</li>
//           <li>Home Sample Collection</li>
//         </ul>
//       </div>

      
//       <div class="col-lg-3 col-md-6">
//         <h5 class="mb-3">Contact Us</h5>
//         <p class="text-secondary small mb-2">📍 Karachi, Pakistan</p>
//         <p class="text-secondary small mb-2">📞 +92 300 1234567</p>
//         <p class="text-secondary small">✉️ info@labtech.com</p>
//       </div>

//     </div>
//   </div>

//   <div class="border-top border-secondary mt-4 py-3">
//     <div class="container text-center">
//       <small class="text-secondary">
//         © 2026 LabTech Diagnostics. All Rights Reserved.
//       </small>
//     </div>
//   </div>

// </footer>

//  </>
//  );
// }
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaSpinner, FaCheckCircle, FaPaperPlane, FaGift, FaShieldAlt, FaChartLine, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaUserMd, FaMicroscope, FaHome } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, processing, success, error
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus('processing');
    
    // Simulate API call
    setTimeout(() => {
      if (email && email.includes('@')) {
        setStatus('success');
        setMessage('🎉 Welcome to LabTech Family! Check your email for confirmation.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Please enter a valid email address.');
      }
    }, 1500);
  };

  return (
    <>
      {/* Newsletter Section */}
   

      {/* Main Footer */}
      <footer className="bg-dark text-light pt-5">
        <div className="container">
          <div className="row g-5">
            {/* Brand Column */}
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary p-2 rounded-3 me-3">
                  <FaMicroscope size={28} className="text-white" />
                </div>
                <h2 className="fw-bold mb-0">
                  Lab<span className="text-primary">Tech</span>
                </h2>
              </div>
              <p className="text-light mb-4" style={{ lineHeight: '1.6' }}>
                Pioneering diagnostic excellence since 2005. We combine cutting-edge technology 
                with compassionate care to deliver precise, reliable medical testing services 
                for better health outcomes.
              </p>
              
              <div className="d-flex gap-3 mb-4">
                <a href="#" className="text-decoration-none">
                  <div className="bg-secondary bg-opacity-25 p-2 rounded-circle hover-primary">
                    <FaFacebook size={18} className="text-light" />
                  </div>
                </a>
                <a href="#" className="text-decoration-none">
                  <div className="bg-secondary bg-opacity-25 p-2 rounded-circle hover-primary">
                    <FaTwitter size={18} className="text-light" />
                  </div>
                </a>
                <a href="#" className="text-decoration-none">
                  <div className="bg-secondary bg-opacity-25 p-2 rounded-circle hover-primary">
                    <FaLinkedin size={18} className="text-light" />
                  </div>
                </a>
                <a href="#" className="text-decoration-none">
                  <div className="bg-secondary bg-opacity-25 p-2 rounded-circle hover-primary">
                    <FaInstagram size={18} className="text-light" />
                  </div>
                </a>
              </div>

              <div className="bg-secondary bg-opacity-10 rounded-3 p-3">
                <div className="d-flex align-items-center mb-2">
                  <FaClock className="text-primary me-2" />
                  <span className="text-light">Opening Hours</span>
                </div>
                <small className="text-secondary">Mon-Sat: 7:00 AM - 10:00 PM</small><br />
                <small className="text-secondary">Sunday: 8:00 AM - 9:00 PM</small>
              </div>
            </div>

            {/* Quick Links & Services */}
            <div className="col-lg-2 col-md-6">
              <h5 className="fw-bold mb-4 text-primary">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <Link to="/" className="text-light text-decoration-none d-flex align-items-center hover-primary">
                    <span className="me-2">→</span> Home
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/about" className="text-light text-decoration-none d-flex align-items-center hover-primary">
                    <span className="me-2">→</span> About Us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/services" className="text-light text-decoration-none d-flex align-items-center hover-primary">
                    <span className="me-2">→</span> Services
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/tests" className="text-light text-decoration-none d-flex align-items-center hover-primary">
                    <span className="me-2">→</span> Lab Tests
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/contact" className="text-light text-decoration-none d-flex align-items-center hover-primary">
                    <span className="me-2">→</span> Contact
                  </Link>
                </li>
                <li>
                  <Link to="/appointment" className="text-light text-decoration-none d-flex align-items-center hover-primary">
                    <span className="me-2">→</span> Book Appointment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="col-lg-3 col-md-6">
              <h5 className="fw-bold mb-4 text-primary">Our Services</h5>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center">
                  <FaUserMd className="text-primary me-2" size={14} />
                  <span className="text-light">Pathology & Blood Tests</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaUserMd className="text-primary me-2" size={14} />
                  <span className="text-light">Radiology & Imaging</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaUserMd className="text-primary me-2" size={14} />
                  <span className="text-light">COVID-19 Testing</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaUserMd className="text-primary me-2" size={14} />
                  <span className="text-light">Genetic Testing</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaUserMd className="text-primary me-2" size={14} />
                  <span className="text-light">Health Checkup Packages</span>
                </li>
                <li className="d-flex align-items-center">
                  <FaHome className="text-primary me-2" size={14} />
                  <span className="text-light">Home Sample Collection</span>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="col-lg-3 col-md-6">
              <h5 className="fw-bold mb-4 text-primary">Contact Info</h5>
              <div className="mb-4">
                <div className="d-flex align-items-start mb-3">
                  <FaMapMarkerAlt className="text-primary mt-1 me-3" />
                  <div>
                    <h6 className="text-light mb-1">Main Laboratory</h6>
                    <p className="text-secondary mb-0" style={{ fontSize: '14px' }}>
                      Building 45, DHA Phase 6<br />
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FaPhone className="text-primary me-3" />
                  <div>
                    <h6 className="text-light mb-1">Emergency Contact</h6>
                    <p className="text-secondary mb-0" style={{ fontSize: '14px' }}>+92 300 123 4567</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FaEnvelope className="text-primary me-3" />
                  <div>
                    <h6 className="text-light mb-1">Email Address</h6>
                    <p className="text-secondary mb-0" style={{ fontSize: '14px' }}>info@labtech.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary bg-opacity-10 rounded-3 p-3 border border-primary border-opacity-25">
                <h6 className="text-light mb-2">Emergency Services</h6>
                <p className="text-secondary small mb-3">24/7 emergency testing available</p>
                <button className="btn btn-primary btn-sm w-100">
                  <FaPhone className="me-2" /> Call Now
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-top border-secondary my-5"></div>

          {/* Bottom Footer */}
          <div className="row">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="d-flex flex-wrap align-items-center gap-3">
                {/* <img 
                  src="https://img.icons8.com/color/48/000000/iso-certified.png" 
                  alt="ISO Certified" 
                  width="30"
                  className="opacity-75"
                />
                <img 
                  src="https://img.icons8.com/color/48/000000/medical.png" 
                  alt="Medical Certified" 
                  width="30"
                  className="opacity-75"
                />
                <img 
                  src="https://img.icons8.com/color/48/000000/shield.png" 
                  alt="Secure" 
                  width="30"
                  className="opacity-75"
                /> */}
                <span className="text-secondary">•</span>
                <small className="text-secondary">NABL Accredited</small>
                <span className="text-secondary">•</span>
                <small className="text-secondary">ISO 15189:2012</small>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column flex-md-row justify-content-md-end align-items-center gap-3">
                <small className="text-secondary">
                  © {new Date().getFullYear()} LabTech Diagnostics. All Rights Reserved.
                </small>
                <div className="d-flex gap-3">
                  <a href="#" className="text-secondary text-decoration-none small hover-primary">Privacy Policy</a>
                  <a href="#" className="text-secondary text-decoration-none small hover-primary">Terms of Service</a>
                  <a href="#" className="text-secondary text-decoration-none small hover-primary">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style>{`
        .hover-primary:hover {
          color: #0d6efd !important;
          transform: translateX(5px);
          transition: all 0.3s ease;
        }
        
        .bg-secondary.bg-opacity-25:hover {
          background-color: rgba(13, 110, 253, 0.25) !important;
          transform: translateY(-3px);
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(13, 110, 253, 0.3);
          transition: all 0.3s ease;
        }
        
        /* Newsletter Styles */
        .input-group .form-control:focus {
          box-shadow: none;
          background-color: #1a1e23;
          border-color: #0d6efd;
        }
        
        .alert {
          border-radius: 12px;
          border: none;
          animation: slideIn 0.3s ease;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .btn-primary:disabled {
          background-color: #198754 !important;
          border-color: #198754 !important;
        }
        
        .badge {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(13, 110, 253, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(13, 110, 253, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(13, 110, 253, 0);
          }
        }
        
        li {
          transition: transform 0.3s ease;
        }
        
        li:hover {
          transform: translateX(5px);
        }
      `}</style>
    </>
  );
};

export default Footer;