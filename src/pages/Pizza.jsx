import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Pizza = () => {
  
  const [info, setInfo] = useState({});
  const {id} = useParams();
  const url = `http://localhost:5000/api/pizzas/${id}`;
  const navigate = useNavigate();

  const getApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data);
  };

  useEffect(() => {
    getApi();
  },[id]);

  return (
    <>
    <button className="btnPizza" onClick={()=> navigate(-1)}>volver</button>
      <div className="Pizza">
        <h1>{info.name}</h1>
          <img src={info.img}></img>
        <div className="ingredientes">
          <h2>Ingredientes:</h2>
          <p>
            {info.ingredients?.map((ingrediente) =>(
              <li key={ingrediente}>{ingrediente}</li>
            ))}
          </p>
        </div>
            <h1>Precio: ${info.price}</h1>
        <p>{info.desc}</p>
        <hr />
      </div>
    </>
  );
};

export default Pizza;
