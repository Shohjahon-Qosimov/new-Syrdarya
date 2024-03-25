import { useState } from "react";
import { toast } from "react-toastify";
import { BiUser, BiLock, BiMailSend } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Register = () => {
  const { setCurrentUser } = useContext(LoginContext);
  const { currentUser } = useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [password2, setPassword2] = useState("");

  let submitRegistration = async (e) => {
    e.preventDefault();
    let response = await fetch(
      "https://sirdaryoapi.pythonanywhere.com/api/register/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
        }),
      }
    );
    let resData = await response.json();
    console.log(resData);
    if (response.status === 201) {
      localStorage.setItem("emailData", resData.email);
      toast.success("Muvafaqqiyatli ro'yhatdan o'tdingiz!");
      navigate("/login");
    } else {
      toast.error("Nimadir xato ketdi!");
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="reg-container">
        <div className="reg-box">
          <form onSubmit={(e) => submitRegistration(e)} className="">
            <h1 className="">Ro'yhatdan o'tish</h1>
            <div className="input-box">
              <BiUser
                className="icon"
                style={{
                  position: "absolute",
                  top: "13px",
                  right: 0,
                  color: "#4CAF4F",
                }}
              />
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
              <BiMailSend
                style={{
                  position: "absolute",
                  top: "13px",
                  right: 0,
                  color: "#4CAF4F",
                }}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <BiLock
                style={{
                  position: "absolute",
                  top: "13px",
                  right: 0,
                  color: "#4CAF4F",
                }}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* <input
            type="password"
            placeholder="Retype Password"
            name="password2"
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
            required
          /> */}

            <button
              className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray reg-btn"
              type="submit"
              // onClick={handleSubmit}
              // onClick={() => navigate("/login")}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
