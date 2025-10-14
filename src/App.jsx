import FloatingButtons from './Components/FloatingButtons';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';

import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import PartyWearLehenga from './Pages/PartyWearLehnga';
import GownCollection from './Pages/Gown';
import DesignerSaree from './Pages/DesignerSaree';
import Blouse from './Pages/Blouse';
import RoyalPickSection from './Pages/RoyalPickSection';
import Suits from './Pages/Suits';
import Dresess from './Pages/Dresess';
import NightCream from './Pages/NightCream';
import HairOil from './Pages/HairOil';
import Soap from './Pages/Soap';
import CustomisedBlouse from './Pages/CustomisedBlouse';
import CustomisedSarees from "./Pages/CustmisedSarees";
import Cart from './Pages/Cart';
import TermsAndConditions from './Pages/TermAndCondition';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ReturnPolicy from './Pages/ReturnPolicy';
import ShippingRefund from './Pages/ShippingRefund';
import GopiDress from './Pages/GopiDress';
import Checkout from './Pages/OrderForm';
import Dupatta from './Pages/Dupatta';

import Login from './Pages/Login';
import ChangePassword from './Pages/ChangePassword';
import Register from './Pages/Register';
import AdminRoute from './Pages/AdminRoute';
import AdminLayout from './Pages/AdminLayout';
import AdminCollections from './Pages/AdminCollections';
import AdminBeauty from './Pages/AdminBeauty';
import AdminOrders from './Pages/AdminOrders';
import HeroAdmin from './Pages/HeroAdmin';

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  // ✅ Cart State
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar cartCount={cartItems.length} />

      <Routes>
        {/* Public Pages */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/royal-pick' element={<RoyalPickSection />} />
        <Route path='/gallery' element={<Gallery />} />

        {/* Collection Pages */}
        <Route path='/collection/party-wear-lehenga' element={<PartyWearLehenga addToCart={addToCart} />} />
        <Route path='/collection/gowns' element={<GownCollection addToCart={addToCart} />} />
        <Route path='/collection/designer-sarees' element={<DesignerSaree addToCart={addToCart} />} />
        <Route path='/collection/designer-blouses' element={<Blouse addToCart={addToCart} />} />
        <Route path='/collection/suits' element={<Suits addToCart={addToCart} />} />
        <Route path='/collection/dresses' element={<Dresess addToCart={addToCart} />} />
        <Route path='/collection/gopi-dresess' element={<GopiDress addToCart={addToCart} />} />
        <Route path='/collection/customised-colours-blouses-avaliable' element={<CustomisedBlouse addToCart={addToCart} />} />
        <Route path='/collection/customised-colours-sarees-avaliable' element={<CustomisedSarees addToCart={addToCart} />} />
        <Route path='/collection/dupatta' element={<Dupatta addToCart={addToCart} />} />

        {/* Beauty Care */}
        <Route path='/beauty-care/soap' element={<Soap addToCart={addToCart} />} />
        <Route path='/beauty-care/hair-oil' element={<HairOil addToCart={addToCart} />} />
        <Route path='/beauty-care/night-cream' element={<NightCream addToCart={addToCart} />} />

        {/* Hero Section */}
        <Route path="/admin/hero" element={<HeroAdmin />} />
        {/* Cart & Checkout */}
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route path="collections" element={<AdminCollections />} />
          <Route path="beauty" element={<AdminBeauty />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>

        {/* Policies */}
        <Route path="/t&c" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/shipping-refund" element={<ShippingRefund />} />
      </Routes>

      <Footer />
      <FloatingButtons />
    </>
  );
}

export default App;
