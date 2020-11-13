import React from 'react';
import { Paper } from "@material-ui/core";
// import {Link} from "react-router-dom";
import "./Projects.css";
import burger from "../../../assets/burgerbuilder.JPG";
import Flip from "./flip.js";

function Projects() {
  return (
    <div className="projectdiv">
      <h1 className="projectheading">Projects</h1>

      <div className="ProjectResponsive">

        <div className="projectbox">
          <Flip img1={burger} img2={burger}/>
          <a href="https://react-my-burger-52295.web.app/" className="projectlink"><span>Burger Builder</span></a>
          <p className="projectinfo">Burger Builder is an online burger ordering web app built using React and Firebase</p>
        </div>

        <div className="projectbox">
          <Flip img1={burger} img2={burger}/>
          <a href="https://react-my-burger-52295.web.app/" className="projectlink"><span>Burger Builder</span></a>
          <p className="projectinfo">Burger Builder is an online burger ordering web app built using React and Firebase</p>
        </div>

      </div>

      <div className="ProjectResponsive">

        <div className="projectbox">
          <Flip img1={burger} img2={burger}/>
          <a href="https://react-my-burger-52295.web.app/" className="projectlink"><span>Burger Builder</span></a>
          <p className="projectinfo">Burger Builder is an online burger ordering web app built using React and Firebase</p>
        </div>

        <div className="projectbox">
          <Flip img1={burger} img2={burger}/>
          <a href="https://react-my-burger-52295.web.app/" className="projectlink"><span>Burger Builder</span></a>
          <p className="projectinfo">Burger Builder is an online burger ordering web app built using React and Firebase</p>
        </div>

      </div>

    </div>
  );
}

export default Projects;
