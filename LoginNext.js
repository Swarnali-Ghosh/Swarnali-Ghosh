import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';

const LoginNext = () => {
    return (
                <Fragment>
                    <div className='login-page' >
                        <form className='loginForm'>
                            <h1 className='logintp'>OTP Verification</h1>
                          
                            <input className='inputsign' type="text" placeholder='OTP' required/>
                            <input type="submit" value="Verify" className="loginBtn" />
                        </form>
                    </div>
                </Fragment>

    )
}
export default LoginNext
