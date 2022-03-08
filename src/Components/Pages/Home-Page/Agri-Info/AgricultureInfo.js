import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AgricultureInfo.css'
import cropsIcon from "../../../../images/icon-crops.png"
import cowInfo from "../../../../images/Home/cow-img.jpg"
import riceInfo from "../../../../images/Home/rice-field-paddy-food.jpg"
// import grainInfo from "../../../../images/Home/grain-img.jpg"
import FistInfo from "../../../../images/Home/fish-1.jpg"

import Aos from 'aos';
import 'aos/dist/aos.css';

const AgricultureInfo = () => {

    useEffect(() => {
        Aos.init({ duration: 2800 });
    }, []);


    return (
        <div className='agricaltureInfo'>
            <div data-aos="fade-up">
                <img src={cropsIcon} alt="" />
                <h2>Agricultural Information</h2>
                <hr className='home-info-line' />
            </div>


            <div data-aos="fade-up" className="container-lg">
                <div className="row align-items-start info-container">
                    <div className="col img-section">
                        <Link to="/riceInfo">
                            <span data-aos="flip-left">
                                <img className='info-img rice-home-img ' src={riceInfo} alt="" />
                            </span>
                        </Link>

                    </div>
                    <div className="col">
                        <Link to="/cattleInfo"><img className='rice-home-img' src={cowInfo} alt="" /></Link>
                    </div>
                    <div className="col">
                        <Link to="/fishInfo"><img src={FistInfo} alt="" /></Link>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default AgricultureInfo;