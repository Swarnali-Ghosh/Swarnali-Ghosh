import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
                <Fragment>
                    <div className='login-page' >
                        <form className='loginForm'>
                            <h1 className='logintp'>Login</h1>
                            <h4 className='logintpo'>welcome back please login to your account</h4>
                            <input className='inputsign' type="email" placeholder='Email' required/>

                            <input className='inputsign' type="password" placeholder="Password" required/>

                            <Link className='forgotpassword' to="/password/forgot"><b>Forget Password ?</b></Link>
                            <input type="submit" value="Login" className="loginBtn" />
                            <div className='asign'>
                                <h4>don't have an account?</h4> <h4 className='signupfm'>
                                    <Link to='/signup' className='signupfm'> Signup </Link>
                                </h4>
                            </div>
                        </form>
                    </div>
                </Fragment>

    )
}
export default Login
