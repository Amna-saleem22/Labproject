
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Test from './component/Test';
import Report from './component/Report';
import Booking from './component/Booking';
import { CartProvider } from './context/cartContext';
import CartPage from './component/CartPage';
import Payment from './component/Payment';
import PayOnline from './component/PayOnline';
import Cash from './component/Cash';
import Login from './component/Login';
function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path='login' element={<Login />} />
             <Route path="/online-payment/:bookingId" element={<PayOnline />} />
  <Route path="/cash-payment/:bookingId" element={<Cash />} />
            <Route path='/payment/:bookingId' element={<Payment />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/' element={<Home />} />
            <Route path='/test' element={<Test />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='cart' element={<CartPage />} />
            <Route path='/report' element={<Report />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
