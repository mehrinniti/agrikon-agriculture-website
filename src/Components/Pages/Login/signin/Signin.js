import React from 'react';
import './Signin.css';
import signupImage from './../../../../images/signup.svg';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Navbar from '../../../Shared/Navbar/Navbar';
import Footer from '../../../Shared/Footer/Footer';
import { sendPasswordResetEmail } from 'firebase/auth';
import swal from 'sweetalert';

const Signin = () => {

    const { signInUsingGoogle, signInUsingGithub, signInUsingFacebook, emailSignIn, resetEmailPassword, email, password, setEmail, setPassword, setIsLoading, setError, auth } = useAuth();

    // redirect private route
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    // google redirect
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                console.log(result.user);
                // setUser(result.user);
                history.push(redirect_uri);

                swal({
                    title: "Successfully!",
                    text: "You are logged in!",
                    icon: "success",
                });

            })
            .catch(error => {
                // setError(error.message);

                swal({
                    text: error.message,
                    icon: "error",
                });

            })
            .finally(() => setIsLoading(false));
    }

    // github redirect
    const handleGithubSignIn = () => {
        signInUsingGithub()
            .then(result => {
                history.push(redirect_uri);

                swal({
                    title: "Successfully!",
                    text: "You are logged in!",
                    icon: "success",
                });

            })
            .catch(error => {

                swal({
                    text: error.message,
                    icon: "error",
                });

            })
            .finally(() => setIsLoading(false));
    }

    // facebook redirect
    const handleFacebookSignIn = () => {
        signInUsingFacebook()
            .then(result => {
                history.push(redirect_uri);
                console.log(result.user);

                swal({
                    title: "Successfully!",
                    text: "You are logged in!",
                    icon: "success",
                });

            })
            .catch(error => {

                swal({
                    text: error.message,
                    icon: "error",
                });

            })
            .finally(() => setIsLoading(false));
    }

    // Email sign in
    const handleSignIn = e => {
        e.preventDefault();
        console.log(email, password);

        emailSignIn(email, password)
    }

    // Email reset/forget password

    // const handleResetPassword = () => {
    //     resetEmailPassword()
    //         .then(result => {

    //             alert("Successfuly send email");
    //         })
    //         .catch(error => {
    //             setError(error.message);
    //         })
    // }

    const handleResetPassword = () => {
        resetEmailPassword(email);
        // sendPasswordResetEmail(auth, email)
        //     .then(result => {
        //         console.log(result);
        //         alert("Successfully send email");
        //     })
    }






    // const handleUserNameChange = e => {
    //     setUsername(e.target.value);
    //     console.log(username);
    // }

    const handleSignInEmail = e => {
        setEmail(e.target.value);
    }

    const handleSignInPassword = e => {
        setPassword(e.target.value);
    }



    return (
        <div>
            <Navbar></Navbar>
            <div className='sign-in-section'>
                <div className='container login-container'>
                    <div className="signin ">
                        <form onSubmit={handleSignIn} action="" className='sign-in-form form-container signin-panel-container'>
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className='fas fa-envelope'></i>
                                <input onBlur={handleSignInEmail} type="email" placeholder='Email' />
                            </div>

                            <div className="input-field">
                                <i className='fas fa-lock'></i>
                                <input onBlur={handleSignInPassword} type="password" placeholder='Password' />
                            </div>

                            <div>
                                {/* <Link onClick={handleResetPassword} className="forgot-password"><p>Forgot your password?</p></Link> */}
                                <a onClick={handleResetPassword} className="forgot-password" href="">Forgot your password?</a>
                            </div>

                            <input type="submit" value="Login" className="signin-button" />

                            <p className="social-text">Or Sign in with social platform</p>

                            <div className="social-media">
                                <a onClick={handleFacebookSignIn} href="#" className="social-icon">
                                    <i className='fab fa-facebook'></i>
                                </a>
                                <a onClick={handleGoogleSignIn} href="#" className="social-icon">
                                    <i className='fab fa-google'></i>
                                </a>
                                <a onClick={handleGithubSignIn} href="#" className="social-icon">
                                    <i className='fab fa-github'></i>
                                </a>
                            </div>
                            <p className="account-text">Don't have an account ? <Link to="/signup">Sign up</Link></p>
                        </form>


                        <div className="panel right-panel signin-panel-container">
                            <div className="content">
                                <h3>New to Agrikon?</h3>
                                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos totam molestiae quasi explicabo quas corporis harum ad, atque assumenda debitis, possimus obcaecati autem repellendus. Obcaecati corrupti illo minima possimus reprehenderit?</p> */}
                                <Link className='text-decoration-none' to="/signup"><button className='signin-button panel-btn shadow'>Sign up</button></Link>
                            </div>
                            <img className='signin-image right-panel-img' src={signupImage} alt="" />
                        </div>


                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Signin;