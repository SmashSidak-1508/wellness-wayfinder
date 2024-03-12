import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const[token,setToken] = useState(localStorage.getItem("token"));


    const storetokeninLS =(serverToken)=>{
        setToken(serverToken);
        return localStorage.setItem('token',serverToken);

    }
    let isLoggedIn = !!token;
    console.log('isloggedin',isLoggedIn);
    //logout
    const LogoutUser =()=>{
        setToken("");
        return localStorage.removeItem("token")

    }
    return (<AuthContext.Provider value ={{isLoggedIn,storetokeninLS,LogoutUser}}>
        {children}

    </AuthContext.Provider>
    );
};

export const useAuth=()=>{
    const authContextValue = useContext(AuthContext);
    return authContextValue;

}

