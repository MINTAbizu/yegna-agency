import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user on app start
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    axios
      .get("http://localhost:5000/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Register
  const register = async (data) => {
    const res = await axios.post(
      "http://localhost:5000/api/users/register",
      data
    );

    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);

    return res;
  };

  // Login
  const login = async (data) => {
    const res = await axios.post(
      "http://localhost:5000/api/users/login",
      data
    );

    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);

    return res;
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  // Authcontext.jsx
const refreshUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const res = await axios.get("http://localhost:5000/api/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUser(res.data);
  } catch (err) {
    console.error(err);
    setUser(null);
  }
};


  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout,refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
