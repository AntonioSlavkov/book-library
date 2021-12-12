import { Navigate } from 'react-router-dom';
import {useAuth} from "../contexts/AuthContext";

export const isAuthenticated = (Component) => {

    const WrapperComponent = (props) => {
        const { isAuthenticated, user} = useAuth()

        return isAuthenticated ? <Component {...props} user={user} /> : <Navigate to="/login"/>
    }

    return WrapperComponent
}