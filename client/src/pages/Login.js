import React, { useState } from 'react';
import '../style/login.scss';
import { FaUser } from 'react-icons/fa';
import UserDataService from "../services/user.service.js";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default function Login() {

    const initialUserState = {
        id: null,
        username:"",
        email: "",
        password: ""
    };
    const [user, setUser] = useState(initialUserState);
    // const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };


    const [toggle, setToggle] = useState('');
    const toggleClass = () => {
        setToggle(!toggle)
    }

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
             //   setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
            // .then(window.location.reload(false));
    };

    const newUser = () => {
        setUser(initialUserState);
      //  setSubmitted(false);
    };



    return (
        <div className="main-container">

            <div className="container">

                <div className="selection-top-container">

                    <div className="sign-log-container">
                        <div>login</div>
                        <div>signup</div>

                    </div>
                    <link href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" rel="stylesheet" />
                    <input onClick={toggleClass} id="checkbox" type="checkbox" value="login" name=""></input>



                </div>


                <div className={toggle ? "rotate-animation" : "rotate-animation-reverse"}>

                    <div className="login-container">


                        <div className="circle-user">
                            <FaUser className="user-icon" />
                        </div>
                        {/* LOGIN */}
                        <div className={toggle ? "toggle-login-container-hidden" : "toggle-login-container"}>

                            <form className="input-container">
                                <div className="title-container" >login</div>
                                <div className="form-group">
                                    <input type="text" id="email-login" className="input input-email" placeholder="Your Email *" />
                                </div>
                                <div className="form-group">
                                    <input type="password" id="password-login" className="input input-password" placeholder="Your Password *" />
                                </div>
                                <div className="form-group">
                                    <input id="loginpagebutton" type="submit" className="submit-button" value="Login" />
                                </div>
                            </form>



                            <span className="forgot-pw-question">forgot your password ?</span>

                        </div>
                        {/* SIGNUP */}
                        <div className={toggle ? "toggle-signup-container" : "toggle-signup-container-hidden"}>

                            <form className="input-container">
                                <div className="title-container">signup</div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="username"
                                        className="input name"
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
                                        className="input input-email"
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
                                        className="input input-password"
                                        validations={[required]}
                                        required
                                        value={user.password}
                                        onChange={handleInputChange}
                                        name="password"
                                        placeholder="Your Password *" />
                                </div>
                                <button className="submit-button" onClick={saveUser}>submit</button>

                            </form>


                        </div>

                    </div>
                </div>



            </div>
        </div >
    )
}
