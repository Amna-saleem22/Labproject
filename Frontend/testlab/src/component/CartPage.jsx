import { useCart } from "../context/cartContext";
import { useState } from "react";
import { FaCheckCircle, FaTrash, FaFlask } from "react-icons/fa";
import Booking from "../component/Booking";
const CartPage = () => {
  const { cart, removeFromCart } = useCart();
const [showForm, setShowForm] = useState(false);
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5 text-primary">
        Test Order Summary
      </h2>

      {cart.length === 0 ? (
        <div className="alert alert-secondary text-center">
          No tests added to cart
        </div>
      ) : (
        <>
          <div className="row g-4">
            {cart.map(test => (
              <div key={test._id} className="col-lg-6">
                <div className="card border-0 shadow-lg rounded-4 h-100">
                  
                  {test.popular && (
                    <span className="badge bg-primary position-absolute top-0 end-0 m-3">
                      <FaFlask className="me-1" /> Popular
                    </span>
                  )}

                  <div className="card-body p-4">
                    <span className="badge bg-light text-dark border mb-2">
                      {test.category}
                    </span>

                    <h4 className="fw-bold mb-2">{test.name}</h4>
                    <p className="text-secondary small mb-3">
                      {test.description}
                    </p>

                    {/* Features */}
                    <div className="mb-3">
                      {test.features?.map((feature, index) => (
                        <div key={index} className="d-flex align-items-center mb-1">
                          <FaCheckCircle className="text-success me-2" size={14} />
                          <small className="text-muted">{feature}</small>
                        </div>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <span className="text-decoration-line-through text-secondary small">
                          ₨{test.price}
                        </span>
                        <span className="h5 fw-bold text-dark ms-2">
                          ₨{test.discountedPrice}
                        </span>
                        <small className="d-block text-muted">
                          Report Time: {test.time}
                        </small>
                      </div>

                      <span className="badge bg-success bg-opacity-10 text-success border">
                        Save ₨{test.price - test.discountedPrice}
                      </span>
                    </div>

                    <button
                      onClick={() => removeFromCart(test._id)}
                      className="btn btn-outline-danger btn-sm w-100"
                    >
                      <FaTrash className="me-2" />
                      Remove Test
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CONFIRM BUTTON */}
        



           {cart.length > 0 && (
            <div className="text-center mt-5">       <button
          className="btn btn-primary btn-lg px-5 rounded-pill shadow"
          onClick={() => setShowForm(true)}
        >
             Confirm Test Order
        </button>
         </div>
      )}

      {/* FORM OPEN */}
      {showForm && (
        <Booking
          cart={cart}
          closeForm={() => setShowForm(false)}
        />
       
  
      )}
        </>
      )}
    </div>
  );
};

export default CartPage;
