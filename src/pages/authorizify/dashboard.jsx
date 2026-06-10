import { useAuth } from "../../context/AuthContext"
import Loader from "../../components/Loader"
import "../styles/dashboard.css"
import { Navigate, useNavigate } from "react-router"

export default function Dashboard() {
    const { logout, loading, user} = useAuth()
    const navigate = useNavigate()


    const handleLogout = async () => {
        await logout()
        setTimeout(()=>{
            navigate("/login")
        },2000)
    }


    if (loading) return <Loader />

    return (
        
        user?
        (<div className="dashboard-wrap">
            <h1>Dashboard </h1>
            <p>Welcome to your dashboard.</p>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>):
        <Navigate to={"/login"}/>
    
    )
}
