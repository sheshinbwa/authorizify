Full Stack JWT Authentication System

A production-inspired full-stack authentication system built with React, Node.js, Express, MongoDB, JWT, HttpOnly Cookies, CSRF Protection, Email Verification, and Password Recovery using Nodemailer.

This project documents my journey learning modern authentication, authorization, and web security best practices from frontend to backend.

---

🚀 Project Goal

This project was built to learn and implement a complete authentication system from frontend to backend.

The application demonstrates how a React frontend communicates securely with an Express API using JWT authentication, HttpOnly cookies, refresh tokens, CSRF protection, email verification, and password recovery workflows.

By building the system from scratch, I gained practical experience with:

- React authentication flows
- Protected frontend routes
- Context-based authentication state management
- JWT authentication
- Secure cookie handling
- Email verification
- Password reset functionality
- Backend security best practices
- Full-stack application architecture

---

✨ Features

User Authentication

- User Registration
- User Login
- User Logout
- Protected Routes
- Persistent Authentication
- Session Management

Email Verification

- Verification email sent after registration
- Secure verification tokens
- Account activation through email link
- Prevention of unverified account access

Password Recovery

- Forgot Password functionality
- Recovery email sent using Nodemailer
- Secure password reset links
- Expiring password reset tokens
- Password update after successful verification

Security Features

- JWT Access Tokens
- JWT Refresh Tokens
- HttpOnly Cookies
- CSRF Protection
- Password Hashing with bcrypt
- Secure Token Verification
- Route Protection Middleware
- Cookie Security Settings

---

🛠 Tech Stack

Frontend

- React
- React Router
- Axios
- Context API

Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

Authentication & Security

- JWT (jsonwebtoken)
- Refresh Tokens
- HttpOnly Cookies
- CSRF Protection
- bcrypt

Email Services

- Nodemailer

Development Tools

- dotenv
- cookie-parser
- cors

---

📂 Project Structure

project-root/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── config/
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
└── README.md

---

🔄 Registration Flow

1. User creates an account.
2. Password is hashed using bcrypt.
3. User information is stored in MongoDB.
4. Verification token is generated.
5. Verification email is sent using Nodemailer.
6. User clicks the verification link.
7. Account becomes verified and active.

---

🔐 Login Flow

1. User enters credentials.
2. Password is validated.
3. Access Token is generated.
4. Refresh Token is generated.
5. Refresh Token is stored in an HttpOnly cookie.
6. User gains access to protected resources.

---

🔄 Token Refresh Flow

1. Access Token expires.
2. Client requests a new access token.
3. Refresh Token is verified.
4. New Access Token is generated.
5. User remains authenticated without logging in again.

---

🔑 Password Recovery Flow

1. User selects "Forgot Password".
2. Password reset token is generated.
3. Reset link is emailed via Nodemailer.
4. User clicks the reset link.
5. Token validity is checked.
6. User enters a new password.
7. Password is hashed and updated.
8. Previous credentials become invalid.

---

🛡 Security Implementations

- Password Hashing with bcrypt
- JWT Authentication
- Refresh Token Strategy
- HttpOnly Cookie Storage
- CSRF Protection
- Email Verification Tokens
- Password Reset Tokens
- Token Expiration Validation
- Protected Routes Middleware
- Secure Environment Variables
- Authentication Error Handling

---

📚 What I Learned

Authentication

- Authentication vs Authorization
- Stateless Authentication
- JWT-Based Authentication
- Access Token Flow
- Refresh Token Flow
- Token Rotation

Frontend Development

- React Authentication Flows
- Protected Routes
- React Context API
- API Integration with Axios
- Managing Authentication State

Security

- Password Hashing
- Cookie Security
- CSRF Protection
- Token Validation
- Secure API Design

Email Services

- Sending Emails with Nodemailer
- Email Verification Workflows
- Password Recovery Workflows
- Tokenized Email Links

Backend Architecture

- Controllers
- Middleware
- Services
- Route Separation
- Error Handling
- Environment Configuration

---

🚀 Installation

Clone Repository

git clone https://github.com/your-username/fullstack-jwt-authentication.git

cd fullstack-jwt-authentication

Backend Setup

cd server
npm install

Create a ".env" file:

PORT=5000

MONGO_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_access_token_secret

REFRESH_TOKEN_SECRET=your_refresh_token_secret

EMAIL_USER=your_email

EMAIL_PASS=your_email_password

CLIENT_URL=http://localhost:5173

Start the backend:

npm run dev

Frontend Setup

cd client
npm install

Start the frontend:

npm run dev

---

🎯 Future Improvements

- Google OAuth Login
- GitHub OAuth Login
- Role-Based Access Control (RBAC)
- Multi-Factor Authentication (MFA)
- Account Lockout Protection
- Rate Limiting
- Audit Logs
- Session Monitoring
- Device Tracking

---

📝 Learning Journey

This repository serves as both a project and a record of my learning journey in backend development, frontend development, and application security.

Through this project, I gained practical experience implementing:

- Secure Authentication Systems
- Email Verification Workflows
- Password Recovery Systems
- JWT Authentication
- Cookie-Based Security
- API Protection Techniques
- React Authentication Patterns
- Full-Stack Application Architecture

The goal is to understand not only how authentication works but also how to build systems that are secure enough for real-world applications.

---

🤝 Contributing

Contributions, suggestions, and improvements are welcome.

Feel free to fork the repository and submit a pull request.

---

📄 License

This project is licensed under the MIT License.
