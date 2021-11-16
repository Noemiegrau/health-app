import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
            LOGO
        </Link>
        <div className="navbar-nav mr-auto">

            {/* <li className="nav-item">
                <Link to={"/tutorials"} className="nav-link">
                    Tutorials
                </Link>
            </li>*/}
            
            <li className="nav-item">
                <Link to={"/dashboard"} className="nav-link">
                Dashboard
                </Link>
            </li> 

            <li className="nav-item">
                <Link to={"/tasks"} className="nav-link">
                    Tasks
                </Link>
            </li>

            <li className="nav-item">
                <Link to={"/logout"} className="nav-link">
                    Logout
                </Link>
            </li>
            LOGOUT
        </div>
    </nav>

  );
};

export default Navbar;