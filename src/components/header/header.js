import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import "./header.css";
import TransBtn from "../common/button/transparent_btn";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={require("./logo.jpg")} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <TransBtn text={"Home"} onClick={() => navigate("/")} />
          <TransBtn text={"Articles"} />
          <TransBtn iconClass={"fi fi-rr-heart"} text={"Wishlist"} />
          <TransBtn
            iconClass={"fi fi-rs-user"}
            text={"Log in | Register"}
            onClick={() => navigate("/signin-up")}
          />
          <a>
            <button
              className="start-selling"
              onClick={() => navigate("/selling")}
            >
              + Start Selling
            </button>
          </a>
        </nav>
      </CSSTransition>
      <button className="Burger" onClick={toggleNav}>
        <FaBars />
      </button>
    </header>
  );
};
