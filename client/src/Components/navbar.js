import React, {useState} from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from 'react-icons/io';
import '../style/navbar.scss'
import '../style/index.scss'

const Navbar = () => {

  const [show, setShow] = useState(false)

  function displayUserContainer() {
    setShow(!show)
  }

  
  return (
    
    <nav className="navbar-container">

        <div className="link-container">
                <Link className="navbar-link" to="/"><div className="animated-bar" /><p className="link">dashboard</p>
                </Link>
                <Link className="navbar-link" to="/todolist"><div className="animated-bar" /><p className="link">todolist</p>
                </Link>
                <Link className="navbar-link" to="/login"><div className="animated-bar" /><p className="link">login</p>
                </Link>
                <Link className="navbar-link" to="/about"><div className="animated-bar" /><p className="link">About</p>
                </Link>
                <div className="navbar-link" >
                  <div className="user-icon-box" onClick={displayUserContainer}>
                    <div className="round-user-icon"></div>
                    <div className="arrow-down"><IoMdArrowDropdown style={{ fill: 'white' }} /></div>
                    <Link to="/logout"></Link>
                  </div>
                  
                  <div className={show ? "container-user-links" : "display-none"}>
                      <p className="container-user-txt">signed in as Noémie</p>
                      <div className="bar"/>
                      <p className="container-user-txt">Your profile</p>
                      <div className="bar"/>
                      <p className="container-user-txt">Sign out</p>
                  </div>
                </div>
              
            
        </div>
    </nav>

  );
};

export default Navbar;