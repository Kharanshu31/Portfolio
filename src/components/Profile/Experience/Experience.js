import React,{useState} from 'react';
import {Link} from "react-router-dom";
import './Experience.css';

function Experience() {

  const [showEducation,setShowEducation]=useState(false)

  return (
    <div className="ExpEduBody">
      <h1>Experience & Education</h1>

      <div className="ButtonDiv">
      <button className="btn btn-success Expbtn" onClick={()=>setShowEducation(false)}>Experience</button>
      <button className="btn btn-warning Edubtn" onClick={()=>setShowEducation(true)}>Education</button>
      </div>

      {showEducation ? (
        <div>

        <div className="ExpDiv">

          <p className="Timeline2">August-2019 to Present</p>

          <div className="LineBox">
            {/*<span className="LineCircle"><span style={{fontSize: '0.1rem',visibility:'hidden'}}>o</span></span>*/}
            <span className="LineCircle">&nbsp;</span>
          </div>

          <div style={{width: '40%',textAlign: 'center',marginLeft: -80}}>
            <h3 className="ExpHeading">Netaji Subhash University Of Technology</h3>
            <p className="ExpDesc">B.Tech in Electronics & Communication Engineering</p>
          </div>

        </div>

        <div className="ExpDiv">

          <p className="Timeline3">2014-2019</p>

          <div className="LineBox" style={{marginTop: -30}}>
            {/*<span className="LineCircle"><span style={{fontSize: '0.1rem',visibility:'hidden'}}>o</span></span>*/}
            <span className="LineCircle2">&nbsp;</span>
          </div>

          <div>
            <h3 className="ExpHeading">Laxman Public School</h3>
            <p className="ExpDesc">PCM</p>
          </div>

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
