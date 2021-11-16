import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import LoginSignup from "./Components/login-signup.js";

import TutorialsList from "./Components/tutorials.list.component.js";
import AddTutorial from "./Components/add-tutorial.component.js";
import Tutorial from "./Components/tutorial.component.js";

import TaskList from "./Components/tasks.list.component.js";
import AddTask from "./Components/add-task.component.js";
import Task from "./Components/task.component.js";

import page404 from './Components/404.js';


function App() {
  return (

  <div>

    <Router>
            <Switch>
              {/* <Route 
                path={ `${ process.env.PUBLIC_URL + "/" }` } 
                component={ Landing } 
              /> */}
              <Route 
                path={ `${ process.env.PUBLIC_URL + "/login-signup" }` } 
                component={ LoginSignup } 
              />
              <Route 
                path="/tutorials"
                component={ TutorialsList } 
              /> 
              <Route 
                path="/add-tutorial" 
                component={ AddTutorial } 
              /> 
              <Route 
                path="/tutorials/:id" 
                component={ Tutorial } 
              /> 
              <Route 
                path="/tasks"
                component={ TaskList } 
              />
              <Route 
                path="/add-task" 
                component={ AddTask } 
              /> 
              <Route 
                path="/tasks/:id" 
                component={ Task } 
              /> 
              <Route exact component={ page404 }/>
            </Switch>
    </Router>

  </div>
  );
}

export default App;


    // <section>
      //  <nav className="navbar navbar-expand navbar-dark bg-dark">
      //     <Link to={"/tutorials"} className="navbar-brand">
      //       TODO LIST
      //     </Link>
      //     <div className="navbar-nav mr-auto">
      //       <li className="nav-item">
      //         <Link to={"/tutorials"} className="nav-link">
      //           Tutorials
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link to={"/add"} className="nav-link">
      //           Add
      //         </Link>
      //       </li>
      //     </div>
      //   </nav>

        {/* <div className="container mt-3"> */}
        // <Switch>
        //     <Route exact path={ `${ process.env.PUBLIC_URL + "/" }` } component={TutorialsList} />
            {/* <Route exact path={["/", "/tutorials"]} component={TutorialsList} /> */}
            {/* <Route exact path="/add" component={AddTutorial} /> */}
            {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
        {/* </Switch> */}
        {/* </div> */}
      // </section>



// function App() {
//   return (
//     <div>
//         <nav className="navbar navbar-expand navbar-dark bg-dark">
//           <Link to={"/tutorials"} className="navbar-brand">
//             TODO LIST
//           </Link>
//           <div className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link to={"/tutorials"} className="nav-link">
//                 Tutorials
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={"/add"} className="nav-link">
//                 Add
//               </Link>
//             </li>
//           </div>
//         </nav>

//         <div className="container mt-3">
//           {/* <Routes>
//             <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
//             <Route exact path="/add" component={AddTutorial} />
//             {/* <Route path="/tutorials/:id" component={Tutorial} />
//           </Routes> */}
//         </div>
//       </div>
//   );
// }

// export default App;


