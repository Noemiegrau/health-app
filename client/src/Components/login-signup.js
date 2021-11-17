import React, { useState, useEffect } from "react";
import UserDataService from "../services/user.service.js";
import { Link } from "react-router-dom";
import Navbar from "./navbar.js";

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

const LoginSignup = () => {
    const initialUserState = {
        id: null,
        email: "",
        password: ""
      };
      const [user, setUser] = useState(initialUserState);
      const [submitted, setSubmitted] = useState(false);
    
      const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
      };

    //   const handleLogin = (e) => {
    //     // e.preventDefault();
    //     var data = {
    //         email: user.email,
    //         password: user.password,
    //     }

    //     UserDataService.login()
    //     .then(response => {
    //         setUser({
    //           id: response.data.id,
    //           email: response.data.email,
    //           password: response.data.password
    //         });
    //         setSubmitted(true);
    //         console.log(response.data);
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       })
    //       .then(window.location.reload(false));
    //   };







      const saveUser = () => {
        var data = {
          username: user.username,
          email: user.email,
          password: user.password
        };
    
        UserDataService.create(data)
          .then(response => {
            setUser({
              id: response.data.id,
              username: response.data.username,
              email: response.data.email,
              password: response.data.password
            });
            setSubmitted(true);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          })
          .then(window.location.reload(false));
      };

      const newUser = () => {
        setUser(initialUserState);
        setSubmitted(false);
      };


    return (
    <div>
        <Navbar />
        <div id="main-container" className="">
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Login</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" id="email-login" className="form-control" placeholder="Your Email *" />
                        </div>
                        <div className="form-group">
                            <input type="password" id="password-login" className="form-control" placeholder="Your Password *" />
                        </div>
                        <div className="form-group">
                            <input id="loginpagebutton" type="submit" className="btnSubmit" value="Login" />
                            {/* <input id="loginpagebutton" type="submit" onClick={handleLogin} className="btnSubmit" value="Login" /> */}
                        </div>
                    </form>
                </div>
                <div id="div-form-sign-up" className="col-md-6 login-form-2">
                    
                    <h3>Create an account</h3>
                    {submitted ? (
                        <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={newUser}>
                            Add more users?
                        </button>
                        </div>
                    ) : (
                    <form id="create-account-form" >
                        <div className="form-group">
                            <input 
                            type="text" 
                            id="username" 
                            className="form-control" 
                            validations={[required]}
                            required
                            value={user.username}
                            onChange={handleInputChange}
                            name="username"
                            placeholder="Your Username *" />
                        </div>
                        <div className="form-group">
                            <input 
                            type="text" 
                            id="email" 
                            className="form-control" 
                            validations={[required]}
                            required
                            value={user.email}
                            onChange={handleInputChange}
                            name="email"
                            placeholder="Your Email *" />
                        </div>
                        <div className="form-group">
                            <input 
                            type="password" 
                            id="password" 
                            className="form-control" 
                            validations={[required]}
                            required
                            value={user.password}
                            onChange={handleInputChange}
                            name="password"
                            placeholder="Your Password *" />
                        </div>
                        <button onClick={saveUser} className="btn btn-success">
                            Submit
                        </button>
                        {/* <div className="form-group">
                            <input id="sign-up-btn" type="submit" className="btnSubmit" value="Sign up" />
                        </div> */}
                    </form>
                    )}
                </div>
            </div>
        </div>
</div>
</div>  
);
};

export default LoginSignup;