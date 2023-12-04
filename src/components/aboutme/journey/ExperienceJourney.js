import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2020 - Present"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h1 className="vertical-timeline-element-title">
           Technolgy 
          </h1>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            
          </h6>
          <p>• I have good Experience in Data Structure and Algorithm in C++.
          My Primary Coding Language is C++</p>

          <p>• I have good Experience of MERN stack Technolgy which is include MongoDB for database ,NodeJs and ExpressJs for Backend and ReactJs for frontend</p>

          <p>• I have also a good Experience with Html, Css, TelwindCss and JavaScript.</p>

          <p>• I have also a good Experience of Blockchain Technolgy which is include EthereumBlockchain ,Web3.JS Solidity, SmartContracts.</p>


          <p>•I have also a good Experience of Core Subject like  Object Oriented programming (Oops) and Opareting System (OS).</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  ); 
}

export default ExperienceJourney;
