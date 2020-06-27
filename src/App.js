import React from 'react';
import {Route,withRouter} from "react-router-dom";
import './App.css';

import Landing from "./components/Landing/Landing";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div>
    <div className="App">
      <Route exact path="/" component={Landing}/>
      <Route path="/profile" component={Profile} />
    </div>
    </div>
  );
}

export default App;
