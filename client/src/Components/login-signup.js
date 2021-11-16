import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/tutorial.service.js";
import { Link } from "react-router-dom";
import Navbar from "./navbar.js";

const LoginSignup = () => {
    return (
<div>
    <Navbar />
<div id="main-container" class="">
<div class="container login-container">
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <h3>Login</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" id="email-login" class="form-control" placeholder="Your Email *" />
                        </div>
                        <div class="form-group">
                            <input type="password" id="password-login" class="form-control" placeholder="Your Password *" />
                        </div>
                        <div class="form-group">
                            <input id="loginpagebutton" type="submit" onclick="handleSubmit()" class="btnSubmit" value="Login" />
                        </div>
                    </form>
                </div>
                <div id="div-form-sign-up" class="col-md-6 login-form-2">
                    <h3>Create an account</h3>
                    <form id="create-account-form" >
                        <div class="form-group">
                            <input type="text" id="first-name-signup" class="form-control" placeholder="Your First Name *" />
                        </div>
                        <div class="form-group">
                            <input type="text" id="last-name-signup" class="form-control" placeholder="Your Last Name *" />
                        </div>
                        <div class="form-group">
                            <input type="text" id="employee-number-signup" class="form-control" placeholder="Your Employee Number *" />
                        </div>
                        <div class="form-group">
                            <input type="text" id="email-signup" class="form-control" placeholder="Your Email *" />
                        </div>
                        <div class="form-group">
                            <input type="password" id="password-signup" class="form-control" placeholder="Your Password *" />
                        </div>
                        <div class="form-group">
                            <input id="sign-up-btn" type="submit" class="btnSubmit" value="Sign up" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
</div>
</div>  
);
};

export default LoginSignup;