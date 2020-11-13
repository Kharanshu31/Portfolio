import React from 'react';
// import { Paper } from "@material-ui/core";
// import {Link} from "react-router-dom";
import "./Projects.css";
import burger1 from "../../../assets/burgerbuilder.JPG";
import burger2 from "../../../assets/burger2.JPG";
import edumonk1 from "../../../assets/edumonk1.JPG";
import edumonk2 from "../../../assets/edumonk2.JPG";
import elocal1 from "../../../assets/elocal1.JPG";
import elocal2 from "../../../assets/elocal2.JPG";
import medicine1 from "../../../assets/medicine1.JPG";
import medicine2 from "../../../assets/medicine2.JPG";
import Flip from "./flip.js";

function Projects() {
  return (
    <div className="projectdiv">
      <h1 className="projectheading">Projects</h1>

      <div className="ProjectResponsive">

        <div className="projectbox">
          <Flip img1={burger1} img2={burger2}/>
          <a href="https://react-my-burger-52295.web.app/" className="projectlink"><span>Burger Builder</span></a>
          <p className="projectinfo">Burger Builder is an online burger ordering web app built using React and Firebase</p>
        </div>

        <div className="projectbox">
          <Flip img1={elocal1} img2={elocal2}/>
          <a href="https://kharanshu31.github.io/elocalProject/#/" className="projectlink"><span>E Local</span></a>
          <p className="projectinfo">Online Shipping Website which offers wide range of products</p>
        </div>

      </div>

      <div className="ProjectResponsive">

        <div className="projectbox">
          <Flip img1={medicine1} img2={medicine2}/>
          <a href="https://lit-tundra-67776.herokuapp.com/" className="projectlink"><span>Medicine Time</span></a>
          <p className="projectinfo">MERN Stack Website which helps you remember the time you need to take your medicines</p>
        </div>

        <div className="projectbox">
          <Flip img1={edumonk1} img2={edumonk2}/>
          <a href="https://kharanshu31.github.io/edumonk/#/" className="projectlink"><span>Edunomics</span></a>
          <p className="projectinfo">Online Education Provider Website for students of all age groups</p>
        </div>

      </div>

    </div>
  );
}

export default Projects;
