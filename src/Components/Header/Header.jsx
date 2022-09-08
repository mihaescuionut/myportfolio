import React from "react";
import logo from '../../assets/logoAlex.png';
import { useNavigate } from "react-router-dom";



export default()=>{
    let navigate = useNavigate();

    let handleNav=(e)=>{
      let el = e.target;
      if(el.textContent == "ABOUT"){
        navigate('/')
      }else if(el.textContent == "PORTFOLIO"){
        navigate('/portfolio')
      }
    }

    return(

      <header onClick={handleNav} className="flex justify-between items-center space-x-4 font-bold">
        <div className="flex justify-center items-center gap-8">
          <img src={logo} alt="" className=""/>
          <h1 className="hidden text-lightBlack text-md md:flex lg:text-3xl">ALEXANDRU IONUT</h1>
        </div>



      <nav className="z-10">
        <ul className="flex justify-center items-center gap-2 text-sm md:text-2xl">
          <li>
            {" "}
            <a
              href=""
              className="text-green-500 cursor-pointer hover:underline"
            >
              ABOUT
            </a>
          </li>
          <li>
            {" "}
            <a className="text-lightBlack cursor-pointer hover:underline">
              PORTFOLIO
            </a>
          </li>
          <li>
            {" "}
            <a className="text-lightBlack cursor-pointer hover:underline">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
    )
}