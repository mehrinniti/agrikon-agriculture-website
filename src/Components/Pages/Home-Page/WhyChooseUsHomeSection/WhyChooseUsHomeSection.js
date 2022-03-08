import React, { useEffect } from 'react';
import './WhyChooseUsHomeSection.css';
import image01 from "../../../../images/Home/why-choose-us.jpg";
// import image01 from "../../../../images/Home/image.jpg";
import bg from "../../../../images/Home/why-choose-us-bg.png";
import signature from "../../../../images/Home/signature-removebg-preview.png";
import Aos from 'aos';
import 'aos/dist/aos.css';


const WhyChooseUsHomeSection = () => {

    useEffect(() => {
        Aos.init({ duration: 2800 });
    }, []);

    return (
        <div className='why-choose-us-home-section'>

            <div className=" why-choose-us-home-container">
                <div className="row align-items-start choose-us-row-container">
                    <div className="col-6">
                        <img className='choose-us-img' src={image01} alt="" />
                    </div>
                    <div className="col-6 why-choose-us-details">
                        <div data-aos="fade-down">
                            <h1>WHY CHOOSE US</h1>
                            <p>We provide leading solutions to agricultural and agroindustrial production through world-class products and services, always committed to meeting needs and expectations. <br /><br />Promoting the continuous improvement of human and technological resources, generating competitive profitability.</p>
                            <div className='choose-us-signature'>
                                <img src={signature} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default WhyChooseUsHomeSection;