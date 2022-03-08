import { React, useState } from 'react';
import './SignUp.css';
import signinImage from './../../../../images/signin.svg';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import Navbar from '../../../Shared/Navbar/Navbar';
import Footer from '../../../Shared/Footer/Footer';
import swal from 'sweetalert';

const SignUp = () => {

    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState('');



    const { signInUsingGoogle, signInUsingGithub, signInUsingFacebook, emailSignUp, username, email, password, error, setUsername, setEmail, setPassword, setError, setIsLoading } = useAuth();

    // redirect private route
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    // google redirect
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                // console.log(result.user);
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

    // email & password
    const handleSignUp = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain 2 upper case');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Password must contain 1 special case');
            return;
        }

        emailSignUp(username, email, password)



        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         const signupUser = result.user;
        //         console.log(signupUser);
        //         setError('');
        //         verifyEmail();
        //         setEmailUsername();
        //     })
        //     .catch(error => {
        //         setError(error.message)
        //     })
    }



    const handleUserNameChange = e => {
        setUsername(e.target.value);
        console.log(username);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    // const signUpNewUser = (username, email, password) => {
    //     createUserWithEmailAndPassword(auth, username, email, password)
    //         .then(result => {
    //             const signupUser = result.user;
    //             console.log(signupUser);
    //             setError('');
    //             verifyEmail();
    //         })
    //         .catch(error => {
    //             setError(error.message);
    //         })
    // }


    // Email Verification

    // const verifyEmail = () => {
    //     sendEmailVerification(auth.currentUser)
    //         .then(result => {
    //             console.log(result);
    //         })
    // }


    return (
        <div>
            <Navbar></Navbar>
            <div className='sign-in-section'>
                <div className='container login-container'>
                    <div className="signin ">

                        <form onSubmit={handleSignUp} action="" className='sign-up-form form-container signin-panel-container'>
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className='fas fa-user'></i>
                                <input onBlur={handleUserNameChange} type="text" placeholder='Username' required />
                            </div>
                            <div className="input-field">
                                <i className='fas fa-envelope'></i>
                                <input onBlur={handleEmailChange} type="email" placeholder='Email' required />
                            </div>

                            <div className="input-field">
                                <i className='fas fa-lock'></i>
                                <input onBlur={handlePasswordChange} type="password" placeholder='Password' required />
                            </div>
                            <div className='text-danger'>{error}</div>
                            <input type="submit" value="Sign up" className="signin-button" />
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
                            <p className="account-text">Already have an account? <Link to="/signin">Sign in</Link></p>
                        </form>


                        <div className="panel left-panel signin-panel-container">
                            <div className="content">
                                <h3>Member of Agrikon?</h3>
                                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos totam molestiae quasi explicabo quas corporis harum ad, atque assumenda debitis, possimus obcaecati autem repellendus. Obcaecati corrupti illo minima possimus reprehenderit?</p> */}
                                <Link className='text-decoration-none' to="/signin"><button className='signin-button panel-btn shadow'>Sign in</button></Link>
                            </div>
                            <img className='signin-image signin-panel-img' src={signinImage} alt="" />
                        </div>


                    </div>




                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;