import React,{Component} from 'react';
import { Paper } from "@material-ui/core";
// import {Link} from "react-router-dom";
import "./Projects.css";

class Flip extends Component {
  render(){
    return (
      <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={this.props.img1} alt="Avatar" className="projectimg"/>
        </div>
        <div class="flip-card-back">
          <img src={this.props.img2} alt="Avatar" className="projectimg"/>
        </div>
      </div>
    </div>
    )
  }
}

export default Flip;
