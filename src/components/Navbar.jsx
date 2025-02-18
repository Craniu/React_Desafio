import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>La Papaya Loca</h1>
      </div>
      <div>
        <Link  to="/"><button>Home</button></Link>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button>Register</button></Link>
        <Link to="/profile"><button>Profile</button></Link>
        <Link to="/cart"><button><i className="fa-solid fa-cart-shopping"></i></button></Link>
      </div>
    </div>
  );
};

export default Navbar;
