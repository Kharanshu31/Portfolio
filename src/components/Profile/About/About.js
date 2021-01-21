import React from 'react';
// import {Link,withRouter} from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about">
    <div className="aboutdiv">
      <h1 className="aboutheading">About Me</h1>
      <p className="aboutpara">
        I am a Competitive Programmer and a MERN Stack Web Developer based in New Delhi.
        I am proficient in Data Structures and Algorithms and as far as Development is concerned
        ,I work on HTML,CSS,Javascript,ReactJs,Express.js,Node.js,Mongo DB.<br />
        <span style={{fontWeight: '900',fontSize: "1.5rem"}}>I Love To Build For Web.</span>
      </p>
    </div>
    </div>
  );
}

export default About;
