import React, { useEffect } from 'react';
import './AboutCompany.css';
import image1 from "../../../../images/Home/img-1.jpg";
import image2 from "../../../../images/Home/icon-1.png";
import image3 from "../../../../images/Home/icon-2.png";
import image4 from "../../../../images/Home/tm-icon01.png";
import image5 from "../../../../images/Home/tm-icon02.png";
import image6 from "../../../../images/Home/tm-icon03.png";
import image7 from "../../../../images/Home/tm-icon04.png";
import Aos from 'aos';
import 'aos/dist/aos.css';


const AboutCompany = () => {


    useEffect(() => {
        Aos.init({ duration: 2800 });
    }, []);



    const counterContainer = document.querySelectorAll('.counter');
    const speed = 200;

    counterContainer.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const inc = target / speed;

            if (count < target) {
                counter.innerText = count + inc;
                setTimeout(updateCount, 1);
            }
            else {
                // count.innerText = target;
            }
        }

        updateCount();
    });



    return (
        <div className=' about-company-container '>
            <div className="container ">
                <div className="row align-items-start">
                    <div data-aos="zoom-in" className="col about-company-img">

                        <img src={image1} alt="" />
                    </div>
                    <div data-aos="fade-down" className="col about-company-text ms-4">
                        <h4>About Us</h4>
                        <h1>BRINGING GROWTH TO AGRICULTURE</h1>
                        <p>We provide leading solutions to agricultural and agro-industrial production through world-class products and services, always committed to meeting the needs and expectations.</p>
                        <p>People at Farmey are helping farmers to emerging markets maximize their profits. We use agronomic.</p>


                        <div className="">
                            <div className="row align-items-start">
                                <div className="col">
                                    <img className=' about-company-icon w-10 h-10' src={image2} alt="" />
                                    <h5>We are Passionate</h5>
                                    <p>Latest analysis by the Cadre Harmonisé.</p>
                                </div>
                                <div className="col">
                                    <img className=' about-company-icon w-10 h-10' src={image3} alt="" />
                                    <h5>Industry Oriented</h5>
                                    <p>Enabling Ecosystem for Food and Agriculture.</p>
                                </div>

                            </div>

                        </div>



                    </div>

                </div>

            </div>




            <div className="container mt-4 counterContainer">
                <div className="container row align-items-start">
                    <div className="col">
                        <div data-aos="zoom-in" className="row align-items-start">
                            <div className='col counter-section text-end'>
                                <img src={image4} alt="" />
                            </div>
                            <div className='col counter-section counter-text text-start'>
                                <h6 className='counter-title'>Team Member</h6>
                                <div className="counter" data-target='600'>2897</div>
                            </div>
                        </div>



                    </div>


                    <div className="col">
                        <div data-aos="zoom-in" data-aos-delay="600" className="row align-items-start">
                            <div className='col counter-section text-end'>
                                <img src={image5} alt="" />
                            </div>
                            <div className='col counter-section counter-text text-start'>
                                <h6 className='counter-title'>Projects Done</h6>
                                <div className="counter" data-target="600">1370</div>
                            </div>
                        </div>

                    </div>


                    <div className="col">
                        <div data-aos="zoom-in" data-aos-delay="1200" className="row align-items-start">
                            <div className='col counter-section text-end'>
                                <img src={image6} alt="" />
                            </div>
                            <div className='col counter-section counter-text text-start'>
                                <h6 className='counter-title'>Happy Clients</h6>
                                <div className="counter" data-target="600">5687</div>
                            </div>
                        </div>

                    </div>


                    <div className="col">
                        <div data-aos="zoom-in" data-aos-delay="1800" className="row align-items-start">

                            <div className='col counter-section text-end'>
                                <img src={image7} alt="" />
                            </div>
                            <div className='col counter-section counter-text text-start'>
                                <h6 className='counter-title'>Cup Of Coffee</h6>
                                <div className="counter" data-target="600">9874</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    );
};

export default AboutCompany;