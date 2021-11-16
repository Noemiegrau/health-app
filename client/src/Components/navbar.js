import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/tutorials"} className="navbar-brand">
            TO-DO List
        </Link>
        <div className="navbar-nav mr-auto">

            <li className="nav-item">
                <Link to={"/tutorials"} className="nav-link">
                    Tutorials
                </Link>
            </li>
            
            <li className="nav-item">
                <Link to={"/add-tutorial"} className="nav-link">
                    Add Tutorial
                </Link>
            </li>

            <li className="nav-item">
                <Link to={"/tasks"} className="nav-link">
                    Tasks
                </Link>
            </li>

            <li className="nav-item">
                <Link to={"/add-task"} className="nav-link">
                    Add Task
                </Link>
            </li>
        </div>
    </nav>

  );
};

export default Navbar;