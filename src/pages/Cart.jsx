import { useContext, useEffect, useState } from "react"
import {pizzaCart} from "../pizzas"
import { CartContext } from "../contexts/cartContext";


const Cart = () => {

  const {carrito, total, addCarrito, delCarrito} = useContext(CartContext);


  //Valido si el carrito esta vacio si todos los elementos tienen cantidad 0
  const carritoVacio =  carrito.every((pizza => pizza.count === 0));


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
          <button>Pagar</button>
        </div>
        </>
      )}

    </div>

    </>
  )
}

export default Cart