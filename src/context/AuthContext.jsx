import { createContext, useState, useEffect } from "react";
import { authServices } from "../services/auth/authServices";
import Cookies from "js-cookie";
import PropTypes from "prop-types"; // ES6
import toast from "react-hot-toast";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = Cookies.get("token");
      if (token) {
        try {
          const response = await authServices.validateSession();
          if (response.status === 200) {
            setToken(token);
          }
        } catch (err) {
          console.log(err, "token error");
          setLoading(false);
          Cookies.remove("token");
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await authServices.login(credentials);
      if (response.status === 200) {
        Cookies.set("token", response.data.token);
        setToken(response.data.token);
      }
      localStorage.setItem("user", JSON.stringify(response.data.user.id));
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong");
    }
  };

  //   const logout = () => {
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("user");
  //     setUser(null);
  //   };

  return (
    <AuthContext.Provider value={{ token, loading, login }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
export { AuthContext };
