import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import CartProvider from "./contexts/cartContext";
import UserProvider from "./contexts/userContext";
import ProtectedRoute from "./components/ProtectedRoute";
import UnProtecRoute from "./components/UnProtecRoute";

const App = () => {

  return (
    <div>
      <CartProvider>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<UnProtecRoute><Login /></UnProtecRoute>} />
            <Route path="/register" element={<UnProtecRoute><Register /></UnProtecRoute>} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </UserProvider>
      </CartProvider>
      <Footer />
    </div>
  );
};

export default App;
