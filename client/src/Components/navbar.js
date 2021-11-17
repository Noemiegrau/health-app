import React from "react";
import { Link } from "react-router-dom";
import '../style/navbar.scss'
import '../style/index.scss'

const Navbar = () => {

  return (
    
    <nav className="navbar-container">

{/*  
        <Link to={"/"} className="navbar-brand">
            LOGO
        </Link> */}
        <div className="link-container">
                <Link className="navbar-link" to="/dashboard"><div className="animated-bar" /><p className="link">dashboard</p>
                </Link>
                <Link className="navbar-link" to="/tasks"><div className="animated-bar" /><p className="link">tasks</p>
                </Link>
                <Link className="navbar-link" to="/logout"><div className="animated-bar" /><p className="link">logout</p>
                </Link>
            
        </div>
    </nav>

  );
};

export default Navbar;