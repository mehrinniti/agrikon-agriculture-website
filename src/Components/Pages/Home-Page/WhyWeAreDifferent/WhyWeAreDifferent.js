import React, { useEffect } from 'react';
import './WhyWeAreDifferent.css';
import cropsIcon from "../../../../images/icon-crops.png";
import icon01 from "../../../../images/Home/icon01 (1).png"
import icon02 from "../../../../images/Home/icon01 (2).png"
import icon03 from "../../../../images/Home/icon01 (3).png"
import icon04 from "../../../../images/Home/icon01 (4).png"
import icon05 from "../../../../images/Home/icon01 (5).png"
import icon06 from "../../../../images/Home/icon01 (6).png"
import Aos from 'aos';
import 'aos/dist/aos.css';

const WhyWeAreDifferent = () => {

    useEffect(() => {
        Aos.init({ duration: 2800 });
    }, []);

    return (
        <div className='Why-we-are-different-section'>

            <div data-aos="fade-up" className='agricaltureInfo'>
                <img src={cropsIcon} alt="" />
                <h2>Why we're different</h2>
                <hr className='home-info-line why-different-hr-line' />
            </div>



            <div className="container why-different-cards-container">
                <div data-aos="fade-up" className="row align-items-start">
                    <div className="col">
                        <div className="card mb-3 border-0 shadow "    >
                            <div className="row g-0 why-different-card-container">
                                <div className="col-md-4">
                                    <img src={icon01} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text">We are straight forward to deal with experts in our field.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="card mb-3 border-0 shadow "    >
                            <div className="row g-0 why-different-card-container">
                                <div className="col-md-4">
                                    <img src={icon02} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text">We take responsible lending seriously and believe.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div data-aos="fade-up" className="row align-items-start">
                    <div className="col">
                        <div className="card mb-3 border-0 shadow "    >
                            <div className="row g-0 why-different-card-container">
                                <div className="col-md-4">
                                    <img src={icon03} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text">If we can’t help you, we will tell you quickly and honestly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="card mb-3 border-0 shadow "    >
                            <div className="row g-0 why-different-card-container">
                                <div className="col-md-4">
                                    <img src={icon04} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text">You can talk directly to a lending decision maker.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div data-aos="fade-up" className="row align-items-start">
                    <div className="col">
                        <div className="card mb-3 border-0 shadow "    >
                            <div className="row g-0 why-different-card-container">
                                <div className="col-md-4">
                                    <img src={icon05} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text">We offer a no-nonsense app roach and speak farming.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3 border-0 shadow "    >
                            <div className="row g-0 why-different-card-container">
                                <div className="col-md-4">
                                    <img src={icon06} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text">Loan officers have practical experience of building.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </div>


        </div>
    );
};

export default WhyWeAreDifferent;