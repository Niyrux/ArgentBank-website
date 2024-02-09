import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../components/reducers/userSlice'; 
import './signin.css';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const form = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const [loginError, setLoginError] = useState(false); 

    const handleForm = async (e) => {
        e.preventDefault();

        const postData = {
            email,
            password
        };
        
        dispatch(loginUser(postData)).then((result) => {
            if (result.payload.body && result.payload.body.token) {
                navigate('/user');
            } else {
                setLoginError(true); 
            }
        })
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form ref={form} onSubmit={e => handleForm(e)}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input required autoComplete='email' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" autoComplete="current-password" required id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                    {loginError && <p className="error-message">Invalid email or password. Please try again.</p>}
                </form>
            </section>
        </main>
    );
}

export default Signin;
