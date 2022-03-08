import React, { useEffect } from 'react';
import './Footer.css';
import footerLogo from '../../../images/Footer-logo.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 2800 });
    }, []);


    return (
        <div className='Footer-section'>

            <div className="container">
                <div className="row align-items-start">
                    <div data-aos="zoom-in" data-aos-delay="400" className="col footer-first-column ">
                        <img src={footerLogo} alt="" />
                        <p>We are dedicated to the production and marketing of mass consumer products. Its business units are the manufacture of chemicals for household hygiene and personal care.</p>

                        <span className='footer-social-container'>
                            <a target="_blank" href="https://facebook.com"><i className="fab fa-facebook-f footer-social-icon footer-facebook me-3  mt-3"></i></a>
                            <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter footer-social-icon me-3"></i></a>
                            <a target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram footer-social-icon footer-instagram"></i></a>
                        </span>

                    </div>
                    <div data-aos="zoom-in" data-aos-delay="1000" className="col footer-second-column ">
                        <h3>Contact</h3>
                        <hr />
                        <div>
                            <p>
                                <i className="fas fa-phone-square"></i><a target="_blank" href="tel:666-888-0000">666 888 0000</a><br />
                                <i className="fas fa-envelope"></i><a target="_blank" href="mailto:agrikon@company.com">agrikon@company.com</a><br />
                                <i className="fas fa-map-marker-alt"></i><a href="#">Green Road, Panthapath <br /><span className='ms-4 ps-2'>Dhaka, Bangladesh</span> </a>
                            </p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="2000" className="col footer-third-column">
                        <h3>Quick Links</h3>
                        <hr />
                        <div>
                            <p>
                                <i className="fas fa-angle-right"></i><Link to="/about" className='footer-link'>About</Link><br />
                                <i className="fas fa-angle-right"></i><Link to="/info" className='footer-link'>Agricultural Information</Link><br />
                                <i className="fas fa-angle-right"></i><Link to="/farmers" className='footer-link'>Our Farmers</Link><br />
                                <i className="fas fa-angle-right"></i><Link to="/products" className='footer-link'>Products</Link><br />
                                <i className="fas fa-angle-right"></i><Link to="/orders" className='footer-link'>My Orders</Link><br />
                                <i className="fas fa-angle-right"></i><Link to="/contact" className='footer-link'>Contact</Link><br />
                                {/* <i className="fas fa-angle-right"></i><Link></Link> */}
                            </p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="3000" className="col footer-fourth-column">
                        <h3>Newsletter</h3>
                        <hr />
                        <p>Subscribe our newsletter to get more update & join to agrikon</p>

                        <div className="mb-3">
                            <input type="email" className="form-control footer-email-input" id="exampleFormControlInput1" placeholder="  Your Email" />
                        </div>

                        <button type="button" className="btn btn-success subscribe-btn">Subscribe</button>

                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <hr className='mt-5' />
                        <p>2022 © Copyright agrikon. All Rights Reserved.</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Footer;