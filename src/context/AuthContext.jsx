import React, { createContext, useState, useContext } from 'react';
import api from '../config/axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const login = async (credentials) => {
        setLoading(true);
        try {
            await api.post('/login', credentials);
            setUser({ email: credentials.email });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData) => {
        setLoading(true);
        try {
            await api.post('/register', userData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const forgotPassword = async (email) => {
        setLoading(true);
        try {
            await api.post('/forgot-password', { email });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const setNewPassword = async (verificationId, password) => {
        setLoading(true);
        try {
            await api.post(`/set-new-password/${verificationId}`, { password });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const verifyUser = async (verificationId) => {
        setLoading(true);
        try {
            await api.get(`/verify-user/${verificationId}`);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        try {
            await api.post('/logout');
            setUser(null);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, register, forgotPassword, setNewPassword, verifyUser, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
