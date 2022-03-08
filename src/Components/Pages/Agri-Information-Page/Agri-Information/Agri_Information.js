import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import './Agri_Information.css';

const Agri_Information = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='agri-information-section'>
                <h4 className='mt-5 pt-5 '>This is Agricultural Information Page</h4>
                <h1 className='mt-5 pt-5 mb-5 pb-5 text-success'>Coming soon ...</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Agri_Information;