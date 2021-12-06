import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";


function App() {
    return (

        // <AuthService>

            <div className="App">

                <main>
                    <Routes>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                    </Routes>
                </main>
            </div>
        // </AuthService>

    );
}

export default App;
