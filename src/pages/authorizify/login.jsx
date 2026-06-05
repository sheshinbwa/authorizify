import React, { useRef, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import "../styles/login.css"
import { useAuth } from "../../context/AuthContext"
import Loader from "../../components/Loader"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const { login, loading } = useAuth()

    const loginUser = async (e) => {
        e.preventDefault()
        await login({ email, password })
    }

    if (loading) return <Loader />

    return (
        <div className={"login-wrap"}>
            <form onSubmit={loginUser}>
                <div className={"email-wrap"}>
                    <label htmlFor={"email"}>email</label> <br />
                    <input type={"email"} name={"email"} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={"password-wrap"}>
                    <label htmlFor={"password"}>password</label> <br />
                    <input type={showPassword ? "text" : "password"} name={"password"} onChange={(e) => setPassword(e.target.value)} />
                    <span className={"show-icon"} onClick={() => setShowPassword(prev => !prev)}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <div className={"button-wrap"}>
                    <button className={"login-btn"} type="submit">login</button>
                </div>
            </form>
        </div>
    )
}


