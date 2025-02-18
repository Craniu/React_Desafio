import { useEffect, useState } from "react";

const Pizza = () => {
  const url = "http://localhost:5000/api/pizzas/p001";

  const [info, setInfo] = useState({});

  const getApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div>Pizza</div>
      <div className="Pizza">
        <h2>{info.name}</h2>
        <h1>Precio: ${info.price}</h1>
        <hr />
        <div className="ingredientes">
          <h2>Ingredientes:</h2>
          <p>
            {info.ingredients?.map((ingrediente) =>(
                <li key={ingrediente}>{ingrediente}</li>
            ))}
          </p>
        </div>
          <img src={info.img}></img>
        <p>{info.desc}</p>
        <hr />
      </div>
    </>
  );
};

export default Pizza;
