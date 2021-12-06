
import {getAuth, signOut} from "firebase/auth";

const Home = () => {

    const handleLogout = async () => {
        await signOut(getAuth())
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