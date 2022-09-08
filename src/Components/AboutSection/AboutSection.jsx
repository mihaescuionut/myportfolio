import React from "react";
import myimg from "../../assets/myphoto.jpg";


export default () => {
  return (
    <section id="about_me" className="min-h-screen bg-bgSection mt-10 p-4 shadow-xl shadow-shadowColor md:p-16 md:m-8">
      <div className="flex flex-col items-center gap-16 w-full">
        <div className="relative w-full">
          <div className="w-full space-y-16 items-start relative">
            <div className=" text-left md:w-3/4 items-center flex justify-center w-full">
              <h1 className=" text-2xl md:text-5xl font-bold text-lightBlack tracking-widest">
                I AM FRONT-END DEVELOPER
              </h1>
            </div>

            <div className="space-y-2 w-full text-lightBlack">
              <p className="text-md md:text-3xl indent-10 w-full md:w-3/4">
                Motivation and the desire for continuous development are one of
                the keys to success. Always a team player, based on strong
                communication and with the will to improve his skills.
              </p>
              <p className="text-md md:text-3xl indent-10">
                My interests are in front-end engineering, and I love developing
                new user-facing features, determining the structure and design
                of web pages, building reusable codes, optimizing page loading
                times, and using a variety of markup languages to create the web
                pages.
              </p>
            </div>

            <div className="hidden w-1/5 h-52 -top-16 right-8 items-center justify-center md:-top-24 md:flex md:absolute rectangle">
              <div className="">
                <img
                  src={myimg}
                  alt=""
                  className="myimg max-h-44 absolute top-4 left-5"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col space-y-4">
          <div className="flex flex-col justify-center items-center w-full">
            <p className="w-1/2 text-left font-bold text-xl">HTML</p>
            <div className="w-1/2 bg-lightBlack rounded-full">
              <div className="bg-myGreen text-xs font-medium text-blue-100 text-center p-2 rounded-full w-[99%]">
                99%
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full">
            <p className="w-1/2 text-left font-bold text-xl">CSS</p>
            <div className="w-1/2 bg-lightBlack rounded-full">
              <div className="bg-myGreen text-xs font-medium text-blue-100 text-center p-2 rounded-full w-[85%]">
                85%
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full">
            <p className="w-1/2 text-left font-bold text-xl">JAVASCRIPT</p>
            <div className="w-1/2 bg-lightBlack rounded-full">
              <div className="bg-myGreen text-xs font-medium text-blue-100 text-center p-2 rounded-full w-[90%]">
                90%
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 w-full md:flex-row md:gap-16">
          <button className="bg-lightBlack p-4 rounded-md font-bold shadow-md shadow-lightBlack text-white hover:-translate-y-1.5 transition-all duration-300 w-1/2 lg:w-1/5">
            MY RESUME
          </button>
          <button className="bg-myGreen p-4 rounded-md font-bold shadow-md shadow-lightBlack text-white hover:-translate-y-1.5 transition-all duration-300 w-1/2 lg:w-1/5">
            PORTFOLIO
          </button>
        </div>

        <div className="flex flex-col justify-center items-center w-full p-10 gap-16">

                <h1 className="text-lightBlack font-extrabold text-5xl text-center">MY LATEST WORK</h1>


                <div className="w-full relative lg:w-2/3">

                    <div className="grid grid-cols-1 justify-center items-stretch text-center gap-4 font-extrabold w-full md:grid-cols-2 lg:grid-cols-3">

                        <div className="p-16 rounded-lg text-white bg-myPink flex items-center justify-center">DEVELOPING</div>
                        <div className="p-16 rounded-lg text-white bg-myGreen flex items-center justify-center">DESIGN</div>
                        <div className="p-16 rounded-lg text-white bg-myBlue flex items-center justify-center">WEB</div>
                        <div className="hidden p-16 rounded-lg text-white bg-myPurple md:flex items-center justify-center">TOOLS</div>
                        <div className="hidden p-16 rounded-lg text-white bg-darkGreen md:flex items-center justify-center">INTERACTIVE</div>
                        <div className="hidden p-16 rounded-lg text-white bg-myOrange  md:flex items-center justify-center">STUDIO</div>

                    </div>

                    <div class="hidden md:absolute z-30 md:flex space-x-3 -bottom-10 left-[48%]">
                        <button type="button" className="w-3 h-3 rounded-full bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full bg-gray-800/50 hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="w-3 h-3 rounded-full bg-gray-800/50 hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    </div>


                    <button type="button" className="hidden absolute top-0 left-0 z-30 md:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-800/30 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        </span>
                    </button>

                    <button type="button" className="hidden absolute top-0 right-0 z-30 md:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </span>
                    </button>

                </div>
               



        </div>
      </div>
    </section>
  );
};
