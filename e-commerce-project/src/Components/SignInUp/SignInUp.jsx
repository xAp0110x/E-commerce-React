import React from 'react';
import '../../Styles/SignInUp.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const SignInUp = () => {
    return (
        <div className="sign-in-up-body">
            <div className='sign-in-up-wrapper'>
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
                            <p>Create a new account: <a href="#">Sign Up</a> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignInUp;