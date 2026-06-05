import { BrowserRouter, Routes, Route } from 'react-router';
import Landing from "./pages/authorizify/landing.jsx";
import Login from "./pages/authorizify/login.jsx";
import Register from "./pages/authorizify/register.jsx";
import ForgotPassword from "./pages/authorizify/forgot_password.jsx";
import NewPassword from "./pages/authorizify/new_password.jsx";
import Dashboard from "./pages/authorizify/dashboard.jsx";
import VerifyUser from "./pages/authorizify/verify_user.jsx";
import NotFound from "./pages/authorizify/not_found.jsx";
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/set-new-password/:verificationId" element={<NewPassword />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/verify-user/:verificationId" element={<VerifyUser />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </AuthProvider>
  )
}

export default App
