import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {const [authData, setAuthData] = useState(null);

    const signIn = async (email, password) => {
        const token = "fake-token";
        const userData = {token, email, senha: password};

        await AsyncStorage.setItem("@AuthData", JSON.stringify(userData));

        setAuthData(userData);
    };

    const signOut = async () => {
        await AsyncStorage.removeItem("@AuthData");
        setAuthData(null);
    };

    return (
        <AuthContext.Provider value={{authData, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);