import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import Loader from '../../components/Loader';
import '../styles/new_password.css';

const NewPassword = () => {
    const { verificationId } = useParams();
    const [password, setPassword] = useState('');
    const { setNewPassword, loading } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await setNewPassword(verificationId, password);
    };

    if (loading) return <Loader />;

    return (
        <div className="new-password-wrap">
            <form onSubmit={handleSubmit}>
                <input type="password" name="password" placeholder="New Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Set New Password</button>
            </form>
        </div>
    );
};

export default NewPassword;
