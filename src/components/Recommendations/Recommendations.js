import React from "react";
import { Loader } from "../Loader/Loader";
import "./Recommendations.css";
export const Recommendations = ({ meanCPU, meanRAM, meanDisks }) => {
  if (meanCPU === null) return <Loader />;

  return (
    <>
      <div
        className="description"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "200px",
        }}
      >
        <ul
          style={{
            marginTop: "5px",
            marginBottom: "5px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li style={{ listStyleType: "none", margin: "5px" }}>
            <span style={{color: 'white'}}>CPU</span>
            {meanCPU < 25 ? (
              <div className="alert alert-warning" role="alert">
                Low CPU : If your computer has Low level of CPU load - most
                likely your system doesn't have tasks.
              </div> ? (
                meanCPU > 80
              ) : (
                <div className="alert alert-danger" role="alert">
                  High CPU : If your computer has High level of CPU load - your
                  system is almost loaded and it's used to it's fullest.
                </div>
              )
            ) : (
              <div className="alert alert-success" role="alert">
                Normal CPU : If your computer has Normal level of CPU load -
                everything is okay and your system works correctly.
              </div>
            )}
          </li>
        
          <li style={{ listStyleType: "none", margin: "5px" }}>
            <span style={{color: 'white'}}>RAM</span>
            {meanRAM < 50 ? (
              <div className="alert alert-warning" role="alert">
                Low RAM : If your computer has Low level of RAM load -
                everything is fine.
              </div> ? (
                meanRAM > 90
              ) : (
                <div className="alert alert-danger" role="alert">
                  High RAM : If your computer has High level of RAM load - your
                  system doesn't have enough RAM and your computer may not work
                  correcty.
                </div>
              )
            ) : (
              <div className="alert alert-success" role="alert">
                Normal RAM : If your computer has Normal level of RAM load -
                your RAM is in good condition.
              </div>
            )}
          </li>
          
          <li style={{ listStyleType: "none", margin: "5px" }}>
            <span style={{color: 'white'}}>DISKS</span>
            {meanDisks < 60 ? (
              <div className="alert alert-warning" role="alert">
                Low DISKS : If your computer has Low level of DISKS load - your
                system has enough permanent memory.
              </div> ? (
                meanRAM > 85
              ) : (
                <div className="alert alert-danger" role="alert">
                  High DISKS : If your computer has High level of DISKS load -
                  the storage device is almost full and it is worth adding more
                  memory.
                </div>
              )
            ) : (
              <div className="alert alert-success" role="alert">
                Normal DISKS : If your computer has Normal level of DISKS load -
                your disks are steel good.
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};
