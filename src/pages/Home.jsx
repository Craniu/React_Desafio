import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/cartContext";



const Home = () => {

  const {carrito} = useContext(CartContext);
 
  return (
    <div className="home">
      <Header />
      <div className="container">
          {carrito.map((pizzas) => (
            <CardPizza 
            key={pizzas.id}
            desc={pizzas.desc}
            id={pizzas.id}
            img={pizzas.img}
            ingredients={pizzas.ingredients}
            name={pizzas.name}
            price={pizzas.price}
            />
            ))}

      </div>
    </div>
  );
};

export default Home;
