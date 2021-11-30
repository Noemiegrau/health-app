import React, { useState } from 'react'
import '../style/about.scss';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import profilePhoto1 from '../images/profilePicture.webp';
import profilePhoto2 from '../images/profilePicture2.webp';

export default function About() {


    const [toggle, setToggle] = useState(false)

    const slideProfile = () => {
        setToggle(!toggle)
    }

    return (
        <div className="main-container-about">

            <div className="arrows-container">
                <MdArrowBackIosNew onClick={slideProfile} className="arrow" style={{ fill: 'white' }} />
                <MdArrowForwardIos onClick={slideProfile} className className="arrow" style={{ fill: 'white' }} />
            </div>

            <div id="slider">
                <div className={toggle ? "profile profile1 none" : "profile profile1 visible"}>
                    <div className="display-flex">
                        <img className="photo-profile" src={profilePhoto1} alt="photo-profile" />
                        <div className="description">
                        <h2>Noémie</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>
                    </div>

                </div>

                <div className={toggle ? "profile profile2 visible" : "profile profile2 none"}>
                    <div className="display-flex">
                        <div className="description">
                        <h2>Agnès</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <img className="photo-profile" src={profilePhoto2} alt="photo-profile" />
                    </div>

                </div>

            </div>

        </div>

    )
}
