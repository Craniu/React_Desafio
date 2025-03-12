import { useContext, useEffect, useState } from "react"
import {pizzaCart} from "../pizzas"
import { CartContext } from "../contexts/cartContext";
import { UserContext } from "../contexts/userContext";
import axios from "axios";


const Cart = () => {

  const {carrito, total, addCarrito, delCarrito} = useContext(CartContext);
  const {user} = useContext(UserContext);

  //Valido si el carrito esta vacio si todos los elementos tienen cantidad 0
  const carritoVacio =  carrito.every((pizza => pizza.count === 0));

  //Enviar carrito
  const comprar = async () => {
    if(total > 0){
    try {
    const URL = "http://localhost:5000/api/checkouts";
    const headers = {
      headers : {
        Authorization: `Bearer ${user.token}`
      }
    };
      const response = await axios.post(URL,{carrito},headers );
      alert(response.data.message+"(compra realizada con exito)");
    } catch (error) {
      alert("Error al realizar la compra!");
    }
  }else{
    alert("Debe tener almenos 1 producto en el carrito")
  }
  };


   return (
    <>
    <div className="container">
    <h2>Carrito de compras</h2>
      {carritoVacio ? (<div className="msgCarrito">El carrito esta vacio</div>): (
        <>
        {carrito.filter(pizza => pizza.count > 0).map((pizza) => (
          <div className="cardCarrito" key={pizza.id}>
            <img src={pizza.img}></img>
          <h3>{pizza.name}</h3>
          <p>${pizza.price * pizza.count}</p>
          <button onClick={() => addCarrito(pizza.id)}>+</button>
          <p>{pizza.count}</p>
          <button onClick={() => delCarrito(pizza.id)}>-</button>
          </div>
        ))}
        <div className="payCarrito">
          <p>Total: ${total}</p>
          <button disabled={!user.token} onClick={()=>comprar()}>Pagar</button>
          
        </div>
        </>
      )}

    </div>

    </>
  )
}

export default Cart