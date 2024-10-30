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
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProfileDetails from "./components/ProfileDetails";
import OrderHistory from "./components/OrderHistory";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import ChangePassword from "./components/ChangePassword";
import Footer from "./components/Footer";
import AdminPanel from "./pages/AdminPanel";
import AddProducts from "./components/AddProducts";
import AllProducts from "./components/AllProducts";
import AllUsers from "./components/AllUsers";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/admin" &&
        location.pathname !== "/admin/allproducts" &&
        location.pathname !== "/admin/allusers" && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id/*" element={<Profile />}>
            <Route index element={<ProfileDetails />} />
            <Route path="changepassword" element={<ChangePassword />} />
            <Route path="order-history" element={<OrderHistory />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
          <Route path="/cart" element={<Cart />} />

          {/* Protect Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminPanel />
              </ProtectedRoute>
            }
          >
            <Route index element={<AddProducts />} />
            <Route path="allproducts" element={<AllProducts />} />
            <Route path="allusers" element={<AllUsers />} />
          </Route>
        </Routes>
      </main>

      {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/admin" && <Footer />}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
