import React from 'react';
import './Banner.css';
import Typed from 'react-typed';
import logo from "../../../../images/logo-icon.png"
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <img src={logo} alt="" />
                <h1>Welcome to <br /><span className="lastname">agrikon </span></h1>

                <h3 className="text-white">We provide <Typed

                    className="typed-text"
                    strings={["Agricultural Information", "Fresh Goods", "Farm Information"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop

                /></h3>
                <Link to="/home" className="green-btn">Get Started</Link>
                {/* <button type="button" class="btn btn-outline-info rounded-pill resume-btn ">Download My Resume</button> */}


            </div>

        </div>
    );
};

export default Banner;