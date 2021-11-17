import React from 'react'
import { Link } from 'react-router-dom'
import '../style/navbar.scss'
import '../style/index.scss'


export default function Navbar() {
    return (
        <div className="navbar-container">
            
            <div className="link-container">
                <Link className="navbar-link" to="/"><div className="animated-bar" /><p className="link">home</p>
                </Link>
                <Link className="navbar-link" to="/login"><div className="animated-bar" /><p className="link">login</p>
                </Link>
                <Link className="navbar-link" to="/about"><div className="animated-bar" /><p className="link">about</p>
                </Link>
                <Link className="navbar-link" to="/todolist"><div className="animated-bar" /><p className="link">todolist</p>
                </Link>
    
            </div>
        </div>


    )
}
