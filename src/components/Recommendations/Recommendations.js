import React from "react";
import { Loader } from "../Loader/Loader";

export const Recommendations = ({ meanCPU, meanRAM, meanDisks }) => {
  if (meanCPU === null) return <Loader />; 
  

  return (
    <ul >
   <li>{meanCPU<25 ? <span>низька CPU</span> ? meanCPU > 80 : <span>висока CPU</span> : <span className="alert alert-success" role="alert">нормальна CPU</span>}</li>
   <br/>
   <li>{meanRAM<50 ? <span>низька RAM</span> ? meanRAM > 90 : <span>висока RAM</span> : <span className="alert alert-success" role="alert">нормальна RAM</span>}</li>
   <br/>
   <li>{meanDisks<60 ? <span>низька Disks</span> ? meanRAM > 85 : <span>висока Disks</span> : <span className="alert alert-success" role="alert">нормальна Disks</span>}</li>
    </ul>
  );
};

