import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import LoginSignup from "./Components/login-signup.js";

import TaskList from "./Components/tasks.list.component.js";
import Task from "./Components/task.component.js";

import page404 from './Components/404.js';


function App(id) {
  return (

  <div>

    <Router>
            <Switch>
              {/* <Route 
                path="/"
                component={ Landing } 
              /> */}
              {/* <Route 
                path="/dashboard"
                component={ Dashboard } 
              /> */}
              <Route 
                path="/login-signup"
                component={ LoginSignup } 
              />
              <Route 
                path="/tasks"
                component={ TaskList } 
              />
              <Route 
                path="/edit-task"
                component={ Task } 
              /> 
              <Route exact component={ page404 }/>
            </Switch>
    </Router>

  </div>
  );
}

export default App;


