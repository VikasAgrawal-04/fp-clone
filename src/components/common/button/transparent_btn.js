import React from "react";
import "./transparent_btn.css";

const TransBtn = ({
  iconClass,
  text,
  onClick,
  txtColor,
  bgColor,
  iconColor,
}) => {
  const btnClasses = ["TransparentButton"];

  if (txtColor) {
    btnClasses.push("txtColor");
  }

  if (bgColor) {
    btnClasses.push("bgColor");
  }
  return (
    <button className={btnClasses.join(" ")} onClick={onClick}>
      {iconClass && <i style={{ color: iconColor }} className={iconClass}></i>}
      {text}
    </button>
  );
};

export default TransBtn;
