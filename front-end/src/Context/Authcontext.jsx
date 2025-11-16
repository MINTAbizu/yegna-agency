import { createContext, useContext, useState } from "react"
import { authservices } from "../Servies/Api"



const Authcontext=createContext(null)

export const Authprovider=({children})=>{

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const register= async (userdata)=>{

        try {
            const response=await authservices.register(userdata)
            return response
            
        } catch (error) {
             console.error("Register error:", error.message);
            throw(error)
            
        }

    }
    // const login= async  (Credential)=>{
    //     try {
    //         const  response= await authservices.login(Credential)
    //          return response
    //     } catch (error) {
            
    //     }
    // }
const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
    const value={
        register,
        login,
user    }


    return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>
}

export const useAuth = () => {
  const context = useContext(Authcontext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 