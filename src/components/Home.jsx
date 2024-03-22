import React from "react";
import { Carousel } from "flowbite-react";
import check from "../assets/check.svg";
import humans from "../assets/humans.svg";
import humans1 from "../assets/humans1.png";
import gerb1 from "../assets/gerb1.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Home = () => {
  const { currentUser } = useContext(LoginContext);

  const navigate = useNavigate();

  const isRegister = () => {
    if (currentUser) {
      navigate("/murojat");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className={``}>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h- h-screen">
        <div className="flex justify-center items-center mt-[120px] bottom-0 font-bold text-[25px]">
          <img src={gerb1} alt="gerb" className="w-[100px]" />
          <h1>Sirdaryo viloyati Murojaatlar Portali</h1>
        </div>
        <div className="flex justify-center items-start">
          <button
            onClick={isRegister}
            className=" bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray"
          >
            Murojaat Yuborish
          </button>
        </div>
        <Carousel className="w-full mx-auto sm:top-0">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={humans} className="" alt="humans" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-[15px] md:text-[30px] font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Sizning murojaatingiz tegishliligi bo'yicha quyidagi{" "}
                <span className="text-brandPrimary leading-snug">
                  tashkilotlarning mas'ul ijrochilari
                </span>{" "}
                tomonidan nazoratga olinadi va ko'rib chiqiladi:
              </h1>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <ul className=" text-[18px] ">
              <li className="flex items-center mb-2">
                <img src={check} alt="check" />
                <h1>Viloyat va 19 ta shahar-tuman hokimliklari</h1>
              </li>
              <li className="flex items-center mb-2">
                <img src={check} alt="check" />
                {"  "}
                90 viloyat boshqarma, korxona va tashkilotlar
              </li>
              <li className="flex items-center mb-2">
                <img src={check} alt="check" />
                300 ta mas'ul tashkilotlarning shahar-tuman bo'linmalari
              </li>
              <li className="flex items-center">
                <img src={check} alt="check" />
                1062 MFY
              </li>
            </ul>
            <div>
              <img src={humans1} className="" alt="humans" />
            </div>
          </div>
          {/* <div className="flex h-full items-center justify-center">Slide 3</div> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
