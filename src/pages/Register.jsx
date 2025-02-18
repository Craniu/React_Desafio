import React, { useState } from "react";

const Register = () => {
  // Todos los campos son obligatorios (no pueden estar vacíos).
  // El password debe tener al menos 6 caracteres.
  // El password y la confirmación del password deben ser iguales.

  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");

  const validacion = (e) => {
    e.preventDefault();
    if (pass !== pass2) {
      alert("Las contraseñas no coinciden");
    } else if (pass.length < 6) {
      alert("Las Contraseña debe tener al menos 6 digitos");
    } else {
      alert("Información validada correctamente");
      setMail("");
      setPass("");
      setPass2("");
    }
  };
  return (
      <form className="formulario" onSubmit={validacion}>
      <h2>Registrarse</h2>
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
          placeholder="Ingresa tu contraseña"
          value={pass}
          required
          onChange={(e) => {
            setPass(e.target.value);
          }}
        ></input>
        <input
          type="password"
          name="pass2"
          placeholder="Confirma tu contraseña"
          value={pass2}
          required
          onChange={(e) => {
            setPass2(e.target.value);
          }}
        ></input>
        <button>Enviar</button>
      </form>
  );
};

export default Register;
