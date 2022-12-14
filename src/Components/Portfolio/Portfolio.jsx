import React from "react";
import Header from "../Header/Header";
import rectanglePhoto from "../../assets/rectangleUnderPhoto.svg";
import schoolapp1 from '../../assets/schoolapp1.svg';
import schoolapp3 from '../../assets/schoolapp3.jpg';
import SecondPortfolio from "./SecondPortfolio";

export default()=>{



    return(

        <section id="portfolio" className="min-h-screen space-y-48 ">
           

            <div className="bg-bgSection p-4 shadow-lg shadow-shadowColor m-8 md:pb-48">
                
                <Header></Header>

                <div className="flex flex-col mx-auto mt-24">

                    <div>
                        <div className="relative w-full lg:pl-48">
                            <img src={rectanglePhoto} alt="" className="h-[20rem] rotate-[30deg]" />
                            <div className="text-lightBlack text-5xl absolute top-10 md:text-7xl">PORTFOLIO</div>
                        </div>   
                    </div>

                    <div className="flex flex-col mx-auto w-full gap-8 justify-center items-center">

                        <div className="text-lightBlack text-5xl text-center w-full items-center mt-8 mb-16">SCHOOL PROJECT</div>

                        <div className="flex flex-col-reverse items-center gap-4 bg-white rounded-md p-4 w-full shadow-lg shadow-shadowColor xl:p-8 xl:relative xl:w-2/3">

                            <div className="space-y-4 lg:pl-16">
                                <p className="text-sm text-lightBlack w-full  indent-10 text-justify lg:text-xl xl:pl-56" >This is a full stack app, where you can have two roles, user or professor. You can create your account and you can login. Once you have created an account, you have the user role. Also, you can see the most subscribed course.</p>
                                <p className="text-sm text-lightBlack w-full  indent-10 text-justify lg:text-xl xl:pl-56" >As an user, you can subscribe and unsubscribe a course. As a professor, you can edit, delete or create courses where users can subscribe.</p>
                            </div>


                            <div className="rounded-lg xl:absolute xl:flex xl:justify-center xl:-left-48 xl:top-8 xl:bottom-8">
                                    <img src={schoolapp1} alt="" className="rounded-lg md:max-w-[30rem] xl:w-full shadow-lg shadow-shadowColor"/>
                            </div>

                        </div>


                    
                  
                    </div>

                    <div className="flex flex-col justify-center items-center w-full gap-8 mt-32 lg:mt-24">

                        <div className="flex flex-col-reverse items-center gap-4 bg-white rounded-md p-4 w-full shadow-lg shadow-shadowColor xl:p-8 xl:relative xl:w-2/3">

                            <div className="space-y-4 ">
                                <p className="text-sm text-lightBlack w-full xl:pr-56 indent-10 text-justify lg:text-xl" >Back-end tech i used: <br/>- MySQL
                                <br/>- Express
                                <br/>- Sequelize
                                <br/>- Jsonwebtoken/Bcrypt
                                </p>
                                <p className="text-sm text-lightBlack w-full xl:pr-56 indent-10 text-justify lg:text-xl" >Front-end tech i used: <br/>- React
                                <br/>- Tailwind CSS
                                </p>
                            </div>

                            <div className="rounded-lg xl:absolute xl:flex xl:justify-center xl:-right-48 xl:top-8 xl:bottom-8">
                                    <img src={schoolapp3} alt="" className="rounded-lg shadow-lg shadow-shadowColor md:max-w-[25rem] xl:w-full " />
                             </div>

                        </div>
                  
                    </div>

                    <div className="w-full flex flex-col justify-center items-center gap-4 mt-8 md:flex-row lg:mt-24">
                        <a href="https://github.com/mihaescuionut/SchoolApp3" className="p-4 w-2/3 bg-myGreen text-white rounded-lg uppercase text-center shadow-lg shadow-shadowColor hover:scale-105 md:w-1/4">Github code</a>
                        <a href="http://school-app-ionut.herokuapp.com" className="p-4 w-2/3 bg-lightBlack text-white rounded-lg uppercase text-center shadow-lg shadow-shadowColor hover:scale-105 md:w-1/4">PROJECT</a>
                    </div>

                </div>
            </div>

            <SecondPortfolio></SecondPortfolio>

        </section>


    )
}