import { Link, useNavigate } from "react-router-dom";
import { BiUser, BiLock } from "react-icons/bi";
import { useSelector } from "react-redux";

import Spinner from "../components/Spinner";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const { setCurrentUser, submitLogin } = useContext(LoginContext);
  const { currentUser } = useContext(LoginContext);

  const { isLoading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  return (
    <>
      <div className="reg-container">
        <div className="reg-box">
          {isLoading && <Spinner />}

          <form onSubmit={submitLogin}>
            <h1 className="">Kirish</h1>
            <div className="input-box">
              <BiUser
                style={{
                  position: "absolute",
                  top: "13px",
                  right: 0,
                  color: "#4CAF4F",
                }}
              />
              <input
                type="text"
                placeholder="username"
                name="username"
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
                placeholder="password"
                name="password"
                required
              />
            </div>

            <button
              className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray reg-btn"
              type="submit"
            >
              Login
            </button>
            <div className="group">
              <span>
                <a href="/register">Register</a>
              </span>
            </div>
          </form>
          {/* <div className="flex justify-center gap-[180px] mt-4 forgot">
            <Link to="/reset-password" style={{ color: "black" }}>
              Parolni unutdingizmi?
            </Link>
            <Link to="/register" style={{ color: "black" }}>
              Ro'yhatdan o'tish
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
