import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import {AuthProvider} from "./contexts/AuthContext";
import {InitializeFirebase} from "./firebase-configurations/FirebaseConfig";
import Search from "./components/search/Search";
import Header from "./components/header/Header";


function App() {

    return (

        <AuthProvider>
            <div className="App">

                <Header/>

                <main>
                    <Routes>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/search" element={<Search/>}/>
                    </Routes>
                </main>
            </div>

        </AuthProvider>
    );
}

export default App;
