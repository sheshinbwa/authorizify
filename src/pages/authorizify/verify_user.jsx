import  { useEffect,useState } from "react"
import { useParams,Link } from "react-router"
import { useAuth } from "../../context/AuthContext"
import Loader from "../../components/Loader"
import {NotificationCard} from "../../components/notification_card"
import "../styles/verify_user.css"

export default function VerifyUser() {
    const { verificationId } = useParams()
    const { verifyUser, loading } = useAuth()

    const [notificationMessage,setNotificationMessage] = useState(null)
    const [notificationMessageType,setNotificationMessageType] = useState(null)
    const [statusMessage,setStatusMessage] = useState(null)

    useEffect(() => {
        const verify = async () => {
            const verify_req = await verifyUser(verificationId)
            const {statusMessage,message} = verify_req 
            if (statusMessage === "VERIFICATION COMPLETE") {
                setNotificationMessage(message)
                setNotificationMessageType("success")
            }else{
                setNotificationMessage(message)
                setStatusMessage("error")
                setNotificationMessageType("error")
            }
           
        }
        verify()
    }, [verificationId, verifyUser])

    if (loading) return <Loader />

    if( statusMessage === "error") return <NotificationCard message={notificationMessage} type={notificationMessageType} />

    return (
        <div className="verify-wrap">
            <h4 className="success"> {notificationMessage}, <Link to={"/login"}>login</Link> to your account </h4>
        </div>
    )
}
