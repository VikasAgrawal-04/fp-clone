import React from "react";
import { FilterSection } from "../../components/body/filter_section/filter_section";
import { Header } from "../../components/header/header";
import { Footer } from "./../../components/footer/footer";
import { SliderSection } from "../../components/body/slider_section/slider_section";
import "./dashboard.css";

export const DashBoard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="main-section">
        <div className="filter-form">
          <FilterSection />
          <SliderSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};
