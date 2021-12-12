import {Link} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";

const Header = () => {
    const {user} = useAuth()

    let guestNavigation = (
        <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    )

    let userNavigation = (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/library">Library</Link>
            <Link to="/logout">Logout</Link>
        </div>
    )
    return (
        <header>
            <nav>
                {
                    user.email ? userNavigation : guestNavigation
                }
            </nav>
        </header>
    )
}

export default Header