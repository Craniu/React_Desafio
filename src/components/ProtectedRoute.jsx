import React, { useContext} from "react";
import { UserContext } from "../contexts/userContext";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user.token) {
    return <Navigate to="/login" replace />
  } else {
    return <div>{children}</div>;
  }
};

export default ProtectedRoute;
