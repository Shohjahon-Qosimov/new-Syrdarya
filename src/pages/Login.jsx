import { Link, useNavigate } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
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
      <div className="container auth__container">
        <h1 className="main__title">
          Kirish <BiLogInCircle />
        </h1>

        {isLoading && <Spinner />}

        <form className="auth__form" onSubmit={submitLogin}>
          <input type="text" placeholder="username" name="username" required />
          <input
            type="password"
            placeholder="password"
            name="password"
            required
          />

          <button
            className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center gap-[180px] mt-4 forgot">
          <Link to="/reset-password" style={{ color: "black" }}>
            Parolni unutdingizmi?
          </Link>
          <Link to="/register" style={{ color: "black" }}>
            Ro'yhatdan o'tish
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
