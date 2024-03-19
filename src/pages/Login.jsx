import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { login, reset, getUserInfo } from "../auth/authSlice";
import { toast } from "react-toastify";
import axios, { Axios } from "axios";
import Spinner from "../components/Spinner";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "https://sirdaryoapi.pythonanywhere.com",
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitLogin(e) {
    e.preventDefault();
    client
      .post("/api/login", {
        email: email,
        password: password,
      })
      .then(function (res) {
        setCurrentUser(true);
      });
  }
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const { email, password } = formData;

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // const handleChange = (e) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const userData = {
  //     email,
  //     password,
  //   };
  //   dispatch(login(userData));
  // };

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //   }

  //   if (isSuccess || user) {
  //     navigate("/dashboard");
  //   }

  //   dispatch(reset());
  //   dispatch(getUserInfo());
  // }, [isError, isSuccess, user, navigate, dispatch]);

  return (
    <>
      <div className="container auth__container">
        <h1 className="main__title">
          Kirish <BiLogInCircle />
        </h1>

        {isLoading && <Spinner />}

        <form className="auth__form" onSubmit={(e) => submitLogin(e)}>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />

          <button
            className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray"
            type="submit"
            // onClick={() => navigate("/")}
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
