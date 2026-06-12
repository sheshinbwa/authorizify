import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Loader from '../../components/Loader';
import { NotificationCard } from '../../components/notification_card';
import '../styles/forgot_password.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const { forgotPassword, loading } = useAuth();
    const [showNotification,setShowNotification] = useState(false)
    const [notificationMessage,setNotificationMessage] = useState(null)
    const [notificationMessageType,setNotificationMessageType] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const forgot_req = await forgotPassword(email);

        const {statusMessage,message} = forgot_req

        if (statusMessage === "ACCOUNT DO NOT EXIST") {
            setShowNotification(true)
            setNotificationMessage(message)
            setNotificationMessageType("error")
        }else{
            setShowNotification(true)
            setNotificationMessage(message)
            setNotificationMessageType("success")
            
        }
    };

    if (loading) return <Loader />;

    return (
        <div className="forgot-password-wrap">
            {
                showNotification && <NotificationCard type={notificationMessageType} message={notificationMessage}/>
            }
            <h4 className={"forgot-hd"}>Enter your email to recover your account</h4>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <button className={"recover-btn"} type="submit">send recovery link</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
