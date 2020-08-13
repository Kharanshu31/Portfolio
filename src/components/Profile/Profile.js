import React from 'react';
// import {Link,withRouter} from "react-router-dom";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience"

function Profile() {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}

export default Profile;
