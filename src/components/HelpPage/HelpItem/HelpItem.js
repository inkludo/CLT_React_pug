import React from "react";
import img1 from "../img/ClassroomList.png";
import img2 from "../img/class_room.png";
import img3 from "../img/ps_graph.png";
export const HelpItem = () => {
  return (
    <div className="help-items">
      <div className="help-contents mb-5">
        <h2 className="mb-3">Content</h2>
        <ol className="pl-3">
          <li>
            <a href="#classList">Classroom List</a>
          </li>
          <li>
            <a href="#classroom">Classroom</a>
          </li>
          <li>
            <a href="#pc_chart">PC chart and stats</a>
          </li>
        </ol>
      </div>
      <div className="help-item mb-5 pb-5 border-bottom" id="classList">
        <h2>Classroom List</h2>
        <div className="classRoomList">
          <img src={img1} alt="ClassroomList" className="img1" />
        </div>

        <div className="alert alert-primary" role="alert">
          On this image you can see main page of this application. 1- "burger"
          menu that consists of two components: List and Help. List is a link to
          the main page. Help is a link to the Helper page, where you can find
          solution of your problem in this application.
        </div>
      </div>
      <div className="help-item mb-5 pb-5 border-bottom" id="classroom">
        <h2>Classroom</h2>
        <div className="classRoomList">
          <img src={img2} alt="ClassroomList" className="img1" />
        </div>

        <div className="alert alert-primary" role="alert">
          On this image you can see list of computers of your selected auditory.
          1 - auditory number. 2 - list of computers in this auditory.
        </div>
      </div>
      <div className="help-item mb-5 pb-5 border-bottom" id="pc_chart">
        <h2>PC chart and stats</h2>
        <div className="classRoomList">
          <img src={img3} alt="ClassroomList" className="img1" />
        </div>

        <div className="alert alert-primary" role="alert">
          On this image you can see statistics of selected computer, mean value
          of CPU, RAM, DISK, and start time tracking performance. 1 - chart with
          system information of selected computer. 2 - list of mean statistics
        </div>
      </div>

      {/* <div className="help-item mb-5 pb-5 border-bottom" id="culpa_eum_iure">
        <h2 className="mb-3">Other problems</h2>

        <div className="alert alert-warning" role="alert">
         
        </div>
      </div> */}
    </div>
  );
};
