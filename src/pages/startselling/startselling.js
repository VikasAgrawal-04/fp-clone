import React from "react";
import "./startselling.css"
import { ToastContainer } from 'react-toastify';
import {MdOutlineAppRegistration} from "react-icons/md";
import {BsSpeedometer} from "react-icons/bs";
import{MdCalculate}from "react-icons/md";
import {TbSpray} from "react-icons/tb";
import {AiFillCamera} from "react-icons/ai";
import{FaAdversal}from "react-icons/fa";
export const StartSelling = () => {
  return (
    
      <div className="timeline">
        <div className="container  left-container">
           <MdOutlineAppRegistration   className="icon"/>
        {/* <img src="./images/amazon.png"/> */}
        <div className="text-box">
         
         
        <h2>  Prepare registration certificate</h2>
        <small>Step Number 1</small>
        <p>
       
Click “ Add ” in the upper right corner of the page and log in to the Business Account. Please note that the default category for the new announcement is “ Passenger cars ”. If you want to change it, expand the list and select the appropriate category.
        </p>
        <span className="left-container-arrow"></span>
        </div>
        </div>

        <div className="container  right-container">
        <BsSpeedometer    className="icon"/>
        <div className="text-box">
         
        <h2> Save vehicle mileage</h2>
        <small>Step Number 2</small>
        <p>
       
        Click “ Add ” in the upper right corner of the page and log in to the Business Account. Please note that the default category for the new announcement is “ Passenger cars ”. If you want to change it, expand the list and select the appropriate category.
        </p><span className="right-container-arrow"></span>
        </div>
        </div>

        <div className="container   left-container">
        <MdCalculate    className="icon"/>
        <div className="text-box">
         
        <h2> Valuate your vehicle using the free tool</h2>
        <small>Step Number 3</small>
        <p>
       
Click “ Add ” in the upper right corner of the page and log in to the Business Account. Please note that the default category for the new announcement is “ Passenger cars ”. If you want to change it, expand the list and select the appropriate category.
        </p><span className="left-container-arrow"></span>
        </div>
        </div>

        <div className="container   right-container">
        <TbSpray    className="icon"/>
        <div className="text-box">
         
        <h2> Clean the car inside and outside</h2>
        <small>Step Number 4</small>
        <p>
       
Click “ Add ” in the upper right corner of the page and log in to the Business Account. Please note that the default category for the new announcement is “ Passenger cars ”. If you want to change it, expand the list and select the appropriate category.
        </p><span className="right-container-arrow"></span>
        </div>
        </div>


        <div className="container   left-container">
        <AiFillCamera    className="icon"/>
        <div className="text-box">

        <h2> Take photos of the vehicle from different sides</h2>
        <small>Step Number 5</small>
        <p>
       
Click “ Add ” in the upper right corner of the page and log in to the Business Account. Please note that the default category for the new announcement is “ Passenger cars ”. If you want to change it, expand the list and select the appropriate category.
        </p><span className="left-container-arrow"></span>
        </div>
        </div>




        <div className="container   right-container">
        <FaAdversal      className="icon"/>
        <div className="text-box">
        
        <h2> You are ready to create an advertisement</h2>
        <small>Step Number 6</small>
        <p>
       
Click “ Add ” in the upper right corner of the page and log in to the Business Account. Please note that the default category for the new announcement is “ Passenger cars ”. If you want to change it, expand the list and select the appropriate category.
        </p><span className="right-container-arrow"></span>
        </div>
        </div>


      </div>
    
  );
};
