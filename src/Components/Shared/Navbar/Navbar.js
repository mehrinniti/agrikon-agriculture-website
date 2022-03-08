import React from 'react';
import './Navbar.css';
import logo from "../../../images/logoWithName.svg"
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const { user, signout } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top ">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <img className="logo" src={logo} alt="" width="100" height="40" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <i className="fas fa-bars bar-icon"></i>
                </button>
                <div className="collapse navbar-collapse menu-container" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-1 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link active nav-btn" activeClassName="selected"><span className="menu">Home</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link nav-btn" activeClassName="selected" ><span className="menu">About</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/info" className="nav-link nav-btn" activeClassName="selected"><span className="menu">Agri Information</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/farmers" className="nav-link nav-btn" activeClassName="selected"><span className="menu">Our Farmers</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/products" className="nav-link nav-btn" activeClassName="selected"><span className="menu">Explore All Products</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/dashboard" className="nav-link nav-btn" activeClassName="selected"><span className="menu">Dashboard</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link  nav-btn" activeClassName="selected"><span className="menu">Contact</span></NavLink>
                        </li>








                        {
                            !user?.displayName &&
                            <NavLink to="/signin"><button className="btn-regular sign-in-btn">
                                Sign in
                                {/* <span ><i className="fas fa-sign-in-alt fs-5 ps-2"></i></span> */}
                            </button>{' '}</NavLink>

                        }
                        {
                            !user?.displayName &&
                            <NavLink to="/signup"><button className="btn-regular sign-up-btn me-5">
                                Sign up
                                {/* <span ><i className="fas fa-user-plus fs-6 ps-2"></i></span> */}
                            </button>{' '}</NavLink>
                        }
                        {
                            user?.displayName &&

                            <span ><button onClick={signout} className="btn-regular sign-out-btn" >
                                Sign out
                                <span ><i className="fas fa-sign-out-alt fs-5 ps-2"></i></span>
                            </button>{' '}</span>
                        }

                        {/* <span>{user.displayName}</span> */}
                        {user?.photoURL ? (
                            <span className="ms-2">
                                <img className="user-img" src={user.photoURL} alt="" />
                            </span>
                        ) : (<span className='display-name'>{user.displayName}</span>)
                        }










                    </ul>

                </div>










            </div>
        </nav>
    );
};

export default Navbar;