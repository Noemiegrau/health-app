import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Todolist from './pages/Todolist'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import LoginSignup from './Components/Login-signup'


import './style/index.scss'


ReactDOM.render( 
  
  <Router>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />  
      <Route path="/todolist" element={<Todolist />} />  
      <Route path="/login-signup" element={<LoginSignup />} />

    </Routes>
    <Footer /> 
  </Router>,
  document.getElementById('root')
)




