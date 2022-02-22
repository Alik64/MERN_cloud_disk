import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./actions/user";
import Disk from "./components/Disk/Disk";
import Profile from "./components/Profile/Profile";
import { setUser } from "./redux/userReducer";




function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const currentUser = useSelector(state => state.user.currentUser)


  const dispatch = useDispatch()


  useEffect(() => {

    if (localStorage.getItem('token')) {
      dispatch(auth())
      console.log(currentUser)
    }

  }, [])

  return (
    <BrowserRouter>

      <Navbar />
      <div className="wrapper">

        {
          !isAuth ?
            <Routes>
              <Route path="/signup" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="*"
                element={<Navigate to="/login" />}
              />
            </Routes>
            :
            <Routes>
              <Route path="/" element={<Disk />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="*"
                element={<Navigate to="/" />}
              />
            </Routes>
        }

      </div>
    </BrowserRouter>
  );
}

export default App;
