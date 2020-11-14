import React,{useState} from 'react';
import {Link} from "react-router-dom";
import './Experience.css';

function Experience() {

  const [showEducation,setShowEducation]=useState(true)

  return (
    <div className="ExpEduBody">
      <div className="mainHeading">
      <h1>Experience & Education</h1>
      </div>

      <div className="ButtonDiv">
      <button className="btn btn-success Expbtn" onClick={()=>setShowEducation(false)}>Experience</button>
      <button className="btn btn-warning Edubtn" onClick={()=>setShowEducation(true)}>Education</button>
      </div>

      {showEducation ? (
        <div className="ExpDiv">

          <div>
            <h5>Netaji Subhas University Of Technology</h5>
            <p>2019-2023</p>
          </div>

        </div>
      ) : (
        <div>

        <div className="ExpDiv">

          <p className="Timeline">July-2020 to August-2020</p>

          <div className="LineBox">
            {/*<span className="LineCircle"><span style={{fontSize: '0.1rem',visibility:'hidden'}}>o</span></span>*/}
            <span className="LineCircle">&nbsp;</span>
          </div>

          <div>
            <h3 className="ExpHeading">Chattel Technologies</h3>
            <p className="ExpDesc">MERN Stack Web Developer</p>
          </div>

        </div>

        </div>
      ) }

    </div>
  );
}

export default Experience;
