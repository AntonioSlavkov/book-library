import React, {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";


export const AuthContext = React.createContext()

//TODO implement AuthContext
//TODO refactor the AuthProvider
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged()
    }, [])

    return (
        <AuthContext.Provider value={{currentUser}}>{children}</AuthContext.Provider>
    )
}