import React from "react";
import "./ButtonBack.css";

const ButtonBack = (props) => {
  const onClickHandler = () => console.log(1);
  return <i className="fas fa-arrow-left" onClick={onClickHandler} />;
};

export default ButtonBack;
