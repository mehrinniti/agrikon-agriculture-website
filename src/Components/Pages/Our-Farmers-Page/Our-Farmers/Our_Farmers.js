import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import './Our_Farmers.css';

const Our_Farmers = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='our-farmers-section'>
                <h4 className='mt-5 pt-5 '>This is Our Farmers Page</h4>
                <h1 className='mt-5 pt-5 mb-5 pb-5 text-success'>Coming soon ...</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Our_Farmers;