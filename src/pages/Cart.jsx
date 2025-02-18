import { useState } from "react"
import {pizzaCart} from "../pizzas"


const Cart = () => {

  const [listaPizzas, setListaPizzas] = useState(pizzaCart);

    const aumentarCantidad = (id) =>{
      setListaPizzas((prevPizzas) =>
        prevPizzas.map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
        )
      );
    };

    const disminuirCantidad = (id) =>{
      setListaPizzas((prevPizzas) => 
        prevPizzas.map((pizza) => 
          pizza.id === id? {...pizza, count: pizza.count - 1} : pizza
        ).filter((pizza) => pizza.count > 0)
    )
    }

    const total = listaPizzas.reduce((suma, pizza)=> suma + pizza.price * pizza.count,0);

  return (
    <>
    <div className="container">
    <h2>Carrito de compras</h2>
      {listaPizzas.length === 0 ? (<div className="msgCarrito">El carrito esta vacio</div>): (
        <>
        {listaPizzas.map((pizza) => (
          <div className="cardCarrito" key={pizza.id}>
            <img src={pizza.img}></img>
          <h3>{pizza.name}</h3>
          <p>${pizza.price * pizza.count}</p>
          <button onClick={() => aumentarCantidad(pizza.id)}>+</button>
          <p>{pizza.count}</p>
          <button onClick={() => disminuirCantidad(pizza.id)}>-</button>
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