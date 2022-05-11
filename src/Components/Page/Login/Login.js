import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                localStorage.setItem('accessToken', data.accessToken);
                navigate('/order')

            }
            console.log(data)
        })

    }
    return (
        <div>
            <h1>Please Login page</h1>
            <form onSubmit={handleLogin} className='input-field'>
                <input className='input' type='email' name='email' placeholder= {'Enter your email'}></input> <br />
                <input className='input' type='password' name='password' placeholder= {'Enter your password'}></input> <br />
                <input className='input' type='submit' value="Login"></input>
            </form>
        </div>
    );
};

export default Login;