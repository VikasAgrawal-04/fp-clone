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
    { name: "Cars", iconClass: "fi fi-rr-car" },
    { name: "Bikes", iconClass: "fi fi-rr-motorcycle" },
    { name: "Trucks", iconClass: "fi fi-rs-truck-side" },
  ];
  const [activeFilter, setActiveFilter] = useState("Cars");
  
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

  return (
   
   
      <div className="filter-section" style={{
        backgroundImage : "url('https://wallpaperaccess.com/full/1752458.jpg')",
        backgroundSize: 'cover',
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
                    onClick={() => setActiveFilter(tab.name)}
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
