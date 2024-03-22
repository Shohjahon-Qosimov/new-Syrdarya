import React from "react";
import Home from "../components/Home";
import Sponsor from "../components/Sponsor";
import About from "../components/About";

const HomePage = () => {
  let sections = document.querySelectorAll("section");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;

      if (top >= offset && top < offset + height) {
        sec.classList.add("show-animate");
      } else {
        sec.classList.remove("show-animate");
      }
    });
  };
  return (
    <div>
      <section id="hero">
        <Home />
      </section>
      <section id="stats" className="mt-[140px] ">
        <About />
      </section>
      <section id="contact">
        <Sponsor />
      </section>
    </div>
  );
};

export default HomePage;
