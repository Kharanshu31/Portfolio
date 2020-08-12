import React from 'react';
// import {Link,withRouter} from "react-router-dom";
import "./Skills.css";

function Skills() {
  return (
    <div style={{textAlign: 'center'}}>
      <h1  style={{marginTop: "50px"}}>Skills</h1>
      <div style={{display: 'flex',flexDirection: 'row'}}>

      <div style={{textAlign: 'justify',width: '40%'}}>

        <p className="skillname">HTML & CSS</p>
        <p className="skillname">JavaScript</p>
        <p className="skillname">ReactJs</p>
        <p className="skillname">Node.js/Express.js</p>
        <p className="skillname">MongoDB</p>

      </div>

      <div style={{width: '50%'}}>

      <div className="progress proReact" style={{width: "75%"}}>
        <div class="progress-bar progress-bar-striped progress-bar-animated proTransition" role="progressbar" style={{width: "82%"}}></div>
      </div>

      <div className="progress proReact" style={{width: "75%"}}>
        <div class="progress-bar progress-bar-striped progress-bar-animated proTransition" role="progressbar" style={{width: "85%"}}></div>
      </div>

      <div className="progress proReact" style={{width: "75%"}}>
        <div class="progress-bar progress-bar-striped progress-bar-animated proTransition" role="progressbar" style={{width: "80%"}}></div>
      </div>

      <div className="progress proReact" style={{width: "75%"}}>
        <div class="progress-bar progress-bar-striped progress-bar-animated proTransition" role="progressbar" style={{width: "78%"}}></div>
      </div>

      <div className="progress proReact" style={{width: "75%"}}>
        <div class="progress-bar progress-bar-striped progress-bar-animated proTransition" role="progressbar" style={{width: "80%"}}></div>
      </div>

      </div>

      </div>
    </div>
  );
}

export default Skills;
