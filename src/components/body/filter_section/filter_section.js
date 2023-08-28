import React, { useState } from "react";
import "./filter_section.css";
import Slider from "react-slick";
import { Cars } from "../filter_section/vehicle_type_filters/cars/cars";
import { Bikes } from "../filter_section/vehicle_type_filters/bikes/bike";
import { Truck } from "../filter_section/vehicle_type_filters/trucks/truck";
import { useNavigate } from "react-router-dom";

export const FilterSection = () => {
  const navigate = useNavigate();
   

  const filterItems = [
    { name: "Cars", iconClass: "fi fi-rr-car",backgroundImg: "./images/car-background.jpg" },
    { name: "Bikes", iconClass: "fi fi-rr-motorcycle" ,backgroundImg: "./images/bike-background.jpg"},
    { name: "Trucks", iconClass: "fi fi-rs-truck-side",backgroundImg: "./images/truck-background.jpg" },
  ];



  const [activeFilter, setActiveFilter] = useState("Cars");
  const [backgroundImage, setBackgroundImage] = useState(filterItems.find(item => item.name === activeFilter).backgroundImg);
  const getCorrectFilter = (activeFilter) => {
    switch (activeFilter) {
      case "Cars":
        return <Cars />;
      case "Bikes":
        return <Cars />;

      // return <Bikes />;
      case "Trucks":
        return <Cars />;

      // return <Truck />;
      default:
        return <Cars />;
    }
  };

  const handleClick=(tab)=>{
    setActiveFilter(tab.name);
    setBackgroundImage(tab.backgroundImg);
  }


  return (
   
   
      <div className="filter-section" style={{
        backgroundImage : `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',}}>
          <div className="filter-container">
            <div className="filter">
            <div className="vehicle-type">
              {filterItems.map((tab) => {
                return (
                  <div
                    className={`clickable-div ${
                      activeFilter === tab.name ? "clicked" : ""
                    }`}
                    onClick={() => handleClick(tab)}
                    >
                    <i className={tab.iconClass}></i>
                    <span className="div-text">{tab.name}</span>
                  </div>
                );
              })}
            </div>
            {getCorrectFilter(activeFilter)}
          </div>
          <div></div>
          <div></div>
          </div>
    </div>
      
       
     
  );
};
