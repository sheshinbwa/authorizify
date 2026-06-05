import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Loader from '../../components/Loader';
import '../styles/forgot_password.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const { forgotPassword, loading } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await forgotPassword(email);
    };

    if (loading) return <Loader />;

    return (
        <div className="forgot-password-wrap">
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Forgot Password</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
