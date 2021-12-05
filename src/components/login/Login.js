const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault()
    }

    return (
        <div>

            <h1>Login</h1>
            <form onSubmit={handleLogin}>
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