import React, { useEffect, useState } from "react";
import logo from "../assets/logo1.png";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "https://sirdaryoapi.pythonanywhere.com",
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    client
      .get("/api/user")
      .then(function (res) {
        setCurrentUser(true);
      })
      .catch(function (error) {
        setCurrentUser(false);
      });
  }, []);

  function submitLogout(e) {
    e.preventDefault();
    client.post("/api/logout", { withCredentials: true }).then(function (res) {
      setCurrentUser(false);
    });
  }

  // function update_form_btn() {
  //   if (registrationToggle) {
  //     document.getElementById("form_btn").innerHTML = "Register";
  //     setRegistrationToggle(false);
  //   } else {
  //     document.getElementById("form_btn").innerHTML = "Log in";
  //     setRegistrationToggle(true);
  //   }
  // }

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

  //   const navItems = [
  //     { link: "Bosh sahifa", path: "home" },
  //     { link: "Xizmatlar", path: "service" },
  //     { link: "Tizim Haqida", path: "about" },
  //     { link: "Murojaatlar", path: "murojat" },
  //   ];

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

            <NavLink
              className="block text-base text-gray-900 hover:text-brandPrimary font-semibold"
              to="#hero"
            >
              Xizmatlar
            </NavLink>

            <a
              className="block text-base text-gray-900 hover:text-brandPrimary font-semibold"
              href="#stats"
            >
              Haqida
            </a>

            <a
              className="block text-base text-gray-900 hover:text-brandPrimary font-semibold"
              href="/murojat"
            >
              Murojaatlar
            </a>
          </ul>

          {currentUser ? (
            <form onSubmit={(e) => submitLogout(e)}>
              <button type="submit" variant="light">
                Log out
              </button>
            </form>
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
              href="#hero"
            >
              Xizmatlar
            </a>

            <a
              className="block text-base text-gray-900 hover:text-black first:font-medium"
              href="#stats"
            >
              Tizim Haqida
            </a>

            <a
              className="block text-base text-gray-900 hover:text-black first:font-medium"
              href="/murojat"
            >
              Murojaatlar
            </a>
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
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
