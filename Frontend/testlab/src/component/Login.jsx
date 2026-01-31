import { useState } from 'react';
import { FaGoogle, FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const ModernLoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center py-4 bg-dark">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            
            {/* Main Card */}
            <div className="card border-0 shadow-lg" style={{ borderRadius: '12px' }}>
              <div className="card-body p-4 p-md-5">
                
                {/* Header */}
                <div className="text-center mb-4">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="bg-primary p-2 rounded-3 me-3">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="fw-semibold mb-0 fs-4">
                      Lab<span className="text-primary">Tech</span>
                    </h2>
                  </div>
                  <h3 className="fw-medium text-dark mb-2">
                    {isLogin ? 'Welcome Back' : 'Create Account'}
                  </h3>
                  <p className="text-secondary mb-0">
                    {isLogin 
                      ? 'Sign in to access your health records' 
                      : 'Join LabTech to manage your diagnostics'}
                  </p>
                </div>

                {/* Toggle Switch */}
                <div className="d-flex justify-content-center mb-4">
                  <div className="bg-light rounded-pill p-1 d-inline-flex border">
                    <button
                      onClick={() => setIsLogin(true)}
                      className={`btn ${isLogin ? 'btn-primary' : 'btn-light'} rounded-pill px-4`}
                      style={{ 
                        fontSize: '0.875rem',
                        fontWeight: '500'
                      }}
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => setIsLogin(false)}
                      className={`btn ${!isLogin ? 'btn-primary' : 'btn-light'} rounded-pill px-4 ms-1`}
                      style={{ 
                        fontSize: '0.875rem',
                        fontWeight: '500'
                      }}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>

                {/* Google Login */}
                <div className="mb-4">
                  <button
                    onClick={handleGoogleLogin}
                    className="btn btn-outline-dark w-100 py-2 rounded-2 d-flex align-items-center justify-content-center"
                    style={{ 
                      borderColor: '#dee2e6',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}
                  >
                    <FaGoogle className="me-2" />
                    Continue with Google
                  </button>
                </div>

                {/* Divider */}
                <div className="position-relative text-center my-4">
                  <div className="border-top"></div>
                  <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-secondary small">
                    or continue with email
                  </span>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  {!isLogin && (
                    <div className="mb-3">
                      <label className="form-label text-dark fw-medium mb-1">
                        Full Name
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <FaUser className="text-secondary" />
                        </span>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control border-start-0"
                          placeholder="Enter your full name"
                          style={{ 
                            fontSize: '0.875rem'
                          }}
                          required={!isLogin}
                        />
                      </div>
                    </div>
                  )}

                  <div className="mb-3">
                    <label className="form-label text-dark fw-medium mb-1">
                      Email Address
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <FaEnvelope className="text-secondary" />
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control border-start-0"
                        placeholder="Enter your email"
                        style={{ 
                          fontSize: '0.875rem'
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label text-dark fw-medium mb-1">
                      Password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <FaLock className="text-secondary" />
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control border-start-0"
                        placeholder="Enter your password"
                        style={{ 
                          fontSize: '0.875rem'
                        }}
                        required
                      />
                      <button
                        type="button"
                        className="input-group-text bg-light border-start-0"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash className="text-secondary" /> : <FaEye className="text-secondary" />}
                      </button>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="form-check-input"
                        id="rememberMe"
                      />
                      <label className="form-check-label text-dark small ms-2" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    {isLogin && (
                      <a href="#" className="text-primary text-decoration-none small">
                        Forgot password?
                      </a>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2 rounded-2 fw-medium mb-3"
                    style={{ fontSize: '0.875rem' }}
                  >
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </button>
                </form>

                {/* Footer */}
                <div className="text-center mt-4 pt-3 border-top">
                  <p className="text-secondary mb-2 small">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-primary text-decoration-none border-0 bg-transparent ms-1 small"
                    >
                      {isLogin ? 'Sign Up' : 'Sign In'}
                    </button>
                  </p>
                  <p className="text-secondary small mb-0">
                    By continuing, you agree to our{' '}
                    <a href="#" className="text-primary text-decoration-none">Terms</a>{' '}
                    and{' '}
                    <a href="#" className="text-primary text-decoration-none">Privacy Policy</a>
                  </p>
                </div>

              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center mt-4">
              <div className="d-flex flex-wrap justify-content-center gap-4">
                <div className="text-center">
                  <div className="text-primary fw-semibold">✓</div>
                  <small className="text-secondary">Secure Login</small>
                </div>
                <div className="text-center">
                  <div className="text-primary fw-semibold">🔒</div>
                  <small className="text-secondary">HIPAA Compliant</small>
                </div>
                <div className="text-center">
                  <div className="text-primary fw-semibold">🏥</div>
                  <small className="text-secondary">Medical Data</small>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernLoginForm;