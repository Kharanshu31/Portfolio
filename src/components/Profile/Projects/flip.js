import React,{Component} from 'react';
// import { Paper } from "@material-ui/core";
// import {Link} from "react-router-dom";
import "./Projects.css";

class Flip extends Component {
  render(){
    return (
      <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={this.props.img2} alt="Avatar" className="projectimg"/>
        </div>
        <div className="flip-card-back">
          <img src={this.props.img1} alt="Avatar" className="projectimg"/>
        </div>
      </div>
    </div>
    )
  }
}

export default Flip;
