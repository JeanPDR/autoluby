import React, {useState, useEffect, createContext} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveeredUser = localStorage.getItem('user');

        if(recoveeredUser) {
            setUser(JSON.parse(recoveeredUser));
        }

        setLoading(false);
    }, []);

    const login = (email, password) => {
    console.log("login auth", {email, password});

    const loggedUser = {
        id: '123',
        email,
    };

    localStorage.setItem("user", JSON.stringify(loggedUser));


    if (password === "admin" && email === "admin@luby.com.br"){
    setUser({loggedUser});
    navigate("/home");
}
   };



   const logout = () => {
       console.log("logout");
       localStorage.removeItem('user');
       setUser(null);
       navigate("/");
   }


   
  
    return (
        <AuthContext.Provider
        
        
        value={{ authenticated: !! user, user,loading, login, logout}}
        
        >

     {children}
        </AuthContext.Provider>
    );
}