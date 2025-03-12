import axios from "axios";
import React, { createContext, useState } from "react";


export const UserContext = createContext();
const UserProvider = ({ children }) => {

  const [user, setUser] = useState({email:"",token:""});
  const [perfil, setPerfil] = useState({email:"",id:""})
  const HOST = "http://localhost:5000";

  //LOGIN
  const login = async (email, password) => {
    try {
    const URL = HOST+"/api/auth/login";
    const datos = {email,password}
      const response = await axios.post(URL,datos );
      setUser(response.data);
    } catch (error) {
      alert("Usuario o Contraseña incorrectos")
    }
  };

  //REGISTER
  const register = async (email, password) => {
    try {
    const URL = HOST+"/api/auth/register";
    const datos = {email,password}
      const response = await axios.post(URL,datos );
      setUser(response.data);
    } catch (error) {
      alert("Usuario ya existe")
    }
  };

  // LOGOUT
  const logout = () => {
    setUser({email:"",token:""});
    setPerfil({email:"",id:""});
  };

  //VALIDAR PERFIL
  const obtenerPerfil = async () => {
    try{
    const URL = HOST+"/api/auth/me";
    const headers = {
      headers : {
        Authorization: `Bearer ${user.token}`
      }
    };
    const response = await axios(URL,headers);
    setPerfil(response.data);
  }catch(error){
    alert("Error al validar el usuario");
  }
  }

  return (
    <UserContext.Provider value={{ user, logout, login, register, obtenerPerfil, perfil}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
