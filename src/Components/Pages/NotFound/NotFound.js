import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './NotFound.css';
import image404 from "../../../images/404 error with a landscape.gif";

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={image404} alt="" />
            <br />


            <span className='green-outline-btn'>
                <Link to="/home" className="btn outline-btn green-colorless-btn"><i class="fas fa-chevron-left back-icon"></i> Go Back Home</Link>
            </span>


        </div>
    );
};

export default NotFound;