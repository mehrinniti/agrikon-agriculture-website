import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='dashboard-section'>
                <h4 className='mt-5 pt-5 '>This is Dashboard Page</h4>
                <h5 className='text-secondary mt-5'>User = Home, My orders, Review (optional), Pay, Log out <br />
                    Admin = Home, Manage all orders, Add a product, Manage admin, log out
                </h5>
                <h1 className='mt-5 pt-5 mb-5 pb-5 text-success'>Coming soon ...</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;