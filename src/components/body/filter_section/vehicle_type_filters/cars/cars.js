import React, { useState } from "react";
import "./cars.css";

import { CusAutoComplete } from "../../../../common/autocomplete/custom_autocomplete";
import TransBtn from "../../../../common/button/transparent_btn";

const top100Films = [
  { title: "Small Cars", year: 1994 },
  { title: "Covertible", year: 1972 },
  { title: "Coupe", year: 1974 },
  { title: "City Cars", year: 2008 },
  { title: "Station", year: 1957 },
  { title: "Compact", year: 1993 },
  { title: "Minivan", year: 1994 },
  {
    title: "Sedan",
    year: 2003,
  },
  
];
export const Cars = () => {
  return (
    <div className="car-filters">
      <div className="title">What are you looking for?</div>
      <div className="row-dropdowns">
        <CusAutoComplete
          options={top100Films}
          // label={"Body Type"}
          label2={"Body Type"}
          sx={{ background: "#EBECEF", mt: "0.2vh", width: "100%" }}
          mr={"1vw"}
        />
        <CusAutoComplete
          options={top100Films}
          // label={"Vehicle Type"}
          label2={"Vehicle Type"}
          sx={{ background: "#EBECEF", mt: "0.2vh", width: "100%" }}
        />
      </div>
      <div className="row-dropdowns">
        <CusAutoComplete
          options={top100Films}
          // label={"Vehicle Model"}
          label2={"Vehicle Model"}
          sx={{ background: "#EBECEF", mt: "0.2vh", width: "100%", mr: "1vw" }}
          mr={"1vw"}
        />
        <CusAutoComplete
          options={top100Films}
          // label={"Generation"}
          label2={"Generation"}
          sx={{ background: "#EBECEF", mt: "0.2vh", width: "100%" }}
        />
      </div>
      <div className="row-dropdowns-bottom">
        <div style={{ width: "100%", marginRight: "1vw" }}>
          Price
          <div className="row-dropdowns ">
            <CusAutoComplete
              options={top100Films}
              label={"From"}
              sx={{ background: "#EBECEF", width: "100%" }}
              mr={"0.2vw"}
              mt={"0.2vh"}
            />
            <CusAutoComplete
              options={top100Films}
              label={"To"}
              sx={{ background: "#EBECEF", width: "100%" }}
              mt={"0.2vh"}
            />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          Production Year
          <div className="row-dropdowns">
            <CusAutoComplete
              options={top100Films}
              label={"From"}
              sx={{ background: "#EBECEF", width: "100%" }}
              mr={"0.2vw"}
              mt={"0.2vh"}
            />
            <CusAutoComplete
              options={top100Films}
              label={"To"}
              sx={{ background: "#EBECEF", width: "100%" }}
              mt={"0.2vh"}
            />
          </div>
        </div>
      </div>
      <div className="row-dropdowns-bottom">
        <CusAutoComplete
          options={top100Films}
          // label={"Fuel Type"}
          label2={"Fuel Type"}
          sx={{ background: "#EBECEF", mt: "0.2vh", width: "100%", mr: "1vw" }}
          mr={"1vw"}
        />
        <div style={{ width: "100%", marginTop: "1vh" }}>
          Mileage
          <div className="row-dropdowns ">
            <CusAutoComplete
              options={top100Films}
              label={"From"}
              sx={{ background: "#EBECEF", width: "100%" }}
              mr={"0.2vw"}
              mt={"0.2vh"}
            />
            <CusAutoComplete
              options={top100Films}
              label={"To"}
              sx={{ background: "#EBECEF", width: "100%" }}
              mt={"0.2vh"}
            />
          </div>
        </div>
      </div>
      <div style={{marginTop:"4vh"}} className="row-dropdowns">
        <TransBtn
          iconColor={"black"}
          iconClass={"fi fi-rr-settings-sliders"}
          text={"Advance Search"}
          txtColor={"yes"}
        ></TransBtn>
        <TransBtn
          iconColor={"black"}
          text={"Show Announcements"}
          bgColor={"yes"}
        ></TransBtn>
      </div>
    </div>
  );
};
