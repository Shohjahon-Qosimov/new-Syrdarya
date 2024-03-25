import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import tech3 from "./assets/tech3.jpg";
import MyFooter from "./components/MyFooter";
import Murojaat from "./pages/Murojaat";
import { LoginContext } from "./context/LoginContext";
import { useEffect } from "react";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import Dashbord from "./pages/Dashbord";
import { toast } from "react-toastify";

function App() {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [currentUser, setCurrentUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );

  const navigate = useNavigate();

  let submitLogin = async (e) => {
    e.preventDefault();
    let response = await fetch(
      "https://sirdaryoapi.pythonanywhere.com/api/token/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
        }),
      }
    );

    let resData = await response.json();
    if (response.status === 200) {
      setCurrentUser(jwtDecode(resData.access));
      setAuthTokens(resData);
      localStorage.setItem("authTokens", JSON.stringify(resData));
      toast.success("Jarayon muvafaqqiyatli tugallandi!");

      // const accessData = resData.access;
      // localStorage.setItem("accessData", accessData);
      navigate("/murojat");
    } else {
      toast.error("Email yoki login xato!");
    }
  };

  let contextData = {
    submitLogin: submitLogin,
    currentUser: currentUser,
  };

  return (
    <>
      {/* <Router> */}
      <LoginContext.Provider value={contextData}>
        <img src={tech3} alt="" className="background" />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/murojat" element={<Murojaat />} />
          <Route path="/dashbord" element={<Dashbord />} />
        </Routes>
        <MyFooter />
        <ToastContainer style={{ zIndex: "11000" }} />
      </LoginContext.Provider>
      {/* </Router> */}
    </>
  );
}

export default App;
