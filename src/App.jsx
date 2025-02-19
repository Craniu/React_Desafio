import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart"
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import CartProvider from "./contexts/cartContext"

const App = () => {

  return (
    <div>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/pizza/p001" element={<Pizza />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/*" element={<NotFound />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
