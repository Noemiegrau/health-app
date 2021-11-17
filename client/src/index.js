import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Todolist from './pages/Todolist'
import Navbar from './Components/Navbar'

import Footer from './Components/Footer'
import './style/index.scss'


ReactDOM.render( 
  
  <Router>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />  
      <Route path="/todolist" element={<Todolist />} />  
    </Routes>
    <Footer /> 
  </Router>,
  document.getElementById('root')
)




// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from "react-router-dom";

// import App from './App';
// // import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();