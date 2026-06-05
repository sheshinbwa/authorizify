import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import { useAuth } from "../../context/AuthContext"
import Loader from "../../components/Loader"
import "../styles/verify_user.css"

export default function VerifyUser() {
    const { verificationId } = useParams()
    const { verifyUser, loading } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        const verify = async () => {
            await verifyUser(verificationId)
            navigate("/login")
        }
        verify()
    }, [verificationId, verifyUser, navigate])

    if (loading) return <Loader />

    return (
        <div className="verify-wrap">
            <h1>Verifying...</h1>
        </div>
    )
}
