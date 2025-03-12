import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/userContext';

const UnProtecRoute = ({children}) => {

    const navigate = useNavigate();
    const {token} = useContext(UserContext);

    useEffect(()=>{
        if(token){
            navigate("/")
        }
    });

 if(token){
        navigate("/")
    }else{
    return(
        <div>{children}</div>
    )}
}

export default UnProtecRoute