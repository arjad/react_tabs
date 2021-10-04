import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from "react-router-dom";
import App from './App';
import Tab from "./Tabs"
import Home from "./home"
import Login from "./login";
import Profile from "./profile";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      
      <App />
      <Route path="/home" component={Home}/>
      <Route path="/tab" component={Tab}/>
      <Route path="/login" component={Login}/>
      <Route path="/profile" component={Profile}/>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
