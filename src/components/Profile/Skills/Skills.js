import React from 'react';
// import {Link,withRouter} from "react-router-dom";
import "./Skills.css";

function Skills() {
  return (
    <div style={{textAlign: 'center'}}>
      <h1  style={{marginTop: "50px"}}>Skills</h1>
      <div style={{display: "flex",marginTop: "15px"}}>
        <p className="skillname">HTML & CSS</p>
        <div className="skillhandler">
          <div className="skill1">
              <p className="skilltext">hi</p>
          </div>
        </div>
      </div>

      <div style={{display: "flex",marginTop: "15px"}}>
        <p className="skillname">ReactJs</p>
        <div className="skillhandler">
          <div className="skill2">
              <p className="skilltext">hi</p>
          </div>
        </div>
      </div>

      <div style={{display: "flex",marginTop: "15px"}}>
        <p className="skillname">Javascript</p>
        <div className="skillhandler">
          <div className="skill3">
              <p className="skilltext">hi</p>
          </div>
        </div>
      </div>

      <div style={{display: "flex",marginTop: "15px"}}>
        <p className="skillname">Node.js/Express.js</p>
        <div className="skillhandler">
          <div className="skill4">
              <p className="skilltext">hi</p>
          </div>
        </div>
      </div>

      <div style={{display: "flex",marginTop: "15px"}}>
        <p className="skillname">MongoDB</p>
        <div className="skillhandler">
          <div className="skill5">
              <p className="skilltext">hi</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Skills;
