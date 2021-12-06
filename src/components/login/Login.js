import {useNavigate} from "react-router-dom";

import {getAuth, signInWithEmailAndPassword} from "firebase/auth";


const Login = () => {
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        const {email, password} = Object.fromEntries(new FormData(e.currentTarget))
        try {
           const user = await signInWithEmailAndPassword(getAuth(), email, password)
            console.log('user logged in', user)
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