import React from "react";
import { HelpItem } from "./HelpItem/HelpItem";
import "./HelpPage.css";

export const HelpPage = () => {
  return (
    <div className="customContainer">
      <div className="container help-page">
        <h1 className="text-center display-4">HELPER</h1>

        <HelpItem />
      </div>
    </div>
  );
};
