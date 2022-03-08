import React, { useEffect } from 'react';
import './ProductProvideHomeSection.css';
import cropsIcon from "../../../../images/icon-crops.png";
import icon01 from "../../../../images/Home/icon-3.png";
import icon02 from "../../../../images/Home/icon-4.png";
import icon03 from "../../../../images/Home/icon-5.png";
import icon04 from "../../../../images/Home/icon-6.png";
import icon05 from "../../../../images/Home/icon-7.1.png";
import icon06 from "../../../../images/Home/icon-8.png";
import Aos from 'aos';
import 'aos/dist/aos.css';


const ProductProvideHomeSection = () => {

    useEffect(() => {
        Aos.init({ duration: 2800 });
    }, []);

    return (
        <div className='product-home-section mb-5'>
            <div data-aos="fade-up" className='agricaltureInfo product-home-title'>
                <img src={cropsIcon} alt="" />
                <h2>We Providing Fresh Products</h2>
                <hr className='home-info-line' />
            </div>


            <div className='home-product-container'>
                <div className="container card-container ">
                    <div data-aos="fade-up" className="row align-items-start ">
                        <div className="col home-product-card me-4 home-product-card-container mobile-responsive-1st-3-card tablet-responsive-1">
                            <img src={icon01} alt="" />
                            <h4>Vegetables</h4>
                            <p>Homes and thoroughly launder them between usage, We give our teams.</p>
                        </div>
                        <div className="col home-product-card me-4 home-product-card-container mobile-responsive-1st-3-card tablet-responsive-1 tablet-responsive-2">
                            <img src={icon02} alt="" />
                            <h4>Fresh Fruits</h4>
                            <p>We are closely monitoring national, state and local health developments.</p>
                        </div>
                        <div className="col home-product-card home-product-card-container mobile-responsive-1st-3-card mobile-responsive-cattle tablet-responsive-1">
                            <img src={icon03} alt="" />
                            <h4>Healty Cattle</h4>
                            <p>Follow these tips from the CDC to help prevent the spread of the seasonal.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="row align-items-center mt-4">
                        <div className="col home-product-card me-4 mobile-responsive-2nd-3-card mobile-responsive-wheats tablet-responsive-1 tablet-responsive-2">
                            <img src={icon04} alt="" />
                            <h4>Natural Wheats</h4>
                            <p>Industra plays a large role in the comfort of your home, but many.</p>
                        </div>
                        <div className="col home-product-card me-4 mobile-responsive-2nd-3-card mobile-responsive-materials tablet-responsive-1">
                            <img src={icon05} alt="" />
                            <h4>Agri Materials</h4>
                            <p>We realize that every family has their own preferences, so we accommodate.</p>
                        </div>
                        <div className="col home-product-card mobile-responsive-2nd-3-card mobile-responsive-farm tablet-responsive-1 tablet-responsive-2">
                            <img src={icon06} alt="" />
                            <h4>Farm Plans</h4>
                            <p>While cleaning companies use rotating cleaning plans, we’re equipped.</p>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default ProductProvideHomeSection;