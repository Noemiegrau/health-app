import React, { useState } from 'react';
import '../style/login.scss';
import { FaUser } from 'react-icons/fa';
import UserDataService from "../services/user.service.js";



export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    // const [wrongEmail, setWrongEmail] = useState(false)
    // const [wrongPassword, setWrongPassword] = useState(false)

    const signUser = () => {
        let data = {
          email: email,
          password: password,
          username: name
        };
        console.log(data)
        UserDataService.create(data)
            .then(response => {
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            })
    }

    const loginUSer = () => {
        let data = {
            email: email,
            password: password,
        }
        console.log(data)
        UserDataService.login(data)
        .then(response => {
            console.log(response.data)
        })



    }
    

    const [toggle, setToggle] = useState('');
    const toggleClass = () => {
        setToggle(!toggle)
    }

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
                            
                            <div className="input-container">
                                <div className="title-container" >login</div>
                                <input className="input input-email" type="text" placeholder="email" label="email"   onChange={(e) => {
                                setEmail(e.target.value)
                            }}></input>
                                <input className="input input-password" type="password" placeholder="password" label="password"   onChange={(e) => {
                                setPassword(e.target.value)
                            }}></input>
                            </div>

                            <button className="submit-button" onClick={loginUSer} >submit</button>

                            <span className="forgot-pw-question">forgot your password ?</span>

                        </div>
                          {/* SIGNUP */}
                        <div className={toggle ? "toggle-signup-container" : "toggle-signup-container-hidden"}>

                            <div className="input-container">
                                <div className="title-container">signup</div>
                                <input className="input name" type="text" placeholder="name" label="name" onChange={(e) => {
                                setName(e.target.value)
                            }}></input>
                                <input className="input input-email" type="text" placeholder="email" label="email"   onChange={(e) => {
                                setEmail(e.target.value)
                            }}></input>
                                <input className="input input-password" type="password" placeholder="password" label="password"   onChange={(e) => {
                                setPassword(e.target.value)
                            }}></input>
                            </div>

                            <button className="submit-button" onClick={signUser}>submit</button>

                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}
