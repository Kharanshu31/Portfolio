import React from 'react';
// import {Link,withRouter} from "react-router-dom";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import Recommendation from "./Recommendation/Recommendation";

function Profile() {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Recommendation />
      <div style={{backgroundColor: 'black',paddingBottom: 1}}>
      <p style={{textAlign: 'center',fontWeight: '600',color: 'white',paddingTop: 7}}>Made With ❤ By Kharanshu</p>
      </div>
    </div>
  );
}

export default Profile;
