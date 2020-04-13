import React from "react";
import { Loader } from "../../components/Loader/Loader";
import "./MeanData.css";

export const MeanData = ({ data }) => {
  if (data === null) {
    return <Loader />;
  }
  return (
    <div className="stat_info">
      <div className="section-el ">
        <div className="section-el-inner">
          Mean CPU
          <span className="number">{data.meanCpu + "%"}</span>
        </div>
      </div>
      <div className="section-el ">
        <div className="section-el-inner">
          Mean RAM
          <span className="number">{data.meanRam + "%"}</span>
        </div>
      </div>
      <div className="section-el ">
        <div className="section-el-inner">
          Mean DISK
          <span className="number">{data.meanDisk + "%"}</span>
        </div>
      </div>
      <div className="section-el ">
        <div className="section-el-inner">
          Data Collection Start <span className="number">{data.timeStart}</span>
        </div>
      </div>
      <div className="section-el ">
        <div className="section-el-inner">
        Data Collection End
          <span className="number">{data.timeEnd}</span>
        </div>
      </div>
      <div className="section-el ">
        <div className="section-el-inner">
          Duration<span className="number">{data.duration}</span>
        </div>
      </div>
    </div>
  );
};
