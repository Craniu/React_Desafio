import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";

const Login = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useContext(UserContext);

  const validacion = (e) => {
    e.preventDefault();
    if (pass.length < 6) {
      alert("La contraseña de tener al menos 6 digitos");
    } else {
      login(mail, pass);
    }
  };

  return (
    <form className="formulario" onSubmit={validacion}>
      <h2>Login</h2>
      <input
        type="email"
        name="mail"
        placeholder="Ingresa tu email"
        value={mail}
        required
        onChange={(e) => {
          setMail(e.target.value);
        }}
      ></input>
      <input
        type="password"
        name="pass"
        placeholder="Ingresa tu password"
        value={pass}
        required
        onChange={(e) => {
          setPass(e.target.value);
        }}
      ></input>
      <button>Login</button>
    </form>
  );
};

export default Login;
