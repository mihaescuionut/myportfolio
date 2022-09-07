import React from "react";
import schoolapp1 from '../../assets/schoolapp1.svg';
import schoolapp2 from '../../assets/schoolapp2.svg';
import schoolapp3 from '../../assets/schoolapp3.svg';
import schoolapp4 from '../../assets/schoolapp4.svg';
import rectangle from '../../assets/rectangleporto.svg';
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import skype from "../../assets/skype.svg";
import facebook from "../../assets/facebook.svg";

export default()=>{






    return(

        <div className="min-h-screen relative">

            <div className="grid grid-cols-2 justify-stretch gap-16 items-stretch border-b-[10rem] border-myGreen w-full -z-index-4 px-8 md:grid-cols-4 relative">

                <div className="flex flex-col justify-center items-center gap-8 bg-white p-6 -mb-40 rounded-md hover:-translate-y-1.5 transition-all duration-300">
                    
                    <div className="">
                        <img src={schoolapp1} alt=""/>
                    </div>

                    <div className="text-center flex flex-col gap-4 w-full">
                        <p className="text-md lg:text-xl text-lightBlack">SCHOOL PROJECT</p>
                        <p className="text-sm lg:text-md text-lightBlack">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius...</p>
                    </div>

                </div>

                <div className="flex flex-col justify-center items-center gap-8 bg-white p-6 -mb-40 rounded-md hover:-translate-y-1.5 transition-all duration-300">
                    
                    <div className="">
                        <img src={schoolapp2} alt=""/>
                    </div>

                    <div className="text-center flex flex-col gap-4">
                        <p className="text-md lg:text-xl text-lightBlack">SCHOOL PROJECT</p>
                        <p className="text-sm lg:text-md text-lightBlack">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius...</p>
                    </div>

                </div>

                <div className="hidden lg:flex flex-col justify-center items-center gap-8 bg-white p-6 -mb-40 rounded-md hover:-translate-y-1.5 transition-all duration-300">
                    
                    <div className="">
                        <img src={schoolapp3} alt="" />
                    </div>

                    <div className="text-center flex flex-col gap-4">
                        <p className="text-xl text-lightBlack">SCHOOL PROJECT</p>
                        <p className="text-md text-lightBlack">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius...</p>
                    </div>

                </div>

                <div className="hidden lg:flex flex-col justify-center items-center gap-8 bg-white p-6 -mb-40 rounded-md hover:-translate-y-1.5 transition-all duration-300">
                    
                    <div className="">
                        <img src={schoolapp4} alt="" />
                    </div>

                    <div className="text-center flex flex-col gap-4">
                        <p className="text-xl text-lightBlack">SCHOOL PROJECT</p>
                        <p className="text-md text-lightBlack">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius...</p>
                    </div>

                </div>

                <div class="absolute z-30 flex space-x-3 -bottom-64 left-[48%]">
                        <button type="button" className="w-3 h-3 rounded-full bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full bg-gray-800/50 hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="w-3 h-3 rounded-full bg-gray-800/50 hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div>

            </div>


            <div className="w-full flex flex-row justify-around items-center mt-72 md:flex-row"> 

                <button className="p-4 bg-white text-black text-lightBlack text-xl rounded-lg shadow-lg shadow-shadowColor hover:-translate-y-1.5 transition-all duration-300 md:w-1/4 ">Contact Me</button>
                <button className="p-4 bg-lightBlack text-white text-xl rounded-lg shadow-lg shadow-shadowColor hover:-translate-y-1.5 transition-all duration-300 md:w-1/4">My Resume</button>

            </div>

            <div className="absolute -bottom-10 -left-20 h-1/2 -z-10">
                <img src={rectangle} alt="" className=""/>

                <div className="absolute flex flex-row left-24 bottom-10 space-x-4">
                    <img src={facebook} alt="" className="bg-white rounded-full cursor-pointer"/>
                    <img src={skype} alt="" className="bg-white rounded-full cursor-pointer"/>
                    <img src={linkedin} alt="" className="bg-white rounded-full cursor-pointer"/>
                    <img src={instagram} alt="" className="bg-white rounded-full cursor-pointer"/>
                </div>
            </div>

        </div>


    )
}