import Navbar from "./components/Navbar/Navbar";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./actions/user";


function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(auth())
    }
  }, [])

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
