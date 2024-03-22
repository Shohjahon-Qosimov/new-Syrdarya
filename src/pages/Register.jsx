import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BiUser } from "react-icons/bi";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios, { Axios } from "axios";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { jwtDecode } from "jwt-decode";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "https://sirdaryoapi.pythonanywhere.com",
});

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
      "http://sirdaryoapi.pythonanywhere.com/api/register/",
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

  // function submitRegistration(e) {
  //   e.preventDefault();
  //   client
  //     .post("/api/register", {
  //       email: email,
  //       username: username,
  //       password: password,
  //       // password2: password2,
  //     })
  //     .then(function (res) {
  //       client
  //         .post("/api/login", {
  //           email: email,
  //           password: password,
  //         })
  //         .then(function (res) {
  //           console.log(res);
  //           setCurrentUser(jwtDecode(res.access));
  //           // navigate("/login");
  //           toast.success("Muvafaqqiyatli ro'yhatdan o'tdingiz!");
  //         });
  //     });
  // }
  // const [formData, setFormData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   password2: "",
  // });

  // const { username, email, password, password2 } = formData;

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.auth);

  // const handleChange = (e) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (password !== password2) {
  //     toast.error("Passwords do not match");
  //   } else {
  //     const userData = {
  //       username,
  //       email,
  //       password,
  //       password2,
  //     };
  //     dispatch(register(userData));
  //   }
  // };

  return (
    <>
      <div className="container auth__container">
        <h1 className="main__title">
          Ro'yhatdan o'tish <BiUser />{" "}
        </h1>

        {currentUser && <Spinner />}

        <form onSubmit={(e) => submitRegistration(e)} className="auth__form">
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          {/* <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            onChange={handleChange}
            value={last_name}
            required
          /> */}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          {/* <input
            type="password"
            placeholder="Retype Password"
            name="password2"
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
            required
          /> */}

          <button
            className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray"
            type="submit"
            // onClick={handleSubmit}
            // onClick={() => navigate("/login")}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
