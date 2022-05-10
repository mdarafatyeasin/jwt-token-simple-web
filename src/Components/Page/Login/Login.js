import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <h1>Please Login page</h1>
            <form className='input-field'>
                <input className='input' type='password' placeholder= {'Enter your password'}></input> <br />
                <input className='input' type='email' placeholder= {'Enter your email'}></input> <br />
                <input className='input' type='submit' value="Login"></input>
            </form>
        </div>
    );
};

export default Login;