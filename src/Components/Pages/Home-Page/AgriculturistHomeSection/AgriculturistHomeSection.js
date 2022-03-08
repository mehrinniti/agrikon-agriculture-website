import React, { useEffect } from 'react';
import './AgriculturistHomeSection.css';
import cows from '../../../../images/Home/cow-removebg-preview.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AgriculturistHomeSection = () => {


    useEffect(() => {
        Aos.init({ duration: 2800 });
    }, []);


    return (
        <div className='agriculturist-container mb-5'>


            <div className="container">

                <div className="row align-items-center agriculturist-section">
                    <div data-aos="fade-up" className="col-7">
                        <h1>A person who is specializes in this field is called as “Agriculturists”.</h1>
                    </div>
                    <div data-aos="fade-right" className="col-5">
                        <img src={cows} alt="" />
                    </div>

                </div>

            </div>


        </div>
    );
};

export default AgriculturistHomeSection;