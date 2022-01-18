import Navbar from "./components/Navbar/Navbar";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
