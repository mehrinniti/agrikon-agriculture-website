import React, { useEffect } from 'react';
import './ClientHomeSection.css';
import cropsIcon from "../../../../images/icon-crops.png";
import client01 from "../../../../images/Home/client1.jpg";
import client02 from "../../../../images/Home/client2.jpg";
import client03 from "../../../../images/Home/client3.jpg";
import client04 from "../../../../images/Home/client4.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css';

const ClientHomeSection = () => {

    useEffect(() => {
        Aos.init({ duration: 2800 });
    }, []);

    return (
        <div className='client-home-section'>

            <div data-aos="fade-up" className='agricaltureInfo client-home-title-container'>
                <img src={cropsIcon} alt="" />
                <h2>What Client's Say</h2>
                <hr className='home-info-line' />
            </div>

            <div>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col clients-home-img">
                            <img className='bounce-animate animated bounce' src={client01} alt="" />
                            <img src={client02} alt="" />
                            <img className='animated' src={client03} alt="" />
                            <img src={client04} alt="" />
                        </div>
                        <div className="col ">

                            <div>
                                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active client-slide-container">
                                            <i className="fas fa-quote-left quote-icon"></i>
                                            <p> Organically grown crops tend use natural fertilizer like manure to improve growth to plant as amet cons adip scing elited id lectus quis dui euismod con after.</p>

                                            <div className='d-flex client-details-home'>
                                                <img src={client01} className="d-block " alt="..." />

                                                <h4>Ben Stcoks </h4>
                                            </div>
                                        </div>

                                        <div className="carousel-item client-slide-container">
                                            <i className="fas fa-quote-left quote-icon"></i>
                                            <p> Organically grown crops tend use natural fertilizer like manure to improve growth to plant as amet cons adip scing elited id lectus quis dui euismod con after.</p>

                                            <div className='d-flex client-details-home'>
                                                <img src={client02} className="d-block " alt="..." />

                                                <h4>Adam Crew  </h4>
                                            </div>
                                        </div>
                                        <div className="carousel-item client-slide-container">
                                            <i className="fas fa-quote-left quote-icon"></i>
                                            <p> Organically grown crops tend use natural fertilizer like manure to improve growth to plant as amet cons adip scing elited id lectus quis dui euismod con after.</p>

                                            <div className='d-flex client-details-home'>
                                                <img src={client03} className="d-block " alt="..." />

                                                <h4>Jeson Roy </h4>
                                            </div>
                                        </div>
                                        <div className="carousel-item client-slide-container">
                                            <i className="fas fa-quote-left quote-icon"></i>
                                            <p> Organically grown crops tend use natural fertilizer like manure to improve growth to plant as amet cons adip scing elited id lectus quis dui euismod con after.</p>

                                            <div className='d-flex client-details-home'>
                                                <img src={client04} className="d-block " alt="..." />

                                                <h4>Robert Son </h4>
                                            </div>
                                        </div>
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

export default ClientHomeSection;