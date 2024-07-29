import React, { useState } from 'react';
import '../../Styles/SignInUp.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";

const SignInUp = () => {

    const [action, setAction] = useState('');

    const signupLink = () => {
        setAction(' active');
    }

    const signinLink = () => {
        setAction('');
    }

    return (
        <div className="sign-in-up-body">

            {/* Waves */}
            <div className="waves-layer"></div>

            <div className={`sign-in-up-wrapper${action}`}>
                {/* sign in form */}
                <div className="form-block signin">
                    <form action="">
                        <h1>Sign In</h1>

                        <div className="input-box">
                            <input type="text" placeholder='Username' required />
                            <FaUser className='icon' />
                        </div>

                        <div className="input-box">
                            <input type="password" placeholder='Password' required />
                            <RiLockPasswordFill className='icon' />
                        </div>

                        <div className="additional-remember-forgot">
                            <label><input type="checkbox" />
                                Stay signed in</label>

                            <a href="#">Forgot password?</a>
                        </div>

                        <button type='submit'>Sign In</button>

                        <div className='register-link'>
                            <p>Create a new account: <a href="#" onClick={signupLink} >Sign Up</a> </p>
                        </div>
                    </form>
                </div>

                {/* sign up form */}
                <div className="form-block signup">
                    <form action="">
                        <h1>Sign Up</h1>

                        <div className="input-box">
                            <input type="text" placeholder='Username' required />
                            <FaUser className='icon' />
                        </div>

                        <div className="input-box">
                            <input type="email" placeholder='E-mail adress' required />
                            <MdOutlineAlternateEmail className='icon' />
                        </div>

                        <div className="input-box">
                            <input type="password" placeholder='Password' required />
                            <RiLockPasswordFill className='icon' />
                        </div>

                        <button type='submit'>Sign Up</button>

                        <div className='register-link'>
                            <p>Already have an account: <a href="#" onClick={signinLink} >Sign In</a> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignInUp;