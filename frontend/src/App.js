import Navbar from "./components/Navbar/Navbar";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./actions/user";
import { toggleIsFetching } from "./redux/userReducer";
import Preloader from "./components/Preloader/Preloader";



function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const isFetching = useSelector(state => state.user.isFetching)

  const dispatch = useDispatch()


  useEffect(() => {

    if (localStorage.getItem('token')) {
      dispatch(auth())
    }

  }, [])

  return (
    <BrowserRouter>

      <Navbar />

      {
        !isAuth && <Routes>
          <Route path="/signup" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>}


    </BrowserRouter>
  );
}

export default App;
