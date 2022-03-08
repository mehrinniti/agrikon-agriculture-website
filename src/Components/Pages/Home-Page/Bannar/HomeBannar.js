import React, { useEffect } from 'react';
import "./HomeBannar.css";
import banner1 from "../../../../images/Home/homeBanner1.jpg";
import banner2 from "../../../../images/Home/homeBanner2.jpg";
import banner3 from "../../../../images/Home/homeBanner3.jpg";
import banner4 from "../../../../images/Home/homeBanner4.jpg";
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HomeBannar = () => {

    useEffect(() => {
        Aos.init({ duration: 2800 });
    }, []);

    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">

                    <div className="carousel-item active  home-banner">
                        <img src={banner1} className="d-block w-100 banner-img" alt="..." />
                        {/* <div>
                            <h1>WELCOME TO AGRIKON</h1>
                        </div> */}
                        <div className="carousel-caption d-none d-md-block home-banner-text-left">
                            <div data-aos="fade-up">
                                <h4><span className='small-text'>THE BEST AGRICULTURE PRODUCTS</span></h4>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="1000">
                                <h1><span className='big-text'>WELCOME TO <br /> AGRICULTURE FARM</span></h1>
                            </div>
                            {/* <button type="button" className="btn  outline-btn">CONTACT US</button> */}

                            <div data-aos="zoom-in">
                                <span className='empty-btn'>
                                    <Link to="/contact" className="btn outline-btn">CONTACT US</Link>
                                </span>
                            </div>

                        </div>
                    </div>

                    <div className="carousel-item home-banner">
                        <img src={banner2} className="d-block w-100 banner-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block home-banner-text-right">
                            <h1><span className='big-text'><span className='green-text'>AGRIKON</span> GROWN <br />BY NATURE</span></h1>
                            <p>We are a company dedicated to giving our customers back the time they deserve to enjoy the things they love.</p>

                            <span className='empty-btn'>
                                <Link to="/contact" className="btn outline-btn">CONTACT US</Link>
                            </span>

                        </div>
                    </div>

                    <div className="carousel-item home-banner">
                        <img src={banner3} className="d-block w-100 banner-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block home-banner-text-left">
                            <div data-aos="fade-left">
                                <h4><span className='small-text'>WE KNOW AGRICULTURE</span></h4>
                            </div>
                            <h1><span className='big-text'>THE <span className='green-text'>LEADER</span> <br />IN THE FIELD</span></h1>

                            <span className='empty-btn'>
                                <Link to="/contact" className="btn outline-btn">CONTACT US</Link>
                            </span>
                        </div>
                    </div>

                    <div className="carousel-item home-banner">
                        <img src={banner4} className="d-block w-100 banner-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block home-banner-text-right">
                            <h4><span className='small-text'>CULTIVATING IDEAS</span></h4>
                            <h1><span className='big-text'>A BRIGHT <span className='green-text'>NATURE </span><br />OF DECISION</span></h1>

                            <span className='empty-btn'>
                                <Link to="/contact" className="btn outline-btn">CONTACT US</Link>
                            </span>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>







        </div>
    );
};

export default HomeBannar;