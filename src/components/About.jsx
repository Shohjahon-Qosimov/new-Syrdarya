import React from "react";
import { FaUsers } from "react-icons/fa6";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { BsFillHouseCheckFill } from "react-icons/bs";
import { FaPlaneCircleCheck } from "react-icons/fa6";

const About = () => {
  //   let about = document.getElementById("about");

  //   window.onscroll = () => {
  //     about.forEach((ab) => {
  //       let top = window.scrollY;
  //       let offset = ab.offsetTop - 150;
  //       let height = ab.offsetHeight;

  //       if (top >= offset && top < offset + height) {
  //         ab.classList.add("show-animate");
  //       } else {
  //         ab.classList.remove("show-animate");
  //       }
  //     });
  //   };

  return (
    <div id="about" className="px-4 lg:px-14 max-w-screen-2x1 mx-auto  py-16 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
        <div className="md:w-1/2">
          <h2 className="text-[25px] text-neutralDGray font-semibold mb-4 md:w-2/3">
            Xalq murojaatlarini qabul qilish va ularni tegishli davlat
            tashkilotlariga yuborish
          </h2>
          <p className="text-brandPrimary font-bold">
            Bizning xizmatimizdan foydalanish statistikasi
          </p>
        </div>

        <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <FaUsers
                style={{ color: "green", width: "40px", height: "40px" }}
              />
              <div>
                <h4 className="text-2x1 text-neutralDGray font-semibold">
                  2,368
                </h4>
                <p>Foydalanuvchilar</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <VscGitPullRequestGoToChanges
                style={{ color: "green", width: "40px", height: "40px" }}
              />
              <div>
                <h4 className="text-2x1 text-neutralDGray font-semibold">
                  1394
                </h4>
                <p>Murojaatlar</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <BsFillHouseCheckFill
                style={{ color: "green", width: "40px", height: "40px" }}
              />
              <div>
                <h4 className="text-2x1 text-neutralDGray font-semibold">
                  853
                </h4>
                <p>Mahalliy fuqorolar tomonidan</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPlaneCircleCheck
                style={{ color: "green", width: "40px", height: "40px" }}
              />
              <div>
                <h4 className="text-2x1 text-neutralDGray font-semibold">
                  387
                </h4>
                <p>Xorijiy muhojirlar tomonidan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
