import React from "react";
import logo from "../assets/logo1.png";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";

const MyFooter = () => {
  return (
    <Footer container className="bg-blue-300">
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 ">
          <div className="space-y-4 mb-8">
            <NavLink to="/">
              <img src={logo} alt="logo" className="w-1/5" />
            </NavLink>
            <div className="mb-1">
              <h1>Sirdaryo Murojaatlar Portali | 2024 - *</h1>
              <p>Barcha huquqlar himoyalangan.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            {/* <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div> */}
            <div>
              <Footer.Title title="Bog'lanish" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Tel: (+998) 90-107-51-05</Footer.Link>
                <Footer.Link href="#">Email: abs@gmail.com</Footer.Link>
                {/* <Footer.Link href="#">Manzil: Sirdaryo viloyati </Footer.Link> */}
              </Footer.LinkGroup>
            </div>
            {/* <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div> */}
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Sirdaryo viloyati hokimligi
Elektron hokimiyatni rivojlantirish markazi"
            year={2024}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
