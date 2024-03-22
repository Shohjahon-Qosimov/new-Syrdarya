import React, { useEffect, useState } from "react";
import logo from "../assets/logo1.png";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "https://sirdaryoapi.pythonanywhere.com",
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { currentUser } = useContext(LoginContext);
  const { setCurrentUser } = useContext(LoginContext);
  const { setAuthTokens } = useContext(LoginContext);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const submitLogout = () => {
    // setCurrentUser(null);
    // setAuthTokens(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const isRegister = () => {
    if (currentUser) {
      navigate("/murojat");
    } else {
      navigate("/register");
    }
  };

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 ">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-transparent duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-1/3" />
          </NavLink>
          <ul className="md:flex space-x-12 hidden">
            <NavLink
              className="block text-base text-gray-900 hover:text-brandPrimary first:font-bold"
              to="/"
            >
              Bosh<span className="text-white text-[8px]">.</span>sahifa
            </NavLink>

            <a
              className="block text-base text-gray-900 hover:text-brandPrimary font-semibold"
              href="#contact"
            >
              Bog'lanish
            </a>

            <a
              className="block text-base text-gray-900 hover:text-brandPrimary font-semibold"
              href="#stats"
            >
              Haqida
            </a>

            <a
              onClick={isRegister}
              className="block text-base text-gray-900 hover:text-brandPrimary font-semibold"
              href=""
            >
              Murojaat
            </a>
          </ul>
          {currentUser ? (
            <>
              <NavLink
                to="/dashbord"
                className="bg-neutralDGray text-white py-2 px-4 transition-all duration-300 rounded hover:bg-brandPrimary hide"
              >
                Dashbord
              </NavLink>
              <form onClick={submitLogout}>
                <button
                  type="submit"
                  variant="light"
                  className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray hide"
                >
                  Logout
                </button>
              </form>
            </>
          ) : (
            <div className="space-x-12 hidden lg:flex items-center">
              <NavLink
                className="hidden font-semibold lg:flex items-center text-brandPrimary hover:text-gray-900"
                to="/login"
              >
                Login
              </NavLink>
              <NavLink to="/register">
                <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray">
                  Register
                </button>
              </NavLink>
            </div>
          )}

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGray focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaWindowClose className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
          <div
            className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
              isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
            }`}
          >
            <a
              className="block text-base text-gray-900 hover:text-black first:font-medium"
              href="/"
            >
              Bosh sahifa
            </a>

            <a
              className="block text-base text-gray-900 hover:text-black first:font-medium"
              href="#contact"
            >
              Bog'lanish
            </a>

            <a
              className="block text-base text-gray-900 hover:text-black first:font-medium"
              href="#stats"
            >
              Tizim Haqida
            </a>

            <a
              onClick={isRegister}
              className="block text-base text-gray-900 hover:text-black first:font-medium"
              href=""
            >
              Murojaat
            </a>
            {currentUser ? (
              <form onClick={submitLogout}>
                <button
                  variant="light"
                  className="bg-neutralGray text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray "
                >
                  Logout
                </button>
              </form>
            ) : (
              <div className="flex justify-start gap-3">
                <a href="/login">
                  <button className="bg-neutralGray text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray ">
                    Login
                  </button>
                </a>
                <a href="/register">
                  <button className="bg-neutralGray text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray">
                    Register
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
