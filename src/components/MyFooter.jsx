import React from "react";
import whitelogo from "../assets/whitelogo.png";

import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsPhone,
  BsHouse,
  BsMailbox,
} from "react-icons/bs";

const MyFooter = () => {
  return (
    <footer className="bg-[#45526e] text-[#fff] text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
        <div className="me-12 hidden lg:block">
          <span>Ijtimoiy tarmoqlarimiz:</span>
        </div>

        <div className="flex justify-center">
          <a
            href="https://www.facebook.com/shohjahon.qosimov.50?mibextid=kFxxJD"
            className="me-5 "
          >
            <BsFacebook />
          </a>
          <a href="https://instagram.com/shohjahon6610" className="me-5 ">
            <BsInstagram />
          </a>
          <a href="https://twitter.com/ShohjahonQ40296" className="me-5">
            <BsTwitter />
          </a>
          <a href="https://github.com/Shohjahon-Qosimov" className="me-5">
            <BsGithub />
          </a>
          <a href="#!" className="me-5">
            <BsDribbble />
          </a>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left flex justify-between ">
        <div className="grid-1 grid gap-8 sm:gap-[100px] md:grid-cols-2 lg:grid-cols-2 text-[13px] sm:text-[15px]">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <span
                style={{ color: "white" }}
                className="flex justify-center md:justify-start"
              >
                <img src={whitelogo} className="w-1/3"></img>
              </span>
            </h6>
            <p>Sizning murojaatlaringiz biz uchun juda muhim!</p>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Bog'lanish
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <BsHouse />
              </span>
              Guliston sh. Mustaqillik ko'chasi, 1-uy
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <BsMailbox />
              </span>
              shohjahonqosimov155@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <BsPhone />
              </span>
              +998(90)-107-51-05
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black/5 p-6 text-center">
        <span>© 2024 Copyright: </span>
        <a className="font-semibold" href="https://tw-elements.com/">
          my-Syrdarya.uz
        </a>
      </div>
    </footer>
  );
};

export default MyFooter;
