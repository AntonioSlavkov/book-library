import {useNavigate} from "react-router-dom";

import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";

const Register = () => {
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        console.log(e)
        const {email, password} = Object.fromEntries(new FormData(e.currentTarget))
        try {
            const user = await createUserWithEmailAndPassword(getAuth(), email, password)
            console.log(user)
            navigate('/home')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form method="POST" onSubmit={handleRegister}>
                <label>Email</label>
                <input name="email" type="email" placeholder="Email"/>

                <label>Password</label>
                <input name="password" type="password" placeholder="Password"/>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register