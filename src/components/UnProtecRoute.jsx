import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

const UnProtecRoute = ({ children }) => {

  const { user } = useContext(UserContext);

  if (user.token) {
    return <Navigate to="/" replace />
  } else {
    return <div>{children}</div>;
  }
};

export default UnProtecRoute;
