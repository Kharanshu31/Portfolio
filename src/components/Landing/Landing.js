import React from 'react';
import {Link,withRouter} from "react-router-dom";
import './Landing.css';

function Landing() {
  return (
    <div className="landing">
      <h1 className="heading">Hi! I am Kharanshu</h1>
      <p className="intro">A passionate MERN Stack Web Developer having experience in building websites</p>
      <button className="morebtn"> <Link to="/profile" style={{color: "white" ,textDecorationLine: "none"}}> More => </Link> </button>
    </div>
  );
}

export default Landing;
