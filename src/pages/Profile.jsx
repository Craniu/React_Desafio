import { useContext } from "react"
import { UserContext } from "../contexts/userContext";

const Profile = () => {

  const {logout} = useContext(UserContext);

  return (
    <>
    <div className="containerCol">
    <div>Profile</div>
        <p>MiCorreo@servidor.cl</p>
        <button onClick={()=>logout()}>Cerrar Sesion</button>
    </div>
    </>
  )
}

export default Profile