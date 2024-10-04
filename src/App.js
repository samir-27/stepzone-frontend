import React from "react";
import Navbar from "./components/Navabar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProfileDetails from "./components/ProfileDetails";
import OrderHistory from "./components/OrderHistory";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import ChangePassword from "./components/ChangePassword";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Navbar />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/*" element={<Profile />}>
          <Route index element={<ProfileDetails />} />
          <Route path="changepassword" element={<ChangePassword />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
        <Route path='/cart' element={<Cart />} /> 
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;

