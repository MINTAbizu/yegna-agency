import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom';
import {useAuth} from '../Context/Authcontext'
const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate()
const {register}=useAuth()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Email/password registration
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        try {
            const res = await register({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            });
            // const res = await axios.post('http://localhost:5000/api/users/register', formData);
            // setMessage(res.data.message);
            // localStorage.setItem('token', res.data.token);
            navigate('/login')

        } catch (err) {
            setMessage(err.response?.data?.message || 'Error occurred');
        }
        setLoading(false);
    };

    // Google login
    // const handleGoogleSuccess = async (credentialResponse) => {
    //     try {
    //         const res = await axios.post('http://localhost:5000/api/users/google', {
    //             tokenId: credentialResponse.credential
    //         });
    //         localStorage.setItem('token', res.data.token);
    //         setMessage('Logged in as ' + res.data.user.name);
    //     } catch (err) {
    //         setMessage('Google login failed');
    //     }
    // };

    // const handleGoogleError = () => {
    //     setMessage('Google login failed');
    // };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="card-title text-center mb-3">Register</h2>
                {message && <div className="alert alert-danger">{message}</div>}

                {/* Email/Password Form */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-3" disabled={loading}>
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                    <p >If u already registered......... <Link to={'/login'}>Login</Link></p>
                </form>

                <hr />

                {/* Google Login */}
                {/* <div className="d-flex justify-content-center">
                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleError}
                    />
                </div> */}
            </div>
        </div>
    );
};

export default Register;
