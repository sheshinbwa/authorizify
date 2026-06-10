import  { createContext, useState, useContext } from 'react';
import api from '../../config/axios.js';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const login = async (credentials) => {
        setLoading(true);
        try {
            const login_req = await api.post(`/login`, credentials);
            setUser(login_req.data.email)
            return login_req.data
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData) => {
        setLoading(true);
        try {
            const reg_req = await api.post(`/register`, userData);
            setUser(reg_req.data.email)
            return reg_req.data
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const forgotPassword = async (email) => {
        setLoading(true);
        try {
            const email_req = await api.post(`/password-recovery/email/sender`, { email });
            return email_req.data
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const setNewPasswordVerification = async (verificationId) => {
        setLoading(true);
        try {
            const verification_req=await api.post(`/account/password-recovery/verification/${verificationId}`);
            return verification_req.data
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    const setNewPassword = async (userId,password) => {
        setLoading(true);
        try {
            const new_password_req =await api.post(`/set-new-password`,{userId,password});
            return new_password_req.data
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const verifyUser = async (verificationId) => {
        setLoading(true);
        try {
            const verify_req =await api.post(`/verify-user/${verificationId}`);
            return verify_req.data
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
        <AuthContext.Provider value={{ user, login, register, forgotPassword, setNewPassword,setNewPasswordVerification, verifyUser, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
