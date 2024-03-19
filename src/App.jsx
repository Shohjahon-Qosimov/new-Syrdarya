import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import tech3 from "./assets/tech3.jpg";
import MyFooter from "./components/MyFooter";
import Murojaat from "./pages/Murojaat";

function App() {
  return (
    <>
      <Router>
        <img src={tech3} alt="" className="background" />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/murojat" element={<Murojaat />} />
        </Routes>
        <MyFooter />
      </Router>
    </>
  );
}

export default App;
