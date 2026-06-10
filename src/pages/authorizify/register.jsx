import  { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Loader from '../../components/Loader';
import { NotificationCard } from '../../components/notification_card';
import '../styles/register.css';
import {Link} from "react-router";



const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        dateOfBirth: ''
    });

    
    const [showNotification,setShowNotification] = useState(false)
    const [notificationMessage,setNotificationMessage] = useState(null)
    const [notificationMessageType,setNotificationMessageType] = useState(null) 

    const { register, loading } = useAuth();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const regRequest = await register(formData);
        const {statusMessage,message} = regRequest 
        
        if (statusMessage === "USER EXIST") {
            setShowNotification(true)
            setNotificationMessage(message)
            setNotificationMessageType("error")
        }
        if (statusMessage === "REGISTRATION ERROR") {
            setShowNotification(true)
            setNotificationMessage(message)
            setNotificationMessageType("error")
            
        }
        
        if (statusMessage === "PENDING USER") {
            setShowNotification(true)
            setNotificationMessage(message)
            setNotificationMessageType("error")
        }

        if(statusMessage === "PENDING REGISTRATION"){
            setShowNotification(true)
            setNotificationMessage(message)
            setNotificationMessageType("success") 

        }
        
        
    };

    if (loading) return <Loader />;


    return (
        <div className="register-wrap">
           {
                showNotification && <NotificationCard type={notificationMessageType} message={notificationMessage}/>
            }
            <h4 className={"reg-hd"}>register to continue</h4>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <input type="date" name="dateOfBirth" placeholder="Date of Birth" onChange={handleChange} required />
                <button type="submit">Register</button>
                <p className='account-text'>alreadly have an account? <span className={"reg-link"}><Link to={"/login"}>login</Link></span></p>
            </form>
        </div>
    );
};

export default Register;
