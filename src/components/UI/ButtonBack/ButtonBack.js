import React from "react";
import "./ButtonBack.css";
import {withRouter} from 'react-router-dom';

const ButtonBack = (props) => {
  const onClickHandler = () => props.history.push(props.url);
  return <div className='btnBack'> <i className="fas fa-arrow-left" onClick={onClickHandler} /></div>;
};

export default withRouter(ButtonBack);
