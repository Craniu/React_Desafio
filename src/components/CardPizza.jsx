import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { useNavigate } from "react-router-dom";


const CardPizza = ({ name, price, ingredients, img, id }) => {
  
  const navigate = useNavigate();
  const {addCarrito} = useContext(CartContext);
  
  return (
    <div className="cardPizza">
      <img src={img}></img>
      <h2>{name}</h2>
      <hr />
      <div className="ingredientes">
        <h2>Ingredientes:</h2>
        <p>
           {ingredients.map((ingrediente) => (
              <li key={ingrediente}>
                {ingrediente}
              </li>
           ))
          }
        </p>
      </div>
      <hr />
      <h1>Precio: ${price}</h1>
      <button onClick={()=>addCarrito(id)}>Agregar</button>
      <button onClick={()=>navigate(`/pizza/${id}`)}>Detalles</button>
    </div>
  );
};

export default CardPizza;
