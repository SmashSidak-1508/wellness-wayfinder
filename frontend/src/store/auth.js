import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const storetokeninLS =(serverToken)=>{
        return localStorage.setItem('token',serverToken);

    }
    return (<AuthContext.Provider value ={storetokeninLS}>
        {children}

    </AuthContext.Provider>
    );
};

export const useAuth=()=>{
    const authContextValue = useContext(AuthContext);
    return authContextValue;

}

