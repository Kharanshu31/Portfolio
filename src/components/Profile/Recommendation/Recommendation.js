import React from 'react';
import "./Recommendation.css";
import img1 from "../../../assets/recommend1.jfif";

function Recommendation() {
  return (
    <div className="RecommendationDiv">
      <h1 style={{textAlign: 'center'}}>Recommendations</h1>
      <div className="rec-body">
        <div className="recimgDiv">
          <img src={img1} alt="recommend1" className="rec-img"></img>
        </div>
        <div>
          <h2>Dileep Kumar</h2>
          <p>AI specialist at Chattel Technologies</p>
          <p className="rec-para">Kharanshu showed good set of skills as an intern in the web development team.
          He grasped Reactjs and Nodejs upto good level swiftly.</p>
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
