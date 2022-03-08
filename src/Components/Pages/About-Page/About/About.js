import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import './About.css';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='about-section'>
                <h4 className='mt-5 pt-5 '>This is About Page</h4>
                <h1 className='mt-5 pt-5 mb-5 pb-5 text-success'>Coming soon ...</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;