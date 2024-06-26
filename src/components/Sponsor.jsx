import React from "react";
import logo2 from "../assets/logo2.png";
import unido from "../assets/unido.svg";
import nearsol from "../assets/nearsol.svg";
import epam from "../assets/epam.svg";

const Sponsor = () => {
  return (
    <div id="contact" className="md:px-14 px-4 py-16 max-w-screen-2x1 mx-auto">
      <div className="text-center my-8">
        <h2 className="text-[25px] text-neutralDGray font-semibold mb-2">
          Bizning Homiylarimiz
        </h2>
        <p className="text-neutralDGray">
          We have been working with some fortune 500+ clients
        </p>

        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img className="w-1/5" src={logo2} alt="itpark" />
          <img className="w-1/6" src={epam} alt="epam" />
          <img className="w-1/4" src={nearsol} alt="nearsol" />
          <img className="w-1/4" src={unido} alt="unido" />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
