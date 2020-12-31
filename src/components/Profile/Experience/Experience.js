import React,{useState} from 'react';
// import {Link} from "react-router-dom";
import './Experience.css';

function Experience() {

  const [showEducation,setShowEducation]=useState(false)

  return (
    <div className="ExpEduBody">
      <div className="mainHeading">
      <h1>Experience & Education</h1>
      </div>

    <div className="ExpContent">

      <div className="ButtonDiv">
      <button className="btn btn-success Expbtn" onClick={()=>setShowEducation(false)}>Experience</button>
      <button className="btn btn-warning Edubtn" onClick={()=>setShowEducation(true)}>Education</button>
      </div>

      {showEducation ? (
        <div className="ExpDiv">

          <div>
            <h5>Netaji Subhas University Of Technology</h5>
            <div style={{display: 'flex'}}>
              <p>2019-2023</p>
              <p style={{marginLeft: 10}}>Majoring in Electronics & Communication Engineering</p>
            </div>
          </div>

          <div>
            <h5>Laxman Public School</h5>
            <div style={{display: 'flex'}}>
              <p>2017-2019</p>
              <p style={{marginLeft: 10}}>PCM in 12th with 94% in CBSE boards and 10 CGPA in class 10th</p>
            </div>
          </div>

        </div>
      ) : (

        <div className="ExpDiv">

        <div>
          <h5>Web Developer at Chattel Technologies</h5>
          <div style={{display: 'flex'}}>
            <p>July 2020-August 2020</p>
            <p style={{width: '60%',marginLeft: 10}}>My work was to work on a leading recruitment website.The teck stack involved was React Js,Redux for frontend while
            backend was implemented completely using node.js/express.js and data was stored in MongoDB</p>
          </div>
        </div>

        <div>
          <h5>Participant at SWOC</h5>
          <div style={{display: 'flex'}}>
            <p>December 2020-Present</p>
            <p style={{width: '60%',marginLeft: 10}}>It is an open-source event where participants along with the guidance of their mentors work for 2 month on various
            open-source projects of their preferred tech stack</p>
          </div>
        </div>

        </div>

      ) }

    </div>

  </div>
  );
}

export default Experience;
