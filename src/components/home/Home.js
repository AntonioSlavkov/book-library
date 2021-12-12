import {getAuth, signOut} from "firebase/auth";
import {useAuth} from "../../contexts/AuthContext";

const Home = () => {
    const {logout} = useAuth()
    const handleLogout = async () => {
        await signOut(getAuth())
        logout()
        console.log("user logged out")
    }

    return (
        <div>
            <h1>This is home page</h1>
            <button onClick={handleLogout}>Sign Out</button>
        </div>
    )
}

export default Home