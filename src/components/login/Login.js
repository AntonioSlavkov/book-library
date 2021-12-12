import {useNavigate} from "react-router-dom";

import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useAuth} from "../../contexts/AuthContext";


const Login = () => {
    const navigate = useNavigate()
    const {login} = useAuth()
    const handleLogin = async (e) => {
        e.preventDefault()
        const {email, password} = Object.fromEntries(new FormData(e.currentTarget))
        try {
            const user = await signInWithEmailAndPassword(getAuth(), email, password)


            let userEmail = user.user.email
            let userAccessToken = user.user.accessToken
            let userUId = user.user.uid

            let userData = {
                uid: userUId,
                email: userEmail,
                accessToken: userAccessToken
            }
            login(userData)

            navigate('/home')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>

            <h1>Login</h1>
            <form method="POST" onSubmit={handleLogin}>
                <label>Email</label>
                <input name="email" type="email" placeholder="Email"/>

                <label>Password</label>
                <input name="password" type="password" placeholder="Password"/>

                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default Login