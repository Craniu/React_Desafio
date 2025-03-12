import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";
import { UserContext } from "../contexts/userContext";

const Navbar = () => {

const {total} = useContext(CartContext);

const {user,logout} = useContext(UserContext);

  return (
    <div className="navbar">
      <Link to="/" style={{textDecoration : 'none', color: 'black'}}>
      <div className="logo">
        <h1>La Papaya Loca</h1>
      </div>
      </Link>
      <div>
        <Link to="/"><button>Home</button></Link>
        {!user.token? <Link to="/login"><button>Login</button></Link> : null} 
        {!user.token ?<Link to="/register"><button>Register</button></Link>:null}
        {user.token? <Link to="/profile"><button>Profile</button></Link>:null}
        {user.token? <button onClick={()=>logout()}>Logout</button>:null}

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
