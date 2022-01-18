import Navbar from "./components/Navbar/Navbar";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";


function App() {


  const isAuth = useSelector(state => state.user.isAuth)

  return (
    <BrowserRouter>

      <Navbar />

      {!isAuth && <Routes>
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>}


    </BrowserRouter>
  );
}

export default App;
