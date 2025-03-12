import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/userContext";

const Profile = () => {

  const {logout, perfil, obtenerPerfil} = useContext(UserContext);

  useEffect(()=>{
    obtenerPerfil();
  },[])

  return (
    <>
    <div className="containerCol">
    <div>Profile {perfil.id}</div>
        <p>{perfil.email}</p>
        <button onClick={()=>logout()}>Cerrar Sesion</button>
    </div>
    </>
  )
}

export default Profile