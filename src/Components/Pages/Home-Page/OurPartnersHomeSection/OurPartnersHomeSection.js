import React, { useEffect } from 'react';
import './OurPartnersHomeSection.css';
import cropsIcon from "../../../../images/icon-crops.png";
import partner1 from "../../../../images/Home/1.png"
import partner2 from "../../../../images/Home/2.png"
import partner3 from "../../../../images/Home/3.png"
import partner4 from "../../../../images/Home/4.png"
import partner5 from "../../../../images/Home/5.png"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const OurPartnersHomeSection = () => {

    useEffect(() => {
        Aos.init({ duration: 2800 });
    }, []);

    return (
        <div className='partners-home-section'>
            <div data-aos="fade-up" className='agricaltureInfo'>
                <img src={cropsIcon} alt="" />
                <h2>Our partners</h2>
                <hr className='home-info-line' />
            </div>

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">


                        <div className="container">
                            <div className="row align-items-start">
                                <div className="col partners">
                                    <a target="_blank" href="https://oreo-health-care.web.app/"><img src={partner1} alt="" /></a>
                                </div>
                                <div className="col partners">
                                    <a target="_blank" href="https://oreo-health-care.web.app/"><img src={partner2} alt="" /></a>
                                </div>
                                <div className="col partners">
                                    <a target="_blank" href="https://oreo-health-care.web.app/"><img src={partner3} alt="" /></a>
                                </div>
                                <div className="col partners">
                                    <a target="_blank" href="https://oreo-health-care.web.app/"><img src={partner4} alt="" /></a>
                                </div>
                            </div>

                        </div>



                    </div>
                    <div className="carousel-item">


                        <div className="container">
                            <div className="row align-items-start">
                                <div className="col partners">
                                    <a target="_blank" href="https://oreo-health-care.web.app/"><img src={partner5} alt="" /></a>
                                </div>
                                <div className="col partners">
                                    <a target="_blank" href="https://oreo-health-care.web.app/"><img src={partner4} alt="" /></a>
                                </div>
                                <div className="col partners">
                                    <a target="_blank" href="https://oreo-health-care.web.app/"><img src={partner1} alt="" /></a>
                                </div>
                                <div className="col partners">
                                    <a target="_blank" href="https://oreo-health-care.web.app/"><img src={partner3} alt="" /></a>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
            </div>

            <div>

            </div>


        </div>
    );
};

export default OurPartnersHomeSection;