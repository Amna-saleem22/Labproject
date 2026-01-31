import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <section id="about" className="py-5 bg-light">
        <div className="container">
          
          {/* Header Section */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="fw-bold mb-3 display-5">
                Pioneering Excellence in <span className="text-primary">Diagnostics</span>
              </h2>
              <p className="lead text-secondary">
                At LabTech, we blend cutting-edge technology with compassionate care to deliver 
                precise diagnostics for better health outcomes.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="row align-items-center mb-5">
            
            {/* Image / Illustration */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern Laboratory Interior"
                  className="img-fluid rounded shadow-lg"
                  style={{
                    maxHeight: "550px",
                    width: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease, box-shadow 0.5s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 25px 50px rgba(13, 110, 253, 0.15)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
                  }}
                />
                <div className="position-absolute top-0 start-0 bg-primary text-white px-3 py-2 rounded-end">
                  <i className="fas fa-flask me-2"></i>Est. 2005
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="col-lg-6">
              <div className="ps-lg-4">
                <h3 className="fw-bold mb-4">
                  Welcome to <span className="text-primary">LabTech</span>
                </h3>

                <p className="text-secondary mb-4 fs-5">
                  For over 18 years, LabTech has been at the forefront of diagnostic innovation, 
                  providing accurate and reliable medical testing services to healthcare providers and patients alike.
                </p>

                <div className="row g-3 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary bg-opacity-10 p-2 rounded me-3">
                        <i className="fas fa-microscope text-primary fs-5"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-0">Advanced Equipment</h6>
                        <small className="text-secondary">ISO Certified Labs</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary bg-opacity-10 p-2 rounded me-3">
                        <i className="fas fa-user-md text-primary fs-5"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-0">Expert Team</h6>
                        <small className="text-secondary">50+ Specialists</small>
                      </div>
                    </div>
                  </div>
                </div>

                <h5 className="fw-semibold text-dark mt-4 mb-3">
                  <i className="fas fa-bullseye text-primary me-2"></i>Our Mission
                </h5>
                <p className="text-secondary mb-4">
                  To empower healthcare decisions through precise, timely, and accessible diagnostic 
                  solutions while maintaining the highest standards of quality, integrity, and patient care.
                </p>

                <h5 className="fw-semibold text-dark mt-4 mb-3">
                  <i className="fas fa-eye text-primary me-2"></i>Our Vision
                </h5>
                <p className="text-secondary mb-4">
                  To become the most trusted diagnostic partner globally by pioneering innovations 
                  that transform healthcare delivery and improve patient outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="row mb-5 py-4 bg-white rounded shadow-sm">
            <div className="col-md-3 text-center mb-4 mb-md-0">
              <h2 className="fw-bold text-primary display-4">18+</h2>
              <p className="text-secondary mb-0">Years of Excellence</p>
            </div>
            <div className="col-md-3 text-center mb-4 mb-md-0">
              <h2 className="fw-bold text-primary display-4">500+</h2>
              <p className="text-secondary mb-0">Tests Available</p>
            </div>
            <div className="col-md-3 text-center mb-4 mb-md-0">
              <h2 className="fw-bold text-primary display-4">50K+</h2>
              <p className="text-secondary mb-0">Satisfied Patients</p>
            </div>
            <div className="col-md-3 text-center">
              <h2 className="fw-bold text-primary display-4">24/7</h2>
              <p className="text-secondary mb-0">Emergency Support</p>
            </div>
          </div>

          {/* Services Section */}
          <div className="row mb-5">
            <div className="col-12 mb-4">
              <h3 className="fw-bold text-center mb-5">
                Our <span className="text-primary">Services</span>
              </h3>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="card border-0 shadow-sm h-100 hover-shadow">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary bg-opacity-10 p-3 rounded me-3">
                      <i className="fas fa-vial text-primary fs-4"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-3">Comprehensive Testing</h5>
                      <p className="text-secondary mb-0">
                        From routine blood work to specialized genetic testing, we offer 
                        a complete range of diagnostic services with rapid turnaround times.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="card border-0 shadow-sm h-100 hover-shadow">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary bg-opacity-10 p-3 rounded me-3">
                      <i className="fas fa-home text-primary fs-4"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-3">Home Collection</h5>
                      <p className="text-secondary mb-0">
                        Convenient at-home sample collection by trained professionals, 
                        ensuring safety and comfort for patients of all ages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="card border-0 shadow-sm h-100 hover-shadow">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary bg-opacity-10 p-3 rounded me-3">
                      <i className="fas fa-chart-line text-primary fs-4"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-3">Digital Reports</h5>
                      <p className="text-secondary mb-0">
                        Secure online access to test results with detailed analysis 
                        and historical comparison tools for better health tracking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="card border-0 shadow-sm h-100 hover-shadow">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary bg-opacity-10 p-3 rounded me-3">
                      <i className="fas fa-handshake text-primary fs-4"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-3">Corporate Partnerships</h5>
                      <p className="text-secondary mb-0">
                        Customized health checkup packages and wellness programs 
                        for corporate clients with dedicated account management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2">
              <div className="row g-3">
                <div className="col-6">
                  <img
                    src="https://media.istockphoto.com/id/2174865889/photo/diverse-lab-colleagues-in-thoughtful-analysis.webp?a=1&b=1&s=612x612&w=0&k=20&c=VhA69lyngZlL7-BLwgjRTCHfLdBM1Y5HKBzQNCojVsM="
                    alt="Lab Technician Working"
                    className="img-fluid rounded shadow mb-3"
                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1614308456595-a59d48697ea8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhYm9yYXRvcnl8ZW58MHx8MHx8fDA%3D"
                    alt="Modern Lab Equipment"
                    className="img-fluid rounded shadow"
                    style={{ height: "250px", width: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="col-6">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Digital Report Analysis"
                    className="img-fluid rounded shadow mb-3"
                    style={{ height: "250px", width: "100%", objectFit: "cover" }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1606206873764-fd15e242df52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFib3JhdG9yeXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Patient Consultation"
                    className="img-fluid rounded shadow"
                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-1">
              <h3 className="fw-bold mb-4">
                Why Choose <span className="text-primary">LabTech</span>
              </h3>
              
              <div className="accordion" id="whyChooseAccordion">
                <div className="accordion-item border-0 mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button bg-light text-dark fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      <i className="fas fa-award text-primary me-3"></i>
                      Accredited Excellence
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#whyChooseAccordion">
                    <div className="accordion-body text-secondary">
                      NABL accredited laboratories with international quality standards and 
                      regular proficiency testing to ensure result accuracy.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed bg-light text-dark fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      <i className="fas fa-clock text-primary me-3"></i>
                      Rapid Turnaround
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#whyChooseAccordion">
                    <div className="accordion-body text-secondary">
                      Most test results delivered within 6-24 hours through our advanced 
                      automation systems and efficient workflows.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed bg-light text-dark fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                      <i className="fas fa-shield-alt text-primary me-3"></i>
                      Quality Assurance
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#whyChooseAccordion">
                    <div className="accordion-body text-secondary">
                      Rigorous quality control at every stage - from sample collection to 
                      result delivery - with triple-check verification protocols.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed bg-light text-dark fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                      <i className="fas fa-users text-primary me-3"></i>
                      Expert Team
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#whyChooseAccordion">
                    <div className="accordion-body text-secondary">
                      Board-certified pathologists, microbiologists, and trained technicians 
                      with an average experience of 10+ years in diagnostic medicine.
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <Link to="/contact" className="btn btn-primary px-4 py-2 fw-semibold me-3">
                  <i className="fas fa-phone-alt me-2"></i>Contact Us
                </Link>
                <Link to="/test" className="btn btn-outline-primary px-4 py-2 fw-semibold">
                  <i className="fas fa-list me-2"></i>View All Services
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Add custom styles for hover effects */}
      <style>{`
        .hover-shadow {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(13, 110, 253, 0.1) !important;
        }
        .accordion-button:not(.collapsed) {
          background-color: rgba(13, 110, 253, 0.05) !important;
          color: #0d6efd !important;
        }
        .accordion-button:focus {
          box-shadow: none;
          border-color: rgba(13, 110, 253, 0.25);
        }
      `}</style>
    </>
  );
}