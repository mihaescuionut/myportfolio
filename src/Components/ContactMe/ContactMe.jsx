import React from "react";
import logo from "../../assets/logoAlex.png";
import mail from "../../assets/iconmail.svg";
import phone from "../../assets/iconphone.svg";
import location from "../../assets/iconlocation.svg";
import { FaFacebook, FaSkype, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default () => {
  return (
    <section className="min-h-screen bg-bgSection mt-10 p-12 shadow-xl shadow-shadowColor m-8">
      <div>
        <div className="flex justify-between items-center">
          <div className="text-lightBlack text-6xl font-extrabold">
            LET'S GET IN TOUCH
          </div>
          <img src={logo} alt="" />
        </div>

        <div className="flex flex-col-reverse justify-center items-center gap-16 w-full p-10 lg:gap-4 lg:grid lg:grid-cols-2">
          <div className="flex flex-col items-center w-full gap-16 lg:items-start">
            <div className="text-myGreen font-extrabold text-4xl">
              CONTACT ME
            </div>

            <div className="flex flex-col justify-stretch gap-16">
              <div className="flex flex-row justify-start items-center gap-8">
                <img src={mail} alt="" />
                <p className="text-lightBlack text-lg lg:text-xl">
                  ionut.mihaescu10@gmail.com
                </p>
              </div>

              <div className="flex flex-row items-center justify-start gap-8 w-3/4">
                <img src={phone} alt="" />
                <p className="text-lightBlack text-lg lg:text-xl">
                  +40 766 759 215
                </p>
              </div>

              <div className="flex flex-row items-center justify-start gap-8 w-3/4">
                <img src={location} alt="" />
                <p className="text-lightBlack text-lg lg:text-xl">
                  Bucharest, Romania
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-start gap-16 lg:mt-16 lg:w-2/3">
              <FaFacebook className="bg-myGreen text-white p-1 rounded-full text-[50px] cursor-pointer "></FaFacebook>
              <FaSkype className="bg-myGreen text-white p-1.5 rounded-full text-5xl cursor-pointer"></FaSkype>
              <FaLinkedinIn className="bg-myGreen text-white p-2 rounded-full text-5xl cursor-pointer"></FaLinkedinIn>
              <FaInstagram className="bg-myGreen text-white p-2 rounded-full text-5xl cursor-pointer"></FaInstagram>
            </div>
          </div>

          <div className="rectangle flex flex-col items-start">
            <div className="flex flex-col items-stretch gap-8 p-16 md:w-full xl:w-4/5">
              <input
                type="text"
                className="bg-white text-lightBlack rounded-lg border-none shadow-lightBlack shadow-md p-8"
                placeholder="E-mail"
              />
              <input
                type="text"
                className="bg-white text-lightBlack rounded-lg border-none shadow-lightBlack shadow-md p-8"
                placeholder="Name"
              />
              <textarea
                type="text"
                className="bg-white text-lightBlack rounded-lg border-none shadow-lightBlack shadow-md p-8 lg:h-[10rem]"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
