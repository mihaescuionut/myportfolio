import React from "react";
import rectanglePhoto from "../../assets/rectangleUnderPhoto.svg";
import iconhtml from "../../assets/iconhtml.svg";
import iconcss from "../../assets/iconcss.svg";
import iconjs from "../../assets/iconjs.svg";
import myimg from "../../assets/myphoto.jpg";
import Header from "../Header/Header";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import skype from "../../assets/skype.svg";
import facebook from "../../assets/facebook.svg";


export default () => {
  return (
    <section className="relative hero-section bg-bgSection p-8 shadow-xl shadow-shadowColor m-8">
      <div className="bg-green-400 absolute -top-12 -right-20 rectangleHeader w-48 h-40">
        &nbsp;
      </div>

      <Header></Header>
      
      <div className="flex flex-col justify-center items-stretch mt-20 p-10 w-full lg:flex-row">
        <div className="flex flex-row justify-between mx-auto gap-4 lg:flex-col lg:w-1/2">
          <div className="relative w-full">
            <img src={rectanglePhoto} />
            <img src={myimg} className="absolute top-10 rounded-lg myimg"></img>
          </div>

          <div className="hidden justify-around w-3/4 lg:flex lg:flex-row">
            <img src={iconhtml} alt="" />
            <img src={iconcss} alt="" />
            <img src={iconjs} alt="" />
          </div>
        </div>

        <div className="flex flex-row justify-between items-center w-full gap-8 lg:flex-col lg:w-1/2">
          <div className="flex flex-row flex-wrap gap-8 font-bold w-full md:w-2/3 lg:gap-16 ">
            <div className="space-y-4 w-full">
              <p className="text-myGreen text-3xl lg:text-4xl xl:text-6xl">
                CREATIVE
              </p>
              <p className="text-lightBlack text-4xl lg:text-5xl xl:text-7xl">
                DEVELOPER
              </p>
            </div>
            <div className="lg:space-y-4 lg:w-full">
              <p className="text-myGreen text-xl lg:text-2xl xl:text-4xl">
                PASSIONATE ABOUT
              </p>
              <p className="text-lightBlack text-2xl lg:text-5xl xl:text-7xl">
                FRONT-END
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-lightBlack text-xl lg:text-2xl xl:text-4xl">
                Motivation and the desire for continuous development are one of
                the keys to success.{" "}
              </p>
              <button className="p-4 w-2/3 bg-lightBlack text-white font-bold text-xl rounded-sm shadow-lg shadow-shadowColor hover:-translate-y-1.5 transition-all duration-300">
                CONTACT ME
              </button>
            </div>
        </div>

          <div className="flex flex-col justify-start gap-16 lg:flex lg:flex-row lg:mt-16 lg:w-2/3">
              <img src={facebook}></img>
              <img src={skype}></img>
              <img src={linkedin}></img>
              <img src={instagram}></img>
          </div>
        </div>
      </div>
    </section>
  );
};
