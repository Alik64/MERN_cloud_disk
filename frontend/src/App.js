import Navbar from "./components/Navbar/Navbar";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from "./components/Registration/Registration";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/signup" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
