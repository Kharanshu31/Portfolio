import React from 'react';
// import {Link,withRouter} from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Skills.css";

function Skills() {
  return (
    <div className="skillBody" style={{textAlign: 'center'}}>
      <h1>Skills</h1>
      <div style={{display: 'flex'}}>

        <div>
          <p className="skillname">HTML & CSS</p>
          <CircularProgressbar value={80} text='80%'/>
        </div>

        <div>
          <p className="skillname">JavaScript</p>
          <CircularProgressbar value={78} text='78%'/>
        </div>

        <div>
          <p className="skillname">ReactJs</p>
          <CircularProgressbar value={90} text='90%' />
        </div>

        <div>
          <p className="skillname">Node.js/Express.js</p>
          <CircularProgressbar value={75} text='75%' />
        </div>

        <div>
          <p className="skillname">Tensorflow Js</p>
          <CircularProgressbar value={60} text='60%' />
        </div>

      </div>
    </div>
  );
}

export default Skills;
