import React, {useContext, useEffect, useState} from "react";
import useLocalStorage from "../hooks/useLocalStorage";


export const AuthContext = React.createContext()

const initialAuthState = {
    uid: '',
    email: '',
    accessToken: ''
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useLocalStorage('user', initialAuthState)

    const login = (authData) => {
        setUser(authData)
    }

    const logout = () => {
        setUser(initialAuthState)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    const authState = useContext(AuthContext)

    return authState
}