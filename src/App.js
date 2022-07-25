import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
// components
import Navbar from "./components/Navbar";
// pages
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'


function App() {
  const { authIsReady, user } = useContext(AuthContext)

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to='/login' />} />
            <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
            <Route path="/signup" element={user ? <Navigate to='/' /> : <Signup />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
