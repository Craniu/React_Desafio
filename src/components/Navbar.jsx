import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";

const Navbar = () => {

const {total} = useContext(CartContext);


  return (
    <div className="navbar">
      <Link to="/" style={{textDecoration : 'none', color: 'black'}}>
      <div className="logo">
        <h1>La Papaya Loca</h1>
      </div>
      </Link>
      <div>
        <Link to="/"><button>Home</button></Link>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button>Register</button></Link>
        <Link to="/profile"><button>Profile</button></Link>
        <Link to="/cart">
        <button >
          <i className="fa-solid fa-cart-shopping"> ${total}</i>
           
        </button>
        
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
