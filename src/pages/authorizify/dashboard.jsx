import React from "react"
import { useAuth } from "../../context/AuthContext"
import Loader from "../../components/Loader"
import "../styles/dashboard.css"

export default function Dashboard() {
    const { logout, loading } = useAuth()

    const handleLogout = async () => {
        await logout()
    }

    if (loading) return <Loader />

    return (
        <div className="dashboard-wrap">
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard.</p>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
    )
}
