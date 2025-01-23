import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";


const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevLocation) {
      setPrevLocation(location.pathname);
    }
  }, [location.pathname, prevLocation]);

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (location.pathname === prevLocation) {
    return children;
  }

  console.log('protectedRoute Rendered')
  return children;
};

ProtectedRoute.propTypes = {
    children:PropTypes.node.isRequired
}

export default ProtectedRoute