import React, { useState } from 'react'
import { supabase } from '../../lib/supabase';
import "../../css/Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate()
    const [user, setuser] = useState({
        email: "",
        password: ""
    });
    const toastSuccess = (msg) => toast.success(msg);
    const toastError = (msg) => toast.error(msg);

    const validateForm = (data) => {
        const regex = {
            email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
            password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
        };

        let errors = {};

        if (!regex.email.test(data.email)) {
            errors.email = "Invalid email address";
            toastError(errors.email);
        }

        if (!regex.password.test(data.password)) {
            errors.password = "Password must be 8+ chars, include upper, lower, number & special char";
            toastError(errors.password);
        }

        return errors;
    };



    const onFormSubmit = async (e) => {
        e.preventDefault()

        const errors = validateForm(user);

        if (Object.keys(errors).length > 0) {
            console.error(error);
            return;
        }

        const { data, error } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.password
        })

        console.log(data)

        if (error) {
            toastError(error.message);
        } else {
            toastSuccess("Login successful 🚍");
            navigate("/");
        }
    };

    const onhandleInput = (e) => {
        const { name, value } = e.target;
        setuser(prev => ({ ...prev, [name]: value }));

    }



    return (
        <>
            <center>

                <div className="signin-container">
                    <div className="branding-section">
                        <div className="logo-large">🎫</div>
                        <div className="brand-name">Any Time Safar</div>
                        <p className="brand-tagline">Welcome back! Sign in to continue your journey with us.</p>
                        <div className="illustration">🚌</div>
                    </div>

                    <div className="form-section">
                        <div className="form-header">
                            <h2>Sign In</h2>
                            <p>Enter your credentials to access your account</p>
                        </div>

                        <form className="signin-form" method="post" onSubmit={onFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email Address <span className="required">*</span></label>
                                <div className="input-wrapper">
                                    <span className="input-icon">📧</span>
                                    <input type="email" name='email' id="email" value={user.email} onChange={onhandleInput} placeholder="john.doe@example.com" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password <span className="required">*</span></label>
                                <div className="input-wrapper">
                                    <span className="input-icon">🔒</span>
                                    <input type="password" name='password' id="password" value={user.password} onChange={onhandleInput} placeholder="••••••••" required />
                                </div>
                            </div>

                            <div className="form-options">
                                <div className="remember-me">
                                    <input type="checkbox" id="remember" required />
                                    <label for="remember">Remember me</label>
                                </div>
                                <Link to={`/verify`} className="forgot-password">Forgot Password?</Link>
                            </div>

                            <button type="submit" className="submit-btn">Sign In</button>
                        </form>

                        <div className="divider">
                            <span>Or sign in with</span>
                        </div>

                        <div className="social-login">
                            <a href="#" className="social-btn">
                                <span className="social-icon">🔵</span>
                                <span>Google</span>
                            </a>
                            <a href="#" className="social-btn">
                                <span className="social-icon">📘</span>
                                <span>Facebook</span>
                            </a>
                        </div>

                        <div className="signup-link">
                            Don't have an account? <Link to="/register">Sign Up</Link>
                        </div>

                        <div className="help-text">
                            <p><strong>Need help?</strong> Contact our support team at <strong>support@travelease.com</strong> or call <strong>1800-123-4567</strong></p>
                        </div>
                    </div>
                </div>
            </center>

        </>
    )
}

export default Login
