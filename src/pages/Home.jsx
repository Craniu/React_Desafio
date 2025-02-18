import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useEffect, useState } from "react";

const Home = () => {

  const url = "http://localhost:5000/api/pizzas"

  const [info, setInfo] = useState([]);

  const consultarApi = async () =>{
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data)
  }

  useEffect(() => {
    consultarApi();
  },[]);

  return (
    <div className="home">
      <Header />
      <div className="container">
        
        
          {info.map((pizzas) => (
            <CardPizza 
            key={pizzas.id}
            desc={pizzas.desc}
            id={pizzas.id}
            img={pizzas.img}
            ingredients={pizzas.ingredients}
            name={pizzas.name}
            price={pizzas.price}
            />))}


      </div>
    </div>
  );
};

export default Home;
