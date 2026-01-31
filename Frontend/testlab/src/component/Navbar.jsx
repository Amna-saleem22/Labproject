import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/cartContext.js";

const Navbar = () => {
    const [cartCount, setCartCount] = useState(0);
const { cart } = useCart(); // Listen to global cart state
    const navLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? "#0d6efd" : "#333",
            fontWeight: isActive ? "600" : "500",
            borderBottom: isActive ? "2px solid #0d6efd" : "none",
            paddingBottom: isActive ? "5px" : "0"
        };
    };

    // Ye function test page ya service page se call hoga
    const addToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
                <div className="container">
                    {/* Brand Logo */}
                    <Link className="navbar-brand fw-semibold fs-4 text-dark" to="/">
                        Lab<span className="text-primary">Tech</span>
                    </Link>

                    {/* Mobile Toggle */}
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#labNavbar"
                        aria-controls="labNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Links */}
                    <div className="collapse navbar-collapse" id="labNavbar">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3 align-items-center">
                            <li className="nav-item">
                                <NavLink className="nav-link fw-medium" to="/" style={navLinkStyle} end>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-medium" to="/about" style={navLinkStyle}>
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-medium" to="/test" style={navLinkStyle}>
                                    Tests
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-medium" to="/contact" style={navLinkStyle}>
                                    Contact
                                </NavLink>
                            </li>

                            {/* Add to Cart Icon */}
                            <li className="nav-item position-relative">
                                <Link to="/cart" className="btn btn-outline-primary rounded-circle position-relative p-2">
                <FaShoppingCart />
                {cart.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </span>
                )}
              </Link>
                                {/* <button 
                                    className="btn btn-outline-primary rounded-circle position-relative"
                                    onClick={addToCart}
                                    style={{ width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}
                                >
                                    <FaShoppingCart />
                                    {cartCount > 0 && (
                                        <span 
                                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                            style={{ fontSize: "0.7rem" }}
                                        >
                                            {cartCount}
                                        </span>
                                    )}
                                </button> */}
                            </li>

                            {/* Login/Register */}
                            <li className="nav-item d-flex align-items-center gap-2 ms-lg-3">
                                <Link className="btn btn-outline-primary btn-sm rounded-pill px-3" to="/login">
                                    Login
                                </Link>
                                {/* <Link className="btn btn-primary btn-sm rounded-pill px-3" to="/register">
                                    Register
                                </Link> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
