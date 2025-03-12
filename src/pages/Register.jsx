import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";

const Register = () => {
  // Todos los campos son obligatorios (no pueden estar vacíos).
  // El password debe tener al menos 6 caracteres.
  // El password y la confirmación del password deben ser iguales.

  const [formulario, setFormulario] = useState({email:"",pass:"",pass2:""});
  const {register} = useContext(UserContext);

  const validacion = (e) => {
    e.preventDefault();
    if (formulario.pass !== formulario.pass2) {
      alert("Las contraseñas no coinciden");
    } else if (formulario.pass.length < 6) {
      alert("Las Contraseña debe tener al menos 6 digitos");
    } else {
      register(formulario.email,formulario.pass);
    }
  };
  return (
      <form className="formulario" onSubmit={validacion}>
      <h2>Registrarse</h2>
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu email"
          value={formulario.email}
          required
          onChange={(e) => {
            setFormulario({...formulario,email:e.target.value});
          }}
        ></input>
        <input
          type="password"
          name="pass"
          placeholder="Ingresa tu contraseña"
          value={formulario.pass}
          required
          onChange={(e) => {
            setFormulario({...formulario,pass:e.target.value});
          }}
        ></input>
        <input
          type="password"
          name="pass2"
          placeholder="Confirma tu contraseña"
          value={formulario.pass2}
          required
          onChange={(e) => {
            setFormulario({...formulario,pass2:e.target.value});
          }}
        ></input>
        <button>Enviar</button>
      </form>
  );
};

export default Register;
