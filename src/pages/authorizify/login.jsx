import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import "../styles/login.css"
import { useAuth } from "../../context/AuthContext"
import Loader from "../../components/Loader"
import {Link, useNavigate} from "react-router";
import { NotificationCard } from "../../components/notification_card"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showNotification,setShowNotification] = useState(false)
    const [notificationMessage,setNotificationMessage] = useState(null)
    const [notificationMessageType,setNotificationMessageType] = useState(null)

    const { login, loading } = useAuth()
    const navigate = useNavigate()
    const loginUser = async (e) => {
        e.preventDefault()
       const login_req = await login({ email, password })

       const {statusMessage,message} = login_req


       if(statusMessage === "EMAIL NOT FOUND"){
        setShowNotification(true)
        setNotificationMessage(message)
        setNotificationMessageType("error")
    }else if(statusMessage === "INCORRECT PASSWORD"){
           setShowNotification(true)
           setNotificationMessage(message)
           setNotificationMessageType("error")
           
        }else{
           setShowNotification(true)
           setNotificationMessage(message)
           setNotificationMessageType("success")
           setTimeout(()=>{
            navigate("/dashboard")
           },2000)
       }

    }

    if (loading) return <Loader />

    return (
        <div className={"login-wrap"}>
            {
                showNotification && <NotificationCard type={notificationMessageType} message={notificationMessage}/>
            }
            <h4 className="login-hd">login to continue</h4>
            <form onSubmit={loginUser}>
                <div className={"email-wrap"}>
                    <label htmlFor={"email"}>email</label> <br />
                    <input type={"email"} name={"email"} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={"password-wrap"}>
                    <label htmlFor={"password"}>password</label> <br />
                    <div className="show-wrap">
                        <input type={showPassword ? "text" : "password"} name={"password"} onChange={(e) => setPassword(e.target.value)} />
                        <span className={"show-icon"} onClick={() => setShowPassword(prev => !prev)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>

                    </div>
                </div>
                <div>
                    <p className="forgot-text">
                        <Link to={"/forgot-password"}>forgot password?</Link>
                    </p>
                </div>
                <div className={"button-wrap"}>
                    <button className={"login-btn"} type="submit">login</button>
                </div>
                <p className={"register-link-wrap"}>
                    don't have an account register? <span className={"reg-link"}><Link to={"/register"}>register</Link></span>
                </p>
            </form>
        </div>
    )
}


