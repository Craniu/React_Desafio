import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  
  const [carrito, setCarrito] = useState([]);

  // Consultar Api
  const url = "http://localhost:5000/api/pizzas";
  const consultarApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCarrito(data.map(pizza => ({...pizza,count:0})));
  };

  // Calcular Total
  const total = carrito.reduce((suma, pizza) => suma + pizza.price * pizza.count,0);

  //Agregar al carrito
  const addCarrito = (id) => {
      setCarrito((prevCarrito) =>
        prevCarrito.map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
        )
      );
  }

  //Quitar del carrito
  const delCarrito = (id) => {
    setCarrito((prevCarrito) => 
      prevCarrito.map((pizza) => 
        pizza.id === id && pizza.count > 0 ? {...pizza, count: pizza.count - 1} : pizza
      )
  )
  };

  //cargar la Api
  useEffect(() => {
    consultarApi();
  },[]);

  return (
    <CartContext.Provider
      value={{
        carrito,
        addCarrito,
        delCarrito,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
