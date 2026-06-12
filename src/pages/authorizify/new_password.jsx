import  {useEffect, useRef, useState} from 'react';
import {NotificationCard} from '../../components/notification_card'
import { useNavigate, useParams } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import Loader from '../../components/Loader';
import '../styles/new_password.css';



const NewPassword = () => {
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const cPassword = useRef()
    const [userId,setUserId] = useState(null)
    
    const [showNotification,setShowNotification] = useState(false)
    const [notificationMessage,setNotificationMessage] = useState(null)
    const [notificationMessageType,setNotificationMessageType] = useState(null)
    const { verificationId } = useParams();
    const navigate = useNavigate()
    const {loading,setNewPasswordVerification,setNewPassword} = useAuth()

    useEffect(()=>{
        const verifyPasswordRecoveryLink = async () => {
            
                const verify_req = await setNewPasswordVerification(verificationId)
                const {statusMessage,id} = verify_req

                if(statusMessage === "VALID LINK"){
                    setUserId(id)
                }
                
                if(statusMessage === "INVALID LINK"){
                    navigate("/verification-error")
                }
                
                if(statusMessage === "EXPIRED LINK"){
                    navigate("/verification-error")
                }

                if(statusMessage === "USED LINK"){
                    navigate("/verification-error")
                }
                
            }
        verifyPasswordRecoveryLink()
    },[verificationId,navigate,setNewPasswordVerification])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!confirmPassword.match(password)) {
            setNotificationMessage('password do not match')
            setNotificationMessageType("error")
            setShowNotification(true)
        }else{
            const new_password_req = await setNewPassword(userId,password)
            
            if (new_password_req.status === 200) {
                setTimeout(()=>navigate("/login"),1500)
            }else{
                setNotificationMessage('fail to set new password')
                setNotificationMessageType("error")
                setShowNotification(true)
            }
        }
        
    };

    if (loading) return <Loader />;
    
    
    return (
        <div className="new-password-wrap">
            {
                showNotification && <NotificationCard type={notificationMessageType} message={notificationMessage} />
            }
            {notificationMessage === "success" && 
            <>
            <h4 className={"new-password-hd"}>enter your new password</h4>
            <form onSubmit={handleSubmit}>
                <input type="password" name="password" placeholder="New Password" onChange={(e) => setPassword(e.target.value)} required />
                <input type="password" name="confirmpassword" placeholder="Confirm Password" onChange={(e) => {
                setConfirmPassword(e.target.value)
                if(confirmPassword){
                    cPassword.current.disabled = false
                }
                }} required />
                <button type="submit" ref={cPassword} disabled={true}>Set New Password</button>
            </form>
            </>
            }
        </div>
    );
};

export default NewPassword;
