import React from 'react';
import { Link } from 'react-router';
import '../styles/landing.css';

const Landing = () => {
    return (
        <div className="landing-wrap">
            <h1>Welcome to Authorizify</h1>
            <nav>
                <Link to="/login">Login</Link>
                <br />
                <Link to="/register">Register</Link>
            </nav>
        </div>
    );
};

export default Landing;
