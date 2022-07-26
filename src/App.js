import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
// components
import Navbar from "./components/Navbar";
// pages
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Transactions from "./pages/transactions/Transactions";


function App() {
  const { authIsReady, user } = useContext(AuthContext)

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={user ? <Transactions /> : <Navigate to='/login' />} />
            <Route path="/login" element={user ? <Navigate to='/transactions' /> : <Login />} />
            <Route path="/signup" element={user ? <Navigate to='/transactions' /> : <Signup />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
