import  { useEffect} from "react"
import { useParams,Link, useNavigate } from "react-router"
import { useAuth } from "../../context/AuthContext"
import Loader from "../../components/Loader"
import "../styles/verify_user.css"

export default function VerifyUser() {
    const { verificationId } = useParams()
    const { verifyUser, loading } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        const verify = async () => {
            const verify_req = await verifyUser(verificationId)
            const {statusMessage} = verify_req 
            if (statusMessage === "VERIFICATION INCOMPLETE" || statusMessage === "INVALID LINK" || statusMessage === "USED LINK" || statusMessage === "EXPIRED LINK") {
                navigate("/verification-error")
            }      
        }
        verify()
    }, [verificationId, verifyUser,navigate])

    if (loading) return <Loader />


    return (
        <div className="verify-wrap">
            <h4>your account has been verified successfully, <Link to={"/login"}>click here</Link>  to login to your account</h4>
        </div>
    )
}
