import React from "react";
import { HelpItem } from "./HelpItem/HelpItem";
import { withRouter } from 'react-router-dom'
import './HelpPage.css'

export const HelpPage = () => {
  return (
    <div className="customContainer">
      <div className="container help-page">
        <h1 className="text-center display-4">FAQ</h1>
        <HelpItem />
      </div>
    </div>
  );
}
