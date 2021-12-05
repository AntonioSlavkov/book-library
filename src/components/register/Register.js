const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
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