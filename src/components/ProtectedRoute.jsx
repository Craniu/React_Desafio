import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/userContext'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const navigate = useNavigate();
    const {token} = useContext(UserContext);


    if(!token){
        navigate("/login")
    }else{
    return(
        <div>{children}</div>
    )}
}

export default ProtectedRoute